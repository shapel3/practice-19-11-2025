const root = document.getElementById("root");

const currencies = [
  { value: "UAH", text: "Гривня (UAH)" },
  { value: "USD", text: "Долар (USD)" },
  { value: "EUR", text: "Євро (EUR)" },
  { value: "PLN", text: "Злотий (PLN)" },
  { value: "GBP", text: "Фунт (GBP)" },
  { value: "JPY", text: "Єна (JPY)" },
];

const art = document.createElement("article");
art.classList.add("exch");
const h2 = document.createElement("h2");
h2.textContent = "Конверт валют ";
const input = document.createElement("input");
input.type = "number";
input.placeholder = "enter value";
input.classList.add("input");
const selectFrom = document.createElement("select");
const selectTo = document.createElement("select");

currencies.forEach((country) => {
  const optionFrom = document.createElement("option");
  optionFrom.textContent = country.text;
  optionFrom.value = country.value;
  selectFrom.append(optionFrom);

  const optionTo = document.createElement("option");
  optionTo.textContent = country.text;
  optionTo.value = country.value;
  selectTo.append(optionTo);
});
selectFrom.value = "GBP";

const btn = document.createElement("button");
btn.textContent = "Transfer";
btn.classList.add("btn");

const p = document.createElement("p");
p.textContent = "Result will appear here";
p.classList.add("result");

art.append(h2, input, selectFrom, selectTo, btn, p);
root.append(art);

//https://www.exchangerate-api.com/
function getRates(base) {
  return fetch(`https://open.er-api.com/v6/latest/${base}`)
    .then((response) => response.json())
    .then((data) => {
      return data.rates;
    })
    .catch((err) => {
      console.log(err);
    });
}

function convert(amount, fromRate, toRate) {
  getRates(fromRate)
    .then((rates) => {
      const converted = amount * rates[toRate];

      p.textContent = `${amount}${fromRate} = ${converted.toFixed(2)}${toRate}`;
    })
    .catch((err) => {
      console.log(err);
    });
}
btn.addEventListener("click", () => {
  const amount = Number(input.value);
  const fromRate = selectFrom.value;
  const toRate = selectTo.value;
  if (amount <= 0) {
    p.textContent = "Enter correct value!!!";
    return;
  }
  convert(amount, fromRate, toRate);
});
