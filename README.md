# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
![screenshot](screenshot.PNG?raw=true "screenshot Data title")



### Links

- Live Site URL: [newsletter-uzx3.onrender.com](https://newsletter-uzx3.onrender.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS 
- JavaScript



### What I learned


```css
ul {
    list-style: url("./assets/images/icon-list.svg");
  }
```
```js
 function emailValidate(mail) {
        let reqex = /([a-zA-Z0-9]+)(\@)([a-zA-Z]+)(\.)([a-zA-Z.]+)/;
        let result = reqex.test(mail);
        if (result) {
          email_input.classList.add("validate_email");
          error_span.classList.add("hide");
          email_input.classList.remove("error_email");
        } else {
          email_input.classList.remove("validate_email");
        }
        return result;
      }
```


## Author

- Frontend Mentor - [@IDOcholi](https://www.frontendmentor.io/profile/IDOcholi)
- Twitter - [@IamOcholi](https://www.twitter.com/IamOcholi)


