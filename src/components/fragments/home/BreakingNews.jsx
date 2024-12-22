import BreakingCard from "../../elements/BreakingCard";
import CustomLink from "../../elements/CustomLink";
import Header from "../../elements/Header";

const BreakingNews = () => {
  return (
    <>
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
    </>
  );
};

export default BreakingNews;
