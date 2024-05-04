const Main = ({ data }) => {
  return (
    <>
      {data.map((job) => {
        console.log(job);
      })}
    </>
  );
};

export default Main;
