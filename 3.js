let names = [];
let users = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" },
    {name:"Laylo", email:"laylo2008@gmail.com"},
    {name:"Mushtariy", email:"mushtariy@gmail.com"}
];

for (let { name } of users) {
    names.push(name);
}

console.log(names); 
