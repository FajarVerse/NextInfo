import { useContext, useEffect, useState } from "react";
import { Topic } from "../../../context/Topic";
import { getNewsHeadlines } from "../../../services/topicheadlines.service";
import Header from "../../elements/Header";
import NewsCard from "../../elements/NewsCard";
import Paragraph from "../../elements/Paragraph";
import AuthLayout from "../../layouts/AuthLayout";
import Navbar from "../../layouts/Navbar";
import HotNews from "./HotNews";
import Topics from "./Topics";
import { getNewsByTopic } from "../../../services/topicnews.service";
import { HotNewsData } from "../../../hooks/HotNews";
import { MoreNews } from "../../../hooks/MoreNews";

const NewsFragment = () => {
  // const [headlinesByTopic, setHeadlinesTopic] = useState([]);
  // const [newsByTopic, setNewsByTopic] = useState([]);

  // const { topic } = useContext(Topic);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const newsData = await getNewsHeadlines(topic);
  //     if (newsData) {
  //       setHeadlinesTopic(newsData.articles || []);
  //     }
  //   };

  //   fetchData();
  // }, [topic]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const newsData = await getNewsByTopic(topic);
  //     if (newsData) {
  //       setNewsByTopic(newsData.articles || []);
  //     }
  //   };

  //   fetchData();
  // }, [topic]);

  // console.log(newsByTopic);
  // console.log(headlinesByTopic);

  const hotNews = HotNewsData();
  const newsByTopic = MoreNews();

  console.info(hotNews);
  console.info(newsByTopic);

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
            <Topics />
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
