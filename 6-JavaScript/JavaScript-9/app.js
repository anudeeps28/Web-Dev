// DOM Element Selection Examples - Spider-Man HTML

// 1. Selecting Element by ID
// Select main Spider-Man image
const mainImage = document.getElementById('mainImg');
console.log('Main Image:', mainImage);

// Select description paragraph
const description = document.getElementById('description');
console.log('Description:', description);

// 2. Selecting Elements by Class Name
// Select all box links
const boxLinks = document.getElementsByClassName('boxLink');
console.log('Box Links:', boxLinks); // Returns HTMLCollection

// Loop through box links and add hover effect
for (let i = 0; i < boxLinks.length; i++) {
    boxLinks[i].addEventListener('mouseover', function() {
        this.style.color = 'red';
    });
    boxLinks[i].addEventListener('mouseout', function() {
        this.style.color = '';
    });
}

// Select all old images
const oldImages = document.getElementsByClassName('oldImg');
console.log('Old Images:', oldImages);

// Convert HTMLCollection to Array and add click effects
const oldImagesArray = Array.from(oldImages);
oldImagesArray.forEach(img => {
    img.addEventListener('click', function() {
        this.style.border = '3px solid blue';
    });
});

// 3. Selecting Elements by Tag Name
// Select all paragraphs
const paragraphs = document.getElementsByTagName('p');
console.log('All Paragraphs:', paragraphs);

// Style all paragraphs
for (let p of paragraphs) {
    p.style.lineHeight = '1.6';
    p.style.textAlign = 'justify';
}

// Select all headings
const headings = document.getElementsByTagName('h1');
for (let heading of headings) {
    heading.style.textAlign = 'center';
    heading.style.color = 'darkblue';
}

// Select all images
const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
    img.style.borderRadius = '8px';
}

// 4. Query Selectors (Modern Approach)
// Select first box link
const firstBoxLink = document.querySelector('.boxLink');
console.log('First Box Link:', firstBoxLink);

// Select all box links using querySelectorAll
const allBoxLinks = document.querySelectorAll('.boxLink');
console.log('All Box Links (NodeList):', allBoxLinks);

// Query selector examples with actual HTML elements
const mainImgById = document.querySelector('#mainImg'); // Returns: <img src="assets/spiderman_img.png" id="mainImg" />
const firstOldImg = document.querySelector('.oldImg'); // Returns: first <img> with class "oldImg"
const firstParagraph = document.querySelector('p'); // Returns: first <p> element found
const allOldImgs = document.querySelectorAll('.oldImg'); // Returns: NodeList of all 3 images with class "oldImg"

// More complex selectors
const boxDiv = document.querySelector('div.box'); // Returns: <div> element that has class "box"
const listItems = document.querySelectorAll('ul li'); // Returns: NodeList of all <li> elements inside <ul>
const boldTags = document.querySelectorAll('p b'); // Returns: NodeList of all <b> tags inside paragraphs
const links = document.querySelectorAll('a[href="#"]'); // Returns: NodeList of all links with href="#"

// 5. Practical Examples with Spider-Man HTML
// Change main image on click
if (mainImage) {
    mainImage.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s';
    });
}

// Make description expandable
if (description) {
    description.addEventListener('click', function() {
        if (this.style.maxHeight) {
            this.style.maxHeight = '';
        } else {
            this.style.maxHeight = '100px';
            this.style.overflow = 'hidden';
        }
    });
}

// Add interactive effects to box links
allBoxLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        this.style.backgroundColor = 'yellow';
        this.style.padding = '5px';
    });
});

// Image gallery effect
oldImagesArray.forEach((img) => {
    img.addEventListener('click', function() {
        mainImage.src = this.src;
        mainImage.style.transform = 'scale(1.05)';
        setTimeout(() => {
            mainImage.style.transform = 'scale(1)';
        }, 300);
    });
});

// 6. Element Manipulation Examples
// Change page title dynamically
const pageTitle = document.querySelector('h1');
if (pageTitle) {
    setTimeout(() => {
        pageTitle.textContent = 'Amazing Spider-Man';
        pageTitle.style.animation = 'fadeIn 2s';
    }, 3000);
}

// Add new content dynamically
const box = document.querySelector('.box');
if (box) {
    const newItem = document.createElement('li');
    newItem.innerHTML = '<a href="#" class="boxLink">Character Info</a>';
    const ul = box.querySelector('ul');
    ul.appendChild(newItem);
}

// 7. Comparison of Methods with actual elements
console.log('=== Method Comparison with Spider-Man HTML ===');
console.log('getElementById mainImg:', document.getElementById('mainImg'));
console.log('getElementsByClassName boxLink:', document.getElementsByClassName('boxLink'));
console.log('getElementsByTagName img:', document.getElementsByTagName('img'));
console.log('querySelector .oldImg:', document.querySelector('.oldImg'));
console.log('querySelectorAll .boxLink:', document.querySelectorAll('.boxLink'));

// ---------------------------------------------------------------------------------------
// open this file in browser and inspect to see changes