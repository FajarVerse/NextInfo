import { Link } from "react-router";

const BreakingCard = (props) => {
  const { url, background, children } = props;

  return (
    <>
      <Link to={url} className="w-full flex-shrink-0">
        <div
          className="breaking-card"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h3 className="font-open_sans font-semibold text-white text-xl">
            {children}
          </h3>
        </div>
      </Link>
    </>
  );
};

export default BreakingCard;
