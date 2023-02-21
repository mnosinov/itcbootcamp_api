const myComplexObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  },
  hobbies: ["reading", "music"],
  education: [
    {
      degree: "Bachelor",
      major: "Computer Science",
      year: 2012
    },
    {
      degree: "Master",
      major: "Business Administration",
      year: 2016
    }
  ],
  workExperience: [
    {
      company: "ABC Inc.",
      position: "Software Engineer",
      duration: "2 years"
    },
    {
      company: "XYZ Corp.",
      position: "Product Manager",
      duration: "3 years"
    }
  ]
};

let {
	name, age,
	address: {
		street, city, state, zip
	},
	hobbies: [
		hobby1, hobby2
	],
	education: [
		{degree:degree1,  major:major1, year:year1},
		{degree:degree2, major:major2, year:year2}
	],
	/*
	workExperience: [
		{company:company1, position:position1, duration:duration1},
		{company:company2, position:position2, duration:duration2}
	],
	*/
	workExperience: [...workExperienceAsArray]
} = myComplexObject;

/*
console.log(
	name, age, street, city, state, zip,
	hobby1, hobby2,
	degree1, major1, year1, degree2, major2, year2,
	company1, position1, duration1, company2, position2, duration2, workExperience
);
*/
console.log(
	name, age, street, city, state, zip,
	hobby1, hobby2,
	degree1, major1, year1, degree2, major2, year2,
	workExperienceAsArray
);
