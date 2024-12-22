const NewsCard = (props) => {
  const { children } = props;

  return (
    <>
      <div className="w-full h-28 flex gap-3">{children}</div>
    </>
  );
};

const NewsImage = (props) => {
  const { image } = props;

  return (
    <>
      <div className="w-[35%] bg-blue-700 rounded-xl">
        <img src={`${image}`} alt="" className="w-full" />
      </div>
    </>
  );
};

const NewsBody = (props) => {
  const { title, author, date } = props;

  return (
    <>
      <div className="w-4/6 flex flex-col justify-between">
        <h3 className="font-open_sans font-bold text-2xl text-primary">
          {title}
        </h3>
        <div className="w-full flex justify-between">
          <p className="font-open_sans font-semibold text-base text-slate-500">
            {author}
          </p>
          <p className="font-open_sans font-semibold text-base text-slate-500">
            {date}
          </p>
        </div>
      </div>
    </>
  );
};

NewsCard.NewsImage = NewsImage;
NewsCard.NewsBody = NewsBody;

export default NewsCard;
