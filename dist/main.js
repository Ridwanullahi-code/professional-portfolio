/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/animate.js":
/*!***********************************!*\
  !*** ./src/javascript/animate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate() {\n  // Get all the project cards\n  const projectCards = document.querySelectorAll('.no-animate');\n\n  // Create an intersection observer\n  const observer = new IntersectionObserver((entries, observer) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        entry.target.classList.add('animated');\n        observer.unobserve(entry.target);\n      }\n    });\n  }, {\n    threshold: 0.5\n  }); // Adjust the threshold value as needed\n\n  // Observe each project card\n  projectCards.forEach(card => {\n    observer.observe(card);\n  });\n  const bar = document.getElementById('myBar');\n  function myFunction() {\n    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;\n    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n    const scrolled = winScroll / height * 100;\n    bar.style.width = `${scrolled}%`;\n  }\n  // When the user scrolls the page, execute myFunction\n  window.addEventListener('scroll', myFunction);\n  window.addEventListener('resize', myFunction);\n\n  // <=============== Function to close the modal with escape key ===============>\n  const navbar = document.querySelector('.navbar');\n  const buttons = document.querySelectorAll('.see-project');\n  const close = document.querySelector('.close-button');\n  const backdrop = document.querySelector('#backdrop');\n  buttons.forEach(button => {\n    button.addEventListener('click', () => {\n      navbar.classList.add('hidden');\n      bar.classList.add('hidden');\n    });\n  });\n  close.addEventListener('click', () => {\n    navbar.classList.remove('hidden');\n    bar.classList.remove('hidden');\n  });\n  backdrop.addEventListener('click', () => {\n    navbar.classList.remove('hidden');\n    bar.classList.remove('hidden');\n  });\n}\n\n//# sourceURL=webpack://github-flow/./src/javascript/animate.js?");

/***/ }),

/***/ "./src/javascript/chat.js":
/*!********************************!*\
  !*** ./src/javascript/chat.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst chat = () => {\n  const chatUs = document.querySelector('.chat-us');\n  const chatBox = document.querySelector('.hide-container');\n  chatUs.addEventListener('click', () => {\n    chatBox.classList.toggle('show-chat');\n  });\n  const chatClose = document.querySelector('.close');\n  chatClose.addEventListener('click', () => {\n    chatBox.classList.remove('show-chat');\n  });\n  function delayElement() {\n    const element = document.querySelector('.dm-container');\n    element.style.display = 'flex';\n  }\n  setTimeout(delayElement, 3000);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chat);\n\n//# sourceURL=webpack://github-flow/./src/javascript/chat.js?");

/***/ }),

/***/ "./src/javascript/data.js":
/*!********************************!*\
  !*** ./src/javascript/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/counter.png */ \"./src/assets/images/counter.png\");\n\nconst projects = [{\n  name: 'Plumbing Service <br> Website',\n  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',\n  technologies: ['html', 'React', 'TailwindCSS', 'javascript'],\n  education: ['Microverse', 'Web Dev', '2022'],\n  counter: _assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__,\n  link: 'https://github.com/Ridwanullahi-code/DepositApp',\n  demo: 'https://react-plumbing-app.netlify.app/'\n}, {\n  name: 'QuickFound Website',\n  description: 'a Single Page App (SPA) that allows users to make simple calculations, read a random math-related quote',\n  technologies: ['html', 'css', 'javascript', 'React'],\n  education: `Microverse ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} Web Dev ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} 2022`,\n  link: 'https://github.com/Ridwanullahi-code/math-magicians',\n  demo: 'https://react-math-magicians-app.netlify.app/'\n}, {\n  name: 'BookStore<br>App',\n  description: 'Bookstore A single-page application that allows you to display a list of added books, add a new book,s and remove a book.',\n  technologies: ['html', 'css', 'React', 'javascript'],\n  education: `Microverse ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} Web Dev ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} 2022`,\n  link: 'https://github.com/Ridwanullahi-code/bookstore-app/',\n  demo: 'https://react-bookstore-app1.netlify.app/'\n}, {\n  name: 'Movie Search<br> Website',\n  description: 'The space travel web app that fetches data from a space missions and rockets API and displays it on the UI.',\n  technologies: ['css', 'React', 'Redux', 'javascript'],\n  education: `Microverse ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} Web Dev ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} 2022`,\n  link: 'https://github.com/Ridwanullahi-code/Space-Travel-Project',\n  demo: 'https://space-travel-site-react.netlify.app/'\n}, {\n  name: 'Movie Search<br> Website',\n  description: 'The space travel web app that fetches data from a space missions and rockets API and displays it on the UI.',\n  technologies: ['React', 'Redux', 'javascript'],\n  education: `Microverse ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} Web Dev ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} 2022`,\n  link: 'https://github.com/Ridwanullahi-code/Space-Travel-Project',\n  demo: 'https://space-travel-site-react.netlify.app/'\n}, {\n  name: 'Movie Search <br>Website',\n  description: 'The space travel web app that fetches data from a space missions and rockets API and displays it on the UI.',\n  technologies: ['React', 'Redux', 'javascript'],\n  education: `Microverse ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} Web Dev ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} 2022`,\n  link: 'https://github.com/Ridwanullahi-code/Space-Travel-Project',\n  demo: 'https://space-travel-site-react.netlify.app/'\n}, {\n  name: 'Movie Search <br>Website',\n  description: 'The space travel web app that fetches data from a space missions and rockets API and displays it on the UI.',\n  technologies: ['React', 'Redux', 'javascript'],\n  education: `Microverse ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} Web Dev ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} 2022`,\n  link: 'https://github.com/Ridwanullahi-code/Space-Travel-Project',\n  demo: 'https://space-travel-site-react.netlify.app/'\n}, {\n  name: 'Movie Search<br> Website',\n  description: 'The space travel web app that fetches data from a space missions and rockets API and displays it on the UI.',\n  technologies: ['React', 'Redux', 'CSS', 'javascript'],\n  education: `Microverse ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} Web Dev ${_assets_images_counter_png__WEBPACK_IMPORTED_MODULE_0__} 2022`,\n  link: 'https://github.com/Ridwanullahi-code/Space-Travel-Project',\n  demo: 'https://space-travel-site-react.netlify.app/'\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://github-flow/./src/javascript/data.js?");

