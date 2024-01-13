export function delet(url, objeto) {
    fetch(url, {
      method: "DELETE",
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