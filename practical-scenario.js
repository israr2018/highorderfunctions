const users_data=[
    { 
      id:1,
      name:"Tania Rasica",
      
    },
    { 
      id:2,
      name:"israr ulhaq"
     
    },
    { 
      id:3,
      name:"Lisa Tagliaferri "
     
    }
   
  ];
  const edit_user={
      id:2,
      name:'israr khan'
  }
// edit/updating a  user with id=2
//1. method
/* const users_data2=users_data.map(
  user=>{
  
    if(user.id===edit_user.id){
     // console.log(edit_user);
      return edit_user;
    }
    else{
     // console.log(user);
      return user;
    }
  }
  ); */

//console.log("users_data2",users_data2);

const users_data3=users_data.map(user=>user.id===edit_user.id?edit_user:user);
console.log(users_data3);
// deleting  a user
const user_to_delete= { id: 3, name: 'Lisa Tagliaferri ' };
const users_list=users_data.filter(user=>user.id!==user_to_delete.id);
console.log("users_list",users_list); // Lisa is not in the list.