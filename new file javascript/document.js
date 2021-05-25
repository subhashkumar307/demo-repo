const doc = document.getElementById('main-header')
console.log(doc);
doc.textContent = 'New Text';
doc.innerHTML = '<h1>Subhash Item</h1>';

doc.style.fontFamily = "cursive";
doc.style.background = "blue";

doc.style.borderBottom = 'solid 10px red';
//List Group of ClassName
const listItems = document.getElementsByClassName('list-group-item');
console.log(listItems);

for(let i=0; i < listItems.length; i++)
{
    if(i%2 == 0)
    {
        listItems[i].style.color = 'red'
    } else {
        listItems[i].style.color = 'blue'
    }
}
listItems[1].textContent = 'Subhash'
listItems[2].style.fontWeight = 'bold'

// List group of TagName

const pops = document.getElementsByTagName('li')
console.log(pops);

for(let i=0; i< pops.length; i++)
{
    if(i%2 == 0)
    {
        pops[i].style.color = 'black'
    } else {
        pops[i].style.color = 'green'
    }
}
 const ul = document.getElementsByTagName('ul')
 console.log(ul);

 console.log(ul.length);

 const divs = document.getElementsByTagName('div')
 console.log(divs);

 //query selector- id + className + tagName

 //const hedding = document.querySelector('#header-title')
 //console.log(hedding);

 const sub = document.querySelector('.list-group-item')
 console.log(sub);

 const see = document.querySelector('li')
 console.log(see);

 //EVENTS

 //DOM Traversala

 // 1 Parent Node - Parent Element | Parent Node

 const list = document.querySelector('#main')
 console.log(list);

 console.log(list.parentElement);
 
 console.log(list.parentNode);

 list.parentElement.style.backgroundColor = 'yellow';

 console.log(list.parentElement.parentElement);

// 2 Child Node

console.log(list.childNodes);

console.log(list.children);

const suns = document.querySelector('#items')
console.log(suns);
console.log(suns.childNodes)
console.log(suns.children)
console.log(suns.children[1]);
suns.children[1].style.backgroundColor = 'green';
suns.children[1].style.color = 'white';

//first child
console.log(suns.firstChild);
console.log(suns.firstElementChild);

suns.firstElementChild.textContent = 'Kumar';

// Last Child
console.log(suns.lastChild);
console.log(suns.lastElementChild);
suns.lastElementChild.style.backgroundColor = 'blue';
suns.lastElementChild.style.color = 'white';
suns.lastElementChild.style.fontWeight = 'bold';

// 3 Siblings - PreviousElementSiblings | NextElementSiblings

console.log(suns.previousElementSibling);

console.log(suns.nextElementSibling);

// Creating Element of DOM 

//const new_li = document.createElement('li');
const new_li = document.createElement('li');

new_li.className = 'list-group-item';

new_li.id = 'new_li_id';

//new_li.setAttribute = ('src', 'testting');
new_li.textContent = 'Item 8';

//const items = document.querySelector('#items');

//const btn = document.querySelector('#button');

//btn.addEventListener('click', () => {
 //   items.appendChild(new_li);
//})

//console.log(new_li);