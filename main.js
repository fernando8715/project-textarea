const textArea = document.querySelector(".message");
const spanLengthText = document.querySelector(".length-text");

const limit = 250;


textArea.addEventListener("selectionchange", ()=> {
    spanLengthText.textContent = `${textArea.textLength}/${limit}`
    if(textArea.textLength === 250) {
        textArea.style.color = "red"; 
        textArea.style.borderColor = "red"; 
        spanLengthText.classList.add('stop-type');
    } else {
        textArea.style.color = "black"; 
        textArea.style.borderColor = "black";
        spanLengthText.classList.remove('stop-type');   
    }
})
