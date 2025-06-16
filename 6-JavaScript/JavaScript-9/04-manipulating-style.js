// we can change styling for different elements

let heading = document.querySelector('h1');
heading.style.color = 'purple';
heading.style.backgroundColor = 'yellow';


let links = document.querySelectorAll('.box a');
// for (let i=0; i<links.length; i++) {
//     links[i].style.backgroundColor = "yellow";
// }
for(link of links) {
    link.style.color = "yellow";
}

// note - we cannot access css styles using js. only inline styles in html can 
// be accessed