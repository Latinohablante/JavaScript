// Agrega información pero no necesita la información anterior
export function post(url, objeto) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charser=UTF-8'",
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