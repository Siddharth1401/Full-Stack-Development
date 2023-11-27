let para = document.createElement('p');
para.innerText = "hey i am red!";
document.querySelector('body').append(para);

para.classList.add("red");


let head3 = document.createElement('h3');
head3.innerText = "I am blue h3";
document.querySelector('body').append(head3);

head3.classList.add('blue')

// Qs1.CreateanewinputandbuttonelementonthepageusingJavaScriptonly.Setthetextofbuttonto“Clickme”;

let button = document.createElement('button');
button.innerText = "click me";
document.querySelector('body').append(button);

let input = document.createElement('input');
document.querySelector('body').append(input);

// Qs2.Addfollowingattributestotheelement:-Changeplaceholdervalueofinputto“username”-Changetheidofbuttonto“btn”

input.setAttribute('placeholder', 'username');
button.setAttribute('id', 'btn');

// Qs3.AccessthebtnusingthequerySelectorandbuttonid.Changethebuttonbackgroundcolortoblueandtextcolortowhite.

let btn = document.querySelector("#btn"); 
btn.add("change");

// Qs4.Createanh1elementonthepageandsetitstextto“DOMPractice”underlined.Changeitscolortopurple.

let h1 = document.createElement('h1');
h1.innerText = "DOM practice";

// h1.add("purple");
document.querySelector('body').append(h1);
h1.style.color = "purple";

// Qs5.Createaptagonthepageandsetitstextto“ApnaCollegeDeltaPractice”,whereDeltaisbold.

let pTag = document.createElement('p');
pTag.innerHTML = "Apna College <b> Delta </b> Practice";
pTag.style.color = "black";
document.querySelector('body').append(pTag);