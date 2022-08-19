let resetForm = () => {
  document.getElementById("contact-form").reset();
};

let handleSubmit = () => {
  let name = document.querySelector("#contact-name");
  let email = document.querySelector("#contact-email");
  let displayName = document.querySelector(".display-contact-name");
  displayName.style.color = "#0F3D3E";
  displayName.style.fontSize ='1.2em'
  let displayContact = document.querySelector(".display-contact-email");

  displayName.append(name.value + ",");
  displayContact.append(email.value);
};
