import { useEffect, useRef, useState } from "react";
import Navbar from "./components/layouts/Navbar";
import { getBreakingNews } from "./services/breaking.service";
import NewsCard from "./components/elements/NewsCard";
import Header from "./components/elements/Header";
import SubHeader from "./components/elements/SubHeader";
import CustomLink from "./components/elements/CustomLink";
import BreakingCard from "./components/elements/BreakingCard";
import AuthLayout from "./components/layouts/AuthLayout";
import { Link } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <div className="w-full px-5">
          <div className="w-full mb-5">
            <Header className="text-5xl text-primary">Discover</Header>
            <p className="font-open_sans text-base text-primary mt-2">
              Get the latest information from around the world at your
              fingertips
            </p>
          </div>
          <div className="w-full mb-5">
            <div className="flex gap-3 overflow-x-scroll">
              <button className="category-btn">All</button>
              <button className="category-btn">Business</button>
              <button className="category-btn">Entertaiment</button>
              <button className="category-btn">General</button>
              <button className="category-btn">Health</button>
              <button className="category-btn">Sciance</button>
              <button className="category-btn">Sports</button>
              <button className="category-btn">Technology</button>
            </div>

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

            <div className="w-full mt-5">
              <div className="w-full flex justify-between items-end mb-3">
                <Header className="text-primary">Hot News</Header>
              </div>
              <div className="w-full px-1 flex gap-3 items-center overflow-x-scroll">
                {/* {breaking.length > 0 &&
                  breaking.map((n, i) => (
                    <div
                      key={i}
                      ref={(el) => (cardRef.current[i] = el)}
                      className="breaking-card-active breaking-card-disable bg-cover bg-center"
                      style={{ backgroundImage: "url()" }}
                    >
                      <h3 className="font-open_sans font-semibold text-white text-lg">
                        {n.title.substring(0, 35)} ...
                      </h3>
                    </div>
                  ))} */}
                <BreakingCard>Title</BreakingCard>
              </div>
            </div>

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
}

export default App;
