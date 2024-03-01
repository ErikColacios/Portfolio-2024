// Navbar burger
let burger = document.getElementById("burger");

// Hidden navbar (appears in smaller viewports)
let navItemsHidden = document.getElementById("navItemsHidden");

// Project divs
let divVideo1 = document.getElementById("divVideo1");
let divVideo2 = document.getElementById("divVideo2");
let divVideo3 = document.getElementById("divVideo3");
let divVideo4 = document.getElementById("divVideo4");

// Video screen
let video = document.getElementById("videoPantalla");


burger.addEventListener("click",()=>{
    if(navItemsHidden.classList.contains("hidden")){
        navItemsHidden.classList.remove("hidden")
    }else{
        navItemsHidden.classList.add("hidden")
    }
})

divVideo1.addEventListener("click",()=>{
    divVideo2.classList.remove("outline");
    divVideo3.classList.remove("outline");
    divVideo4.classList.remove("outline");
    video.src = "/src/videos/fustadecor_video.mp4";
    divVideo1.classList.add("outline");
})

divVideo2.addEventListener("click",()=>{
    divVideo1.classList.remove("outline");
    divVideo3.classList.remove("outline");
    divVideo4.classList.remove("outline");
    video.src = "/src/videos/onepieceapp_video.mp4";
    divVideo2.classList.add("outline");
})

divVideo3.addEventListener("click",()=>{
    divVideo1.classList.remove("outline");
    divVideo2.classList.remove("outline");
    divVideo4.classList.remove("outline");
    video.src = "/src/videos/randompass_video.mp4";
    divVideo3.classList.add("outline");
})

divVideo4.addEventListener("click",()=>{
    divVideo1.classList.remove("outline");
    divVideo2.classList.remove("outline");
    divVideo3.classList.remove("outline");
    video.src = "/src/videos/greendrop_video.mp4";
    divVideo4.classList.add("outline");
})

// Send mail via contact form
const form = document.querySelector("form");
const contact_name = document.getElementById("contact_name")
const contact_company = document.getElementById("contact_company")
const contact_phone = document.getElementById("contact_phone")
const contact_email = document.getElementById("contact_email")
const contact_message = document.getElementById("contact_message")

/**
 * Sends the submited values of the contact form to my personal email.
 * I used SMTPJS scripts to connect to EmailAPI, where I configured my SMTP credentials. 
 * https://smtpjs.com/
 * https://app.elasticemail.com/
 */
function sendEmail() {
    const bodyMessage = `Name: ${contact_name.value} <br>
                        Company: ${contact_company.value} <br>
                        Phone: ${contact_phone.value} <br>
                        Email: ${contact_company.value} <br>
                        Message: ${contact_message.value}`;

    Email.send({
        SecureToken: "e6b27b97-aa41-4b61-8d75-9968e5d18cb2",
        To : 'ecolaciosgarcia@gmail.com',
        From : "contact-portfolio@erikcolacios.com",
        Subject : "Mensaje desde mi portfolio",
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})