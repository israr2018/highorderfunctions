const numbers = [1, 2, 3, 4];
const reduce = (func, initialValue, collection) => {
    let stored = initialValue;
    for (let element of collection) {
        stored = func(stored, element);
    }
    // collections.forEach(element => {
    //     store=add(store,element);
    // });
    return stored;
}
const add = (stored, current) => stored + current;

const r = reduce(add, 0, numbers);
console.log(r);

// scenario -2

const entities = [
    { number: 10 },
    { number: 5 },
    { number: 6 }
];
// const reduce2 = (func, initialValue, collections) => {
//     let stored = initialValue;
//     for (let element of collections) {
//         stored = func(stored, element.number);
//     }
//     return stored;
// };

// add numember extracted from objects
const add2 = (stored, current) => stored + current.number;
const r2 = reduce(add2, 0, entities);
console.log(r2);

//scenario - 3
//flatening of array
const arrays = [[0, 1], [2, 3], [4, 5]];
//result should be [0,1,2,3,4,5]

const flatening = (stored, current) => {
    return stored.concat(current);

}

//const result = reduce(flatening, [], arrays);
const result=arrays.reduce(flatening,[]);
console.log("result", result);

// longest array
const longest=(stored,current)=>{
  return  stored.length>current.length?stored:current;
};
const slices=[
    [1,2,3],
    [2,3,3,3,4,8,9],
    [3,4],
    [2,3,4,5]
]
const r3=slices.reduce(longest,[]);
console.log("r3",r3);
const people=[

    {id:1, name:'Ali',born:1982},
    {id:2, name:'Sahar',born:2019},
    {id:3, name:'Ijaz',born:1972},
    {id:4, name:'Ubaid',born:1952}
];
// create a new object from the array

byId=(stored,current)=>{
     stored[current.id]=current;
     return stored;
   // return {...stored,[current.id]:current};
}
let myObj={id:1,name:'Ali',born:1982};
let myObj2={[myObj.id]:myObj};
const peopleById=people.reduce(byId,{});
console.log(peopleById);
console.log(peopleById[2]);
console.log(peopleById);
console.log(peopleById[2]);
const fruits=[
    {name:'apple',price:1},
    {name:'orange',price:2},
    {name:'pear',price:3}
];
// const fruitPrices=fruits.reduce((stored,v)=>{
//     // stored[name]:v.price;
//     // return stored;
// copy  create a copy of stored object and add  a new object
//     return {...stored,[v.name]:v.price}
// },{});
const fruitPrices=fruits.reduce((a,v)=>{
  a[v.name]=v.price;
  return a;
},{});
console.log(fruitPrices);
const apple1={name:"apple", price:1};
const apple2={...apple1};
const apple3=Object.assign({},apple1);
console.log("apple2="+apple2);
console.log(`apple3=${apple3}`);
