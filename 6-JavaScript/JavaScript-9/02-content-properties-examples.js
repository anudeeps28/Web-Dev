// Content Properties Examples - innerHTML, textContent, innerText
// Based on Spider-Man index.html

// Example 1: Getting Content
console.log('=== GETTING CONTENT ===');

// Select the main heading
const heading = document.querySelector('h1');
console.log('Heading innerHTML:', heading.innerHTML);    
// OUTPUT: "Spider Man" (same for all three because no HTML tags in heading)
console.log('Heading textContent:', heading.textContent);  
// OUTPUT: "Spider Man"
console.log('Heading innerText:', heading.innerText);    
// OUTPUT: "Spider Man"

// Select paragraph with HTML content
const paragraph = document.querySelector('p');
console.log('Paragraph innerHTML:', paragraph.innerHTML);
// OUTPUT: "<b>Spider-Man</b> is a superhero appearing in American comic books published by <a href=\"https://www.google.com/search?q=Marvel+Comics\">Marvel Comics</a>."
// SHOWS: Full HTML with <b> and <a> tags

console.log('Paragraph textContent:', paragraph.textContent);
// OUTPUT: "Spider-Man is a superhero appearing in American comic books published by Marvel Comics."
// SHOWS: Plain text only, HTML tags removed

console.log('Paragraph innerText:', paragraph.innerText);
// OUTPUT: "Spider-Man is a superhero appearing in American comic books published by Marvel Comics."
// SHOWS: Visible text only, HTML tags removed, respects styling

// Example 2: Setting Content
console.log('=== SETTING CONTENT ===');

// Select elements from Spider-Man HTML
const mainHeading = document.querySelector('h1');
const description = document.getElementById('description');
const boxTitle = document.querySelector('.box h4');

// Using innerHTML - sets HTML content
mainHeading.innerHTML = '<span style="color: red;">Amazing</span> Spider-Man';
console.log('After innerHTML change:', mainHeading.innerHTML);
// VISUAL CHANGE: Heading now shows "Amazing" in red color, "Spider-Man" in normal color
// CONSOLE OUTPUT: "<span style=\"color: red;\">Amazing</span> Spider-Man"

// Using textContent - sets plain text only
description.textContent = 'Spider-Man is a fictional superhero created by Stan Lee.';
console.log('After textContent change:', description.textContent);
// VISUAL CHANGE: Long description paragraph replaced with short text
// CONSOLE OUTPUT: "Spider-Man is a fictional superhero created by Stan Lee."
// NOTE: All previous HTML content and styling is removed

// Using innerText - sets visible text
boxTitle.innerText = 'Character Information';
console.log('After innerText change:', boxTitle.innerText);
// VISUAL CHANGE: "Publication Info" changed to "Character Information"
// CONSOLE OUTPUT: "Character Information"
// NOTE: Respects existing CSS styling of the h4 element

// Example 3: Security Demonstration
console.log('=== SECURITY EXAMPLES ===');

// Safe text insertion (prevents XSS attacks)
const userInput = '<script>alert("hack")</script>';
const safeElement = document.querySelector('#description');

// Safe - treats as plain text
safeElement.textContent = `User input: ${userInput}`;
console.log('Safe textContent:', safeElement.textContent);
// VISUAL CHANGE: Description shows literal text "User input: <script>alert(\"hack\")</script>"
// CONSOLE OUTPUT: "User input: <script>alert(\"hack\")</script>"
// SECURITY: Script tag is displayed as text, NOT executed

// Note: Don't use innerHTML with user input
// safeElement.innerHTML = userInput; // This would be dangerous!

// Example 4: HTML Content Creation
console.log('=== HTML CONTENT CREATION ===');

// Adding HTML content safely from trusted source
const publicationBox = document.querySelector('.box h4');
publicationBox.innerHTML = '<i>📚</i> Publication Info';
console.log('Box with icon:', publicationBox.innerHTML);
// VISUAL CHANGE: Box title now has book emoji before "Publication Info"
// CONSOLE OUTPUT: "<i>📚</i> Publication Info"

// Example 5: Working with Hidden Elements
console.log('=== HIDDEN ELEMENTS COMPARISON ===');

// Add a hidden element for demonstration
const box = document.querySelector('.box');
const hiddenSpan = document.createElement('span');
hiddenSpan.style.display = 'none';
hiddenSpan.textContent = 'This is hidden content';
box.appendChild(hiddenSpan);

console.log('Box textContent (includes hidden):', box.textContent);
// OUTPUT: Includes "This is hidden content" along with visible box content
console.log('Box innerText (excludes hidden):', box.innerText);
// OUTPUT: Only visible text, "This is hidden content" is excluded
// DIFFERENCE: textContent shows ALL text, innerText shows only VISIBLE text

// Example 6: Practical Applications with Spider-Man HTML
console.log('=== PRACTICAL APPLICATIONS ===');

// 1. Modify box links text
const boxLinks = document.querySelectorAll('.boxLink');
const linkTitles = ['Marvel Comics', 'Amazing Fantasy #15', 'Stan Lee', 'Steve Ditko'];

boxLinks.forEach((link, index) => {
    if (linkTitles[index]) {
        link.textContent = linkTitles[index];
        console.log(`Link ${index + 1} updated to:`, link.textContent);
    }
});
// VISUAL CHANGE: Box links now show actual names instead of generic text
// Link 1: "Publisher" → "Marvel Comics"
// Link 2: "First Appearance" → "Amazing Fantasy #15"
// Link 3: "Stan Lee" → "Stan Lee" (if present)
// Link 4: "Steve Ditko" → "Steve Ditko" (if present)

