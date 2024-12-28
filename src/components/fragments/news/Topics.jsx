import { useContext } from "react";
import { Topic } from "../../../context/Topic";

const Topics = () => {
  const { setTopic } = useContext(Topic);

  return (
    <>
      <div className="flex gap-3 px-1 py-2 overflow-x-scroll">
        <button className="category-btn" onClick={() => setTopic(null)}>
          All
        </button>
        <button className="category-btn" onClick={() => setTopic("business")}>
          Business
        </button>
        <button
          className="category-btn"
          onClick={() => setTopic("entertainment")}
        >
          Entertainment
        </button>
        <button className="category-btn" onClick={() => setTopic("general")}>
          General
        </button>
        <button className="category-btn" onClick={() => setTopic("health")}>
          Health
        </button>
        <button className="category-btn" onClick={() => setTopic("science")}>
          Science
        </button>
        <button className="category-btn" onClick={() => setTopic("sports")}>
          Sports
        </button>
        <button className="category-btn" onClick={() => setTopic("technology")}>
          Technology
        </button>
      </div>
    </>
  );
};

export default Topics;
