const Topic = (props) => {
  const { newsTopic } = props;

  return (
    <>
      <div className="flex gap-3 overflow-x-scroll">
        <button className="category-btn" onClick={() => newsTopic(null)}>
          All
        </button>
        <button className="category-btn" onClick={() => newsTopic("busines")}>
          Business
        </button>
        <button
          className="category-btn"
          onClick={() => newsTopic("entertainment")}
        >
          Entertainment
        </button>
        <button className="category-btn" onClick={() => newsTopic("general")}>
          General
        </button>
        <button className="category-btn" onClick={() => newsTopic("health")}>
          Health
        </button>
        <button className="category-btn" onClick={() => newsTopic("science")}>
          Science
        </button>
        <button className="category-btn" onClick={() => newsTopic("sports")}>
          Sports
        </button>
        <button
          className="category-btn"
          onClick={() => newsTopic("technology")}
        >
          Technology
        </button>
      </div>
    </>
  );
};

export default Topic;
