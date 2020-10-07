let data= [
    
    {
        "langs_status": true,
        "_id": "5ef2069a845ec32f5470bdd8",
        "langs_screen_name": "login",
        "langs_key": "test_input11",
        "langs_value": {
            "5ef0b07c9c3a3c11b37fa258": "Arabic Text",
            "5ef0af749c3a3c11b37fa257": "Germeant Text",
            "5ef0a2bbc0be223dd49a9f97": "French Text"
        },
        "langs_order": 1,
        "langs_create_at": "2020-06-23T13:41:46.139Z",
        "langs_update_at": "2020-06-23T13:41:46.139Z",
        "__v": 0
    },
    {
        "langs_status": true,
        "_id": "5ef2069a845ec32f5470bdd8",
        "langs_screen_name": "signup",
        "langs_key": "test_input2",
        "langs_value": {
            "5ef0b07c9c3a3c11b37fa258": "Arabic Text",
            "5ef0af749c3a3c11b37fa257": "Germeant Text",
            "5ef0a2bbc0be223dd49a9f97": "French Text"
        },
        "langs_order": 1,
        "langs_create_at": "2020-06-23T13:41:46.139Z",
        "langs_update_at": "2020-06-23T13:41:46.139Z",
        "__v": 0
    },
    {
        "langs_status": true,
        "_id": "5ef2069a845ec32f5470bdd8",
        "langs_screen_name": "signup",
        "langs_key": "test_input4",
        "langs_value": {
            "5ef0b07c9c3a3c11b37fa258": "Arabic Text",
            "5ef0af749c3a3c11b37fa257": "Germeant Text",
            "5ef0a2bbc0be223dd49a9f97": "French Text"
        },
        "langs_order": 1,
        "langs_create_at": "2020-06-23T13:41:46.139Z",
        "langs_update_at": "2020-06-23T13:41:46.139Z",
        "__v": 0
    },

];
let result={};
let id="5ef0b07c9c3a3c11b37fa258";
let d={};
for (let x of data){
  let temp=  x.langs_value;
   
    d[[x.langs_key]]=x.langs_value[id];
    console.log(x.langs_key);
    result[x.langs_screen_name]=d;
}
// console.log("field:"+JSON.stringify(field));
console.log("result =="+JSON.stringify(result));