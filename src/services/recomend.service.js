import axios from "axios";

export const getRecomendNews = async () => {
  const cacheKey = "recomendNews";
  try {
    const cacheData = localStorage.getItem(cacheKey);
    if (cacheData) {
      return JSON.parse(cacheData);
    }

    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=all&shortBy=popularity&pageSize=15&apiKey=fc8559c748ea436cbfa27b9e4ea7f7a9`
    );
    localStorage.setItem(cacheKey, JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
