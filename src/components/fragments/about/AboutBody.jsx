import visi from "../../../assets/image/vision.svg";
import mission from "../../../assets/image/mission.svg";
import SubHeader from "../../elements/SubHeader";
import Paragraph from "../../elements/Paragraph";

const AboutBody = () => {
  return (
    <>
      <div className="w-full px-1 md:px-5 lg:mt-10">
        <div className="w-full mb-5 xl:mb-10">
          <SubHeader className="lg:text-center">Vision</SubHeader>
          <div className="w-full block lg:flex lg:flex-row-reverse lg:items-center">
            <div className="w-full lg:w-1/2">
              <Paragraph>
                Our vision is to be a trusted source that supports better
                decision making.
              </Paragraph>
            </div>
            <div className="w-full px-5 lg:w-1/2">
              <img
                src={visi}
                alt="ilustrasi visi"
                className="w-full md:w-3/4 md:mx-auto lg:w-4/5"
              />
            </div>
          </div>
        </div>

        <div className="w-full mt-7">
          <SubHeader className="lg:text-center">Mission</SubHeader>
          <div className="w-full block lg:flex lg:flex-row-reverse lg:items-center">
            <div className="w-full px-5  lg:w-1/2">
              <img
                src={mission}
                alt="ilustrasi misi"
                className="w-full md:w-3/4 md:mx-auto lg:w-4/5"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <Paragraph>
                Our mission is to present the latest news and insights, educate
                readers, and provide space for new perspectives that enrich your
                perspective on global issues.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBody;
