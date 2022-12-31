const input = document.querySelector("input");
const emailIcon = document.querySelector(".emailIcon");
const border = document.querySelector(".input-field")
input.addEventListener("keyup", ()=>{
    let pattern = /^[^ ]+\.[a-z]{2,3}$/;
    if(input.value===""){
        border.style.border = "3px solid #777";
        return emailIcon.style.color = "#777";
    }
    if(input.value.match(pattern)){
        emailIcon.classList.replace("fa-envelope","fa-envelope-circle-check");
        border.style.border = "3px solid #4bb543";
        return emailIcon.style.color = "#4bb543";
    }else{
    emailIcon.classList.replace("fa-envelope-circle-check","fa-envelope");
    border.style.border = "3px solid #f00";
    return emailIcon.style.color = "#f00";}
})