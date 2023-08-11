
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
/*Add the following elements to the container using ONLY JavaScript and the DOM methods.

a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/
const redPara = document.createElement('p');
redPara.classList.add('redPara');
redPara.textContent ='\"Hey, I\'m red!\"';
redPara.style.color =('red');
container.appendChild(redPara);
//<-----------red------>
const blueHead = document.createElement('h3');
blueHead.classList.add('blueHead');
blueHead.textContent ='\"I\'m a red h3!\"';
blueHead.style.color =('blue');
container.appendChild(blueHead);
//<---------blue---------->
const box = document.createElement('div');
box.classList.add('box');
box.style.cssText =('border : solid black; background-color : pink;');


const boxHead = document.createElement('h1');
boxHead.classList.add('boxHead');
boxHead.textContent = ('\"I\'m in a div\"');
box.appendChild(boxHead);
const boxPara = document.createElement('p');
boxPara.classList.add('boxPara');
boxPara.textContent = ('Me too!');
box.appendChild(boxPara);

container.appendChild(box);
// <---------button Method 2------->
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// <--------button Method 3--------->      

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
//   <------------------>
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});




