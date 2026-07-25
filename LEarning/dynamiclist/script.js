let a = document.getElementById("add");
let r = document.getElementById("rm");
a.onclick = run;
r.onclick = rem;

function run(){
    let input = document.getElementById("txtbox");
    let list = document.getElementById("list");

if (input.value.trim() !== "") {
        
        // 1. Memory me naya 'li' tag create karo
        let newItem = document.createElement("li");
        
        // 2. Us li tag me typed text set karo
        newItem.innerText = input.value;
        
        // 3. Us li tag ko ul list ke andar attach (append) kar do
        list.appendChild(newItem);
        
        // Input box ko wapas saaf kar do
        input.value = "";
    }else{
        alert("NO TEXT FOUND!");
    }
}

function rem(){
    
}