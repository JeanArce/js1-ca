const contactForm = document.querySelector("#contactForm");
const fullname = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

const nameError = document.querySelector("#nameError");
const subjectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");

const successContainer = document.querySelector(".successContainer");


// fullname.addEventListener('keydown', handleFullNameChange);

// function handleFullNameChange(event) {
  
//     const { value } = event.target;

//     console.log(value);
// }

contactForm.addEventListener('submit', contactSubmit);

function contactSubmit(event) {
    event.preventDefault();
    const fullnameValue = fullname.value;
    const subjectValue = subject.value;
    const emailValue = email.value;
    const addressValue = address.value;

    // validation for name
    if(fullnameValue != "") {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    // validation for subject 
    if(subjectValue.length >= 10) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    // validation for email
    if(validateEmail(emailValue)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
   

    // validation for address
    if(addressValue.length >= 25) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }


    if(fullnameValue != "" && subjectValue.length >= 10 && validateEmail(emailValue) &&  addressValue.length >= 25){
        successContainer.style.display = "block";
    } else {
        successContainer.style.display = "none";
    }

   
   
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};