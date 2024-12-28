import AuthLayout from "../../layouts/AuthLayout";
import Navbar from "../../layouts/Navbar";
import AboutBody from "./AboutBody";
import AboutFooter from "./AboutFooter";
import AboutHeader from "./AboutHeader";

const AboutFragment = () => {
  return (
    <>
      <Navbar />
      <AuthLayout className="bg-background">
        <div className="w-full px-5">
          <AboutHeader />
          <AboutBody />
          <AboutFooter />
        </div>
      </AuthLayout>
    </>
  );
};

export default AboutFragment;
