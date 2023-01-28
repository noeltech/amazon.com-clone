const BASE_URL = "https://fakestoreapi.com";

function client(endpoint, customConfig = {}) {
  const config = {
    method: "GET",
    ...customConfig,
  };

  return window
    .fetch(`${BASE_URL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { client };