/***/ }),

/***/ "./src/javascript/images.js":
/*!**********************************!*\
  !*** ./src/javascript/images.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction importAll(r) {\n  return r.keys().map(r);\n}\nconst getImages = importAll(__webpack_require__(\"./src/assets/gallery sync \\\\.(png%7Cjpe?g%7Csvg%7Cmp4)$\"));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getImages);\n\n//# sourceURL=webpack://github-flow/./src/javascript/images.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/javascript/projects.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ \"./src/javascript/logic.js\");\n/* harmony import */ var _chat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.js */ \"./src/javascript/chat.js\");\n/* harmony import */ var _animate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animate.js */ \"./src/javascript/animate.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/modal.css */ \"./src/css/modal.css\");\n/* harmony import */ var _css_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/responsive.css */ \"./src/css/responsive.css\");\n/* harmony import */ var _css_chat_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/chat.css */ \"./src/css/chat.css\");\n\n\n\n\n\n\n\n\n(0,_projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_logic_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_chat_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_animate_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://github-flow/./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/logic.js":
/*!*********************************!*\
  !*** ./src/javascript/logic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ logic)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/javascript/data.js\");\n/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images.js */ \"./src/javascript/images.js\");\n\n\nfunction logic() {\n  const hamburger = document.querySelector('.hamburger');\n  const navMenu = document.querySelector('.nav-menu');\n  hamburger.addEventListener('click', () => {\n    hamburger.classList.toggle('active');\n    navMenu.classList.toggle('show-menu');\n  });\n\n  // <=============== Function for the target effect ==============>\n  const navLinks = document.querySelectorAll('.nav-link');\n  navLinks.forEach(navLink => {\n    navLink.addEventListener('click', () => {\n      hamburger.classList.remove('active');\n      navMenu.classList.remove('show-menu');\n    });\n  });\n\n  // <=============== modal popup information ====================>\n  const cardTitle = document.querySelector('.card-title');\n  const cardImage = document.querySelector('.card-image');\n  const description = document.querySelector('.card-description');\n  const modalButton = document.querySelectorAll('.modal-button');\n\n  // get the modal popup initial elements\n  const buttons = document.querySelectorAll('.see-project');\n  const modal = document.querySelector('.card');\n  const closeButton = document.querySelector('.close-button');\n  const backdrop = document.querySelector('#backdrop');\n\n  // <=============== Function to show modal ======================>\n  for (let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n    buttons[i].addEventListener('click', () => {\n      modal.classList.toggle('active');\n      backdrop.classList.toggle('show');\n      cardTitle.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].name;\n      description.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].description;\n      cardImage.src = _images_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i];\n      modalButton[0].href = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].demo;\n      modalButton[1].href = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].link;\n    });\n  }\n  const techList = document.querySelectorAll('.tool-list');\n  techList.forEach((tech, index) => {\n    tech.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index].technologies[index];\n  });\n  // <=============== Function to close modal ===============>\n  closeButton.addEventListener('click', () => {\n    modal.classList.remove('active');\n    backdrop.classList.remove('show');\n  });\n\n  // <=============== Function to close the modal with backdrop =================\n  backdrop.addEventListener('click', () => {\n    modal.classList.remove('active');\n    backdrop.classList.remove('show');\n  });\n\n  // <======== form validation ======>\n  const form = document.querySelector('.form');\n  const email = document.querySelector('form [type=email]');\n  const error = document.createElement('p');\n  error.innerHTML = 'email must be in lowercase, example(ridwa@gmail.com)';\n  error.setAttribute('class', 'error');\n  form.addEventListener('submit', event => {\n    if (email.value === email.value.toLowerCase()) {\n      form.send();\n    } else {\n      event.preventDefault();\n      email.parentElement.appendChild(error);\n    }\n  });\n  const Name = document.querySelector('.username');\n  const message = document.querySelector('.message');\n  const data = {\n    name: Name,\n    email,\n    message\n  };\n\n  // <=============== web storage API ================>\n  // <============= store user data from the web =======>\n\n  Object.keys(data).forEach(key => {\n    data[key].addEventListener('change', () => {\n      localStorage.setItem(key, data[key].value);\n    });\n    data[key].value = localStorage.getItem(key);\n  });\n\n  // accordion button\n  const accordion = document.querySelector('.skills');\n  accordion.addEventListener('click', event => {\n    if (event.target.classList.contains('accordion-btn')) {\n      event.target.parentElement.nextElementSibling.classList.toggle('displayer');\n      const btn = event.target.parentElement.children[1];\n      if (btn.classList.contains('fa-chevron-down')) {\n        btn.classList.replace('fa-chevron-down', 'fa-chevron-right');\n      } else {\n        btn.classList.replace('fa-chevron-right', 'fa-chevron-down');\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://github-flow/./src/javascript/logic.js?");

/***/ }),

