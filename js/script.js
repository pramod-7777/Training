function submitForm() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var firstName = name.split(" ")[0];
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    alert("Thank you " + firstName + " for your message. We will get back to you shortly.");
}