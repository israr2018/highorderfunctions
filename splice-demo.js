let names=["israr","Ali","Raza","Wajid","Qadir"];
/* splice  function ,removes  items from an array and returns those item. 

It can also add , new item in the place of removed item.Syntex is as below
string.splice(startIndex:number,deleteCount:number):string[]
@startIndex param : from where to start removing items
@deleteCount param: how many items to remove

*/
let raza_index=names.indexOf('Raza');

let deleted_name= names.splice(raza_index,1);
console.log(`names_exclude_raza=${deleted_name}`);
//out put=['israr','Ali','wajid','Qadir']
console.log("names===",names);
// Example-2
console.log("***********Exmaple-2 of the use of splice function**************");
let employees=['Israr','Imran','Asad','Ata']
employees.forEach(e=>{
    if(e==='Imran'){
        const index=employees.indexOf(e);
        // delete two employess strating from Imran
        employees.splice(index,2);
    }
})
console.log("employees list after deleting ,Imran,Asad==",employees);

//Example-3 
var todos=[
{
Id:1,
Title:"Todo item 1",
Done:false
},
{
    Id:2,
    Title:"Todo item 2",
    Done:false
},
{
    Id:3,
    Title:"Todo item 3",
    Done:false
}

];

const deleted_todo=todos.forEach(todo=>{
 if(todo.Id==2){
 const index=todos.indexOf(todo);

 todos.splice(index,1);
 }
});
// console.log(`after deleting the todo with id=1, todos=${todos}`);
console.log("after deleting the todo with id=2, todos=",todos);
/*
If we set our second parameter (items to remove) as 0, 
splice() will delete zero items. In this way, 
we can choose to only add an item starting at any index number, 
making splice() more powerful than push() or unshift(), 
which only add items to the end or beginning of an array.
syntax: splice(index number, number of items to remove, items to add)
*/
let fish = [ "piranha", "barracuda", "koi", "eel" ];

// Splice a new item number into index position 1
fish.splice(1, 0, "manta ray");
console.log('fish=',fish) //out put=[ 'piranha', 'manta ray', 'barracuda', 'koi', 'eel' ]
