let name = document.querySelector("#yourName");
let email = document.querySelector("#youremail");
let numberofpass = document.getElementById("num")
let comments = document.querySelector("#comment");

let button = document.querySelector("#purchase");
function submit(e){
  e.PreventDefault();
   if (yourName.value ==""){
      alert("Input your name");
    } else if (youremail.value == ""){
      alert("Input your email address");
    }else if(num.value ==""){
      alert("Input number of passes");
    } else if (comments.value == ""){
      alert("Please input your comment");
    } else {
      alert("Registration of purchase is successful");
      console.log ("Name is + (yourName.value)");
      console.log("Email Address is ${youremail.value}");
      console.log("Num is ${num.value}");
      console.log("Comments is ${comments.value}");
      Window.location.reload();
    }
}
buttonReg.addEventListener('click',submit);