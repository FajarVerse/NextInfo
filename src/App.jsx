import Header from "./components/elements/Header";
import Paragraph from "./components/elements/Paragraph";
import SubHeader from "./components/elements/SubHeader";
import AuthLayout from "./components/layouts/AuthLayout";
import Navbar from "./components/layouts/Navbar";
import question from "./assets/image/undraw_questions_g2px.svg";
import { Link } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <AuthLayout className="bg-background">
        <div className="w-full px-5">
          <div className="w-full mb-5">
            <Header>Why We Exist</Header>
            <div className="w-full block">
              <div className="w-full px-2">
                <img src={question} alt="" />
              </div>
              <div className="w-full mt-5">
                <Paragraph>
                  We are here to provide accurate, relevant and information
                  trustworthy for you. In the midst of the rapid flow of news
                  and information, we are committed to filtering and presenting
                  meaningful content, helping you stay connected with world.
                </Paragraph>
              </div>
            </div>
          </div>

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
                <div className="w-full"></div>
              </div>
            </div>

            <div className="w-full">
              <SubHeader>Mission</SubHeader>
              <div className="w-full block">
                <div className="w-full"></div>
                <div className="w-full">
                  <Paragraph>
                    Our mission is to present the latest news and insights,
                    educate readers, and provide space for new perspectives that
                    enrich your perspective on global issues.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-5">
            <Paragraph>
              We deliver the latest and most trusted news from a variety of
              topics through News API integration, ensuring relevant and
              accurate information for you.
            </Paragraph>
            <div className="w-full mt-2">
              <SubHeader>Connect With Us</SubHeader>
              <div className="w-full flex gap-5 mt-2">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <div className="w-10 h-10 bg-primary rounded-full"></div>
              </div>
              <p className="font-open_sans font-bold text-xl my-2.5 ml-2">Or</p>
              <div className="w-full">
                <Link to={"/contact"}>
                  <button className="font-open_sans font-semibold text-base text-white px-3.5 py-2 bg-blue-400 rounded-full">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}

export default App;
