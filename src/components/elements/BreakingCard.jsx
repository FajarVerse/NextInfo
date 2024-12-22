import { Link } from "react-router";

const BreakingCard = (props) => {
  const { url, background, children } = props;

  return (
    <>
      <Link to={url}>
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
