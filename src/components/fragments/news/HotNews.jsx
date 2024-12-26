import { useContext } from "react";
import { BreakingNewsData } from "../../../hooks/BreakingNews";
import { HotNewsData } from "../../../hooks/HotNews";
import BreakingCard from "../../elements/BreakingCard";
import SubHeader from "../../elements/SubHeader";
import { Topic } from "../../../context/Topic";

const HotNews = () => {
  const hotNews = HotNewsData();
  const breakingNews = BreakingNewsData();
  const { topic } = useContext(Topic);

  return (
    <>
      <div className="w-full mt-5">
        <div className="w-full flex justify-between items-end mb-3">
          <SubHeader className="text-primary">Hot News</SubHeader>
        </div>
        <div className="w-full px-1 flex gap-3 items-center overflow-x-scroll">
          {topic === null
            ? breakingNews.length > 0 &&
              breakingNews.map((news, i) => (
                <BreakingCard key={i} background={news.urlToImage}>
                  {news.title.substring(0, 35)} ...
                </BreakingCard>
              ))
            : Array.isArray(hotNews) &&
              hotNews.length > 0 &&
              hotNews.map((news, i) => (
                <BreakingCard key={i} background={news.urlToImage}>
                  {news.title.substring(0, 35)} ...
                </BreakingCard>
              ))}
        </div>
      </div>
    </>
  );
};

export default HotNews;
