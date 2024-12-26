import { RecomendNewsData } from "../../../hooks/RecomendNews";
import CustomLink from "../../elements/CustomLink";
import NewsCard from "../../elements/NewsCard";
import SubHeader from "../../elements/SubHeader";

const RecomendNews = () => {
  const recomendNews = RecomendNewsData();

  console.log(recomendNews);

  return (
    <>
      <div className="w-full mt-5">
        <div className="w-full flex justify-between items-end mb-3">
          <SubHeader className="text-primary">Recomendation</SubHeader>
          <CustomLink to={"/#"} className=" text-sky-500">
            See More
          </CustomLink>
        </div>
        <div className="w-full px-1 flex flex-col gap-3">
          {recomendNews.length > 0 &&
            recomendNews.map((news, i) => (
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
      </div>
    </>
  );
};

export default RecomendNews;
