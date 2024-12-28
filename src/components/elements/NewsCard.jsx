import { Link } from "react-router";

const NewsCard = (props) => {
  const { url, children } = props;

  return (
    <>
      <Link
        to={url}
        className="w-full rounded-xl shadow-sm shadow-transparent hover:shadow-lightSlate transition duration-300 ease-in-out"
      >
        <div className="w-full h-28 flex gap-3">{children}</div>
      </Link>
    </>
  );
};

const NewsImage = (props) => {
  const { image } = props;

  return (
    <>
      <div
        className="w-[35%] bg-blue-700 rounded-xl bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </>
  );
};

const NewsBody = (props) => {
  const { title, author, date } = props;

  return (
    <>
      <div className="w-4/6 pr-1 py-1 flex flex-col justify-between">
        <h3 className="font-open_sans font-bold text-lg text-secondary">
          {title}...
        </h3>
        <div className="w-full flex justify-between items-end mb-0.5">
          <p className="font-open_sans font-semibold text-sm text-lightSlate">
            {author}
          </p>
          <p className="font-open_sans font-semibold text-xs text-lightSlate">
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
