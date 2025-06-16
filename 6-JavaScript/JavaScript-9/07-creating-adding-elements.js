// DOM Element Creation and Insertion Examples
// createElement(), appendChild(), append(), prepend(), insertAdjacent()
// Based on Spider-Man index.html

console.log('=== DOM ELEMENT CREATION AND INSERTION EXAMPLES ===');

// Wait for DOM to load before manipulating elements
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to existing elements for insertion examples
    const mainContainer = document.querySelector('.container') || document.body;
    const mainImage = document.getElementById('mainImg');
    const firstParagraph = document.querySelector('p');
    const boxLinks = document.querySelectorAll('.boxLink');

    // Example 1: document.createElement() - Creating new elements
    console.log('=== CREATING ELEMENTS ===');
    
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    console.log('Created new paragraph:', newParagraph);
    // OUTPUT: Shows the new paragraph element (empty at this point)
    // USAGE: Creates an HTML element in memory (not yet added to page)
    
    // Add content to the new paragraph
    newParagraph.textContent = 'This paragraph was created with JavaScript!';
    newParagraph.id = 'js-created-paragraph';
    newParagraph.className = 'dynamic-content';
    console.log('Paragraph with content:', newParagraph.textContent);
    // OUTPUT: "This paragraph was created with JavaScript!"
    
    // Create a new heading
    const newHeading = document.createElement('h2');
    newHeading.textContent = 'Dynamic Spider-Man Facts';
    newHeading.style.color = 'red';
    newHeading.style.textAlign = 'center';
    console.log('Created heading:', newHeading.textContent);
    // OUTPUT: "Dynamic Spider-Man Facts"

    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = 'assets/spiderman_img.png';
    newImage.alt = 'Dynamically created Spider-Man image';
    newImage.style.width = '200px';
    newImage.style.height = 'auto';
    newImage.className = 'js-created-image';
    console.log('Created image with src:', newImage.src);
    // OUTPUT: Shows the image source path
    
    // Create a new div container
    const newDiv = document.createElement('div');
    newDiv.className = 'js-container';
    newDiv.style.border = '2px solid blue';
    newDiv.style.padding = '20px';
    newDiv.style.margin = '10px 0';
    newDiv.style.backgroundColor = '#f0f0f0';
    console.log('Created div container');
    // OUTPUT: Confirmation message

    // Example 2: appendChild() - Adding elements as last child
    console.log('=== APPENDING ELEMENTS ===');
    
    // Add paragraph to main container using appendChild
    mainContainer.appendChild(newParagraph);
    console.log('Appended paragraph to main container');
    // VISUAL CHANGE: New paragraph appears at the end of main container
    // USAGE: appendChild() adds element as the LAST child
    
    // Add heading to the new div
    newDiv.appendChild(newHeading);
    console.log('Appended heading to new div');
    // VISUAL CHANGE: Heading appears inside the div
    
    // Add image to the new div
    newDiv.appendChild(newImage);
    console.log('Appended image to new div');
    // VISUAL CHANGE: Image appears below heading in the div
    
    // Add the div to main container
    mainContainer.appendChild(newDiv);
    console.log('Appended div container to main container');
    // VISUAL CHANGE: Entire div (with heading and image) appears on page
    
    // Create and append multiple list items
    const dynamicList = document.createElement('ul');
    dynamicList.className = 'spider-facts';
    dynamicList.style.listStyle = 'none';
    dynamicList.style.padding = '0';
    
    const facts = [
        'Spider-Man was created by Stan Lee and Steve Ditko',
        'His first appearance was in Amazing Fantasy #15 (1962)',
        'Peter Parker gained powers from a radioactive spider bite',
        'His motto: "With great power comes great responsibility"'
    ];
    
    facts.forEach((fact, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${fact}`;
        listItem.style.padding = '5px 0';
        listItem.style.borderBottom = '1px solid #ccc';
        dynamicList.appendChild(listItem);
        console.log(`Added fact ${index + 1} to list`);
    });
    
    mainContainer.appendChild(dynamicList);
    console.log('Appended facts list to main container');
    // VISUAL CHANGE: Numbered list of Spider-Man facts appears

    // Example 3: append() - Modern alternative to appendChild <-- used mostly
    console.log('=== USING APPEND METHOD ===');
    
    // Create multiple elements to demonstrate append()
    const infoSection = document.createElement('section');
    infoSection.className = 'info-section';
    infoSection.style.backgroundColor = '#ffe6e6';
    infoSection.style.padding = '15px';
    infoSection.style.marginTop = '20px';
    
    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = 'Additional Spider-Man Info';
    
    const sectionText = document.createElement('p');
    sectionText.textContent = 'Spider-Man has appeared in countless comics, movies, and TV shows.';
    
    // append() can add multiple elements at once
    infoSection.append(sectionTitle, sectionText);
    console.log('Used append() to add title and text to section');
    // VISUAL CHANGE: Both title and paragraph appear in section
    // USAGE: append() is more flexible than appendChild() - can add multiple elements
    
    // append() can also add text directly (without creating text nodes)
    const quickInfo = document.createElement('div');
    quickInfo.append('Quick fact: ', 'Spider-Man\'s web-shooters are mechanical devices.');
    infoSection.append(quickInfo);
    console.log('Used append() to add text and elements together');
    // VISUAL CHANGE: Additional info appears in section
    
    mainContainer.append(infoSection);
    console.log('Appended info section to main container');

    // Example 4: prepend() - Adding elements as first child
    console.log('=== PREPENDING ELEMENTS ===');
    
    // Create a header for the page
    const pageHeader = document.createElement('header');
    pageHeader.className = 'dynamic-header';
    pageHeader.style.backgroundColor = '#333';
    pageHeader.style.color = 'white';
    pageHeader.style.padding = '20px';
    pageHeader.style.textAlign = 'center';
    pageHeader.style.marginBottom = '20px';
    
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Dynamic Spider-Man Page';
    
    const headerSubtitle = document.createElement('p');
    headerSubtitle.textContent = 'Created dynamically with JavaScript';
    headerSubtitle.style.margin = '10px 0 0 0';
    headerSubtitle.style.fontSize = '14px';
    headerSubtitle.style.opacity = '0.8';
    
    pageHeader.append(headerTitle, headerSubtitle);
    
    // Use prepend to add header at the beginning
    mainContainer.prepend(pageHeader);
    console.log('Prepended header to main container');
    // VISUAL CHANGE: Header appears at the TOP of the container
    // USAGE: prepend() adds element as the FIRST child
    
    // Create a warning notice to prepend to info section
    const warningNotice = document.createElement('div');
    warningNotice.className = 'warning';
    warningNotice.textContent = '⚠️ This content was generated dynamically';
    warningNotice.style.backgroundColor = '#fff3cd';
    warningNotice.style.border = '1px solid #ffeaa7';
    warningNotice.style.padding = '10px';
    warningNotice.style.marginBottom = '15px';
    warningNotice.style.borderRadius = '4px';
    
    infoSection.prepend(warningNotice);
    console.log('Prepended warning to info section');
    // VISUAL CHANGE: Warning appears at top of info section

    // Example 5: insertAdjacentElement() - Precise positioning
    console.log('=== INSERT ADJACENT ELEMENTS ===');
    
    // insertAdjacentElement() positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
    
    // Create elements for insertion examples
    const beforeElement = document.createElement('div');
    beforeElement.textContent = 'BEFORE the first paragraph';
    beforeElement.style.backgroundColor = '#e6ffe6';
    beforeElement.style.padding = '10px';
    beforeElement.style.border = '1px solid green';
    
    const afterElement = document.createElement('div');
    afterElement.textContent = 'AFTER the first paragraph';
    afterElement.style.backgroundColor = '#ffe6f2';
    afterElement.style.padding = '10px';
    afterElement.style.border = '1px solid pink';
    
    const insideBeginElement = document.createElement('span');
    insideBeginElement.textContent = '[INSERTED AT BEGINNING] ';
    insideBeginElement.style.backgroundColor = 'yellow';
    insideBeginElement.style.fontWeight = 'bold';
    
    const insideEndElement = document.createElement('span');
    insideEndElement.textContent = ' [INSERTED AT END]';
    insideEndElement.style.backgroundColor = 'orange';
    insideEndElement.style.fontWeight = 'bold';
    
    if (firstParagraph) {
        // Insert before the paragraph (outside)
        firstParagraph.insertAdjacentElement('beforebegin', beforeElement);
        console.log('Inserted element BEFORE first paragraph');
        // VISUAL CHANGE: Green box appears before the paragraph
        
        // Insert after the paragraph (outside)
        firstParagraph.insertAdjacentElement('afterend', afterElement);
        console.log('Inserted element AFTER first paragraph');
        // VISUAL CHANGE: Pink box appears after the paragraph
        
        // Insert at beginning of paragraph content (inside)
        firstParagraph.insertAdjacentElement('afterbegin', insideBeginElement);
        console.log('Inserted element at BEGINNING of paragraph content');
        // VISUAL CHANGE: Yellow text appears at start of paragraph text
        
        // Insert at end of paragraph content (inside)
        firstParagraph.insertAdjacentElement('beforeend', insideEndElement);
        console.log('Inserted element at END of paragraph content');
        // VISUAL CHANGE: Orange text appears at end of paragraph text
    }

    // Example 6: insertAdjacentHTML() - Insert HTML strings
    console.log('=== INSERT ADJACENT HTML ===');
    
    // insertAdjacentHTML() is useful for inserting HTML markup directly
    if (mainImage) {
        // Insert HTML before the image
        mainImage.insertAdjacentHTML('beforebegin', `
            <div class="image-caption" style="text-align: center; font-style: italic; color: #666;">
                Main Spider-Man Image Below:
            </div>
        `);
        console.log('Inserted HTML caption before main image');
        // VISUAL CHANGE: Italic caption appears above main image
        
        // Insert HTML after the image
        mainImage.insertAdjacentHTML('afterend', `
            <div class="image-info" style="background: #f9f9f9; padding: 10px; margin: 10px 0; border-left: 4px solid red;">
                <strong>Image Info:</strong> This is the main Spider-Man promotional image.
                <br><small>Source: assets/spiderman_img.png</small>
            </div>
        `);
        console.log('Inserted HTML info after main image');
        // VISUAL CHANGE: Info box with border appears below main image
    }

    // Example 7: insertAdjacentText() - Insert plain text
    console.log('=== INSERT ADJACENT TEXT ===');
    
    // insertAdjacentText() safely inserts text without HTML interpretation
    const textDemo = document.createElement('div');
    textDemo.textContent = 'Base text content';
    textDemo.style.border = '1px solid #ccc';
    textDemo.style.padding = '10px';
    textDemo.style.margin = '10px 0';
    
    mainContainer.appendChild(textDemo);
    
    // Insert text at different positions
    textDemo.insertAdjacentText('beforebegin', 'Text before div: ');
    textDemo.insertAdjacentText('afterbegin', '[Start] ');
    textDemo.insertAdjacentText('beforeend', ' [End]');
    textDemo.insertAdjacentText('afterend', ' Text after div.');
    
    console.log('Inserted text at various positions around div');
    // VISUAL CHANGE: Text appears before, inside (start/end), and after the div
    // USAGE: insertAdjacentText() is safe for user input (prevents XSS attacks)

    // Example 8: Dynamic Form Creation
    console.log('=== DYNAMIC FORM CREATION ===');
    
    // Create a complete form dynamically
    const feedbackForm = document.createElement('form');
    feedbackForm.className = 'dynamic-form';
    feedbackForm.style.backgroundColor = '#f8f9fa';
    feedbackForm.style.padding = '20px';
    feedbackForm.style.border = '1px solid #dee2e6';
    feedbackForm.style.borderRadius = '8px';
    feedbackForm.style.marginTop = '20px';
    
    // Form title
    const formTitle = document.createElement('h3');
    formTitle.textContent = 'Spider-Man Feedback Form';
    formTitle.style.marginTop = '0';
    formTitle.style.color = '#dc3545';
    
    // Name input
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Your Name:';
    nameLabel.style.display = 'block';
    nameLabel.style.marginBottom = '5px';
    nameLabel.style.fontWeight = 'bold';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Enter your name';
    nameInput.style.width = '100%';
    nameInput.style.padding = '8px';
    nameInput.style.marginBottom = '15px';
    nameInput.style.border = '1px solid #ccc';
    nameInput.style.borderRadius = '4px';
    
    // Rating select
    const ratingLabel = document.createElement('label');
    ratingLabel.textContent = 'Rate Spider-Man:';
    ratingLabel.style.display = 'block';
    ratingLabel.style.marginBottom = '5px';
    ratingLabel.style.fontWeight = 'bold';
    
    const ratingSelect = document.createElement('select');
    ratingSelect.name = 'rating';
    ratingSelect.style.width = '100%';
    ratingSelect.style.padding = '8px';
    ratingSelect.style.marginBottom = '15px';
    ratingSelect.style.border = '1px solid #ccc';
    ratingSelect.style.borderRadius = '4px';
    
    const ratings = ['Select Rating', '5 - Amazing!', '4 - Great', '3 - Good', '2 - Okay', '1 - Poor'];
    ratings.forEach((rating, index) => {
        const option = document.createElement('option');
        option.value = index === 0 ? '' : index;
        option.textContent = rating;
        if (index === 0) option.disabled = true;
        ratingSelect.appendChild(option);
    });
    
    // Comments textarea
    const commentsLabel = document.createElement('label');
    commentsLabel.textContent = 'Comments:';
    commentsLabel.style.display = 'block';
    commentsLabel.style.marginBottom = '5px';
    commentsLabel.style.fontWeight = 'bold';
    
    const commentsTextarea = document.createElement('textarea');
    commentsTextarea.name = 'comments';
    commentsTextarea.placeholder = 'Share your thoughts about Spider-Man...';
    commentsTextarea.rows = 4;
    commentsTextarea.style.width = '100%';
    commentsTextarea.style.padding = '8px';
    commentsTextarea.style.marginBottom = '15px';
    commentsTextarea.style.border = '1px solid #ccc';
    commentsTextarea.style.borderRadius = '4px';
    commentsTextarea.style.resize = 'vertical';
    
    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit Feedback';
    submitButton.style.backgroundColor = '#dc3545';
    submitButton.style.color = 'white';
    submitButton.style.padding = '10px 20px';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '4px';
    submitButton.style.cursor = 'pointer';
    submitButton.style.fontSize = '16px';
    
    // Add hover effect to button
    submitButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#c82333';
    });
    submitButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#dc3545';
    });
    
    // Assemble the form
    feedbackForm.append(
        formTitle,
        nameLabel,
        nameInput,
        ratingLabel,
        ratingSelect,
        commentsLabel,
        commentsTextarea,
        submitButton
    );
    
    // Add form submission handler
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        console.log('Form submitted with data:');
        console.log('Name:', formData.get('name'));
        console.log('Rating:', formData.get('rating'));
        console.log('Comments:', formData.get('comments'));
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.textContent = '✅ Thank you for your feedback!';
        successMsg.style.backgroundColor = '#d4edda';
        successMsg.style.border = '1px solid #c3e6cb';
        successMsg.style.color = '#155724';
        successMsg.style.padding = '12px';
        successMsg.style.borderRadius = '4px';
        successMsg.style.marginTop = '15px';
        
        this.appendChild(successMsg);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            this.reset();
            successMsg.remove();
        }, 3000);
    });
    
    mainContainer.appendChild(feedbackForm);
    console.log('Created and added complete feedback form');
    // VISUAL CHANGE: Complete interactive form appears on page

    // Example 9: Dynamic Navigation Menu
    console.log('=== DYNAMIC NAVIGATION CREATION ===');
    
    // Create a navigation menu dynamically
    const navMenu = document.createElement('nav');
    navMenu.className = 'dynamic-nav';
    navMenu.style.backgroundColor = '#343a40';
    navMenu.style.padding = '0';
    navMenu.style.marginBottom = '20px';
    
    const navList = document.createElement('ul');
    navList.style.listStyle = 'none';
    navList.style.margin = '0';
    navList.style.padding = '0';
    navList.style.display = 'flex';
    navList.style.flexWrap = 'wrap';
    
    const menuItems = [
        { text: 'Home', url: '#home', icon: '🏠' },
        { text: 'Comics', url: '#comics', icon: '📚' },
        { text: 'Movies', url: '#movies', icon: '🎬' },
        { text: 'Games', url: '#games', icon: '🎮' },
        { text: 'News', url: '#news', icon: '📰' }
    ];
    
    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        
        const link = document.createElement('a');
        link.href = item.url;
        link.innerHTML = `${item.icon} ${item.text}`;
        link.style.display = 'block';
        link.style.padding = '15px 20px';
        link.style.color = 'white';
        link.style.textDecoration = 'none';
        link.style.transition = 'background-color 0.3s';
        
        // Add hover effects
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#495057';
        });
        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
        
        // Add click handler
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(`Navigated to: ${item.text}`);
            
            // Remove active class from all links
            navList.querySelectorAll('a').forEach(a => {
                a.style.backgroundColor = 'transparent';
                a.style.fontWeight = 'normal';
            });
            
            // Add active state to clicked link
            this.style.backgroundColor = '#dc3545';
            this.style.fontWeight = 'bold';
        });
        
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
    
    navMenu.appendChild(navList);
    
    // Insert navigation at the top of the page
    if (pageHeader) {
        pageHeader.insertAdjacentElement('afterend', navMenu);
    } else {
        mainContainer.prepend(navMenu);
    }
    
    console.log('Created and added dynamic navigation menu');
    // VISUAL CHANGE: Interactive navigation menu appears near top of page

    // Example 10: Element Removal and Cleanup
    console.log('=== ELEMENT REMOVAL EXAMPLES ===');
    
    // Create temporary elements for removal demonstration
    const tempContainer = document.createElement('div');
    tempContainer.className = 'temp-container';
    tempContainer.style.backgroundColor = '#fff3cd';
    tempContainer.style.border = '1px solid #ffeaa7';
    tempContainer.style.padding = '15px';
    tempContainer.style.margin = '20px 0';
    tempContainer.style.borderRadius = '4px';
    
    const tempTitle = document.createElement('h4');
    tempTitle.textContent = 'Temporary Content (Will be removed)';
    tempTitle.style.margin = '0 0 10px 0';
    
    const tempText = document.createElement('p');
    tempText.textContent = 'This content will be automatically removed in 5 seconds.';
    tempText.style.margin = '0';
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Now';
    removeButton.style.backgroundColor = '#dc3545';
    removeButton.style.color = 'white';
    removeButton.style.border = 'none';
    removeButton.style.padding = '5px 10px';
    removeButton.style.borderRadius = '3px';
    removeButton.style.cursor = 'pointer';
    removeButton.style.marginTop = '10px';
    
    tempContainer.append(tempTitle, tempText, removeButton);
    mainContainer.appendChild(tempContainer);
    
    // Add click handler to remove button using remove() method
    removeButton.addEventListener('click', function() {
        tempContainer.remove(); // ✅ Modern way - element removes itself
        console.log('Temporary container removed by button click using remove()');
        // VISUAL CHANGE: Entire temp container disappears immediately
    });
    
    // Example: removeChild() - Traditional method (for reference)
    // Create a small demo element to show removeChild() usage
    const removeChildDemo = document.createElement('div');
    removeChildDemo.style.backgroundColor = '#f0f8ff';
    removeChildDemo.style.border = '1px solid #4dabf7';
    removeChildDemo.style.padding = '10px';
    removeChildDemo.style.margin = '10px 0';
    removeChildDemo.style.borderRadius = '4px';
    
    const demoText = document.createElement('p');
    demoText.textContent = 'This demonstrates removeChild() method';
    demoText.style.margin = '0 0 10px 0';
    
    const removeChildButton = document.createElement('button');
    removeChildButton.textContent = 'Remove with removeChild()';
    removeChildButton.style.backgroundColor = '#007bff';
    removeChildButton.style.color = 'white';
    removeChildButton.style.border = 'none';
    removeChildButton.style.padding = '5px 10px';
    removeChildButton.style.borderRadius = '3px';
    removeChildButton.style.cursor = 'pointer';
    
    removeChildDemo.append(demoText, removeChildButton);
    mainContainer.appendChild(removeChildDemo);
    
    // Add click handler using removeChild() method
    removeChildButton.addEventListener('click', function() {
        const parent = removeChildDemo.parentElement; // Get parent element
        parent.removeChild(removeChildDemo); // ✅ Traditional way - parent removes child
        console.log('Demo removed using removeChild() method');
        // VISUAL CHANGE: Demo container disappears
        // USAGE: parent.removeChild(child) - requires parent reference
        // NOTE: removeChild() is older method, remove() is preferred for modern browsers
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (tempContainer.parentElement) {
            tempContainer.remove();
            console.log('Temporary container auto-removed after 5 seconds');
            // VISUAL CHANGE: Temp container disappears after 5 seconds
        }
    }, 5000);
    
    console.log('Created temporary content with removal options');

    // Example 11: Performance Considerations and Best Practices
    console.log('=== PERFORMANCE AND BEST PRACTICES ===');
    
    // ✅ Good: Create elements in memory first, then add to DOM
    console.time('Efficient DOM creation');
    const efficientContainer = document.createElement('div');
    for (let i = 0; i < 100; i++) {
        const item = document.createElement('div');
        item.textContent = `Item ${i + 1}`;
        item.style.padding = '2px 5px';
        item.style.borderBottom = '1px solid #eee';
        efficientContainer.appendChild(item); // Add to container in memory
    }
    // Add container to DOM only once
    const hiddenContainer = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = 'Click to show 100 dynamically created items';
    summary.style.cursor = 'pointer';
    summary.style.padding = '10px';
    summary.style.backgroundColor = '#e9ecef';
    summary.style.border = '1px solid #dee2e6';
    hiddenContainer.appendChild(summary);
    hiddenContainer.appendChild(efficientContainer);
    mainContainer.appendChild(hiddenContainer);
    console.timeEnd('Efficient DOM creation');
    // OUTPUT: Shows time taken for efficient creation
    
    // ❌ Avoid: Adding elements to DOM one by one (causes multiple reflows)
    console.time('Inefficient DOM creation');
    const inefficientContainer = document.createElement('div');
    inefficientContainer.style.display = 'none'; // Hide to reduce visual impact
    mainContainer.appendChild(inefficientContainer);
    for (let i = 0; i < 100; i++) {
        const item = document.createElement('div');
        item.textContent = `Inefficient Item ${i + 1}`;
        inefficientContainer.appendChild(item); // DOM access each time
    }
    console.timeEnd('Inefficient DOM creation');
    // OUTPUT: Shows time taken for inefficient creation (usually slower)
    
    // ✅ Good: Use DocumentFragment for multiple insertions
    console.time('DocumentFragment creation');
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 50; i++) {
        const item = document.createElement('span');
        item.textContent = `Fragment ${i + 1} `;
        item.style.display = 'inline-block';
        item.style.padding = '2px 4px';
        item.style.margin = '1px';
        item.style.backgroundColor = '#e6f3ff';
        item.style.border = '1px solid #b3d9ff';
        item.style.borderRadius = '3px';
        fragment.appendChild(item);
    }
    const fragmentContainer = document.createElement('div');
    fragmentContainer.style.marginTop = '15px';
    fragmentContainer.appendChild(fragment); // Single DOM operation
    mainContainer.appendChild(fragmentContainer);
    console.timeEnd('DocumentFragment creation');
    // OUTPUT: Shows time for fragment-based creation (usually fastest)
    
    console.log('=== SUMMARY OF INSERTION METHODS ===');
    console.log('1. createElement(): Creates new elements in memory');
    console.log('2. appendChild(): Adds element as last child');
    console.log('3. append(): Modern alternative, can add multiple elements');
    console.log('4. prepend(): Adds element as first child');
    console.log('5. insertAdjacentElement(): Precise positioning (beforebegin, afterbegin, beforeend, afterend)');
    console.log('6. insertAdjacentHTML(): Insert HTML strings safely');
    console.log('7. insertAdjacentText(): Insert plain text safely');
    console.log('8. DocumentFragment: Efficient way to add multiple elements');
    console.log('9. remove(): Remove elements from DOM');
    console.log('10. Performance tip: Create in memory first, then add to DOM');

    console.log('=== ALL DOM CREATION AND INSERTION EXAMPLES COMPLETED ===');
    
});

// Note: This file demonstrates comprehensive DOM manipulation techniques
// Make sure to run this code with the corresponding HTML file
// All examples include visual changes and console output for learning
// Performance examples help understand best practices for real applications