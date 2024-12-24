import { useEffect, useState } from "react";
import BreakingCard from "../../elements/BreakingCard";
import CustomLink from "../../elements/CustomLink";
import Header from "../../elements/Header";
import { getBreakingNews } from "../../../services/breaking.service";

const BreakingNews = () => {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await getBreakingNews(setBreakingNews);
      if (newsData) {
        setBreakingNews(newsData.articles || []);
      }
    };

    fetchData();
  }, []);
  console.log(breakingNews);

  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-between items-end mb-3">
          <Header className="text-primary">Breaking News</Header>
          <CustomLink to={"/#"} className=" text-sky-500">
            See More
          </CustomLink>
        </div>
        <div className="w-full px-1 flex gap-3 items-center overflow-x-scroll">
          {breakingNews.length > 0 &&
            breakingNews.map((news, i) => (
              <BreakingCard key={i} background={news.urlToImage}>
                {news.title.substring(0, 35)} ...
              </BreakingCard>

            ))}
        </div>
      </div>
    </>
  );
};

export default BreakingNews;
