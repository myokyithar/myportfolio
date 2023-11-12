function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function sendMail(){
    var params = {
        name: document.getElementById("fullname").value,
        email: document.getElementById("emailid").value,
        message: document.getElementById("message").value
    }
    const serviceID = "service_cze9ipi";
    const templateID = "template_0s0dyh7";

    emailjs.send(serviceID, templateID, params).then(function (res){
        alert("Email sent successfully");
    })
}

function resetForm(){
    const form = document.getElementById("contactform");
    form.addEventListener('submit', function handleSubmit(event) {
        event.preventDefault();
        form.reset();
    });
}
