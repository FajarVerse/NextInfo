import { useEffect } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import Navbar from "../../layouts/Navbar";
import BreakingNews from "./BreakingNews";
import RecomendNews from "./RecomendNews";

const HomeFragment = () => {
  useEffect(() => {
    const cacheKey = "expiryTime";
    const expiryInterval = setInterval(() => {
      const expiryTime = localStorage.getItem(cacheKey);
      if (expiryTime && Number(expiryTime) < Date.now()) {
        localStorage.clear();
        console.info("berhasil dihapus");
      } else if (!expiryTime) {
        localStorage.setItem(cacheKey, Date.now() + 3600 * 1000);
      }
    }, 5000);

    return () => clearInterval(expiryInterval);
  }, []);

  return (
    <>
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
