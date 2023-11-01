function sendMail() {
  (function () {
    emailjs.init("YWiqscEfYONp0qV9Z");
  })();

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_k2jl6cb";
  const templateID = "template_yuc1r3o";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!")

    })
    .catch(err => console.log(err));
}