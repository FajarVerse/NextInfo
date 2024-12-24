import NewsCard from "../../elements/NewsCard";

const MoreNews = (props) => {
  const { topic } = props;

  return (
    <>
      <div className="w-full mt-4 flex flex-col gap-3">
        <NewsCard>
          <NewsCard.NewsImage />
          <NewsCard.NewsBody title="title" author="Author" date="2000-2-2" />
        </NewsCard>
      </div>
    </>
  );
};

export default MoreNews;
