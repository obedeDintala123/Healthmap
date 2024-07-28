let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let mesg1 = document.querySelector(".Error-message");
let mesg2 = document.querySelector(".Error-message1");

button2.addEventListener("click", (e) => {
    e.preventDefault();

        if (!mesg1 || !mesg2) {
        console.error("Elementos de mensagem de erro não encontrados.");
    }

    let hasError = false;

    mesg1.innerHTML = "";
    mesg2.innerHTML = "";
    input1.style.border = "";
    input2.style.border = "";

        if (input1.value.trim() == "") {
            input1.style.border = "3px solid rgb(178, 5, 5)";
            mesg1.innerHTML = "Campo obrigatório!";
            hasError = true;
        }

        if (input2.value.trim() == "") {
            input2.style.border = "3px solid rgb(178, 5, 5)";
            mesg2.innerHTML = "Campo obrigatório!";
            hasError = true;
        }

        if (!hasError) {
            window.location.href = "passform.html";
        }

});

button1.addEventListener("click", () =>{
    window.location.href = "index.html";
});
