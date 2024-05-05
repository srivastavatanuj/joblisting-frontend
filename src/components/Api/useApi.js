const useApi = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 12,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const fetchJobDetails = async () => {
    return await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
  };

  return { fetchJobDetails };
};

export default useApi;
