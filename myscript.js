var hour= document.getElementById("hour");
var minute= document.getElementById("mins");
var second= document.getElementById("sec");
var day= document.getElementById("day");
var month= document.getElementById("month");
var year= document.getElementById("year");
var months = ["january","february","march","april","may","june","july","august","september","october","november","december"]
var dates = document.getElementById("date");
var fulldate = ["sunday", "monday", "tuesday", "wednesday","thursday","friday", "saturday"]


var clock = setInterval(
  function time(){
     var date = new Date();
     var hr = date.getHours();
     var min = date.getMinutes();
     var sec = date.getSeconds();
     var tday = date.getDate();
     var tmonth = date.getMonth();
     var tyear = date.getFullYear();
     var tdate = date.getDay();

    if(hr<10){
      hr = "0"+hr;
    }
    if(min<10){
      min = "0"+min;
    }
    if(sec<10){
      sec = "0"+sec;
    }

     hour.textContent = hr;
     minute.textContent = min;
     second.textContent = sec;
     day.textContent = tday;
     month.textContent= months[tmonth];
     year.textContent = tyear;
     dates.textContent = fulldate[tdate];


  },1000
)




// shop



  var shopStatus = document.getElementById("open");
  var openHour = new Date().getHours();
  let body = document.body;


  if(openHour<=15){
    shopStatus.innerHTML="open";
    body.style.background = "#04ff00"
  }
  else{
    shopStatus.innerHTML ="close";
    body.style.background = "red"

  }

console.log(shopStatus);


// test-2 js code 

const input=document.querySelector("input"),
    showHide=document.querySelector(".show-hide"),
    indicator=document.querySelector(".indicator"),
    text=document.querySelector(".text"),
    textIcon=document.querySelector(".text-icon"),
    inputBox=document.querySelector(".input-box"); 



  showHide.addEventListener("click", ()=>{

    if(input.type === "password"){
      input.type = "text";
      showHide.classList.replace("fa-eye-slash","fa-eye")
    }
    else{
      input.type ="password";
      showHide.classList.replace("fa-eye","fa-eye-slash")

    } 
  });



  // stauts of charater 


  let alphabet =/[a-zA-Z]/,
      number = /[0-9]/,
      special =/[~,!,@,#,$,%,&,*,(,),_,-,+,=]/

  
  input.addEventListener("keyup", ()=>{

    val=input.value;

    indicator.classList.add("active")
    
    if(val==""){
      indicator.classList.remove("active")
      textIcon.style.color = "#252525";
      showHide.style.color = "#252525";
      input.style.borderColor ="#252525";
    }

    if(val.match(alphabet) || val.match(number) || val66.match(special)){
      text.textContent="Password is week";
      textIcon.style.color = "red";
      showHide.style.color = "red";
      input.style.borderColor ="red";
    }
    if(val.match(alphabet) && val.match(number) && val.length > 7){
      text.textContent ="Password is medium";
      textIcon.style.color = "#ffa500";
      showHide.style.color = "#ffa500";
      input.style.borderColor ="#ffa500";
    }
    if(val.match(alphabet) && val.match(number) && val.match(special) && val.length > 8){
      text.textContent ="Password is strong";
      textIcon.style.color = "#10ff00";
      showHide.style.color = "#10ff00";
      input.style.borderColor ="#10ff00";
    }

  });










