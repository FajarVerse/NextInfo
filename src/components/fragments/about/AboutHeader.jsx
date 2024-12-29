import Header from "../../elements/Header";
import Paragraph from "../../elements/Paragraph";
import question from "../../../assets/image/why.svg";

const AboutHeader = () => {
  return (
    <>
      <div className="w-full mb-5">
        <Header>Why We Exist ?</Header>
        <div className="w-full block lg:flex lg:flex-row-reverse lg:items-center">
          <div className="w-full px-5 md:px-16 lg:w-2/3">
            <img
              src={question}
              alt="ilustrasi question"
              className="w-full md:w-5/6 md:mx-auto xl:w-4/5" 
            />
          </div>
          <div className="w-full mt-5 lg:w-2/4 lg:mt-0">
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
