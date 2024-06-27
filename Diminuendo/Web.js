const thyme = { home: 'background: cadetblue; color: black; padding: 0.25rem 2.5rem; border-radius: 2.5rem;', };

const Dbase = 'Coffee';
const Stock = location.origin.concat('/Stock');
const Group = location.origin.concat('/Group');



self.addEventListener
(
	'message', async (e) =>
{
	console.log('%c ' + 'puttànΣsca', thyme.home);

const cache = await caches.open(Dbase);
const response = await cache.match(Stock);

let holdings = [];
if (response) { holdings = await response.json(); }

holdings.push(e.data);

const updating  = new Response
(
	JSON.stringify(holdings),
	{
		status: 200,
		statusText: 'OK',
		headers: { 'Content-Type': 'application/json' },
	}
)
cache.put(Stock, updating);

const groupSet = new Set();
for (const item of holdings) { groupSet.add(item.Group); }
const groupArray = [...groupSet];

const newgroup  = new Response
(
	JSON.stringify(groupArray),
	{
		status: 200,
		statusText: 'OK',
		headers: { 'Content-Type': 'application/json' },
	}
)
cache.put(Group, newgroup);



// postMessage( { type: 'segments', Array: groupArray } );

}
);






// 	const milkItem = data.find(item => item.Group === "Milk");

// if (milkItem) {
//   console.log("First Milk item:", milkItem);
// } else {
//   console.log("No items found with Group name 'Milk'");
// }


// const milkItems = data.filter(item => item.Group === "Milk");

// if (milkItems.length > 0) {
//   console.log("All Milk items:", milkItems);
// } else {
//   console.log("No items found with Group name 'Milk'");
// }
