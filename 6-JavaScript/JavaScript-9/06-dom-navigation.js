// DOM Navigation Examples - parentElement, children, previousElementSibling, nextElementSibling
// Based on Spider-Man index.html

console.log('=== DOM NAVIGATION EXAMPLES ===');

// Wait for DOM to load before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    
    // Declare all variables at the top to avoid redeclaration errors
    const mainImage = document.getElementById('mainImg');
    const firstParagraph = document.querySelector('p');
    const boxContainer = document.querySelector('.container');
    const allBoxLinks = document.querySelectorAll('.boxLink');
    const heading = document.querySelector('h1');
    const description = document.getElementById('description');
    const boxElement = document.querySelector('.box');

    // Example 1: parentElement - Getting the parent of an element
    console.log('=== PARENT ELEMENT NAVIGATION ===');
    
    // Get parent of main image
    console.log('Main image element:', mainImage);
    console.log('Main image parent:', mainImage.parentElement);
    console.log('Main image parent tag name:', mainImage.parentElement.tagName);
    // OUTPUT: Shows the parent element (likely a div or section)
    // USAGE: Useful for styling parent containers or moving up the DOM tree
    
    // Get parent of first paragraph
    console.log('First paragraph parent:', firstParagraph.parentElement);
    console.log('First paragraph parent class:', firstParagraph.parentElement.className);
    // OUTPUT: Shows parent element and its classes
    
    // Chain parent navigation (grandparent)
    if (mainImage.parentElement) {
        console.log('Main image grandparent:', mainImage.parentElement.parentElement);
        console.log('Main image grandparent tag:', mainImage.parentElement.parentElement?.tagName);
        // OUTPUT: Shows grandparent element (using optional chaining for safety)
        // USAGE: Navigate multiple levels up the DOM hierarchy
    }
    
    // Practical use case: Add class to parent when child is clicked
    if (allBoxLinks.length > 0) {
        allBoxLinks[0].addEventListener('click', function(e) {
            e.preventDefault();
            // Add highlight class to parent container
            this.parentElement.classList.add('child-clicked');
            console.log('Added "child-clicked" class to parent of first box link');
            // VISUAL CHANGE: Parent container gets styling when child is clicked
        });
    }

    // Example 2: children - Getting all direct child elements
    console.log('=== CHILDREN NAVIGATION ===');
    
    // Get all children of box container
    if (boxContainer) {
        console.log('Box container children:', boxContainer.children);
        console.log('Number of children:', boxContainer.children.length);
        // OUTPUT: HTMLCollection of all direct child elements
        // NOTE: children only includes element nodes, not text nodes
        
        // Loop through all children
        console.log('All children of box container:');
        for (let i = 0; i < boxContainer.children.length; i++) {
            const child = boxContainer.children[i];
            console.log(`Child ${i + 1}:`, child.tagName, child.className || '(no class)');
            // OUTPUT: Shows tag name and class of each child
        }
        
        // Modern way using Array.from() or spread operator
        console.log('Children using modern syntax:');
        Array.from(boxContainer.children).forEach((child, index) => {
            console.log(`Child ${index + 1} ID:`, child.id || '(no ID)');
            console.log(`Child ${index + 1} text content:`, child.textContent.trim().substring(0, 30) + '...');
        });
        
        // Access specific child by index
        console.log('First child:', boxContainer.children[0]);
        console.log('Last child:', boxContainer.children[boxContainer.children.length - 1]);
        // OUTPUT: Direct access to first and last child elements
    }
    
    // Practical use case: Style alternate children
    if (boxContainer && boxContainer.children.length > 0) {
        Array.from(boxContainer.children).forEach((child, index) => {
            if (index % 2 === 0) {
                child.classList.add('even-child');
                console.log(`Added "even-child" class to child ${index + 1}`);
                // VISUAL CHANGE: Every other child gets special styling
            } else {
                child.classList.add('odd-child');
                console.log(`Added "odd-child" class to child ${index + 1}`);
                // VISUAL CHANGE: Alternating children get different styling
            }
        });
    }

    // Example 3: previousElementSibling - Getting the previous sibling
    console.log('=== PREVIOUS SIBLING NAVIGATION ===');
    
    // Find previous sibling of description paragraph
    if (description) {
        console.log('Description element:', description);
        console.log('Previous sibling:', description.previousElementSibling);
        
        if (description.previousElementSibling) {
            console.log('Previous sibling tag:', description.previousElementSibling.tagName);
            console.log('Previous sibling text:', description.previousElementSibling.textContent.substring(0, 50) + '...');
            // OUTPUT: Shows the element that comes before description in the same parent
        } else {
            console.log('Description has no previous sibling');
        }
    }
    
    // Navigate through all box links using previousElementSibling
    if (allBoxLinks.length > 1) {
        const lastBoxLink = allBoxLinks[allBoxLinks.length - 1];
        console.log('Starting from last box link, going backwards:');
        
        let currentElement = lastBoxLink;
        let count = 1;
        while (currentElement) {
            console.log(`Element ${count}:`, currentElement.textContent.trim().substring(0, 30));
            currentElement = currentElement.previousElementSibling;
            count++;
            if (count > 10) break; // Safety limit
        }
        // OUTPUT: Shows all siblings from last to first
        // USAGE: Useful for creating navigation or breadcrumb functionality
    }
    
    // Practical use case: Highlight previous sibling when element is hovered
    allBoxLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', function() {
            if (this.previousElementSibling) {
                this.previousElementSibling.classList.add('next-to-hovered');
                console.log(`Added highlight to previous sibling of link ${index + 1}`);
                // VISUAL CHANGE: Previous sibling gets styling when current is hovered
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (this.previousElementSibling) {
                this.previousElementSibling.classList.remove('next-to-hovered');
                console.log(`Removed highlight from previous sibling of link ${index + 1}`);
                // VISUAL CHANGE: Previous sibling loses styling when hover ends
            }
        });
    });

    // Example 4: nextElementSibling - Getting the next sibling
    console.log('=== NEXT SIBLING NAVIGATION ===');
    
    // Find next sibling of first paragraph
    if (firstParagraph) {
        console.log('First paragraph:', firstParagraph.textContent.substring(0, 50) + '...');
        console.log('Next sibling:', firstParagraph.nextElementSibling);
        
        if (firstParagraph.nextElementSibling) {
            console.log('Next sibling tag:', firstParagraph.nextElementSibling.tagName);
            console.log('Next sibling content:', firstParagraph.nextElementSibling.textContent.substring(0, 50) + '...');
            // OUTPUT: Shows the element that comes after first paragraph
        } else {
            console.log('First paragraph has no next sibling');
        }
    }
    
    // Navigate through all siblings using nextElementSibling
    if (allBoxLinks.length > 0) {
        const firstBoxLink = allBoxLinks[0];
        console.log('Starting from first box link, going forwards:');
        
        let currentElement = firstBoxLink;
        let count = 1;
        while (currentElement) {
            console.log(`Element ${count}:`, currentElement.textContent.trim().substring(0, 30));
            currentElement = currentElement.nextElementSibling;
            count++;
            if (count > 10) break; // Safety limit
        }
        // OUTPUT: Shows all siblings from first to last
        // USAGE: Useful for sequential processing or carousel functionality
    }
    
    // Practical use case: Create a next/previous navigation system
    allBoxLinks.forEach((link, index) => {
        // Add click handler to navigate to next sibling
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            allBoxLinks.forEach(l => l.classList.remove('active-link'));
            
            // Add active class to current link
            this.classList.add('active-link');
            
            // If there's a next sibling, prepare it for next click
            if (this.nextElementSibling) {
                this.nextElementSibling.classList.add('next-ready');
                console.log(`Link ${index + 1} activated, next sibling ready`);
                // VISUAL CHANGE: Current link becomes active, next becomes ready
            }
            
            // Remove ready class from previous sibling
            if (this.previousElementSibling) {
                this.previousElementSibling.classList.remove('next-ready');
            }
        });
    });

    // Example 5: Combining Navigation Methods - Complex DOM Traversal
    console.log('=== COMPLEX NAVIGATION EXAMPLES ===');
    
    // Function to get all siblings of an element
    function getAllSiblings(element) {
        const siblings = [];
        let sibling = element.parentElement.children[0];
        
        while (sibling) {
            if (sibling !== element) {
                siblings.push(sibling);
            }
            sibling = sibling.nextElementSibling;
        }
        
        return siblings;
        // USAGE: Get all elements at the same level except the current one
    }
    
    // Function to find element by relative position
    function getRelativeElement(element, direction, steps = 1) {
        let current = element;
        const prop = direction === 'next' ? 'nextElementSibling' : 'previousElementSibling';
        
        for (let i = 0; i < steps; i++) {
            if (current[prop]) {
                current = current[prop];
            } else {
                return null; // Reached end
            }
        }
        
        return current;
        // USAGE: Get element N steps away in either direction
    }
    
    // Test complex navigation functions
    if (allBoxLinks.length > 2) {
        const middleLink = allBoxLinks[1];
        console.log('Middle link siblings:', getAllSiblings(middleLink).length);
        console.log('Element 2 steps forward:', getRelativeElement(middleLink, 'next', 2));
        console.log('Element 1 step backward:', getRelativeElement(middleLink, 'previous', 1));
    }

    // Example 6: Family Tree Navigation
    console.log('=== FAMILY TREE NAVIGATION ===');
    
    // Function to show element's family tree
    function showFamilyTree(element, elementName) {
        console.log(`\n=== Family Tree for ${elementName} ===`);
        
        // Show parent
        if (element.parentElement) {
            console.log('Parent:', element.parentElement.tagName, element.parentElement.className || '(no class)');
            
            // Show grandparent
            if (element.parentElement.parentElement) {
                console.log('Grandparent:', element.parentElement.parentElement.tagName);
            }
        }
        
        // Show children
        if (element.children.length > 0) {
            console.log('Children:');
            Array.from(element.children).forEach((child, index) => {
                console.log(`  Child ${index + 1}:`, child.tagName, child.className || '(no class)');
            });
        } else {
            console.log('No children');
        }
        
        // Show siblings
        const siblings = getAllSiblings(element);
        if (siblings.length > 0) {
            console.log('Siblings:');
            siblings.forEach((sibling, index) => {
                console.log(`  Sibling ${index + 1}:`, sibling.tagName, sibling.className || '(no class)');
            });
        } else {
            console.log('No siblings');
        }
        
        console.log('=== End Family Tree ===\n');
    }
    
    // Show family trees for key elements
    if (mainImage) showFamilyTree(mainImage, 'Main Image');
    if (boxContainer) showFamilyTree(boxContainer, 'Box Container');
    if (firstParagraph) showFamilyTree(firstParagraph, 'First Paragraph');

    // Example 7: Navigation-Based Event Delegation
    console.log('=== NAVIGATION-BASED EVENT HANDLING ===');
    
    // Click handler that affects siblings and parent
    document.addEventListener('click', function(e) {
        // If clicked element is a box link
        if (e.target.classList.contains('boxLink')) {
            console.log('Box link clicked - applying navigation-based effects');
            
            // Style the parent
            if (e.target.parentElement) {
                e.target.parentElement.classList.add('child-was-clicked');
                console.log('Added class to parent');
            }
            
            // Style previous sibling
            if (e.target.previousElementSibling) {
                e.target.previousElementSibling.classList.add('sibling-after-clicked');
                console.log('Added class to previous sibling');
            }
            
            // Style next sibling
            if (e.target.nextElementSibling) {
                e.target.nextElementSibling.classList.add('sibling-before-clicked');
                console.log('Added class to next sibling');
            }
            
            // Style all siblings
            getAllSiblings(e.target).forEach(sibling => {
                sibling.classList.add('other-sibling');
            });
            console.log('Added class to all other siblings');
            
            // VISUAL CHANGE: Clicked element affects its entire family
        }
    });

    // Example 8: Breadcrumb Navigation
    console.log('=== BREADCRUMB NAVIGATION ===');
    
    // Function to create breadcrumb path to root
    function createBreadcrumb(element) {
        const path = [];
        let current = element;
        
        while (current && current !== document.body) {
            const info = {
                tag: current.tagName,
                id: current.id || null,
                class: current.className || null,
                text: current.textContent ? current.textContent.substring(0, 20) + '...' : null
            };
            path.unshift(info); // Add to beginning
            current = current.parentElement;
        }
        
        return path;
        // USAGE: Shows the path from document root to target element
    }
    
    // Create breadcrumbs for different elements
    if (mainImage) {
        console.log('Breadcrumb to main image:', createBreadcrumb(mainImage));
    }
    
    if (allBoxLinks.length > 0) {
        console.log('Breadcrumb to first box link:', createBreadcrumb(allBoxLinks[0]));
    }

    // Example 9: Practical Navigation Utilities
    console.log('=== NAVIGATION UTILITIES ===');
    
    // Find closest element with specific class (going up)
    function findAncestorWithClass(element, className) {
        let current = element.parentElement;
        while (current && current !== document.body) {
            if (current.classList.contains(className)) {
                return current;
            }
            current = current.parentElement;
        }
        return null;
        // USAGE: Find closest parent with specific class (like jQuery's closest())
    }
    
    // Find first child with specific class (going down)
    function findChildWithClass(element, className) {
        for (let child of element.children) {
            if (child.classList.contains(className)) {
                return child;
            }
            // Recursively search in child's children
            const found = findChildWithClass(child, className);
            if (found) return found;
        }
        return null;
        // USAGE: Find first descendant with specific class
    }
    
    // Find sibling with specific class
    function findSiblingWithClass(element, className) {
        // Check previous siblings
        let current = element.previousElementSibling;
        while (current) {
            if (current.classList.contains(className)) {
                return current;
            }
            current = current.previousElementSibling;
        }
        
        // Check next siblings
        current = element.nextElementSibling;
        while (current) {
            if (current.classList.contains(className)) {
                return current;
            }
            current = current.nextElementSibling;
        }
        
        return null;
        // USAGE: Find any sibling with specific class
    }
    
    // Test utility functions
    if (allBoxLinks.length > 0) {
        const firstLink = allBoxLinks[0];
        console.log('Ancestor with "container" class:', findAncestorWithClass(firstLink, 'container'));
        console.log('Sibling with "boxLink" class:', findSiblingWithClass(firstLink, 'boxLink'));
    }

    // Example 10: Performance Considerations
    console.log('=== PERFORMANCE TIPS ===');
    
    // ✅ Good: Cache parent reference if used multiple times
    console.time('Cached parent access');
    if (mainImage) {
        const parent = mainImage.parentElement;
        for (let i = 0; i < 1000; i++) {
            const test = parent.tagName; // Use cached reference
        }
    }
    console.timeEnd('Cached parent access');
    
    // ❌ Avoid: Repeatedly accessing parent
    console.time('Repeated parent access');
    if (mainImage) {
        for (let i = 0; i < 1000; i++) {
            const test = mainImage.parentElement.tagName; // DOM access each time
        }
    }
    console.timeEnd('Repeated parent access');
    
    // ✅ Good: Convert HTMLCollection to Array once
    console.time('Array conversion once');
    if (boxContainer) {
        const childrenArray = Array.from(boxContainer.children);
        childrenArray.forEach(child => {
            const test = child.tagName;
        });
    }
    console.timeEnd('Array conversion once');
    
    // ❌ Avoid: Working with HTMLCollection directly in loops
    console.time('HTMLCollection direct access');
    if (boxContainer) {
        for (let i = 0; i < boxContainer.children.length; i++) {
            const test = boxContainer.children[i].tagName; // Access by index each time
        }
    }
    console.timeEnd('HTMLCollection direct access');

    console.log('=== ALL DOM NAVIGATION EXAMPLES COMPLETED ===');
    console.log('\nKey Takeaways:');
    console.log('1. parentElement: Navigate up the DOM tree');
    console.log('2. children: Get all direct child elements (HTMLCollection)');
    console.log('3. previousElementSibling: Get previous sibling at same level');
    console.log('4. nextElementSibling: Get next sibling at same level');
    console.log('5. Use these for dynamic styling, event delegation, and DOM traversal');
    console.log('6. Always check for null/undefined before accessing properties');
    console.log('7. Cache references for better performance when accessing multiple times');
    
});

// Note: Some examples may not work immediately if the DOM elements don't exist
// Make sure to run this code with the corresponding HTML file that has:
// - Elements with IDs: mainImg, description
// - Elements with classes: container, boxLink, box
// - Various paragraph and heading elements