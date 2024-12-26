import { useContext, useEffect, useRef, useState } from "react";
import { FilterData } from "./FilterData";
import { getNewsHeadlines } from "../services/topicheadlines.service";
import { Topic } from "../context/Topic";

export const HotNewsData = () => {
  const [hotNews, setHotNews] = useState([]);
  const handleFilterData = FilterData;
  const { topic } = useContext(Topic);

  useEffect(() => {
    const requiredKey = ["title", "url", "urlToImage"];

    const fetchData = async () => {
      const newsData = await getNewsHeadlines(topic);
      if (newsData) {
        const result = handleFilterData(newsData.articles || [], requiredKey);
        setHotNews(result);
      }
    };

    fetchData();
  }, [handleFilterData, topic]);

  return hotNews;
};
