///////////////////////////////////////////////////////////////////////////////////////////////////////////
let rowData=document.querySelector("#row-data")
let links=document.querySelectorAll(".Nav-links link li")


////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


let CategoriesBtn=document.querySelector("#Categories");
let AreaBtn=document.querySelector("#Area");
let IngredientsBtn=document.querySelector("#Ingredients");
let ContactUs=document.querySelector("#ContactUs");
let showsearchinput=document.querySelector("#showsearchinput");
////////////////////////////////////////////////////////////////////////////////////////////////////////////






$(document).ready(()=>{
   
    $(".loading ").fadeOut(800);
    $("body").css("overflow", "visible");
   
  
    
  
    

 
   
    

})







function openNav(){
  
  
    


    $(".side-nav-menu").animate({left:0},500);
  
    $("#openClose").removeClass("fa-solid fa-bars fa-bounce fa-2xl");
    $("#openClose").addClass("fa-solid fa-x fa-2xl");
   

  
    for(let i =0;i<5;i++){
       
      
         
        $(".Nav-links .link li").eq(i).animate({
            top:0
        },((i+5) * 100) );
      

    }
   
     
    

}



function closeNave(){

    $(".side-nav-menu").animate({left:-256},500)
    $("#openClose").removeClass("fa-solid fa-x fa-2xl");
    $("#openClose").addClass("fa-solid fa-bars fa-bounce fa-2xl");


 
    $(".Nav-links .link li").animate({top:300} ,500)
       
   

   

}






$("#openClose").on("click",function(){

 
  
    if( $(".side-nav-menu").css("left")=="0px"){
        closeNave()
        

    }else{
        openNav()
       
    }
 
  
   
})






  



















///////////////////////////////////////////////////////////////////////////////////




async function getCategories(data){
    $(".loading").fadeIn(300);

    let Categories=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    Categories=await Categories.json()
    console.log(Categories.categories);

  displayCategories(Categories.categories)
   $(".loading ").fadeOut(300);

}



async function getCategoriesmeals(data){

    let Categoriesmeals=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    Categoriesmeals=await Categoriesmeals.json()
   console.log(Categoriesmeals.meals);
    displayMeals(Categoriesmeals.meals)
   

}

getCategoriesmeals()


function displayCategories(data){

    let cartona="";
    rowData.innerHTML = ""
    searchContainer.innerHTML=""

    for (let i = 0; i < data.length; i++) {
        cartona+=`  <div class="col-md-3">
        //         <div onclick="getCategoriesmeals(${data[i].idCategory})" class="meal position-relative overflow-hidden rounded-2 cursor-pointer" >
        //             <img class="w-100" src="${data[i].strCategoryThumb}" alt="">
        //             <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 " >
        //                 <h3>${data[i].strCategory}</h3> 
        //                    <p>${data[i].strCategoryDescription}</p>

        //             </div>
        //         </div>
        //      </div>`
        rowData.innerHTML=cartona;
    }
       
        
    

}

$(CategoriesBtn).on("click", function () {
    closeNave();
    getCategories();
});
////////////////////////////////////////////////////////////////////////////////////


async function getArea(data){
    $(".loading").fadeIn(300);

    let getAreData= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    getAreData=await getAreData.json();
    console.log(getAreData.meals);

    displayArea(getAreData.meals);
    $(".loading ").fadeOut(300);


}



async function getAreaMeals(data){
    let getAreDatameals= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
    getAreDatameals=await getAreDatameals.json()
    console.log(getAreDatameals.meals);
    displayMeals(getAreDatameals.meals)//// strMeal    strMealThumb   idMeal

}
     


function displayArea(data){
    let cartona="";

    rowData.innerHTML = ""
    searchContainer.innerHTML=""
    for (let i = 0; i < data.length; i++) {
        cartona+=`      <div class="col-md-3 text-white">
        <div onclick="getAreaMeals(${data[i].idMeal})" class="rounded-2 text-center cursor-pointer">
        <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h3>${data[i].strArea}</h3>
    
    </div>

 </div>`     
        
    }
    rowData.innerHTML=cartona
        
    
    
}

$(AreaBtn).on("click",function(){
    closeNave()
    getArea()

})

///////////////////////////////////////////////////////////////////////////////////////////////////



async function getingredient(data){
    
    $(".loading").fadeIn(300);
    $(".loading ").fadeOut(300);
    let getingredientdata= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    
    getingredientdata= await getingredientdata.json();
    console.log(getingredientdata.meals);
    displayingredient(getingredientdata.meals);
    
    $(".loading ").fadeOut(300);

}



async function getingredientMeals(data){
    

    let ingredientMealsdata= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
    ingredientMealsdata=await ingredientMealsdata.json()
    console.log(ingredientMealsdata.meals);


    displayMeals(ingredientMealsdata.meals);

    ///   toooo   display



}



function displayingredient(data){
    let cartona="";
    rowData.innerHTML = ""
    searchContainer.innerHTML=""

    for (let  i = 0;  i < data.length;  i++) {
        cartona+=` <div class="col-md-3 text-white">
        <div  onclick="getingredientMeals(${data[i].idIngredient})" class="rounded-2 text-center cursor-pointer" >
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3>${data[i].strIngredient}</h3>
            <p>${[data[i].strDescription.slice(0,20)]}</p>
        </div>
    </div>
   `
        
   rowData.innerHTML=cartona
        
    }

}