// 2. Add emphasis to creator names
const descParagraph = document.getElementById('description');
if (descParagraph) {
    const currentText = descParagraph.textContent;
    descParagraph.innerHTML = currentText.replace(/Stan Lee/g, '<strong>Stan Lee</strong>');
    console.log('Description with emphasis:', descParagraph.innerHTML);
}
// VISUAL CHANGE: All instances of "Stan Lee" in description are now bold
// CONSOLE OUTPUT: Shows HTML with <strong> tags around "Stan Lee"

// 3. Create new content with HTML
const factBox = document.createElement('div');
factBox.className = 'fact-box';
factBox.innerHTML = `
    <h3>Quick Facts</h3>
    <ul>
        <li><strong>First Appearance:</strong> Amazing Fantasy #15 (1962)</li>
        <li><strong>Creators:</strong> Stan Lee & Steve Ditko</li>
        <li><strong>Publisher:</strong> Marvel Comics</li>
        <li><strong>Real Name:</strong> Peter Parker</li>
    </ul>
`;
document.body.appendChild(factBox);
console.log('New fact box added:', factBox.innerHTML);
// VISUAL CHANGE: New "Quick Facts" section added at bottom of page
// SHOWS: Heading "Quick Facts" with bulleted list of Spider-Man info
// CONSOLE OUTPUT: Full HTML structure of the fact box

// Example 7: Performance Comparison
console.log('=== PERFORMANCE EXAMPLES ===');

const testElement = document.createElement('div');
document.body.appendChild(testElement);

// Faster - direct text assignment
console.time('textContent');
testElement.textContent = 'This is plain text content';
console.timeEnd('textContent');
// CONSOLE OUTPUT: Shows execution time (usually < 1ms)

// Slower - HTML parsing
console.time('innerHTML');
testElement.innerHTML = 'This is plain text content';
console.timeEnd('innerHTML');
// CONSOLE OUTPUT: Shows execution time (usually slightly higher than textContent)
// PERFORMANCE: innerHTML is slower because it parses for HTML even with plain text

// Example 8: Complex Content Manipulation
console.log('=== COMPLEX MANIPULATION ===');

// Working with the images section
const imagesDiv = document.querySelector('.images');
if (imagesDiv) {
    // Get all image elements
    const images = imagesDiv.querySelectorAll('.oldImg');
    
    // Add captions using innerHTML
    images.forEach((img, index) => {
        const caption = document.createElement('p');
        caption.innerHTML = `<em>Image ${index + 1}: Spider-Man Creation</em>`;
        caption.style.textAlign = 'center';
        caption.style.fontSize = '12px';
        img.parentNode.insertBefore(caption, img.nextSibling);
    });
    
    console.log('Added captions to images');
    // VISUAL CHANGE: Each of the 3 creation images now has italic caption below it
    // SHOWS: "Image 1: Spider-Man Creation", "Image 2: Spider-Man Creation", etc.
    // STYLING: Captions are centered and in smaller font size
}

// Example 9: Dynamic List Creation
console.log('=== DYNAMIC LIST CREATION ===');

const powersSection = document.createElement('div');
powersSection.innerHTML = `
    <h2>Spider-Man's Powers</h2>
    <ul id="powers-list">
        <li>Superhuman strength</li>
        <li>Wall-crawling ability</li>
        <li>Spider-sense</li>
        <li>Web-shooting</li>
    </ul>
`;

// Add after the main content
const mainContent = document.querySelector('p');
mainContent.parentNode.insertBefore(powersSection, mainContent.nextSibling);
// VISUAL CHANGE: New "Spider-Man's Powers" section added after first paragraph
// SHOWS: Heading and bulleted list of 4 powers

// Add interactive behavior
const powersList = document.getElementById('powers-list');
powersList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.style.backgroundColor = 'yellow';
        console.log('Clicked power:', e.target.textContent);
    }
});
// INTERACTIVE: Clicking any power in the list highlights it yellow
// CONSOLE OUTPUT: Shows which power was clicked (e.g., "Clicked power: Wall-crawling ability")

// Example 10: Content Sanitization
console.log('=== CONTENT SANITIZATION ===');

function sanitizeAndSetContent(element, content, allowHTML = false) {
    if (allowHTML) {
        // In real applications, use a proper sanitization library
        const sanitized = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        element.innerHTML = sanitized;
        console.log('Sanitized HTML content set');
    } else {
        element.textContent = content;
        console.log('Plain text content set safely');
    }
}

// Usage examples
const testDiv = document.createElement('div');
document.body.appendChild(testDiv);

// Safe plain text
sanitizeAndSetContent(testDiv, 'Safe content with <b>tags</b>', false);
console.log('Safe content:', testDiv.textContent);
// VISUAL CHANGE: Div shows literal text "Safe content with <b>tags</b>"
// CONSOLE OUTPUT: "Safe content with <b>tags</b>" (tags not processed)

// Sanitized HTML (basic example - use proper library in production)
sanitizeAndSetContent(testDiv, 'Content with <b>bold</b> text', true);
console.log('Sanitized HTML:', testDiv.innerHTML);
// VISUAL CHANGE: Div shows "Content with bold text" ("bold" appears in bold)
// CONSOLE OUTPUT: "Content with <b>bold</b> text" (HTML tags processed)
// SECURITY: Safe HTML tags allowed, dangerous scripts removed

console.log('=== ALL EXAMPLES COMPLETED ===');