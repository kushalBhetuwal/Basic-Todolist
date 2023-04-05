let ul = document.getElementsByTagName('ul')[0];
let button = document.getElementsByClassName('button')[0];
let input = document.getElementsByClassName('input')[0]; 


input.addEventListener("keydown", (e)=>{
    if(e.key==="Enter"){
        button.click();
    }
})


button.addEventListener("click", ()=>{
    let li = document.createElement("li"); 
    li.innerText = input.value
    ul.appendChild(li);

    input.value = " ";
})