export function put(url, objeto) {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8'",
      },
      body: JSON.stringify(objeto),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }