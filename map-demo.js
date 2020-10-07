/*In this file ,we will demonstrate the use of the map high order function. map function is used to  create an
array from the  other array
*/
const companies=[ 
    {name:"Company 1",category:"Finance",start:"1990",end:"2010"},
    {name:"Company 2",category:"Retailer",start:"2001",end:"2015"},
    {name:"Company 3",category:"Auto",start:"2000",end:"2016"},
    {name:"Company 4",category:"Technology",start:"2007",end:"2019"},
    {name:"Company 5",category:"Technology",start:"2005",end:"2019"},
    {name:"Company 6",category:"Technology",start:"2003",end:"2017"},
    
    ];
// create an array of company names from companies array
const companyNames=companies.map((company)=>{
return company.name;
});
console.log("***************array with only company names***************");
console.log(companyNames);
//create array with string value like name-start-end
const company_profile=companies.map((company)=>{
    return `${company.name}-${company.start}-${company.start}`;
    });
    console.log("***************array with string values***************");
    console.log(company_profile);
