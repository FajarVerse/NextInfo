import visi from "../../../assets/image/vision.svg";
import mission from "../../../assets/image/mission.svg";
import SubHeader from "../../elements/SubHeader";
import Paragraph from "../../elements/Paragraph";

const AboutBody = () => {
  return (
    <>
      <div className="w-full px-1">
        <div className="w-full mb-5">
          <SubHeader>Vision</SubHeader>
          <div className="w-full block">
            <div className="w-full">
              <Paragraph>
                Our vision is to be a trusted source that supports better
                decision making.
              </Paragraph>
            </div>
            <div className="w-full px-5">
              <img src={visi} alt="ilustrasi visi" className="w-full" />
            </div>
          </div>
        </div>

        <div className="w-full mt-7">
          <SubHeader>Mission</SubHeader>
          <div className="w-full block">
            <div className="w-full px-5">
              <img src={mission} alt="ilustrasi misi" className="w-full" />
            </div>
            <div className="w-full">
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
