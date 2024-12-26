import { useEffect, useState } from "react";
import { FilterData } from "./FilterData";
import { getRecomendNews } from "../services/recomend.service";

export const RecomendNewsData = () => {
  const [recomendNews, setRecomendNews] = useState([]);
  const handleFilterData = FilterData;

  useEffect(() => {
    const requiredKey = ["title", "url", "urlToImage"];

    const fetchData = async () => {
      const newsData = await getRecomendNews(setRecomendNews);
      if (newsData) {
        const result = handleFilterData(newsData.articles || [], requiredKey);
        setRecomendNews(result);
      }
    };

    fetchData();
  }, [handleFilterData]);

  return recomendNews;
};
