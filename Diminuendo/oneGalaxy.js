const jsGalaxy = document.getElementById('oneGalaxy');

let entirety;
let selected;

jsGalaxy.addEventListener
(
	'Sprite', () =>
{
	entirety.forEach
	(
	(Q, i) =>
	{
	let card = document.createElement("div"); card.id = i;
	let icon = document.createElement("img"); icon.src = Q.iIcon;
	let name = document.createElement("div"); name.textContent = Q.iName;

	card.classList.add('JSfind', Q.Group);
	card.append(icon, name);
	fragment.append(card);
	}
	)

jsGalaxy.append(fragment);

}
);



jsGalaxy.addEventListener
(
	'click', ({ target }) =>
{
	if (target.classList.contains('JSfind'))
{
	selected = 0; selected = entirety[target.id];

let icon = document.createElement('img'); icon.src = selected.iIcon;
let name = document.createElement('div'); name.textContent = selected.iName;
let sell = document.createElement('div'); sell.textContent = 'Ksh ' + selected.Sell + '.oo';

	fragment.append(icon, name, sell);
	dialog.append(fragment);
	dialog.showModal();
}
}
);



dialog.addEventListener
(
	'click', ({ target }) =>
{
	if (target.id === 'dialog') { dialog.close(); return; }
else
{
	selected.Shift = sputnik.Shift;

	workersales.postMessage(selected);

	navigator.vibrate(100);
	dialog.classList.add('glid');

	const soundbeeps = new AudioContext();
	const oscillator = soundbeeps.createOscillator();
	oscillator.type = 'sine';
	oscillator.frequency.value = 3000;
	oscillator.connect(soundbeeps.destination);
	oscillator.start();
	oscillator.stop(soundbeeps.currentTime + 0.1);
}
}
);
dialog.addEventListener('transitionend', () => { dialog.close(); dialog.classList.remove('glid'); });
dialog.addEventListener('close', () => { while (dialog.firstChild) { dialog.removeChild(dialog.firstChild) } });


const stock = await fetch(Stock);
const group = await fetch(Group);

if (stock) { entirety = await stock.json(); jsGalaxy.dispatchEvent(new Event('Sprite')); }

if (group) {
	const Groups = await group.json();

	Groups.forEach
	(
	(G) =>
	{
	const option = document.createElement('option'); option.value = G; option.text = G; fragment.append(option);
	}
	)
	document.getElementById('datalist').append(fragment);
};

document.getElementById('searchbar').addEventListener
(
	'change', (e) =>
{
	const IG = e.target.value;
	let icons = document.getElementsByClassName('JSfind');

	for (let i = 0; i < icons.length; i++)
	{
	if (icons[i].classList.contains(IG)){icons[i].style.display = "grid";} else {icons[i].style.display = "none";}
	}
}
);




// clouds.addEventListener
// (
// 	'cloudy', () =>
// {
// 	segments.forEach
// (
// 	(Q) =>
// {
// 	let drop = document.createElement("div"); drop.textContent = Q; console.log(drop);

// 	fragment.append(drop);
// }
// )
// clouds.append(fragment);
// }
// );

// clouds.addEventListener
// (
// 	'click', ({target}) =>
// {
// 	let IG = target.textContent; console.log(IG);
// 	let icons = document.getElementsByClassName('JSfind');

// 	for (let i = 0; i < icons.length; i++)
// 	{
// 	if (icons[i].classList.contains(IG)){icons[i].style.display = "grid";} else {icons[i].style.display = "none";}
// 	}
// }
// );