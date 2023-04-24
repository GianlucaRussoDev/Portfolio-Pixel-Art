// script.js
function SendMAil() {
    var params {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById(email_id).value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_k2jl6cb" , "template_k41xzyk" , params).then(function (res) {
        alert("Success! " + res.status)
    })
}