// old school api fetching
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
