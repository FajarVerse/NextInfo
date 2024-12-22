import AuthLayout from "../../layouts/AuthLayout";
import Navbar from "../../layouts/Navbar";
import BreakingNews from "./BreakingNews";
import RecomendNews from "./RecomendNews";

const HomeFragment = () => {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <div className="px-5 w-full">
          <BreakingNews />
          <RecomendNews />
        </div>
      </AuthLayout>
    </>
  );
};

export default HomeFragment;