/***/ "./src/javascript/projects.js":
/*!************************************!*\
  !*** ./src/javascript/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProjects)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/javascript/data.js\");\n/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images.js */ \"./src/javascript/images.js\");\n\n\nfunction createProjects() {\n  const workSection = document.querySelector('.work-section');\n  let projectContainer = '';\n  _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((project, index) => {\n    projectContainer += `\n      <div class=\"projects no-animate\"  >\n          <img class ='project-image' src=\"${_images_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][index]}\" alt=\"screenshot of project ${project.name}\">\n          <div class=\"projects-describe\">\n            <h2 class=\"project-title\">${project.name}</h2>\n             ${project.education}\n            <p class=\"description\">${project.description}</p>\n            <ul class=\"tools\">\n                <li class='tech-list'>${project.technologies[0]}</li>\n                <li class='tech-list'>${project.technologies[1]}</li>\n                <li class='tech-list'>${project.technologies[2]}</li>\n                <li class='tech-list'>${project.technologies[3]}</li>\n            </ul>\n          <a class=\"button see-project\">See Project</a>\n      </div>\n    </div>\n  `;\n  });\n  workSection.innerHTML = projectContainer;\n}\n\n//# sourceURL=webpack://github-flow/./src/javascript/projects.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/chat.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/chat.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".flex-v{\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: start;\\n}\\n.center{\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n}\\n.space{\\n\\tdisplay: flex;\\n\\tgap:20px;\\n\\talign-items: center;\\n}\\n\\n.shadow{\\n\\tbox-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\\n}\\n\\n.chat-us {\\n\\tbackground-color: white;\\n\\tborder: 1px solid #ffff;\\n\\tborder-radius: 50%;\\n\\tcolor:#091e42;\\n\\tpadding: 5px;\\n\\tposition:fixed;\\n\\tbottom: 10%;\\n\\tright:2%;\\n\\twidth: 70px;\\n\\theight:70px;\\n\\tfont-size:35px;\\n\\tcursor: pointer;\\n}\\n\\n.chat-us:hover{\\n\\tbackground-color: #091e42;\\n\\tborder: 1px solid #091e42;\\n\\tcolor:white;\\n\\ttransition: all 0.5s ease-in-out;\\n}\\n\\n.chat-us:active{\\n\\tbackground-color:#06142e;\\n\\tborder:1px solid #06142e;\\n}\\n.chat-container{\\n\\tbackground-color: white;\\n\\tborder: 1px solid #ffff;\\n\\tborder-radius:7px;\\n\\twidth: 390px;\\n\\tposition:fixed;\\n\\tright:2%;\\n\\tbottom:22%;\\n}\\n.chat-container .profile{\\n\\tbackground-color: #fafafa;\\n\\tmax-width:100%;\\n\\tpadding:20px;\\n\\tposition: relative;\\n}\\n.chat-container .close{\\n\\tposition: absolute;\\n\\tright:3%; top: 3%;\\n\\tborder:none;\\n\\tfont-size: 20px;\\n\\tcolor:#474747;\\n\\tcursor: pointer;\\n\\tbackground-color: transparent;\\n}\\n\\n.chat-container .close:hover{\\n\\tcolor:black;\\n\\ttransition: all 0.3s ease-in-out;\\n}\\n.chat-container .photo{\\n\\twidth: 50px;\\n\\theight: 50px;\\n\\tborder-radius: 50%;\\n\\tfloat: left;\\n\\tmargin-right: 10px;\\n}\\n.chat-container .title {\\n\\tfont-size: 20px;\\n\\tfont-weight: bold;\\n}\\n\\n.chat-container .dm-container{\\n\\tdisplay: none;\\n\\tgap:20px;\\n\\talign-items: center;\\n\\tpadding:50px 20px;\\n}\\n.chat-container .dm{\\n\\tbackground-color: #f1f0f0;\\n\\tborder: 1px solid #f1f0f0;\\n\\tborder-radius: 0 12px 12px 12px;\\n\\tpadding:6px;\\n\\twidth:250px;\\n\\tfont-size: 13px;\\n\\ttext-align: justify;\\n\\tfont-weight: lighter;\\n}\\n\\n.chat-container .live-social{\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tpadding-bottom: 15px;\\n\\ttext-align: center;\\n\\tgap:10px;\\n}\\n\\n.chat-container .start-chat-text{\\n\\ttext-align: center;\\n\\tfont-weight: bolder;\\n\\tmargin:10px;\\n}\\n\\n.chat-container .live-social i{\\n\\tcolor:white;\\n}\\n.chat-container .whatsapp{\\n\\tbackground-color: #25D366;\\n\\tborder: 2px solid #25D366;\\n\\tborder-radius: 6px;\\n}\\n\\n.chat-container .whatsapp:hover{\\n\\tbackground-color: #128C7E;\\n\\tborder: 2px solid #128C7E;\\n}\\n\\n.chat-container .facebook{\\n\\tbackground-color: #3B5998;\\n\\tborder: 2px solid #3B5998;\\n\\tborder-radius: 6px;\\n}\\n.chat-container .facebook:hover{\\n\\tbackground-color: #2F477A;\\n\\tborder: 2px solid #2F477A;\\n}\\n.chat-container .messenger{\\n\\tbackground-color: #0084FF;\\n\\tborder: 2px solid #0084FF;\\n\\tborder-radius: 6px;\\n}\\n.chat-container .messenger:hover{\\n\\tbackground-color: #0064C9;\\n\\tborder: 2px solid #0064C9;\\n}\\n.chat-container .phone{\\n\\tbackground-color: #776BB8;\\n\\tborder: 2px solid #776BB8;\\n\\tborder-radius: 6px;\\n}\\n\\n.chat-container .phone:hover{\\n\\tbackground-color: #5C4C9A;\\n\\tborder: 2px solid #5C4C9A;\\n}\\n\\n.chat-container .email{\\n\\tbackground-color: #D44638;\\n\\tborder: 2px solid #D44638;\\n\\tborder-radius: 6px;\\n}\\n.chat-container .email:hover {\\n\\tbackground-color: #B03A2E;\\n\\tborder: 2px solid #B03A2E;\\n}\\n.chat-container ul {\\n\\twidth:100%;\\n}\\n.chat-container li{\\n\\twidth: 20%;\\n\\theight:50px;\\n\\tcursor:pointer;\\n}\\n\\n.hide-container{\\n\\tdisplay: none;\\n}\\n\\n.show-chat{\\n\\tdisplay:flex;\\n\\ttransition: all 0.5s ease-in-out;\\n}\\n\\n@keyframes messageAnimation {\\n\\t0% {\\n\\t\\topacity: 0;\\n\\t\\ttransform: translateY(20px);\\n\\t}\\n\\n\\t100% {\\n\\t\\topacity: 1;\\n\\t\\ttransform: translateY(0);\\n\\t}\\n}\\n\\n.chat-message {\\n\\tanimation: messageAnimation 0.5s ease-in-out;\\n}\\n\\n.wave-emoji {\\n\\tdisplay: inline-block;\\n\\tfont-size: 15px;\\n\\tanimation: waveAnimation 2s ease-in-out infinite;\\n}\\n\\n@keyframes waveAnimation {\\n\\t0% {\\n\\t\\ttransform: rotate(0deg);\\n\\t}\\n\\n\\t50% {\\n\\t\\ttransform: rotate(40deg);\\n\\t}\\n\\n\\t100% {\\n\\t\\ttransform: rotate(0deg);\\n\\t}\\n}\\n\\n.progress-container {\\n\\twidth: 100%;\\n\\theight: 8px;\\n\\tposition: fixed;\\n\\tbackground: transparent;\\n\\ttop:11.4%;\\n\\tz-index: 1000;\\t\\n}\\n\\n.progress-bar {\\n\\theight: 8px;\\n\\tbackground: #6070FF;\\n\\twidth: 0;\\n}\\n\\n.tooltip {\\n\\tposition: relative;\\n}\\n\\n.tooltip::after {\\n\\tcontent: attr(data-tooltip);\\n\\tposition: absolute;\\n\\ttop: 100%;\\n\\tleft: 100%;\\n\\ttransform: translateX(-50%, 5px);\\n\\tpadding: 6px 12px;\\n\\tbackground-color: #344563;\\n\\tcolor: #fff;\\n\\tfont-size: 14px;\\n\\twhite-space: nowrap;\\n\\topacity: 0;\\n\\tvisibility: hidden;\\n\\ttransition: opacity 0.3s, visibility 0.3s;\\n}\\n\\n.tooltip:hover::after {\\n\\topacity: 1;\\n\\tvisibility: visible;\\n}\\n\\n.hidden{\\n\\tdisplay: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://github-flow/./src/css/chat.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  width: 90%;\\r\\n  max-height: 100%;\\r\\n  display: none;\\r\\n  padding: 12px 16px 16px 16px;\\r\\n  background-color: white;\\r\\n  border: 1px solid #dfe1e6;\\r\\n  border-radius: 16px;\\r\\n  z-index: 10;\\r\\n  position: fixed;\\r\\n  top: 20px;\\r\\n  bottom: 20px;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  margin: auto;\\r\\n  transition: 200ms ease-in-out;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n#backdrop {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  opacity: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  transition: 200ms ease-in-out;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  pointer-events: none;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n#backdrop.show {\\r\\n  opacity: 1;\\r\\n  pointer-events: all;\\r\\n}\\r\\n\\r\\n.modal-header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-right: 12px;\\r\\n}\\r\\n\\r\\n.card-title {\\r\\n  font-size: 15px;\\r\\n  color: #172b4d;\\r\\n  font-weight: 700;\\r\\n  width: 110px;\\r\\n}\\r\\n\\r\\n.card-image {\\r\\n  width: 100%;\\r\\n  height: 300px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.close-button {\\r\\n  cursor: pointer;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.close-button:hover {\\r\\n  background-color: rgba(128, 128, 128, 0.154);\\r\\n}\\r\\n\\r\\n.barge-list {\\r\\n  display: flex;\\r\\n  gap: 15px;\\r\\n  margin: 12px 0;\\r\\n}\\r\\n\\r\\n.barge-list li {\\r\\n  height: 16px;\\r\\n  color: #7a869a;\\r\\n  font-size: 13px;\\r\\n  line-height: 16px;\\r\\n}\\r\\n\\r\\n.barge-list li:first-child {\\r\\n  font-weight: 600;\\r\\n  color: #344563;\\r\\n}\\r\\n\\r\\n.card .inner-container{\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  gap:20px;\\r\\n}\\r\\n.card-description {\\r\\n  font-weight: 400;\\r\\n  font-size: 15px;\\r\\n  line-height: 24px;\\r\\n  color: #344563;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.tech {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  width: 200px;\\r\\n  overflow: hidden;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.buttons {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin: 30px 10px;\\r\\n}\\r\\n\\r\\n.modal-button {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 5px 18px;\\r\\n  border: 1px solid #6070ff;\\r\\n  border-radius: 8px;\\r\\n  color: #6070ff;\\r\\n  background: transparent;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.modal-button:hover {\\r\\n  background: #6070ff;\\r\\n  box-shadow: 0 8px 16px rgba(64, 83, 252, 0.24);\\r\\n  border-radius: 8px;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.modal-button:active {\\r\\n  background: #2230d2;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .card {\\r\\n    width: 93%;\\r\\n    height: 100%;\\r\\n  }\\r\\n\\r\\n  .barge-list li {\\r\\n    height: 16px;\\r\\n    color: #7a869a;\\r\\n    font-size: 13px;\\r\\n    line-height: 16px;\\r\\n  }\\r\\n\\r\\n  .barge-list li:first-child {\\r\\n    font-weight: 600;\\r\\n    color: #344563;\\r\\n  }\\r\\n\\r\\n  .container {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n  }\\r\\n\\r\\n  .tech-container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    margin-top: 16px;\\r\\n  }\\r\\n\\r\\n  .tech {\\r\\n    overflow: visible;\\r\\n    flex-wrap: wrap;\\r\\n    width: 240px;\\r\\n  }\\r\\n\\r\\n  .card-image {\\r\\n    width: 100%;\\r\\n    height: 586px;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n\\r\\n  .card-description {\\r\\n    font-weight: 400;\\r\\n    width: 50%;\\r\\n    font-size: 16px;\\r\\n    line-height: 30px;\\r\\n    margin-top: 30px;\\r\\n  }\\r\\n\\r\\n  .buttons {\\r\\n    gap: 20px;\\r\\n  }\\r\\n}\\r\\n\\r\\n\\r\\n.TOP {\\r\\n  padding-top: 100px;\\r\\n  display: flex;\\r\\n  gap:10px;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.about .TOP h2{\\r\\n  color:#1b273b;\\r\\n  font-size: 40px;\\r\\n}\\r\\n.contenta {\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  font-size: 16px;\\r\\n  line-height: 24px;\\r\\n  color: #344563;\\r\\n  padding: 0 24px 0 24px;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n\\r\\n.connecta {\\r\\n  font-style: normal;\\r\\n  font-weight: 500;\\r\\n  font-size: 16px;\\r\\n  line-height: 24px;\\r\\n  color: #7f8cff;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n\\r\\n.socialsa {\\r\\n  display: flex;\\r\\n  gap: 20px;\\r\\n  margin:10px 0;\\r\\n  padding-bottom: 106.04px;\\r\\n}\\r\\n\\r\\n.socialsa li a {\\r\\n  text-decoration: none;\\r\\n  color: #505f79;\\r\\n}\\r\\n\\r\\n.accordion-btn{\\r\\n  cursor: pointer;\\r\\n  color:#122c58;\\r\\n}\\r\\n#socia {\\r\\n  padding-bottom: 12px;\\r\\n}\\r\\n\\r\\n.skills {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding-top: 100px;\\r\\n}\\r\\n\\r\\n.language {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n  margin-bottom: 36px;\\r\\n  font-family: var(--header-font);\\r\\n  font-style: normal;\\r\\n  font-weight: 500;\\r\\n  font-size: 20px;\\r\\n  line-height: 24px;\\r\\n  color: #000;\\r\\n}\\r\\n.language .title{\\r\\n  font-size: 30px;\\r\\n  font-weight: 400;\\r\\n  color: #1b273b;\\r\\n}\\r\\n.subjects {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  width:100%;\\r\\n  gap: 2rem;\\r\\n  margin-bottom: 36px;\\r\\n}\\r\\n\\r\\n.subjects li {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 12px;\\r\\n    background: #f7f7f9;\\r\\n    gap: 16px;\\r\\n    align-items: center;\\r\\n    font-family: var(--header-font);\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 15px;\\r\\n    line-height: 20px;\\r\\n    color: #253858;\\r\\n    width: 20%;\\r\\n}\\r\\n.subject li img{\\r\\n  width:100px;\\r\\n  height: 100px;\\r\\n}\\r\\n.displayer {\\r\\n  display: none;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://github-flow/./src/css/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/destop-version-bg.png */ \"./src/assets/images/destop-version-bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/contact-destop-bg.png */ \"./src/assets/images/contact-destop-bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media screen and (min-width: 768px) {\\r\\n\\t* {\\r\\n\\t\\tmargin: 0;\\r\\n\\t\\tpadding: 0;\\r\\n\\t}\\r\\n\\r\\n\\tbody {\\r\\n\\t\\tmax-width: 100%;\\r\\n\\t}\\r\\n\\t\\r\\n\\t.nav-menu {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: row;\\r\\n\\t\\tgap: 30px;\\r\\n\\t}\\r\\n\\r\\n\\t.nav-menu li {\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tmargin: 0;\\r\\n\\t}\\r\\n\\r\\n\\t.nav-link {\\r\\n\\t\\tcolor: #6070ff;\\r\\n\\t\\tfont-size: 16px;\\r\\n\\t\\ttext-transform: uppercase;\\r\\n\\t\\tfont-weight: bold;\\r\\n\\t}\\r\\n\\r\\n\\t.hamburger {\\r\\n\\t\\tdisplay: none;\\r\\n\\t}\\r\\n\\r\\n\\t.headline {\\r\\n\\t\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\theight: 916px;\\r\\n\\t\\tposition: relative;\\r\\n\\t}\\r\\n\\r\\n\\t.summary {\\r\\n\\t\\tgap: 0;\\r\\n\\t\\tmargin: 180px auto;\\r\\n\\t}\\r\\n\\r\\n\\t.intro p {\\r\\n\\t\\tmax-width: 920px;\\r\\n\\t\\theight: 98px;\\r\\n\\t\\tfont-size: 20px;\\r\\n\\t\\ttext-align: justify;\\r\\n\\t}\\r\\n\\r\\n\\t.intro h1 {\\r\\n\\t\\tfont-size: 48px;\\r\\n\\t}\\r\\n\\r\\n\\t.work-section {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column-reverse;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tpadding: 0 3rem;\\r\\n\\t}\\r\\n\\r\\n\\t.projects {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tcolor: white;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: row;\\r\\n\\t}\\r\\n\\r\\n\\t.project-image,\\r\\n\\t.projects-describe {\\r\\n\\t\\theight: 448px;\\r\\n\\t\\tmax-width: 50%;\\r\\n\\t\\tmargin: 24px 24px;\\r\\n\\t}\\r\\n\\r\\n\\t.about {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tpadding:0 50px 50px 50px;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tgap:20px;\\r\\n\\t\\tflex-direction: row;\\r\\n\\t\\talign-items: start;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t}\\r\\n\\r\\n\\t.about h2 {\\r\\n\\t\\tfont-size: 40px;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tcolor: #091e42;\\r\\n\\t\\tmargin-bottom: 12px;\\r\\n\\t\\tline-height: 52px;\\r\\n\\t}\\r\\n\\r\\n\\t.about  div p {\\r\\n\\t\\tfont-size: 20px;\\r\\n\\t\\twidth: 80%;\\r\\n\\t\\ttext-align: justify;\\r\\n\\t}\\r\\n\\t.skills, .TOP{\\r\\n\\t\\twidth: 60%;\\r\\n\\t}\\r\\n\\t.contact {\\r\\n\\t\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t\\tborder-radius: 80px 0 0 0;\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t\\tborder: 1px solid #6070ff;\\r\\n\\t}\\r\\n\\r\\n\\t.contact>div {\\r\\n\\t\\twidth: 569px;\\r\\n\\t\\theight: 102px;\\r\\n\\t}\\r\\n\\r\\n\\tform .userinput,\\r\\n\\ttextarea {\\r\\n\\t\\twidth: 447px;\\r\\n\\t}\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://github-flow/./src/css/responsive.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/shape2.svg */ \"./src/assets/images/shape2.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/contact-destop-bg.png */ \"./src/assets/images/contact-destop-bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500&family=Cookie&family=Lato:ital,wght@1,300&family=Monomaniac+One&family=Public+Sans:wght@400;700&family=Roboto:ital,wght@0,400;1,300;1,400&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-track {\\r\\n  background-color: #f1f1f1;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background-color: #6070FF;\\r\\n  border-radius: 6px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background-color: #04118a;\\r\\n}\\r\\n\\r\\n/* global setting for body contents */\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  text-decoration: none;\\r\\n  list-style: none;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\nhtml{\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\nbody {\\r\\n  max-width: 768px;\\r\\n  background: whitesmoke;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nh1, h2, p, a, li , h3,input, ::placeholder{\\r\\n  font-family: 'Heebo', sans-serif;\\r\\n}\\r\\n\\r\\nheader{\\r\\n  background-color: white;\\r\\n  border:white;\\r\\n  position: fixed;\\r\\n  top:0;\\r\\n  left:0;\\r\\n  right:0;\\r\\n  z-index: 1000;\\r\\n}\\r\\n.navbar {\\r\\n  max-width: auto;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 20px 40px;\\r\\n}\\r\\n\\r\\n.nav-logo {\\r\\n  color: #6070ff;\\r\\n  font-size: 30px;\\r\\n  font-family: 'Cookie',\\r\\n  'Roboto',\\r\\n  sans-serif;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n.nav-menu {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.nav-menu li {\\r\\n  position: relative;\\r\\n  top: 20px;\\r\\n  margin: 36px 24px;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  font-style: lighter;\\r\\n  font-size: 32px;\\r\\n  font-weight: 600;\\r\\n  line-height: 44px;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.nav-link:hover {\\r\\n  color: #030e75;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.show-menu {\\r\\n  display: block;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background-color: #6070ff;\\r\\n  width: 479px;\\r\\n  opacity: 0.8;\\r\\n  z-index: 1;\\r\\n  height: 5500px;\\r\\n}\\r\\n\\r\\n.hamburger {\\r\\n  cursor: pointer;\\r\\n  display: block;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.bar {\\r\\n  display: block;\\r\\n  width: 23px;\\r\\n  height: 3px;\\r\\n  margin: 5px auto;\\r\\n  transition: all 0.3s ease-in-out;\\r\\n  background-color: #6070ff;\\r\\n}\\r\\n\\r\\n.hamburger.active .bar:nth-child(1) {\\r\\n  transform: translateY(8px) rotate(45deg);\\r\\n  background-color: white;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.hamburger.active .bar:nth-child(2) {\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n.hamburger.active .bar:nth-child(3) {\\r\\n  transform: translateY(-8px) rotate(-45deg);\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.headline {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-color: white;\\r\\n  border: 1px solid rgba(255, 255, 255, 0.572);\\r\\n  background-size: cover;\\r\\n  background-repeat: no-repeat;\\r\\n  border-radius: 0 0 0 80px;\\r\\n  height: 640px;\\r\\n}\\r\\n\\r\\n/* Position summary about me section */\\r\\n\\r\\n.summary{\\r\\n  display:flex;\\r\\n  flex-direction: column;\\r\\n  gap:80px;\\r\\n}\\r\\n.intro {\\r\\n  margin: 100px 24px 0;\\r\\n}\\r\\n\\r\\n/* Styling for welcome part */\\r\\n.intro h1 {\\r\\n  font-size: 40px;\\r\\n  font-weight: 700;\\r\\n  color: #091e42;\\r\\n  margin-bottom: 12px;\\r\\n  line-height: 52px;\\r\\n}\\r\\n\\r\\n/* Styling for introduction section */\\r\\n.intro p {\\r\\n  font-size: 20px;\\r\\n  line-height: 24px;\\r\\n  font-weight: 400px;\\r\\n  font-style: normal;\\r\\n  color: #344563;\\r\\n  width: 90%;\\r\\n  height: 146px;\\r\\n  text-align: justify;\\r\\n}\\r\\n\\r\\n/* Set position of social medial icons */\\r\\n.headline .summary .contact-me {\\r\\n  background-color: #384af0;\\r\\n  color:white;\\r\\n  padding: 10px 20px;\\r\\n  font-size: 20px;\\r\\n  border: 1px solid transparent;\\r\\n  border-radius:7px;\\r\\n}\\r\\n\\r\\n.headline .summary .contact-me:hover{\\r\\n  background-color: #051497;\\r\\n}\\r\\n.headline .summary .contact-me:active{\\r\\n  background-color: #030e75;\\r\\n}\\r\\n.headline .summary .social-icon {\\r\\n  position: absolute;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  left: 5%;\\r\\n  top: 30%;\\r\\n  gap: 13px;\\r\\n  z-index: 10000;\\r\\n}\\r\\n.headline .summary .social-icon a{\\r\\n  color:#344563;\\r\\n  font-size: 20px;\\r\\n}\\r\\n.headline .summary .scroll-down{\\r\\n  color:#344563;\\r\\n  border:none;\\r\\n  display: block;\\r\\n  background-color: transparent;\\r\\n  margin: 80px 0;\\r\\n  font-size: 12px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.center{\\r\\n  display:flex;\\r\\n  flex-direction: column;\\r\\n  justify-content:center;\\r\\n  align-items:start;\\r\\n  gap:40px;\\r\\n}\\r\\n.work-section {\\r\\n  margin: 40px 0;\\r\\n  padding:20px;\\r\\n}\\r\\n\\r\\n/* style work section part */\\r\\n.projects {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: white;\\r\\n  height:100%;\\r\\n  padding: 12px;\\r\\n  border: 1px solid #dfe1e6;\\r\\n  border-radius: 16px;\\r\\n}\\r\\n\\r\\n.no-animate{\\r\\n  opacity: 0;\\r\\n  transition: opacity 0.6s;\\r\\n}\\r\\n.no-animate.animated {\\r\\n  opacity: 1;\\r\\n}\\r\\n/* positon and size projects snapshoot */\\r\\n.project-image {\\r\\n  height: 300px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* position projects description */\\r\\n.projects-describe {\\r\\n  margin-left: 12px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap:22px;\\r\\n}\\r\\n\\r\\n/* style project description */\\r\\n.project-title {\\r\\n  font-size: 24px;\\r\\n  color: #172b4d;\\r\\n  line-height: 29px;\\r\\n  font-weight: 700px;\\r\\n  margin-top:10px;\\r\\n}\\r\\n\\r\\n.projects-describe .stack{\\r\\n  color:#344563;\\r\\n}\\r\\n/* style projects description */\\r\\n.description {\\r\\n  line-height: 24px;\\r\\n  font-weight: 400px;\\r\\n  font-size: 15px;\\r\\n  width: 90%;\\r\\n  color: #344563;\\r\\n}\\r\\n\\r\\n/* postion technologies used */\\r\\n.tools {\\r\\n  display: flex;\\r\\n  gap: 12px;\\r\\n}\\r\\n\\r\\n/* style technologies used */\\r\\n.tools li {\\r\\n  font-size: 1.3vw;\\r\\n  background: #ebebff;\\r\\n  border-radius: 8px;\\r\\n  text-align: center;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 6px 1vw;\\r\\n  font-weight: 500px;\\r\\n  color: #6070ff;\\r\\n}\\r\\n\\r\\n/* style all the clickable buttons */\\r\\n.button {\\r\\n  padding: 0px 20px;\\r\\n  width: 220px;\\r\\n  font-weight: 500px;\\r\\n  font-size: 17px;\\r\\n  line-height: 48px;\\r\\n  color: #396df2;\\r\\n  text-align: center;\\r\\n  border: 1px solid #396df2;\\r\\n  border-radius: 8px;\\r\\n  cursor:pointer;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  margin-left: 24px;\\r\\n}\\r\\n\\r\\n.get-resume {\\r\\n  padding:14px 20px;\\r\\n}\\r\\n.button:hover {\\r\\n  background: #6070ff;\\r\\n  box-shadow: 0 8px 16px rgba(64, 83, 252, 0.24);\\r\\n  border-radius: 8px;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.button:active {\\r\\n  background: #2230d2;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n/* resize project 3 and 4 size */\\r\\n.project2,\\r\\n.project4 {\\r\\n  height: 630px;\\r\\n}\\r\\n\\r\\n/* postion about me section */\\r\\n.about {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: start;\\r\\n  padding: 0 2rem;\\r\\n  background: white;\\r\\n  border: 1px solid white;\\r\\n  border-radius: 0 80px 0 0;\\r\\n  margin-bottom:40px;\\r\\n  width:100%;\\r\\n}\\r\\n\\r\\n.TOP {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.about p {\\r\\n  font-size: 20px;\\r\\n  width: 100%;\\r\\n  text-align: justify;\\r\\n}\\r\\n.skills, .TOP {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.contact {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  height: 820px;\\r\\n  background-color: #6070ff;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n}\\r\\n\\r\\n.contact div {\\r\\n  position: relative;\\r\\n  top: 50px;\\r\\n  font-weight: 400px;\\r\\n  font-size: 16px;\\r\\n  line-height: 28px;\\r\\n  color: #ebebff;\\r\\n  max-width: 327px;\\r\\n  max-height: 102px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.contact h2 {\\r\\n  color: white;\\r\\n  font-size: 35px;\\r\\n  margin-bottom: 25px;\\r\\n}\\r\\n\\r\\n.contact>form {\\r\\n  position: relative;\\r\\n  top: 150px;\\r\\n}\\r\\n\\r\\nform ul input,\\r\\ntextarea {\\r\\n  background-color: #fff;\\r\\n  margin: 10px 24px;\\r\\n  padding: 10px;\\r\\n  outline: none;\\r\\n  border: 1px solid #cfd8dc;\\r\\n  border-radius: 8px;\\r\\n  height: 48;\\r\\n  width: 300px;\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  font-size: 17px;\\r\\n  line-height: 20px;\\r\\n}\\r\\n\\r\\n.contact .userinput:focus {\\r\\n  border: 1px solid #2230d2;\\r\\n}\\r\\n\\r\\n.contact textarea {\\r\\n  height: 170px;\\r\\n}\\r\\n\\r\\n.contact .btn {\\r\\n  width: 150px;\\r\\n  color: #6070ff;\\r\\n}\\r\\n\\r\\n.contact .btn:hover {\\r\\n  background: #6070ff;\\r\\n  box-shadow: 0 8px 16px rgba(64, 83, 252, 0.24);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.contact .btn:active {\\r\\n  background: #2230d2;\\r\\n}\\r\\n\\r\\n.error {\\r\\n  color: rgb(220, 53, 69);\\r\\n  margin-top: -10px;\\r\\n  background-color: #6070ff;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n\\r\\n/* transition the navbar element size */\\r\\n.nav-logo {\\r\\n  animation-name: rotate-logo;\\r\\n  animation-duration: 1.5s;\\r\\n  animation-delay: 0.5s;\\r\\n}\\r\\n\\r\\n.nav-logo:hover{\\r\\n  transform: scale(1.3);\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n@keyframes rotate-logo {\\r\\n  0% {\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://github-flow/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://github-flow/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://github-flow/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://github-flow/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/chat.css":
/*!**************************!*\
  !*** ./src/css/chat.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_chat_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./chat.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/chat.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_chat_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_chat_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_chat_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_chat_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://github-flow/./src/css/chat.css?");

/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/modal.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://github-flow/./src/css/modal.css?");

/***/ }),

