"use strict";

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "yta3@cornell.edu",
    Password: "0CB558746C4C253785055C233C125316BD4C",
    To: "yta3@cornell.edu",
    From: "yta3@cornell.edu",
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br>" +
      "Email: " +
      document.getElementById("email").value +
      "<br>" +
      "Phone No.: " +
      document.getElementById("phone").value +
      "<br>" +
      "Message: " +
      document.getElementById("message").value,
  }).then(alert("Message Sent Successfully"));
}

const submitForm = document.querySelector(".contact-form");

submitForm.addEventListener("submit", function () {
  sendEmail();
  reset();
  return false;
});
