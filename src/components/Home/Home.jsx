import React, { useEffect, useState } from "react";
import Main from "./subComponents/Main";
import Filters from "./subComponents/Filters";
import useApi from "../Api/useApi";

const Home = () => {
  const { fetchJobDetails } = useApi();
  const [jobs, setJobs] = useState([]);

  const fetchJob = async () => {
    try {
      const result = await fetchJobDetails();
      const data = JSON.parse(result)["jdList"];
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  return (
    <>
      <Main data={jobs} />
      <Filters />
    </>
  );
};

export default Home;
