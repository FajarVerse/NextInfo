const BreakingCard = (props) => {
  const { background, children } = props;

  return (
    <>
      <div
        className="breaking-card"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h3 className="font-open_sans font-semibold text-white text-xl">
          {children}
        </h3>
      </div>
    </>
  );
};

export default BreakingCard;