/***/ "./src/css/responsive.css":
/*!********************************!*\
  !*** ./src/css/responsive.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./responsive.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://github-flow/./src/css/responsive.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://github-flow/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://github-flow/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://github-flow/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://github-flow/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://github-flow/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://github-flow/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://github-flow/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/gallery sync \\.(png%7Cjpe?g%7Csvg%7Cmp4)$":
/*!****************************************************************************!*\
  !*** ./src/assets/gallery/ sync nonrecursive \.(png%7Cjpe?g%7Csvg%7Cmp4)$ ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./project1.png\": \"./src/assets/gallery/project1.png\",\n\t\"./project2.png\": \"./src/assets/gallery/project2.png\",\n\t\"./project3.png\": \"./src/assets/gallery/project3.png\",\n\t\"./project4.png\": \"./src/assets/gallery/project4.png\",\n\t\"./project5.png\": \"./src/assets/gallery/project5.png\",\n\t\"./project6.png\": \"./src/assets/gallery/project6.png\",\n\t\"./project7.png\": \"./src/assets/gallery/project7.png\",\n\t\"./project8.png\": \"./src/assets/gallery/project8.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/gallery sync \\\\.(png%7Cjpe?g%7Csvg%7Cmp4)$\";\n\n//# sourceURL=webpack://github-flow/./src/assets/gallery/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/assets/gallery/project1.png":
/*!*****************************************!*\
  !*** ./src/assets/gallery/project1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c5185ef9a7b73405e046.png\";\n\n//# sourceURL=webpack://github-flow/./src/assets/gallery/project1.png?");

/***/ }),

