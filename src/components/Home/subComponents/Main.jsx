import "../Home.css";

const Main = ({ data }) => {
  return (
    <div className="mainPage">
      {data.map((job) => {
        console.log(job);
        return (
          <div className="card" key={job.jdUid}>
            <div>
              <div className="company_info">
                <img src={job.logoUrl} alt="company Logo" />
                <div>
                  <h3 className="heading">{job.companyName}</h3>
                  <h2 className="text">{job.jobRole}</h2>
                  <p>{job.location}</p>
                </div>
              </div>

              <p className="text salary">
                Estimated Salary: $
                {job.minJdSalary && job.maxJdSalary
                  ? `${job.minJdSalary} - ${job.maxJdSalary}`
                  : job.maxJdSalary || job.minJdSalary}{" "}
                LPA
              </p>

              <div className="about">
                <h3 className="text">About Company:</h3>
                <p className="text">{job.jobDetailsFromCompany}</p>
              </div>

              <p className="showMore">Show More</p>

              {job.minExp && (
                <div>
                  <p className="heading">Minimum Experience</p>
                  <p className="text">{job.minExp} years</p>
                </div>
              )}
            </div>

            <button className="applyButton">Easy Apply</button>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
