import axios from "axios";

export const getBreakingNews = async () => {
  const cacheKey = "breakingNews";

  try {
    const cacheData = localStorage.getItem(cacheKey);
    if (cacheData) {
      // console.log("dipanggil ulang");
      return JSON.parse(cacheData);
    }

    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=all&sortBy=publishedAt&pageSize=7&language=en&apiKey=fc8559c748ea436cbfa27b9e4ea7f7a9`
    );

    localStorage.setItem(cacheKey, JSON.stringify(response.data));
    // console.log("dipanggil");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