/***/ "./src/assets/gallery/project2.png":
/*!*****************************************!*\
  !*** ./src/assets/gallery/project2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/2c878c516e85e4f0f801.png\";\n\n//# sourceURL=webpack://github-flow/./src/assets/gallery/project2.png?");

/***/ }),

/***/ "./src/assets/gallery/project3.png":
/*!*****************************************!*\
  !*** ./src/assets/gallery/project3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/2a2ede9b5bfbc4e84f8f.png\";\n\n//# sourceURL=webpack://github-flow/./src/assets/gallery/project3.png?");

/***/ }),

/***/ "./src/assets/gallery/project4.png":
/*!*****************************************!*\
  !*** ./src/assets/gallery/project4.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/71512ce78651b32e5d78.png\";\n\n//# sourceURL=webpack://github-flow/./src/assets/gallery/project4.png?");

/***/ }),

/***/ "./src/assets/gallery/project5.png":
/*!*****************************************!*\
  !*** ./src/assets/gallery/project5.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/fbf484b1cbf490a53fdc.png\";\n\n//# sourceURL=webpack://github-flow/./src/assets/gallery/project5.png?");

/***/ }),

/***/ "./src/assets/gallery/project6.png":
/*!*****************************************!*\
  !*** ./src/assets/gallery/project6.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c9f10c1def97e7b0faa9.png\";\n\n//# sourceURL=webpack://github-flow/./src/assets/gallery/project6.png?");

/***/ }),

