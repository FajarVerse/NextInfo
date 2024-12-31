import aboutUs from "../../../assets/image/about.svg";
import Header from "../../elements/Header";
import Paragraph from "../../elements/Paragraph";

const AboutBody = () => {
  return (
    <>
      <div className="w-full lg:self-center">
        <img
          src={aboutUs}
          alt="about"
          className="w-[90%] mx-auto md:w-3/4 lg:w-4/5 xl:w-[90%]"
        />
      </div>
      <div className="w-full h-full mt-5 lg:flex lg:flex-col xl:gap-10 ">
        <div className="w-full hidden lg:block">
          <Header>About Us</Header>
        </div>
        <div className="w-full block">
          <Paragraph>
            We are here to provide accurate, relevant and information
            trustworthy for you. In the midst of the rapid flow of news and
            information, we are committed to filtering and presenting meaningful
            content, helping you stay connected with world.
          </Paragraph>
          <Paragraph>
            We deliver the latest and most trusted news from a variety of topics
            through News API integration, ensuring relevant and accurate
            information for you.
          </Paragraph>
        </div>
      </div>
    </>
  );
};

export default AboutBody;
