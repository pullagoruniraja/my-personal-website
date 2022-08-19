let resetForm = () => {
  document.getElementById("contact-form").reset();
};

let form = document.querySelector("#contact-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  let name = document.querySelector("#contact-name");
  let email = document.querySelector("#contact-email");
  let displayName = document.querySelector(".display-contact-name");
  let displayContact = document.querySelector(".display-contact-email");

  displayName.append(name.value + ',');
  displayContact.append(email.value)
}
