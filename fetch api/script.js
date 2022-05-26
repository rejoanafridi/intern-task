let arrayData = []; //
let token = "d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3";
fetch("https://gorest.co.in/public/v1/users", {
	method: "GET",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		Authorization: "Bearer " + token,
	},
})
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

// {meta: {…}, data: Array(20)}
// data: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// meta: {pagination: {…}}
// [[Prototype]]: Object
