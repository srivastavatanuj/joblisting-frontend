import React, { useEffect, useState } from "react";
import Main from "./subComponents/Main";
import Filters from "./subComponents/Filters";
import useApi from "../Api/useApi";

const Home = () => {
  const { fetchJobDetails } = useApi();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({});

  const fetchJob = async (page = 0) => {
    try {
      const result = await fetchJobDetails(page);
      const data = JSON.parse(result)["jdList"];

      setJobs(jobs.concat(data));
      setFilteredJobs(applyFilters(jobs.concat(data)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  useEffect(() => {
    setFilteredJobs(applyFilters(jobs));
  }, [filters]);

  const applyFilters = (jobs = []) => {
    const newJobs = jobs
      .filter((job) => {
        if (filters["role"]?.length == 0 || filters["role"] == undefined) {
          return job;
        } else {
          return filters["role"]?.includes(job.jobRole);
        }
      })
      .filter((job) => {
        if (filters["minExp"]?.length == 0 || filters["minExp"] == undefined) {
          return job;
        } else {
          return filters["minExp"] <= job.minExp;
        }
      })
      .filter((job) => {
        if (
          filters["isRemote"]?.length == 0 ||
          filters["isRemote"] == undefined
        ) {
          return job;
        } else if (filters["isRemote"] == "remote") {
          return job.location == "remote";
        } else {
          return job;
        }
      })
      .filter((job) => {
        if (
          filters["location"]?.length == 0 ||
          filters["location"] == undefined
        ) {
          return job;
        } else {
          return filters["location"].includes(job.location);
        }
      })
      .filter((job) => {
        if (filters["minPay"]?.length == 0 || filters["minPay"] == undefined) {
          return job;
        } else {
          return filters["minPay"] <= job.minJdSalary;
        }
      })
      .filter((job) => {
        if (
          filters["companyName"]?.length == 0 ||
          filters["companyName"] == undefined
        ) {
          return job;
        } else {
          return job.companyName
            .toLowerCase()
            .includes(filters["companyName"].toLowerCase());
        }
      });

    return newJobs;
  };

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
      <Filters filters={filters} setFilters={setFilters} />
      <Main data={filteredJobs} />
    </div>
  );
};

export default Home;