/***/ "./src/assets/gallery/project7.png":
/*!*****************************************!*\
  !*** ./src/assets/gallery/project7.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c9f4dfce0752b2247117.png\";\n\n//# sourceURL=webpack://github-flow/./src/assets/gallery/project7.png?");

/***/ }),

/***/ "./src/assets/gallery/project8.png":
/*!*****************************************!*\
  !*** ./src/assets/gallery/project8.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/97a4fe93321deca5c14e.png\";\n\n//# sourceURL=webpack://github-flow/./src/assets/gallery/project8.png?");

/***/ }),

/***/ "./src/assets/images/contact-destop-bg.png":
/*!*************************************************!*\
  !*** ./src/assets/images/contact-destop-bg.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/668a5821788c361ff965.png\";\n\n//# sourceURL=webpack://github-flow/./src/assets/images/contact-destop-bg.png?");

/***/ }),

/***/ "./src/assets/images/counter.png":
/*!***************************************!*\
  !*** ./src/assets/images/counter.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/81e395ff6a6907a218e4.png\";\n\n//# sourceURL=webpack://github-flow/./src/assets/images/counter.png?");

/***/ }),

/***/ "./src/assets/images/destop-version-bg.png":
/*!*************************************************!*\
  !*** ./src/assets/images/destop-version-bg.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/f89056004fea307c93d7.png\";\n\n//# sourceURL=webpack://github-flow/./src/assets/images/destop-version-bg.png?");

/***/ }),

/***/ "./src/assets/images/shape2.svg":
/*!**************************************!*\
  !*** ./src/assets/images/shape2.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/7ac5444dbf87e05527ed.svg\";\n\n//# sourceURL=webpack://github-flow/./src/assets/images/shape2.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/index.js");
/******/ 	
/******/ })()
;