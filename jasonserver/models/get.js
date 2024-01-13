export function get(url, objeto) {
    fetch(url, {
      method: "GET",
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