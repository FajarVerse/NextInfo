import axios from "axios";

export const getNewsHeadlines = async (topic) => {
  const cacheKey = "headlinesTopic-";
  try {
    if (topic != "") {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(cacheKey)) {
          localStorage.removeItem(key);
        }
      });

      const cacheData = localStorage.getItem(`${cacheKey}${topic}`);
      if (cacheData) {
        return JSON.parse(cacheData);
      }

      if (topic) {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${topic}&pageSize=10&apiKey=fc8559c748ea436cbfa27b9e4ea7f7a9`
        );
        localStorage.setItem(`${cacheKey}${topic}`, JSON.stringify(response.data));
        return response.data;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
