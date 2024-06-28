let entirety;

let Sales = 0;
let Faida = 0;

function salesLog()
{

	let fragment = document.createDocumentFragment();

	entirety.forEach
	(
		(i) =>
		{
			Faida = Faida + (i.Sell - i.Cost);
			Sales = Sales + i.Sell;

		let row = document.createElement("div");
			row.className = 'JSfind';

		let time = document.createElement("div");
			time.textContent = i.Place
		let name = document.createElement("div");
			name.textContent = i.iName;
		let sell = document.createElement("div");
			sell.textContent = i.Sell;

		row.append(time, name, sell);	fragment.append(row);
		}
	);
	document.getElementById('Ijava').classList.add('logSales')
	document.getElementById('Ijava').append(fragment);
	statsLog();
}

function statsLog() {
	let sales = document.createElement("div");
		sales.innerHTML = `<div>Sales </div><div>${Sales}</div>`;
	let faida = document.createElement("div");
		faida.innerHTML = `<div>Faida </div><div>${Faida}</div>`;

	document.getElementById('headsup').classList.add('logStats')
	document.getElementById('headsup').append(sales, faida);
}

const cache = await caches.open('Coffee');
const data = await cache.match('Sales');

if (data) { entirety = await data.json(); salesLog(); }