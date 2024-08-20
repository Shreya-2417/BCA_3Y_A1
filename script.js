// document.write("<h1>Hello, Welcome</h1><br>")
// document.write("<h1>Hello, Welcome</h1><br>")
// document.write("<h1>Hello, Welcome</h1><br>")

// ------------------------------
// document.getElementById("demo").innerText="GLA UNIVERSITY" //used to override the greeting content given in html code 

// ------------
// function show(){
//     document.getElementById("demo").innerText="GLA UNIVERSITY" 
// }
// -------------------

let temp=1;
function show() {
    if(temp){
        document.getElementById("demo").innerText="GLA UNIVERSITY" 
        temp=0
    }
    else{
        document.getElementById("demo").innerText="Greeting"
        temp=1 
    }
}

