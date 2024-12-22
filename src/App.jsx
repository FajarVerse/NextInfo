import { useEffect, useRef, useState } from "react";
import Navbar from "./components/layouts/Navbar";
import { getBreakingNews } from "./services/breaking.service";
import NewsCard from "./components/elements/NewsCard";
import Header from "./components/elements/Header";
import SubHeader from "./components/elements/SubHeader";
import CustomLink from "./components/elements/CustomLink";
import BreakingCard from "./components/elements/BreakingCard";

function App() {
  // const [breaking, setBreaking] = useState([]);

  // useEffect(() => {
  //   getBreakingNews((data) => {
  //     setBreaking(data);
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <section className="py-24 pb-10">
        <div className="container">
          <div className="px-5 w-full">
            <div className="w-full">
              <div className="w-full flex justify-between items-end mb-3">
                <Header className="text-primary">Breaking News</Header>
                <CustomLink to={"/#"} className=" text-sky-500">
                  See More
                </CustomLink>
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
            <div className="w-full mt-5">
              <div className="w-full flex justify-between items-end mb-3">
                <SubHeader className="text-primary">Recomendation</SubHeader>
                <CustomLink to={"/#"} className=" text-sky-500">
                  See More
                </CustomLink>
              </div>
              <div className="w-full px-1 flex flex-col gap-3">
                <NewsCard>
                  <NewsCard.NewsImage />
                  <NewsCard.NewsBody
                    title="Title"
                    author="Gifari"
                    date="2020-10-01"
                  />
                </NewsCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
