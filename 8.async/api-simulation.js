// Simulasi API request and response
function request(res) {
  console.log("Requesting...");
  setTimeout(() => {
    const response = [
      { id: 1, productName: "Baju", price: 100000 },
      { id: 2, productName: "Celana", price: 50000 },
    ];
    console.log("Request done!");
    res(response);
  }, 3000);
}

function responseFromAPI(result) {
  console.log("Response : ", result); // , untuk memisahkan argumen
  console.log("Response : " + result); // +  untuk menggabungkan string, javascript akan mengubah object menjadi string "Object"
}

request(responseFromAPI);
