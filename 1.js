function sortDrinksByPrice(drinks) {
    drinks.sort((a, b) => a.price - b.price);
    return drinks;
}
const drinks = [
    {name:"lemonade", price:50},
    {name:"lime", price:10},
    {name:"cola", price:15},
    {name:"pepsi",price:20},
    {name:"Ice tea", price:25},
    {name:"Fanta", price:12},
    {name:"Moxito", price:14},
    {name:"Flash", price:13},
    {name:"Family", price:5},
    {name:"Hydrolife", price:6},
    {name:"Cappucino", price:60},
    {name:"Americano", price:50},
    {name:"Latte", price:45}
];
const sortedDrinks = sortDrinksByPrice(drinks);
console.log(sortedDrinks);
