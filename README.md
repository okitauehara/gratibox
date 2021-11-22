<h1 align="center">
   ☯️ <a href="#"> GratiBox </a>
</h1>

<h3 align="center">
    Receive at home a box with teas, organic products, incense and much more...
</h3>

<h4 align="center"> 
	 Status: Finished
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#layout">Database Layout</a> • 
 <a href="#how-it-works">How it works</a> • 
 <a href="#pre-requisites">Pre-requisites</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#how-to-contribute">How to contribute</a> • 
 <a href="#author">Author</a>
</p>


## About

Aiming to encourage a healthier lifestyle, GratiBox is a startup that delivers box with healthy and #gratitude products. Customers can choose between two recurring subscription plans, weekly or monthly. Each box contains assorted products such as teas, organic products, incense sticks. Customers cannot choose the products and do not know what will be sent in each box.

---


## Layout

<div align="center">
 <img src="./public/home.png" alt="Home page" height="333"/>
 <img src="./public/plans.png" alt="Plans page" height="333"/>
 <img src="./public/subscription.png" alt="Subscription page" height="333"/>
</div>

This layout was inspired by <a href="https://www.figma.com/file/wHTsMeg2oVdW96ptraU2Gb/GratiBox?node-id=4%3A17">this</a> Figma prototype.


---

## How it works

This project is divided into two parts:
1. Backend (You can find here: https://github.com/okitauehara/gratibox-api)
2. Frontend (This repository)

---

## Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [VSCode](https://code.visualstudio.com/).

### Running the Frontend


``` jsx

// Clone this repository
$ git clone git@github.com:okitauehara/gratibox.git

// Access the project folder cmd/terminal
$ cd gratibox

// Install the dependencies
$ npm install

// If you want to run your app on localhost, run the backend and then, change the BASE_URL on API.js to 'http://localhost/4000' 

// Run the application in development mode
$ npm start

// The server will start at port: 3000

```


---

## Tech Stack

The following tools were used in the construction of the project:

**Frontend**  ([React](https://reactjs.org/))

-   **[Axios](https://github.com/axios/axios)**
-   **[CEP-Promise](https://github.com/BrasilAPI/cep-promise)**
-   **[Dayjs](https://github.com/iamkun/dayjs)**
-   **[React-debounce-input](https://github.com/nkbt/react-debounce-input)**
-   **[React-icons](https://github.com/react-icons/react-icons)**
-   **[React-loader-spinner](https://github.com/mhnpd/react-loader-spinner)**
-   **[React-router-dom](https://github.com/remix-run/react-router)**
-   **[Styled-components](https://github.com/styled-components/styled-components)**
-   **[SweetAlert2](https://github.com/sweetalert2/sweetalert2)**
-   **[Cypress](https://github.com/cypress-io/cypress)**
-   **[Husky](https://github.com/typicode/husky)**
-   **[Eslint - Airbnb](https://github.com/airbnb/javascript)**
-   **[Prettier](https://github.com/prettier/prettier)**

> See the file  [package.json](https://github.com/okitauehara/gratibox/blob/main/package.json)


---


## How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b feat/myFeatureName`
3. For each feature implemented, make a commit specifying what was done
4. Submit your changes: `git push -u origin feat/myFeatureName`

---

## Author

Developed by Marcos Okita Uehara.
