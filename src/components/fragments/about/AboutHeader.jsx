import Header from "../../elements/Header";
import Paragraph from "../../elements/Paragraph";
import question from "../../../assets/image/why.svg";

const AboutHeader = () => {
  return (
    <>
      <div className="w-full mb-5">
        <Header>Why We Exist</Header>
        <div className="w-full block">
          <div className="w-full px-5">
            <img src={question} alt="ilustrasi question" className="w-full" />
          </div>
          <div className="w-full mt-5">
            <Paragraph>
              We are here to provide accurate, relevant and information
              trustworthy for you. In the midst of the rapid flow of news and
              information, we are committed to filtering and presenting
              meaningful content, helping you stay connected with world.
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
