const root = document.getElementById("root");

const currencies = [
  { value: 'UAH', text: 'Гривня (UAH)' },
  { value: 'USD', text: 'Долар (USD)' },
  { value: 'EUR', text: 'Євро (EUR)' },
  { value: 'PLN', text: 'Злотий (PLN)' },
  { value: 'GBP', text: 'Фунт (GBP)' },
  { value: 'JPY', text: 'Єна (JPY)' }
];

const art = document.createElement("article");
art.classList.add("exch");
const h2 = document.createElement('h2')
h2.textContent = 'Конверт валют '
const input = document.createElement('input')
input.type = 'number'
input.placeholder = 'enter value'
input.classList.add('input')
const selectFrom = document.createElement('select')
const selectTo = document.createElement('select')


currencies.forEach((country)=>{
  const optionFrom = document.createElement('option')
  optionFrom.textContent = country.text
  optionFrom.value = country.value
  selectFrom.append(optionFrom)

  const optionTo = document.createElement('option')
  optionTo.textContent = country.text
  optionTo.valu = country.value
  selectTo.append(optionTo)
})
selectFrom.value = 'GBP'

const btn = document.createElement('button')
btn.textContent = 'Transfer'
btn.classList.add('btn')

const p = document.createElement('p')
p.textContent = 'Result will appear here'
p.classList.add('result')


art.append(h2,input,selectFrom,selectTo,btn,p)
root.append(art)

//https://www.exchangerate-api.com/