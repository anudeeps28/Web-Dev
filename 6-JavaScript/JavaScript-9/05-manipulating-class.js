// ClassList Manipulation Examples - add(), remove(), contains(), toggle()
// Based on Spider-Man index.html

console.log('=== CLASS MANIPULATION EXAMPLES ===');

// Declare all variables at the top to avoid redeclaration errors
const mainImage = document.getElementById('mainImg');
const firstParagraph = document.querySelector('p');
const boxLinks = document.querySelectorAll('.boxLink');
const heading = document.querySelector('h1');
const oldImages = document.querySelectorAll('.oldImg');

// Example 1: classList.add() - Adding CSS classes
console.log('=== ADDING CLASSES ===');
console.log('Original classes:', mainImage.className);
// OUTPUT: "" (empty string - no classes initially)

// Add single class
mainImage.classList.add('highlighted');
console.log('After adding "highlighted":', mainImage.className);
// VISUAL CHANGE: Image gets 'highlighted' class (styling depends on CSS)
// CONSOLE OUTPUT: "highlighted"

// Add multiple classes at once
mainImage.classList.add('border', 'shadow', 'featured');
console.log('After adding multiple classes:', mainImage.className);
// VISUAL CHANGE: Image now has 4 classes applied
// CONSOLE OUTPUT: "highlighted border shadow featured"

// Add class to paragraph
firstParagraph.classList.add('intro-text');
console.log('Paragraph classes:', firstParagraph.className);
// VISUAL CHANGE: First paragraph gets 'intro-text' class
// CONSOLE OUTPUT: "intro-text"

// Example 2: classList.remove() - Removing CSS classes
console.log('=== REMOVING CLASSES ===');

// Remove single class from image
mainImage.classList.remove('shadow');
console.log('After removing "shadow":', mainImage.className);
// VISUAL CHANGE: Shadow styling removed from image
// CONSOLE OUTPUT: "highlighted border featured"

// Remove multiple classes at once
mainImage.classList.remove('border', 'featured');
console.log('After removing multiple classes:', mainImage.className);
// VISUAL CHANGE: Border and featured styling removed
// CONSOLE OUTPUT: "highlighted"

// Try to remove non-existent class (safe operation)
mainImage.classList.remove('non-existent-class');
console.log('After removing non-existent class:', mainImage.className);
// VISUAL CHANGE: No change (class doesn't exist)
// CONSOLE OUTPUT: "highlighted" (unchanged)

// Example 3: classList.contains() - Checking if class exists
console.log('=== CHECKING CLASSES ===');

// Check if image has specific classes
console.log('Image has "highlighted" class:', mainImage.classList.contains('highlighted'));
// CONSOLE OUTPUT: true

console.log('Image has "shadow" class:', mainImage.classList.contains('shadow'));
// CONSOLE OUTPUT: false (we removed it earlier)

console.log('Image has "border" class:', mainImage.classList.contains('border'));
// CONSOLE OUTPUT: false (we removed it earlier)

// Use contains() for conditional logic
boxLinks.forEach((link, index) => {
    if (link.classList.contains('boxLink')) {
        console.log(`Link ${index + 1} has boxLink class: true`);
        // CONSOLE OUTPUT: "Link 1 has boxLink class: true" (for each link)
    }
});

// Example 4: classList.toggle() - Adding/removing classes conditionally
console.log('=== TOGGLING CLASSES ===');

// Toggle class on main image
console.log('Before toggle - highlighted:', mainImage.classList.contains('highlighted'));
// CONSOLE OUTPUT: true

mainImage.classList.toggle('highlighted');
console.log('After first toggle - highlighted:', mainImage.classList.contains('highlighted'));
// VISUAL CHANGE: 'highlighted' class removed from image
// CONSOLE OUTPUT: false

mainImage.classList.toggle('highlighted');
console.log('After second toggle - highlighted:', mainImage.classList.contains('highlighted'));
// VISUAL CHANGE: 'highlighted' class added back to image
// CONSOLE OUTPUT: true

// Toggle with force parameter (like add/remove)
mainImage.classList.toggle('active', true);  // Force add
console.log('After forced toggle (true):', mainImage.classList.contains('active'));
// VISUAL CHANGE: 'active' class definitely added
// CONSOLE OUTPUT: true

mainImage.classList.toggle('active', false); // Force remove
console.log('After forced toggle (false):', mainImage.classList.contains('active'));
// VISUAL CHANGE: 'active' class definitely removed
// CONSOLE OUTPUT: false

// Example 5: Practical Applications with Spider-Man Elements
console.log('=== PRACTICAL APPLICATIONS ===');

