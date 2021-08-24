let baseUrl = `https://restcountries.eu/rest/v2/name/Australia`;

let httpOptions = {
  method: "GET",
};

function waitForData(res) {
  return res.json();
}

function handleData(data) {
  let pop = data[0].manipulation;
  console.log(`${pop}`);
}

fetch(baseUrl, httpOptions).then(waitForData).then(handleData);
