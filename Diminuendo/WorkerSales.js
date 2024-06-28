const thyme = { home: 'background: cadetblue; color: black; padding: 0.25rem 2.5rem; border-radius: 2.5rem;', };

const Domain = location.origin;
const Dbase = 'Coffee';
const file = '/Sales';
const DB = Domain.concat(file);

self.addEventListener
(
	'message', async (e) =>
{
	const select = e.data;

select.Qtys = 1;
select.Stamp = Date.now();
select.Place = new Date(Date.now()).toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit' });
select.Prof = select.Sell - select.Cost;

const cache = await caches.open(Dbase);
const response = await cache.match(DB);

let existing = [];
if (response) { existing = await response.json(); }

existing.push(select);

const updating  = new Response
(
	JSON.stringify(existing),
	{
		status: 200,
		statusText: 'OK',
		headers: { 'Content-Type': 'application/json' },
	}
)
	cache.put(DB, updating);
}
);


// if (item) {
//     item.Qtys--;
//     // await ilink.table("stock").put(item);
// }