// 1. Interactive box links with hover effect
boxLinks.forEach((link, index) => {
    // Add base styling class
    link.classList.add('interactive-link');
    
    // Add hover effects
    link.addEventListener('mouseenter', function() {
        this.classList.add('hovered');
        console.log(`Link ${index + 1} hovered - added 'hovered' class`);
        // VISUAL CHANGE: Link gets hover styling
    });
    
    link.addEventListener('mouseleave', function() {
        this.classList.remove('hovered');
        console.log(`Link ${index + 1} unhovered - removed 'hovered' class`);
        // VISUAL CHANGE: Link loses hover styling
    });
    
    // Add click toggle effect
    link.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('clicked');
        const isClicked = this.classList.contains('clicked');
        console.log(`Link ${index + 1} clicked - toggled 'clicked' class: ${isClicked}`);
        // VISUAL CHANGE: Link toggles between clicked/unclicked state
    });
});

// 2. Image gallery with selection states
oldImages.forEach((img, index) => {
    // Add selectable class to all images
    img.classList.add('selectable');
    
    img.addEventListener('click', function() {
        // Remove selected class from all images
        oldImages.forEach(otherImg => {
            otherImg.classList.remove('selected');
        });
        
        // Add selected class to clicked image
        this.classList.add('selected');
        console.log(`Image ${index + 1} selected - others deselected`);
        // VISUAL CHANGE: Only clicked image shows as selected
    });
});

// 3. Dynamic theme switching
heading.classList.add('theme-switchable');

// Create theme toggle button
const themeButton = document.createElement('button');
themeButton.textContent = 'Toggle Dark Theme';
themeButton.classList.add('theme-btn');
document.body.insertBefore(themeButton, document.body.firstChild);

themeButton.addEventListener('click', function() {
    // Toggle dark theme on body
    document.body.classList.toggle('dark-theme');
    
    const isDark = document.body.classList.contains('dark-theme');
    this.textContent = isDark ? 'Toggle Light Theme' : 'Toggle Dark Theme';
    console.log(`Theme switched to: ${isDark ? 'Dark' : 'Light'}`);
    // VISUAL CHANGE: Entire page switches between light/dark theme
});

// Example 6: Advanced Class Manipulation
console.log('=== ADVANCED MANIPULATION ===');

// 1. Class validation before operations
function safeAddClass(element, className) {
    if (element && className && !element.classList.contains(className)) {
        element.classList.add(className);
        console.log(`Safely added class "${className}" to element`);
        return true;
    }
    console.log(`Class "${className}" already exists or invalid parameters`);
    return false;
}

// 2. Multiple class operations
function setElementState(element, state) {
    // Remove all state classes
    element.classList.remove('loading', 'success', 'error', 'warning');
    
    // Add new state class
    if (state) {
        element.classList.add(state);
        console.log(`Element state changed to: ${state}`);
        // VISUAL CHANGE: Element styling changes based on state
    }
}

// Apply to description paragraph
const description = document.getElementById('description');
if (description) {
    description.classList.add('content-block');
    
    // Simulate different states
    setTimeout(() => {
        setElementState(description, 'loading');
        // VISUAL CHANGE: Description shows loading state
    }, 1000);
    
    setTimeout(() => {
        setElementState(description, 'success');
        // VISUAL CHANGE: Description shows success state
    }, 2000);
    
    setTimeout(() => {
        setElementState(description, null); // Remove all states
        // VISUAL CHANGE: Description returns to normal state
    }, 3000);
}

// Example 7: Class List Information
console.log('=== CLASS LIST INFORMATION ===');

// Get all classes of an element (accessing classes of an object)
const box = document.querySelector('.box');
console.log('Box element classes:');
console.log('- className:', box.className);
// CONSOLE OUTPUT: "box" (string)

console.log('- classList:', box.classList); // shows all the classes of element
// CONSOLE OUTPUT: DOMTokenList ["box"] (array-like object)

console.log('- classList.length:', box.classList.length);
// CONSOLE OUTPUT: 1 (number of classes)

// Iterate through all classes
console.log('Individual classes:');
for (let i = 0; i < box.classList.length; i++) {
    console.log(`  ${i}: ${box.classList[i]}`);
    // CONSOLE OUTPUT: "  0: box"
}

// Using forEach (modern approach)
box.classList.forEach((className, index) => {
    console.log(`Class ${index}: ${className}`);
    // CONSOLE OUTPUT: "Class 0: box"
});

// Example 8: Conditional Class Management
console.log('=== CONDITIONAL CLASS MANAGEMENT ===');

// Create utility functions
function addClassIf(element, className, condition) {
    if (condition) {
        element.classList.add(className);
        console.log(`Added "${className}" because condition is true`);
    } else {
        element.classList.remove(className);
        console.log(`Removed "${className}" because condition is false`);
    }
}

