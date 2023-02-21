// old school api fetching
/*
const searchText = 'pizza';
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`).then
( response => {
	response.json().then( data => {
		console.log(data);
	});
});

fetch(`https://dog.ceo/api/breeds/image/random`).then
( response => {
	response.json().then( data => {
		console.log(data);
	});
});
*/

// new school api fetching

async function getMeals(searchText) {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
	const data = await response.json();
	console.log(1, data);
	return data;
}

let searchText = 'pizza';
let data = (async () => {
	return await getMeals(searchText);
}).resolve();

console.log(data);


/*
console.log(2);
async function getMeals1(searchText) {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
	const data = await response.json();
	return data;
}

searchText = 'pizza';
data = getMeals(searchText).then( data => { return data } );
console.log(data);
*/
