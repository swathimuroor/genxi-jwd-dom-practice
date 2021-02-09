// Buttons
const btn = document.querySelector('#display-name-button');
btn.addEventListener('click', () => {
    var element = document.getElementById("display-name");
    element.classList.remove("invisible");
});

// Mouse Over
let image = document.querySelector('#light-bulb');
image.addEventListener('mouseover', () => {
   image.src = "images/light-bulb-on.png";
});
image.addEventListener('mouseout', () => {
    image.src = "images/light-bulb-off.png";
 });
 

// Toggle
const btn1 = document.querySelector('#toggle-button');
btn1.addEventListener('click', () => {
    var element = document.getElementById("toggle-alert");
    if(btn1.innerText==="On"){
        element.classList.remove("invisible");
        btn1.innerText="Off";
    }else{
        element.classList.add("invisible");
        btn1.innerText="On";
    }
});

// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side
let form = document.querySelector('#form-validate');
const textVal = document.querySelector('#form-validate-first-name');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(textVal.value.length >2){
        textVal.classList.add("is-valid");
        textVal.classList.remove("is-invalid");
    }else{
        textVal.classList.add("is-invalid");
        textVal.classList.remove("is-valid");
    }
},false);

// Challenge: Lists

let form1 = document.querySelector('#form-hobby');
let listEle =  document.querySelector('#hobby-list');

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    let hobby = document.querySelector('#form-hobby-text').value;
    listEle.innerHTML += `<li class="list-group-item">${hobby}</li>`;
},false);

// Challenge: Lists (Part 2)

let listHobby = document.querySelector('#hobby-list-2');
listHobby.addEventListener('click', (event) => {
    alert(event.tagret.classList);
    if (event.target.classList.contains('remove-hobby')) {
        event.preventDefault();
        let liEle = event.target.parentElement;
        listHobby.removeChild(liEle);
    }
});

