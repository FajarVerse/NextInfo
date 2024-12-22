import axios from "axios";

export const getBreakingNews = (callback) => {
  axios
    .get(
      `https://newsapi.org/v2/everything?q=all&sortBy=publishedAt&pageSize=7&language=en&apiKey=fc8559c748ea436cbfa27b9e4ea7f7a9`
    )
    .then((response) => {
      callback(response.data.articles);
    })
    .catch((e) => {
      console.log(e);
    });
};
