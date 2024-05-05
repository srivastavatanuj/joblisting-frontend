const useApi = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const cardLimit = 12;

  const fetchJobDetails = async (page) => {
    const body = JSON.stringify({
      limit: cardLimit,
      offset: cardLimit * page,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

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
