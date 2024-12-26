import { useContext, useEffect, useState } from "react";
import { Topic } from "../context/Topic";
import { getNewsByTopic } from "../services/topicnews.service";
import { FilterData } from "./FilterData";

export const MoreNewsData = () => {
  const [moreNews, setMoreNews] = useState([]);
  const { topic } = useContext(Topic);
  const hanldeFilterData = FilterData;

  useEffect(() => {
    const requiredKey = ["title", "url", "urlToImage"];

    const fetchData = async () => {
      const newsData = await getNewsByTopic(topic);
      if (newsData) {
        const result = hanldeFilterData(newsData.articles || [], requiredKey);
        setMoreNews(result);
      }
    };

    fetchData();
  }, [topic, hanldeFilterData]);

  return moreNews;
};
