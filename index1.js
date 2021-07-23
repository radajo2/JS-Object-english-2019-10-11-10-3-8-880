var user = {}
user.name = "John";
user.surname = "Mike";

console.log(user.name);
console.log(user.surname);

user.name = "Peter";

console.log(user.name);
console.log(user.surname);
		
delete user ["name"];

console.log(user.name);
console.log(user.surname);