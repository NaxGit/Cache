// The author of a piece of writing.

const cDB = 'Coffee';

self.addEventListener
(
	'message', async (e) =>
{
	const { tab, obj } = e.data;

const author = async () =>
{
	const cache = await caches.open(cDB);
	const match = await cache.match(tab);

	let holds = [];
	if (match) { holds = await match.json() };

	holds.push(obj);

const updates = new Response( JSON.stringify(holds), { status: 200, statusText: 'ok', } );

	cache.put(tab, updates);

// Done:

if (tab.includes('Stock'))
{
	const table = tab.replace( 'Stock' , 'Group' );

const groupSet = new Set();

for (const item of holds) { groupSet.add(item.Group); }

const groupArray = [...groupSet];

const newgroup  = new Response ( JSON.stringify(groupArray), { status: 200, statusText: 'ok',})

	cache.put(table, newgroup);
}
};

author( tab , obj );

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
