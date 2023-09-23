
const myDiv = document.querySelector('#myDiv');
myDiv.style.backgroundColor = '#ADD8E6';

const para = document.querySelectorAll('p');
para.forEach((p) =>{
    console.log(p.innerText);
});