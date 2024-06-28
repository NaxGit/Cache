let entirety;

let Stock = 0;

function stockLog()
{

	let fragment = document.createDocumentFragment();

	entirety.forEach
	(
		(i) =>
		{
			Stock = Stock + (i.Cost * i.Qtys);

		let row = document.createElement("div");
			row.className = 'JSfind';

		let name = document.createElement("div");
			name.textContent = i.iName;
		let cost = document.createElement("div");
			cost.textContent = i.Cost;
		let qtys = document.createElement("div");
			qtys.textContent = i.Qtys;

		row.append(name, cost, qtys);	fragment.append(row);
		}
	);
	document.getElementById('Ijava').classList.add('logStock')
	document.getElementById('Ijava').append(fragment);
	statsLog();
}

function statsLog() {
	let stock = document.createElement("div");
		stock.innerHTML = `<div>Stock </div><div>${Stock}</div>`;

	document.getElementById('headsup').classList.add('logStats')
	document.getElementById('headsup').append(stock);
}

const cache = await caches.open('Coffee');
const data = await cache.match('Stock');

if (data) { entirety = await data.json(); stockLog(); }