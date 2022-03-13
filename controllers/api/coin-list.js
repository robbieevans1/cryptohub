const router = require("express").Router();

let baseUrl = "https://api.coinranking.com/v2/coins";
let proxyUrl = "https://cors-anywhere.herokuapp.com";
let apiKey = "coinranking3b5388e7bac8a799c2984caa82ac17b86981ff2b734949f4";

router.get("/", async (req, res) => {
  let response = await fetch(`${proxyUrl}${baseUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${apiKey}`,
      "Access-Control-Allow-Origin": "*",
    },
  }); //.then((response) => {
  if (response.ok) {
    response.json().then((json) => {
      console.log(json.data.coins);

      let coinsData = json.data.coins;

      if (coinsData.length > 0) {
        var cryptoCoin = "";
      }

      // For Loop Starts
      coinsData.forEach((coin) => {
        cryptoCoin += "<tr>";
        cryptoCoin += `<td> ${coin.uuid} </td>`;
        cryptoCoin += `<td> ${coin.btcPrice} </td>`;
        cryptoCoin += `<td> ${coin.rank} </td>`;
        cryptoCoin += `<td> ${coin.tier} </td>`;
        cryptoCoin += `<td> ${coin.name} </td>`;
        cryptoCoin += `<td> ${coin.price} </td>`;
        cryptoCoin += `<td> ${coin.symbol} </td>`;
        ("<tr>");
      });
      document.getElementById("data").innerHTML = cryptoCoin;
      res.render("specific-coin");
    });
  }
  // }).catch((error) => {
  //   console.log(error)
  // })
});

router.get("/:id", async (req, res) => {
  let response = await fetch(`${proxyUrl}${baseUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${apiKey}`,
      "Access-Control-Allow-Origin": "*",
    },
  }); //.then((response) => {
  if (response.ok) {
    response.json().then((json) => {
      console.log(json.data.coins);

      let coinsData = json.data.coins;

      if (coinsData.length > 0) {
        var cryptoCoin = "";
      }

      // For Loop Starts
      coinsData.forEach((coin) => {
        cryptoCoin += "<tr>";
        cryptoCoin += `<td> ${coin.uuid} </td>`;
        cryptoCoin += `<td> ${coin.btcPrice} </td>`;
        cryptoCoin += `<td> ${coin.rank} </td>`;
        cryptoCoin += `<td> ${coin.tier} </td>`;
        cryptoCoin += `<td> ${coin.name} </td>`;
        cryptoCoin += `<td> ${coin.price} </td>`;
        cryptoCoin += `<td> ${coin.symbol} </td>`;
        ("<tr>");
      });
      document.getElementById("data").innerHTML = cryptoCoin;
      res.render("specific-coin");
    });
  }
  // }).catch((error) => {
  //   console.log(error)
  // })
});

module.exports = router;
