import React, { useEffect, useState } from "react";
import Main from "./subComponents/Main";
import Filters from "./subComponents/Filters";
import useApi from "../Api/useApi";

const Home = () => {
  const { fetchJobDetails } = useApi();
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(0);

  const fetchJob = async (page = 0) => {
    try {
      const result = await fetchJobDetails(page);
      const data = JSON.parse(result)["jdList"];

      setJobs(jobs.concat(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  useEffect(() => {
    const handleInfiniteScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const heightFromTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      if (heightFromTop + windowHeight >= totalHeight) {
        setPage(page + 1);
        fetchJob(page + 1);
      }
    };
    document.addEventListener("scroll", handleInfiniteScroll);

    return () => document.removeEventListener("scroll", handleInfiniteScroll);
  });

  return (
    <div className="homePage">
      <Filters />
      <Main data={jobs} />
    </div>
  );
};

export default Home;
