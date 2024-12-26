import Header from "../../elements/Header";
import Paragraph from "../../elements/Paragraph";
import AuthLayout from "../../layouts/AuthLayout";
import Navbar from "../../layouts/Navbar";
import HotNews from "./HotNews";
import MoreNews from "./MoreNews";
import Topics from "./Topics";

const NewsFragment = () => {
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
              <MoreNews />
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default NewsFragment;
