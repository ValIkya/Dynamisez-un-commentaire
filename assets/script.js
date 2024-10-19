console.log("Script lancée :D")
const myForm = document.querySelector("form");
console.log("la constante myForm contient : ", myForm);
myForm.addEventListener("submit", function(evenement) {
    evenement.preventDefault();
    
   
    const inputFirstname = document.querySelector("#first-name").value;
    console.log("la constante inputFirstname contient : ", inputFirstname);
    const inputLastname = document.querySelector("#last-name").value;
    console.log("la constante inputLastname contient : ", inputLastname);
    const inputMessage = document.querySelector("#message").value;
    console.log("la constante inputMessage contient : ", inputMessage);
    if (inputFirstname === "" || inputLastname === "" || inputMessage ==="") {
     
        document.querySelector("#error-message").style.display = "block";
        return;
    }
    console.log("Le code continue");
    const messageToClone = document.querySelector("#message_to_clone");
    console.log("La constante messageToClone contient : ", messageToClone);
    const messageCloned = messageToClone.cloneNode(true);
    console.log("La constante messageCloned contient : ", messageCloned);
    messageCloned.querySelector("h3").textContent = inputFirstname + " " + inputLastname;
    messageCloned.querySelector("p").textContent = inputMessage;
    messageCloned.style.display = "block";
    messageCloned.removeAttribute("id");
    document.querySelector("#comments-list").appendChild(messageCloned);
    myForm.reset();
    console.log("Le code s'est arrêté");
});


