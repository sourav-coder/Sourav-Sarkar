
document.getElementById("btn-geeksgod-desc").addEventListener("click", geeksgod);

function geeksgod() {
    document.getElementById("btn-geeksgod-desc").innerHTML = "<br>Build a   new   Resume building website using HTML, CSS, JavaScript, Bootstrap, and jQuery, and used PHP is implemented for the database connectivity for the Login and Signup systems. ";
}

document.getElementById("btn-technocolabs-desc").addEventListener("click", technocolabs);



function technocolabs() {
    document.getElementById("btn-technocolabs-desc").innerHTML =
        "<br>Learned to work on Python Data Structures<br>Accomplished assignments on time <br>Worked on python libraries, Git and GitHub.<br>Working On Data Science libraries";
}





// code not working ---- 

// document.getElementsByClassName('navbar-toggler-icon')[0].addEventListener('click',navicon);

// var x = document.getElementsByClassName('navbar-toggler-icon')[0];

// function navicon(){
//     console.log(x);
    
//     if (x.innerHTML==='&#x292C;'){

//         x.innerHTML="&#9776;";
//     }
//     else{
//         x.innerHTML="&#x292C;";
//     }
// }