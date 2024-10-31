//==================QUESTION 01===================//
const main = document.getElementById("main-content");


 for (let child of main-content) {
    console.log(child);
 }


let renderElements = document.getElementsByClassName("render");
console.log("Inner HTML of elements with class 'render':");
for (let element of renderElements) {
    console.log(element.innerHTML);
}


document.getElementById("first-name").value = "Alex";


document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

//==================QUESTION 02===================//

const formContent = document.getElementById("form-content");
console.log("Node type of element with id 'form-content':", formContent.nodeType); 


const lastName = document.getElementById("lastName");
console.log("Node type of element with id 'lastName':", lastName.nodeType); 
console.log("Node type of child node of 'lastName':", lastName.firstChild.nodeType); 


lastName.firstChild.nodeValue = "Last Name: Updated Bank";
console.log("Updated child node of 'lastName':", lastName.innerHTML);


const mainContent = document.getElementById("main-content");
console.log("First child of 'main-content':", mainContent.firstElementChild);
console.log("Last child of 'main-content':", mainContent.lastElementChild);


console.log("Next sibling of 'lastName':", lastName.nextElementSibling);
console.log("Previous sibling of 'lastName':", lastName.previousElementSibling);


const email = document.getElementById("email");
console.log("Parent node of 'email':", email.parentNode);
console.log("Node type of 'email':", email.nodeType);