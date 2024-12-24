import { useState } from "react";
import Header from "../../elements/Header";
import NewsCard from "../../elements/NewsCard";
import AuthLayout from "../../layouts/AuthLayout";
import Navbar from "../../layouts/Navbar";
import HotNews from "./HotNews";
import Topic from "./Topic";
import Paragraph from "../../elements/Paragraph";

const NewsFragment = () => {
  const [topicNews, setTopicNews] = useState(null);

  console.log(topicNews);

  return (
    <>
      <Navbar />
      <AuthLayout>
        <div className="w-full px-5">
          <div className="w-full mb-5">
            <Header className="text-5xl text-primary">Discover</Header>
            <Paragraph>
              Get the latest information from around the world at your
              fingertips
            </Paragraph>
          </div>
          <div className="w-full mb-5">
            <Topic newsTopic={setTopicNews} />
            <HotNews />

            <div className="w-full mt-4 flex flex-col gap-3">
              <NewsCard>
                <NewsCard.NewsImage />
                <NewsCard.NewsBody
                  title="title"
                  author="Author"
                  date="2000-2-2"
                />
              </NewsCard>
              <NewsCard>
                <NewsCard.NewsImage />
                <NewsCard.NewsBody
                  title="title"
                  author="Author"
                  date="2000-2-2"
                />
              </NewsCard>
              <NewsCard>
                <NewsCard.NewsImage />
                <NewsCard.NewsBody
                  title="title"
                  author="Author"
                  date="2000-2-2"
                />
              </NewsCard>
              <NewsCard>
                <NewsCard.NewsImage />
                <NewsCard.NewsBody
                  title="title"
                  author="Author"
                  date="2000-2-2"
                />
              </NewsCard>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default NewsFragment;
