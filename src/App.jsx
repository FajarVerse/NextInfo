import { useEffect, useRef, useState } from "react";
import Navbar from "./components/layouts/Navbar";
import { getBreakingNews } from "./services/breaking.service";
import NewsCard from "./components/elements/NewsCard";
import Header from "./components/elements/Header";
import SubHeader from "./components/elements/SubHeader";
import CustomLink from "./components/elements/CustomLink";
import BreakingCard from "./components/elements/BreakingCard";
import AuthLayout from "./components/layouts/AuthLayout";

function App() {
  // const [breaking, setBreaking] = useState([]);

  // useEffect(() => {
  //   getBreakingNews((data) => {
  //     setBreaking(data);
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <AuthLayout></AuthLayout>
    </>
  );
}

export default App;
