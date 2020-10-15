let name = document.querySelector("#yourName");
let email = document.querySelector("#youremail");
let numberofpass = document.getElementById("num")
let comments = document.querySelector("#comment");

let button = document.querySelector("#purchase");
function submit(e){
  e.preventDefault();
   if (name.value ==""){
      alert("Input your name");
    } else if (email.value == ""){
      alert("Input your email address");
    }else if(num.value ==""){
      alert("Input number of passes");
    } else if (comments.value == ""){
      alert("Please input your comment");
    } else {
      alert("Registration of purchase is successful");
      console.log (`Name is ${name.value}`);
      console.log(`Email Address is ${email.value}`);
      console.log(`Num is ${numberofpass.value}`);
      console.log(`Comments is ${comments.value}`);
      window.location.reload();
    }
}
button.addEventListener('click',submit);
console.log('Hi')