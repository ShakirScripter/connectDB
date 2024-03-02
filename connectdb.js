/**
 * how to connect app to db
 */

const mongoose=require('mongoose');

const studentModel=require("./createSchema");


mongoose.connect("mongodb://localhost/information");
/**
 * (information)=>we declared the name of database;
 */

const database=mongoose.connection;//you are connet and there this function throw two events either it show error or connect name open;

database.on("error",()=>{
    console.log("error while connecting");
});
database.once("open",()=>{
    console.log("connected to mongodb");
    //write a function to insert data in the db;

    init();

    //how to run queries to search data;

    searchdatabyID();
});

//function to insert data 
async function init(){
    const student={
        name:"shakir",
        age:22,
        studentID:202207057,
        email:"mohdshakir2203@gmail.com",
        subjects:["math","computerOrg","DBMS","softwareSystem","operatingSystem"]
    }

    const st= await studentModel.create(student);

    console.log(st);

    
}


//function to search the data by id;
async function searchdatabyID(){
    const searchId=await studentModel.findById('65e2c08c4cf666c4cfa39af3');
    console.log(searchId);
}