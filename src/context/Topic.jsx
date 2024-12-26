import { createContext, useState } from "react";

const TopicContext = createContext();

const TopicContextProvider = ({ children }) => {
  const [topic, setTopic] = useState(null);

  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      {children}
    </TopicContext.Provider>
  );
};

export const Topic = TopicContext;
export default TopicContextProvider;
