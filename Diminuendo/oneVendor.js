const jsVendor = document.getElementById('oneVendor');

let entirety;
let emphasis;

jsVendor.addEventListener
(
	'Sprite', () =>
{
	entirety.forEach
	(
	(Q,i) =>
	{
	let card = document.createElement('div'); card.id = i;
	let icon = document.createElement('img'); icon.src = Q.iIcon;
	let name = document.createElement('div'); name.textContent = Q.iName;

	card.className = 'JSfind';
	card.append(icon, name);
	fragment.append(card);
	}
	)

jsVendor.append(fragment);

}
);



jsVendor.addEventListener
(
	'click', ({ target }) =>
{
	if (target.classList.contains('JSfind'))
	{
		if (emphasis) { emphasis.classList.remove('emphasize'); };
		target.classList.add('emphasize');
		emphasis = target;
		CASIO.reset();
		target.append(CASIO)
	}
}
);



CASIO.addEventListener
(
	'submit', (e) =>
{
	e.preventDefault();


	
	let ping = e.target.parentNode.id;

let specific = entirety[ping];
	specific.Cost = Number(costInput.value);
	specific.Sell = Number(sellInput.value);
	specific.Qtys = Number(qtysInput.value);

worker.postMessage(specific);
}
);



document.getElementById('Shelf').addEventListener
(
	'click', async ({ target }) =>
{
const response = await fetch('./library/' + target.textContent + '.JSON');
if (response) { entirety = await response.json(); jsVendor.dispatchEvent(new Event('Sprite')); }

});