$(IngredientsBtn).on("click",function(){
    getingredient();
    closeNave();
})

////////////////////////////ID////////////////////////////////////

async function mealsID(id){

    let mealsID=await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772");
    mealsID=await mealsID.json()

    console.log(mealsID.meals);
    displayMeals(mealsID.meals);
    $(".loading ").fadeOut(300);

}














////////////////////////////////////////////////////////////////////////



function displayMeals(data){

    rowData.innerHTML = ""
    searchContainer.innerHTML=""
    let cartona="";


    for (let i = 0; i < data.length; i++) {
       
        cartona+=`  <div class="col-md-3">
        <div onclick="displayMealDetails(${data[i].idMeal})" class="meal position-relative overflow-hidden rounded-2 cursor-pointer" >
            <img class="w-100" src="${data[i].strMealThumb}" alt="">
            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 " >
                <h3>${data[i].strMeal}</h3>
            </div>
        </div>
     </div>`
    }
    rowData.innerHTML=cartona;



}



$(ContactUs).on("click",function(){
    closeNave();
    showContacts();
})

function showSearchInputs(data) {

    $(".loading").fadeIn(300);
    rowData.innerHTML = ""
    searchContainer.innerHTML = `
    <div class="row py-4 ">
        <div class="col-md-6 ">
            <input onkeyup="searchByName(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchByFLetter(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    </div>`

    $(".loading ").fadeOut(300);
  
   
}
async function searchByName(data){
    let searchByNamdata=await fetch("http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    searchByNamdata=await searchByNamdata.json()

    console.log(searchByNamdata.meals);
    displayMeals(searchByNamdata.meals)
}

async function searchByFLetter(data){
    let searchByFLetterdata=await fetch("http://www.themealdb.com/api/json/v1/1/search.php?f=a")
    searchByFLetterdata=await searchByFLetterdata.json()
    console.log(searchByFLetterdata.meals);
    displayMeals(searchByFLetterdata.meals)
}


$(showsearchinput).on("click",function(){
    showSearchInputs();
    closeNave();
})



///////////////////////////////////////////////////////







function showContacts() {
    rowData.innerHTML = ""
    searchContainer.innerHTML=""
    $(".loading").fadeIn(300);
    rowData.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inpuTvaild()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed</div></div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inpuTvaild()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz</div></div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inpuTvaild()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="pAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number</div></div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inpuTvaild()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="aAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age</div></div>
                    <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inpuTvaild()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*</div></div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inpuTvaild()" type="password" class="form-control " placeholder="Repassword">
                <div id="repassAlert" class="alert alert-danger w-100 mt-2 d-none"> Enter valid repassword </div></div></div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
$(".loading ").fadeOut(300);
}





function inpuTvaild(){
    if(nameValidation()){
        $("#nameAlert").removeClass("d-none");
        $("#nameAlert").addClass("d-block");



    }else{
        $("#nameAlert").removeClass("d-block");
       

     
       

    }









    if(emailValidation()){
        $("#emailAlert").removeClass("d-none");
        $("#emailAlert").addClass("d-block");


    }else{
        $("#emailAlert").removeClass("d-none");
        $("#emailAlert").addClass("d-non");
      

    }



    if(phoneValidation()){
        $("#pAlert").removeClass("d-none");
        $("#pAlert").addClass("d-block");

    }else{
        $("#pAlert").removeClass("d-block");
        $("#pAlert").addClass("d-none");
        

    }








    if(ageValidation()){
        $("#aAlert").removeClass("d-none");
        $("#aAlert").addClass("d-block");
    }else{
        $("#aAlert").removeClass("d-block");
        $("#aAlert").addClass("d-none");

    }



    if(passwordValidation()){
        $("#passAlert").removeClass("d-block");
        $("#passAlert").addClass("d-none");
    }else{
        $("#passAlert").removeClass("d-none");
        $("#passAlert").addClass("d-block");

    }



    if(repasswordValidation()){
        $("#repassAlert").removeClass("d-block");
        $("#repassAlert").addClass("d-none")
    }else{
        $("#repassAlert").removeClass("d-none");
        $("#repassAlert").addClass("d-block");

    }












    if(nameValidation()&& emailValidation() && phoneValidation() && ageValidation && passwordValidation()&&repasswordValidation() ){


        $("#submitBtn").removeAttr("disabled");
     
    
    
    }else{
       
    
        $("#submitBtn").attr("true");
    
    
    }
    
}





function nameValidation(){
    let rex=(/^[a-zA-Z ]+/);
    return rex
}

function emailValidation(){
    let rex=     (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/);


    return rex
}


function  phoneValidation(){

    let rex=(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/);

    return rex;

}

function ageValidation(){

    let rex =(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)/);


    return rex;

}

function passwordValidation(){


    let rex=(/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}/);

    return rex;

}

function repasswordValidation(){

    
    return $("#repasswordInput").value ==$("#passwordInput").value;

}
