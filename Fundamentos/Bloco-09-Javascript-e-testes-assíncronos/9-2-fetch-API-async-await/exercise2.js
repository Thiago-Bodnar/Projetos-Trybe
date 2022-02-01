const cryptoContainer = document.getElementById('crypto-container');

function insertInDOM(data) {
  const li = document.createElement('li');
  li.innerText = `${data.rank}-${data.name} (${data.symbol}) ${data.priceUsd}`
  cryptoContainer.appendChild(li);
};

function defaultData(data) {
  return {
    rank: data.rank,
    name: data.name,
    symbol: data.symbol,
    priceUsd: data.priceUsd
  }
};

async function fetchCrypto() {
  const url = `https://api.coincap.io/v2/assets`;
  const coins = await fetch(url)
  .then((response) = response.json())
  .then((data) => data.data)
  .catch((error) => error.toString());
  return coins;
}


window.onload = insertInDOM;