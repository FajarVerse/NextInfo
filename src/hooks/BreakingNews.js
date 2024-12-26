import { useEffect, useState } from "react";
import { getBreakingNews } from "../services/breaking.service";
import { FilterData } from "./FilterData";

export const BreakingNewsData = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  const handleFilterData = FilterData;

  useEffect(() => {
    const requiredKey = ["title", "url", "urlToImage"];
    const fetchData = async () => {
      const newsData = await getBreakingNews(setBreakingNews);
      if (newsData) {
        const results = handleFilterData(newsData.articles || [], requiredKey);
        setBreakingNews(results);
      }
    };

    fetchData();
  }, [handleFilterData]);

  return breakingNews;
};
