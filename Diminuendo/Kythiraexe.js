const Stock = location.origin.concat('/Cache/Stock');
const Group = location.origin.concat('/Cache/Group');

const sputnik = JSON.parse(localStorage.getItem('sputnik'));
if (!sputnik) {
	localStorage.setItem('sputnik', '{"Page":"./Diminuendo/welcome.js","Views":1}');
	location.reload();
};

const worker = new Worker('./Diminuendo/Web.js');
const workersales = new Worker('./Diminuendo/WorkerSales.js');

const script = document.createElement('script');
      script.src = sputnik.Page;
	  script.type = 'module';
	  script.onload = () => {};
	  script.onerror = () => {};
document.body.append(script);


const fragment = new DocumentFragment();

document.addEventListener
(
	'error', ({target}) =>
{
	if ( target.tagName === 'IMG' && !target.src.includes ('zero.png') ) { target.src = './files/zero.png'; }
}, true
);

document.getElementById('deltahome').addEventListener('click', () => { document.getElementById('comet').classList.toggle('show');});
document.getElementById('deltainfo').addEventListener('click', () => { });
document.getElementById('deltamenu').addEventListener('click', () => { document.getElementById('links').classList.toggle('show');});

document.getElementById('links').addEventListener
(
	'click', ({target}) =>
{
	let icon = target.id;
	if (icon === 'iconViews') { let change = sputnik.Views + 1; satellite('Views', change, 1);}
	if (icon === 'iconShift') { let change = sputnik.Shift + 1; satellite('Shift', change, 1);} 
		
	
	if (icon === 'iconShops') {jsload('Page', './Diminuendo/oneGalaxy.js', 1);}
	if (icon === 'iconLouge') {jsload('Page', './Diminuendo/oneVendor.js', 1);}
	if (icon === 'iconSales') {jsload('Page', './Diminuendo/logSales.js', 1);}
	if (icon === 'iconStock') {jsload('Page', './Diminuendo/logStock.js',1);}
	window.location.reload(true);
}
);


const jsload = (key, val, act) =>
	{
	if (act === 1)
		{ sputnik[key] = val; }
	else
		{ delete sputnik[key]; }
	
	localStorage.setItem('sputnik', JSON.stringify(sputnik));
	location.reload();
	};
