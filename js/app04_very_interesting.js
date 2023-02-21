const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

// destructuring array
const [color1, color2, , color3] = colors;
console.log(color1, color2, color3);

const [color01, color02, color03] = colors;
console.log(color01, color02, color03);

const [color_1, color_2, ...rest] = colors;
console.log(color_1, color_2, rest);

const complexObject = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        state: 'NY',
        country: 'USA'
    },
    hobbies: ['reading', 'writing', 'coding'],
    education: {
        degree: 'Masters',
        college: 'MIT',
        year: 2019,
        subjects: ['math', 'science', 'english']
    }
}

console.log(complexObject.address.city);

// desctructuring
/*
const {address, name, age} = complexObject;		// N.B. Interesting!!!
console.log(address);
console.log(name, age);
*/

/*
const { address: {
	city,
	state,
	country
}, name, age} = complexObject;		// N.B. Interesting!!!
console.log(name, age);

console.log(city, state, country);
*/

const { address: {
	city: town,
	state,
	country
}, name, age, ...alltherest} = complexObject;		// N.B. Interesting!!!
console.log(name, age);

console.log(town, state, country);
console.log(alltherest);

const obj1 = {
	name: 'John',
	age: 25,
	address: {
		city: 'New York',
		state: 'NY'
	}
}

const obj2 = {
	job: 'Developer',
	salary: 30
}

let merged = {...obj1, ...obj2}; 

console.log(merged);
console.log( {...merged, salary: 40} );

merged = {...obj1, ...obj2, age: 30}; 

console.log(merged);

function printUser( {name, age, address: {city, state, country='USA', country2='America', colors=[]}} ) {
	console.log(name, age, city, state, country.slice(0,2), country2?.slice(0.2), colors);	// optional chaining - N.B. interesting!!!
}

printUser(obj1);