function toggleClassBasedOnContent(element, className, searchText) {
    const hasText = element.textContent.includes(searchText);
    element.classList.toggle(className, hasText);
    console.log(`${hasText ? 'Added' : 'Removed'} "${className}" based on content containing "${searchText}"`);
}

// Apply conditional classes
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach((p, index) => {
    // Add class if paragraph is long
    addClassIf(p, 'long-text', p.textContent.length > 100);
    
    // Add class if paragraph mentions Spider-Man
    toggleClassBasedOnContent(p, 'spider-mention', 'Spider-Man');
    
    console.log(`Paragraph ${index + 1} classes:`, p.className);
});

// Example 9: Performance and Best Practices
console.log('=== PERFORMANCE EXAMPLES ===');

// Efficient class operations
const testElement = document.createElement('div');
document.body.appendChild(testElement);

// ✅ Good: Use classList methods
console.time('classList operations');
testElement.classList.add('class1', 'class2', 'class3');
testElement.classList.remove('class2');
testElement.classList.toggle('class4');
console.timeEnd('classList operations');
// CONSOLE OUTPUT: Execution time (usually very fast)

// ❌ Avoid: String manipulation
console.time('className string manipulation');
testElement.className += ' class5';
testElement.className = testElement.className.replace('class1', '');
console.timeEnd('className string manipulation');
// CONSOLE OUTPUT: Execution time (usually slower and error-prone)

// Example 10: Error Handling and Edge Cases
console.log('=== ERROR HANDLING ===');

// Handle missing elements gracefully
function safeClassOperation(selector, operation, className) {
    const element = document.querySelector(selector);
    if (!element) {
        console.log(`Element with selector "${selector}" not found`);
        return false;
    }
    
    try {
        switch(operation) {
            case 'add':
                element.classList.add(className);
                break;
            case 'remove':
                element.classList.remove(className);
                break;
            case 'toggle':
                return element.classList.toggle(className);
            case 'contains':
                return element.classList.contains(className);
        }
        console.log(`Successfully performed ${operation} with class "${className}"`);
        return true;
    } catch (error) {
        console.log(`Error performing ${operation}:`, error.message);
        return false;
    }
}

// Test safe operations
safeClassOperation('#mainImg', 'add', 'test-class');          // ✅ Works
safeClassOperation('#nonexistent', 'add', 'test-class');      // ❌ Element not found
safeClassOperation('#mainImg', 'contains', 'test-class');     // ✅ Returns true

// Example 11: CSS Classes That Exist But Aren't Used
console.log('=== UNUSED CSS CLASSES DEMONSTRATION ===');

// These CSS classes exist in style.css but are not used in HTML
// When we add them via JavaScript, their styling will immediately apply
// Using previously declared variables: heading, firstParagraph, mainImage, boxLinks

console.log('Before adding CSS classes:');
console.log('- Heading classes:', heading.className); // Empty or existing classes
console.log('- Paragraph classes:', firstParagraph.className); // Empty or existing classes

// Add .highlight class (exists in CSS but unused in HTML)
heading.classList.add('highlight');
console.log('Added "highlight" class to heading');
// VISUAL CHANGE: Heading gets yellow background, orange border, padding, rounded corners
// The CSS rule .highlight immediately applies because the class was added

// Add .large-text class (exists in CSS but unused in HTML)
firstParagraph.classList.add('large-text');
console.log('Added "large-text" class to paragraph');
// VISUAL CHANGE: Paragraph text becomes larger, bold, and blue
// The CSS rule .large-text immediately applies

// Add .special-border class to main image
mainImage.classList.add('special-border');
console.log('Added "special-border" class to image');
// VISUAL CHANGE: Image gets red dashed border with shadow
// The CSS rule .special-border immediately applies

console.log('After adding CSS classes:');
console.log('- Heading classes:', heading.className);
console.log('- Paragraph classes:', firstParagraph.className);
console.log('- Image classes:', mainImage.className);

// Demonstrate toggle with existing CSS class (reusing boxLinks variable)
boxLinks.forEach((link, index) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Toggle .clicked-state class (exists in CSS but unused until now)
        this.classList.toggle('clicked-state');
        
        const hasClass = this.classList.contains('clicked-state');
        console.log(`Link ${index + 1} clicked - "clicked-state" class: ${hasClass}`);
        // VISUAL CHANGE: Link gets green background and scales up when clicked
        // VISUAL CHANGE: Click again to remove styling
        // The CSS rule .clicked-state applies/removes based on toggle
    });
});

console.log('=== KEY POINT ===');
console.log('CSS classes like .highlight, .large-text, .special-border exist in style.css');
console.log('but are not used in index.html - they become active only when JavaScript adds them!');

console.log('=== ALL CLASS MANIPULATION EXAMPLES COMPLETED ===');

