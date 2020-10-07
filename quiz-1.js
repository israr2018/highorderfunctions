/*
Write a function which return true if an array is sorted from lowest to highest values ,other wise false
*/
const data=[10,20,30,40];
const data2=[2,1,5,6];
const data3=[0,2,2,5,6];

const check_if_sorted=(data)=>{
    let is_sorted=true;
for(let i=0,j=1;j<=data.length-1;){
    if(data[i]<=data[j])
    {
        i++;
        j++;

    }
    else{
        
        is_sorted=false;
        break;
    }
    
}
return is_sorted;
}

console.log(check_if_sorted(data));// true
console.log(check_if_sorted(data2));// false
console.log(check_if_sorted(data3));// false
