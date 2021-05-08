
function myFunction(){
        alert('Test button was clicked');
}

function Grow(){
 //       alert('Grow button was clicked');
        document.getElementById("box").style.height="250px";
}

function Blue(){
//        alert('Blue button was clicked');
        document.getElementById("box").style.backgroundColor="blue";
}

function Fade(){
//        alert('Fade button was clicked');
        document.getElementById("box").style.opacity="0.1";
}

function Reset(){
//        alert('Reset button was clicked');
        document.getElementById("box").style.height="150px";
        document.getElementById("box").style.width="150px";
        document.getElementById("box").style.backgroundColor="orange"
        document.getElementById("box").style.opacity="1";
}

