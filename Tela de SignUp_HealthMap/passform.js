let mesg1 = document.querySelector(".Error-message");
let mesg2 = document.querySelector(".Error-message1");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let button = document.querySelector(".btn2");
let buttonBack = document.querySelector(".btn1");
let lock = document.querySelector(".buttonLock");
let senha;
let senhaRange = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let letra_M = /(?=.*[A-Z])/;
let letra_m = /(?=.*[a-z])/;
let simb = /(?=.*[@$!%*?&])/;
let num = /(?=.*\d)/;
let container = document.querySelector(".passCheck");

button.addEventListener("click", (event) => {
    event.preventDefault();  

    mesg1.innerHTML = "";
    mesg2.innerHTML = "";
    input1.style.border = "";
    input2.style.border = "";
    senha = input1.value;

    let erro = false;

    if (input1.value.trim() === "") {
        input1.style.borderTop = "3px solid rgb(178, 5, 5)";
        input1.style.borderLeft = "3px solid rgb(178, 5, 5)";
        input1.style.borderBottom = "3px solid rgb(178, 5, 5)";
        lock.style.borderTop = "3px solid rgb(178, 5, 5)";
        lock.style.borderBottom = "3px solid rgb(178, 5, 5)";
        lock.style.borderRight = "3px solid rgb(178, 5, 5)";
        mesg1.innerHTML = "Campo obrigatório!";
        erro = true;
    }

    else{
        lock.style.border = "none";
    }
    

    if (input2.value.trim() === "") {
        input2.style.border = "3px solid rgb(178, 5, 5)";
        mesg2.innerHTML = "Campo obrigatório!";
        erro = true;
    }
    
    if (!erro) {
        if (!senhaRange.test(senha)) {
            input1.style.borderTop = "3px solid rgb(178, 5, 5)";
        input1.style.borderLeft = "3px solid rgb(178, 5, 5)";
        input1.style.borderBottom = "3px solid rgb(178, 5, 5)";
            lock.style.borderTop = "3px solid rgb(178, 5, 5)";
            lock.style.borderBottom = "3px solid rgb(178, 5, 5)";
            lock.style.borderRight = "3px solid rgb(178, 5, 5)";
            container.classList.remove("hidden");  // Show container if password criteria are not met
            erro = true;
        } else {
            container.classList.add("hidden");  // Hide container if password criteria are met
        }

        // Check individual criteria
        if (senha.length >= 8) {
            document.querySelector(".text1").style.color = "green";
            document.querySelector(".text1").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg> Pelo menos 8 caracteres';
        } else {
            document.querySelector(".text1").style.color = "rgb(178, 5, 5)";
            document.querySelector(".text1").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1-.708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg> Pelo menos 8 caracteres';
        }

        if (letra_m.test(senha)) {
            document.querySelector(".text2").style.color = "green";
            document.querySelector(".text2").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg> Com letras minúsculas (a-z)';
        } else {
            document.querySelector(".text2").style.color = "rgb(178, 5, 5)";
            document.querySelector(".text2").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1-.708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg> Com letras minúsculas (a-z)';
        }

        if (letra_M.test(senha)) {
            document.querySelector(".text3").style.color = "green";
            document.querySelector(".text3").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1-.708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg> Com letras maiúsculas (A-Z)';
        } else {
            document.querySelector(".text3").style.color = "rgb(178, 5, 5)";
            document.querySelector(".text3").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1-.708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg> Com letras maiúsculas (A-Z)';
        }

        if (num.test(senha)) {
            document.querySelector(".text4").style.color = "green";
            document.querySelector(".text4").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg> Com pelo menos um número (0-9)';
        } else {
            document.querySelector(".text4").style.color = "rgb(178, 5, 5)";
            document.querySelector(".text4").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1-.708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708z"/></svg> Com pelo menos um número (0-9)';
        }

        if (simb.test(senha)) {
            document.querySelector(".text5").style.color = "green";
            document.querySelector(".text5").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg> Com pelo menos um símbolo';
        } else {
            document.querySelector(".text5").style.color = "rgb(178, 5, 5)";
            document.querySelector(".text5").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1-.708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708z"/></svg> Com pelo menos um símbolo';
        }

        if(senhaRange.test(senha)){
            input1.style.borderTop = "3px solid green";
            input1.style.borderLeft = "3px solid green";
            input1.style.borderBottom = "3px solid green";
            lock.style.borderTop = "3px solid green";
            lock.style.borderBottom = "3px solid green";
            lock.style.borderRight = "3px solid green";
        }
        else{
            input1.style.borderTop = "3px solid rgb(178, 5, 5)";
            input1.style.borderLeft = "3px solid rgb(178, 5, 5)";
            input1.style.borderBottom = "3px solid rgb(178, 5, 5)";
            lock.style.borderTop = "3px solid rgb(178, 5, 5)";
            lock.style.borderBottom = "3px solid rgb(178, 5, 5)";
            lock.style.borderRight = "3px solid rgb(178, 5, 5)";
        }

        if (input1.value.trim() !== input2.value.trim()) {
            input2.style.border = "3px solid rgb(178, 5, 5)";
            mesg2.innerHTML = "As senhas não coincidem";
            erro = true;
        }
        else{
            input2.style.border = "3px solid green";
        }
    }

    if (!erro) {
        window.location.href = "";  // Your desired redirect URL
    }
});


buttonBack.addEventListener("click",() => {
    window.location.href="/index.html";
});