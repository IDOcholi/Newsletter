const formPage = document.querySelector(".card-container");

const email = document.querySelector("#email");

const error = document.querySelector(".error-message");
      
const submit = document.querySelector(".submit-btn");

const successPage = document.querySelector(".success");

const email_span = document.querySelector(".email_addres");

const dismiss = document.querySelector(".dismiss-btn");
      
     
      function handleSubmit(e) {
        e.preventDefault();
        if (!emailValidate(email.value)) {
          error.classList.remove("hide");
          email.classList.add("error_email");
          return emailValidate(email.value);
        }
        formPage.classList.toggle("hide");
        successPage.classList.toggle("hide");
        email_span.innerHTML = email.value;
      }

      function handleInput(e) {
        return emailValidate(e.target.value);
      }
      function handleDismss() {
        window.location.reload();
      }

      function emailValidate(mail) {
        let reqex = /([a-zA-Z0-9]+)(\@)([a-zA-Z]+)(\.)([a-zA-Z.]+)/;
        let result = reqex.test(mail);
        if (result) {
          email.classList.add("validate_email");
          error_span.classList.add("hide");
          email.classList.remove("error_email");
        } else {
          email.classList.remove("validate_email");
        }
        return result;
      }

      email.addEventListener("input", handleInput);
      submit.addEventListener("click", handleSubmit);
      dismiss.addEventListener("click", handleDismss);
