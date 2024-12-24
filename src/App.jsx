import { useEffect, useState } from "react";
import AuthLayout from "./components/layouts/AuthLayout";
import Navbar from "./components/layouts/Navbar";
import { getBreakingNews } from "./services/breaking.service";
import { getRecomendNews } from "./services/recomend.service";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await getRecomendNews(setData);
      if (newsData) {
        setData(newsData.articles || []);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <Navbar />
      <AuthLayout></AuthLayout>
    </>
  );
}

export default App;
