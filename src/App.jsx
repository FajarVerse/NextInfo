import { useContext, useEffect, useState } from "react";
import AuthLayout from "./components/layouts/AuthLayout";
import Navbar from "./components/layouts/Navbar";
import { getBreakingNews } from "./services/breaking.service";
import { getRecomendNews } from "./services/recomend.service";
import { Topic } from "./context/Topic";

function App() {
  const [data, setData] = useState([]);

  const { topic } = useContext(Topic);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await getRecomendNews(setData, topic);
      if (newsData) {
        setData(newsData.articles || []);
      }
    };

    fetchData();
  }, [topic]);

  console.log(data);

  return (
    <>
      <Navbar />
      <AuthLayout></AuthLayout>
    </>
  );
}

export default App;
