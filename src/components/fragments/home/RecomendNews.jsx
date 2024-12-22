import CustomLink from "../../elements/CustomLink";
import NewsCard from "../../elements/NewsCard";
import SubHeader from "../../elements/SubHeader";

const RecomendNews = () => {
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
          <NewsCard>
            <NewsCard.NewsImage />
            <NewsCard.NewsBody
              title="Title"
              author="Gifari"
              date="2020-10-01"
            />
          </NewsCard>
        </div>
      </div>
    </>
  );
};

export default RecomendNews;
