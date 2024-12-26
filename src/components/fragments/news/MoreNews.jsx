import { useContext } from "react";
import NewsCard from "../../elements/NewsCard";
import { Topic } from "../../../context/Topic";
import { BreakingNewsData } from "../../../hooks/BreakingNews";
import { MoreNewsData } from "../../../hooks/MoreNews";

const MoreNews = () => {
  const newsByTopic = MoreNewsData();
  const breakingNews = BreakingNewsData();
  const { topic } = useContext(Topic);

  return (
    <>
      <div className="w-full mt-4 flex flex-col gap-3">
        {topic === null
          ? breakingNews.length > 0 &&
            breakingNews.map((news, i) => (
              <NewsCard key={i} url={news.url}>
                <NewsCard.NewsImage image={news.urlToImage} />
                <NewsCard.NewsBody
                  title={news.title.substr(0, 20)}
                  author={news.source.name}
                  date={news.publishedAt.substr(0, 10)}
                />
              </NewsCard>
            ))
          : Array.isArray(newsByTopic) &&
            newsByTopic.length > 0 &&
            newsByTopic.map((news, i) => (
              <NewsCard key={i} url={news.url}>
                <NewsCard.NewsImage image={news.urlToImage} />
                <NewsCard.NewsBody
                  title={news.title.substr(0, 20)}
                  author={news.source.name}
                  date={news.publishedAt.substr(0, 10)}
                />
              </NewsCard>
            ))}
      </div>
    </>
  );
};

export default MoreNews;
