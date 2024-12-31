import AuthLayout from "../../layouts/AuthLayout";
import AboutBody from "./AboutBody";
import AboutHeader from "./AboutHeader";

const AboutFragment = () => {
  return (
    <>
      <AuthLayout>
        <div className="w-full px-5 md:px-14 lg:px-10 xl:px-14">
          <AboutHeader />
          <div className="w-full mt-6 lg:flex  lg:flex-row-reverse">
            <AboutBody />
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default AboutFragment;
