let mesg = document.querySelector(".Error-message");
let input = document.querySelector(".input-box");
let button = document.querySelector(".btn-primary");

button.addEventListener("click", (event) => {
    event.preventDefault();  

    mesg.innerHTML = "";
    input.style.border = "";

    let erro = false;

        if (input.value.trim() == "") {
            input.style.border = "3px solid rgb(178, 5, 5)";
            erro = true;
           mesg.innerHTML = "Campo obrigatório";
        }

        if(!erro){
            window.location.href = "page_1.html";
        }
});
