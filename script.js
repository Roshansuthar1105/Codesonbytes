const ibox = document.getElementById("ibox");
const listcont = document.getElementById("listcont");

function add() {
    if (ibox.value === '' ) {
        alert("You forget to write 🙂");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = ibox.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    ibox.value='';
    saveData();
}
ibox.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        add();
    }
})

listcont.addEventListener("click",function(e){
    if (e.target.tagName === "LI" ) {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if( e.target.tagName === "SPAN" ){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data" , listcont.innerHTML);
    
}
function showtask() {
    listcont.innerHTML = localStorage.getItem("data");
}
showtask();
