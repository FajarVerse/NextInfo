import AuthLayout from "../../layouts/AuthLayout";
import Navbar from "../../layouts/Navbar";
import AboutBody from "./AboutBody";
import AboutFooter from "./AboutFooter";
import AboutHeader from "./AboutHeader";

const AboutFragment = () => {
  return (
    <>
      <AuthLayout className="bg-background">
        <div className="w-full px-5 md:px-16 lg:px-14 xl:px-20">
          <AboutHeader />
          <AboutBody />
          <AboutFooter />
        </div>
      </AuthLayout>
    </>
  );
};

export default AboutFragment;
