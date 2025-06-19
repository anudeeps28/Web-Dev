// DOM Events Fundamentals - Complete Guide
// Topics: Basic Event Concepts, Event Listeners, Event Object, Event Flow
// This file serves as comprehensive reference notes for DOM events

console.log('=== DOM EVENTS FUNDAMENTALS ===');

// Wait for DOM to load before working with events
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to HTML elements (assuming they exist in HTML)
    const container = document.querySelector('.container') || document.body;
    
    // ==========================================
    // SECTION 1: WHAT ARE DOM EVENTS?
    // ==========================================
    console.log('=== UNDERSTANDING DOM EVENTS ===');
    
    // Events are actions that happen in the browser that JavaScript can detect and respond to
    // Examples: user clicks, mouse moves, keys pressed, page loads, etc.
    
    // Create demo elements to demonstrate events
    const eventDemoSection = document.createElement('section');
    eventDemoSection.className = 'event-demo';
    eventDemoSection.style.cssText = `
        background: #f8f9fa;
        border: 2px solid #dee2e6;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
    `;
    
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = 'DOM Events Demo Section';
    sectionTitle.style.cssText = `
        color: #495057;
        margin-top: 0;
        text-align: center;
    `;
    
    eventDemoSection.appendChild(sectionTitle);
    container.appendChild(eventDemoSection);
    
    // ==========================================
    // SECTION 2: ADDING EVENT LISTENERS
    // ==========================================
    console.log('=== EVENT LISTENER METHODS ===');
    
    // Method 1: addEventListener() - PREFERRED METHOD
    const method1Button = document.createElement('button');
    method1Button.textContent = 'Click Me (addEventListener)';
    method1Button.style.cssText = `
        background: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    `;
    
    // Using addEventListener - can add multiple listeners to same event
    method1Button.addEventListener('click', function() {
        console.log('Method 1: addEventListener clicked!');
        this.style.background = '#28a745';
        this.textContent = 'Clicked! (addEventListener)';
        // VISUAL CHANGE: Button turns green and text changes
    });
    
    // Adding a second listener to the same event (only possible with addEventListener)
    method1Button.addEventListener('click', function() {
        console.log('Second listener on same button!');
        // OUTPUT: Both listeners will run when button is clicked
    });
    
    eventDemoSection.appendChild(method1Button);
    
    // Method 2: onclick property - OLDER METHOD
    const method2Button = document.createElement('button');
    method2Button.textContent = 'Click Me (onclick)';
    method2Button.style.cssText = `
        background: #6c757d;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    `;
    
    // Using onclick property - can only have one listener per event
    method2Button.onclick = function() {
        console.log('Method 2: onclick clicked!');
        this.style.background = '#dc3545';
        this.textContent = 'Clicked! (onclick)';
        // VISUAL CHANGE: Button turns red and text changes
    };
    
    // If you assign onclick again, it overwrites the previous one
    // method2Button.onclick = function() { /* This would replace the above */ };
    
    eventDemoSection.appendChild(method2Button);
    
    // Method 3: Inline event handlers (in HTML) - NOT RECOMMENDED
    // Example: <button onclick="handleClick()">Click Me</button>
    // We won't demonstrate this as it's not best practice
    
    // ==========================================
    // SECTION 3: EVENT OBJECT
    // ==========================================
    console.log('=== EVENT OBJECT PROPERTIES ===');
    
    const eventObjectDemo = document.createElement('div');
    eventObjectDemo.className = 'event-object-demo';
    eventObjectDemo.style.cssText = `
        background: #e9ecef;
        border: 1px solid #adb5bd;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const eventInfoTitle = document.createElement('h3');
    eventInfoTitle.textContent = 'Event Object Information';
    eventInfoTitle.style.margin = '0 0 10px 0';
    
    const eventInfoDisplay = document.createElement('div');
    eventInfoDisplay.id = 'event-info';
    eventInfoDisplay.style.cssText = `
        background: white;
        padding: 10px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 14px;
        min-height: 100px;
    `;
    eventInfoDisplay.innerHTML = 'Click anywhere in this area to see event information...';
    
    eventObjectDemo.append(eventInfoTitle, eventInfoDisplay);
    
    // Event listener that demonstrates event object properties
    eventObjectDemo.addEventListener('click', function(event) {
        console.log('Event object:', event);
        
        // Display comprehensive event information
        eventInfoDisplay.innerHTML = `
            <strong>Event Information:</strong><br>
            • Event Type: ${event.type}<br>
            • Target Element: ${event.target.tagName}<br>
            • Current Target: ${event.currentTarget.className}<br>
            • Mouse Position: (${event.clientX}, ${event.clientY})<br>
            • Page Position: (${event.pageX}, ${event.pageY})<br>
            • Timestamp: ${event.timeStamp}<br>
            • Bubbles: ${event.bubbles}<br>
            • Cancelable: ${event.cancelable}<br>
            • Default Prevented: ${event.defaultPrevented}
        `;
        // VISUAL CHANGE: Information updates with current event details
        // USAGE: event object contains all information about what happened
    });
    
    eventDemoSection.appendChild(eventObjectDemo);
    
    // ==========================================
    // SECTION 4: EVENT FLOW (BUBBLING & CAPTURING)
    // ==========================================
    console.log('=== EVENT FLOW DEMONSTRATION ===');
    
    // Create nested elements to demonstrate event bubbling
    const outerDiv = document.createElement('div');
    outerDiv.className = 'outer-div';
    outerDiv.style.cssText = `
        background: #ffebee;
        border: 3px solid #f44336;
        padding: 30px;
        margin: 20px 0;
        text-align: center;
        cursor: pointer;
    `;
    
    const middleDiv = document.createElement('div');
    middleDiv.className = 'middle-div';
    middleDiv.style.cssText = `
        background: #fff3e0;
        border: 3px solid #ff9800;
        padding: 20px;
        margin: 10px;
        cursor: pointer;
    `;
    
    const innerDiv = document.createElement('div');
    innerDiv.className = 'inner-div';
    innerDiv.style.cssText = `
        background: #e8f5e8;
        border: 3px solid #4caf50;
        padding: 15px;
        margin: 10px;
        cursor: pointer;
    `;
    innerDiv.textContent = 'Click me to see event bubbling!';
    
    // Event Flow Log
    const eventFlowLog = document.createElement('div');
    eventFlowLog.id = 'event-flow-log';
    eventFlowLog.style.cssText = `
        background: #f8f9fa;
        border: 1px solid #dee2e6;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 150px;
        overflow-y: auto;
    `;
    eventFlowLog.innerHTML = 'Event flow will be logged here...<br>';
    
    // Add event listeners to demonstrate bubbling (default behavior)
    outerDiv.addEventListener('click', function(event) {
        const message = '🔴 OUTER div clicked (bubbling phase)';
        console.log(message);
        eventFlowLog.innerHTML += message + '<br>';
        eventFlowLog.scrollTop = eventFlowLog.scrollHeight;
        // This runs AFTER inner and middle divs (event bubbles up)
    });
    
    middleDiv.addEventListener('click', function(event) {
        const message = '🟠 MIDDLE div clicked (bubbling phase)';
        console.log(message);
        eventFlowLog.innerHTML += message + '<br>';
        eventFlowLog.scrollTop = eventFlowLog.scrollHeight;
        // This runs AFTER inner div but BEFORE outer div
    });
    
    innerDiv.addEventListener('click', function(event) {
        const message = '🟢 INNER div clicked (target phase)';
        console.log(message);
        eventFlowLog.innerHTML += message + '<br>';
        eventFlowLog.scrollTop = eventFlowLog.scrollHeight;
        // This runs FIRST (target element)
    });
    
    // Add capturing phase listeners (runs before bubbling)
    outerDiv.addEventListener('click', function(event) {
        const message = '🔴 OUTER div clicked (capturing phase)';
        console.log(message);
        eventFlowLog.innerHTML += message + '<br>';
        eventFlowLog.scrollTop = eventFlowLog.scrollHeight;
    }, true); // 'true' enables capturing phase
    
    middleDiv.addEventListener('click', function(event) {
        const message = '🟠 MIDDLE div clicked (capturing phase)';
        console.log(message);
        eventFlowLog.innerHTML += message + '<br>';
        eventFlowLog.scrollTop = eventFlowLog.scrollHeight;
    }, true); // 'true' enables capturing phase
    
    // Assemble nested structure
    middleDiv.appendChild(innerDiv);
    outerDiv.appendChild(middleDiv);
    
    const flowTitle = document.createElement('h3');
    flowTitle.textContent = 'Event Flow Demo (Capturing → Target → Bubbling)';
    flowTitle.style.margin = '20px 0 10px 0';
    
    eventDemoSection.append(flowTitle, outerDiv, eventFlowLog);
    
    // ==========================================
    // SECTION 5: PREVENTING EVENT BEHAVIOR
    // ==========================================
    console.log('=== PREVENTING EVENT BEHAVIOR ===');
    
    // preventDefault() - stops default browser behavior
    const preventDefaultDemo = document.createElement('div');
    preventDefaultDemo.style.cssText = `
        background: #fff8e1;
        border: 1px solid #ffc107;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const preventTitle = document.createElement('h4');
    preventTitle.textContent = 'preventDefault() Demo';
    preventTitle.style.margin = '0 0 10px 0';
    
    // Create a link that won't navigate (preventDefault)
    const preventLink = document.createElement('a');
    preventLink.href = 'https://example.com';
    preventLink.textContent = 'This link is prevented from navigating';
    preventLink.style.cssText = `
        color: #007bff;
        text-decoration: underline;
        cursor: pointer;
        margin-right: 15px;
    `;
    
    preventLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents navigation
        console.log('Link click prevented!');
        this.style.color = '#28a745';
        this.textContent = 'Navigation prevented!';
        // VISUAL CHANGE: Link color changes, doesn't navigate
        // USAGE: preventDefault() stops default browser actions
    });
    
    // Create a form that won't submit (preventDefault)
    const preventForm = document.createElement('form');
    preventForm.style.display = 'inline-block';
    
    const formInput = document.createElement('input');
    formInput.type = 'text';
    formInput.placeholder = 'Type something...';
    formInput.style.cssText = `
        padding: 5px;
        margin-right: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
    `;
    
    const formSubmit = document.createElement('input');
    formSubmit.type = 'submit';
    formSubmit.value = 'Submit (Prevented)';
    formSubmit.style.cssText = `
        background: #17a2b8;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 3px;
        cursor: pointer;
    `;
    
    preventForm.append(formInput, formSubmit);
    
    preventForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents form submission
        console.log('Form submission prevented!');
        formSubmit.value = 'Submission Prevented!';
        formSubmit.style.background = '#6c757d';
        // VISUAL CHANGE: Button text changes, form doesn't submit
        // USAGE: Useful for client-side form validation
    });
    
    preventDefaultDemo.append(preventTitle, preventLink, document.createElement('br'), preventForm);
    eventDemoSection.appendChild(preventDefaultDemo);
    
    // stopPropagation() - stops event from bubbling
    const stopPropagationDemo = document.createElement('div');
    stopPropagationDemo.style.cssText = `
        background: #f3e5f5;
        border: 1px solid #9c27b0;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const stopTitle = document.createElement('h4');
    stopTitle.textContent = 'stopPropagation() Demo';
    stopTitle.style.margin = '0 0 10px 0';
    
    const stopParent = document.createElement('div');
    stopParent.style.cssText = `
        background: #e1bee7;
        border: 2px solid #9c27b0;
        padding: 20px;
        cursor: pointer;
        text-align: center;
    `;
    stopParent.textContent = 'Parent div (click me)';
    
    const stopChild = document.createElement('div');
    stopChild.style.cssText = `
        background: #ce93d8;
        border: 2px solid #8e24aa;
        padding: 15px;
        margin: 10px;
        cursor: pointer;
    `;
    stopChild.textContent = 'Child div (click me - propagation stopped)';
    
    const stopLog = document.createElement('div');
    stopLog.style.cssText = `
        background: white;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        border: 1px solid #ddd;
    `;
    stopLog.textContent = 'Click parent or child to see propagation behavior...';
    
    // Parent listener
    stopParent.addEventListener('click', function(event) {
        const message = 'Parent div clicked!';
        console.log(message);
        stopLog.textContent = message;
        stopParent.style.background = '#ba68c8';
        // This will run when parent is clicked directly, but NOT when child is clicked
    });
    
    // Child listener with stopPropagation
    stopChild.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents event from reaching parent
        const message = 'Child div clicked - propagation stopped!';
        console.log(message);
        stopLog.textContent = message;
        this.style.background = '#ab47bc';
        // USAGE: stopPropagation() prevents parent handlers from running
    });
    
    stopParent.appendChild(stopChild);
    stopPropagationDemo.append(stopTitle, stopParent, stopLog);
    eventDemoSection.appendChild(stopPropagationDemo);
    
    // ==========================================
    // SECTION 6: EVENT DELEGATION
    // ==========================================
    console.log('=== EVENT DELEGATION ===');
    
    const delegationDemo = document.createElement('div');
    delegationDemo.style.cssText = `
        background: #e8f4f8;
        border: 1px solid #00bcd4;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const delegationTitle = document.createElement('h4');
    delegationTitle.textContent = 'Event Delegation Demo';
    delegationTitle.style.margin = '0 0 10px 0';
    
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    buttonContainer.style.cssText = `
        border: 2px dashed #00bcd4;
        padding: 20px;
        margin: 10px 0;
        text-align: center;
    `;
    
    const addButtonBtn = document.createElement('button');
    addButtonBtn.textContent = 'Add New Button';
    addButtonBtn.style.cssText = `
        background: #00bcd4;
        color: white;
        border: none;
        padding: 8px 16px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    const delegationLog = document.createElement('div');
    delegationLog.style.cssText = `
        background: white;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        border: 1px solid #ddd;
        max-height: 100px;
        overflow-y: auto;
    `;
    delegationLog.textContent = 'Click any button to see delegation in action...';
    
    // Event delegation: attach ONE listener to parent, handle all button clicks
    buttonContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const message = `Button "${event.target.textContent}" clicked via delegation!`;
            console.log(message);
            delegationLog.innerHTML += message + '<br>';
            delegationLog.scrollTop = delegationLog.scrollHeight;
            event.target.style.background = '#4caf50';
            // USAGE: One listener handles all buttons, even dynamically added ones
        }
    });
    
    // Create initial buttons
    for (let i = 1; i <= 3; i++) {
        const btn = document.createElement('button');
        btn.textContent = `Button ${i}`;
        btn.style.cssText = `
            background: #ff9800;
            color: white;
            border: none;
            padding: 8px 16px;
            margin: 5px;
            border-radius: 4px;
            cursor: pointer;
        `;
        buttonContainer.appendChild(btn);
    }
    
    // Add new button functionality
    let buttonCounter = 4;
    addButtonBtn.addEventListener('click', function() {
        const newBtn = document.createElement('button');
        newBtn.textContent = `Button ${buttonCounter}`;
        newBtn.style.cssText = `
            background: #ff9800;
            color: white;
            border: none;
            padding: 8px 16px;
            margin: 5px;
            border-radius: 4px;
            cursor: pointer;
        `;
        buttonContainer.appendChild(newBtn);
        buttonCounter++;
        
        const message = `New button added! Delegation still works.`;
        delegationLog.innerHTML += message + '<br>';
        delegationLog.scrollTop = delegationLog.scrollHeight;
        // VISUAL CHANGE: New button appears and delegation automatically works
    });
    
    delegationDemo.append(
        delegationTitle,
        addButtonBtn,
        buttonContainer,
        delegationLog
    );
    eventDemoSection.appendChild(delegationDemo);
    
    // ==========================================
    // SECTION 7: REMOVING EVENT LISTENERS
    // ==========================================
    console.log('=== REMOVING EVENT LISTENERS ===');
    
    const removeDemo = document.createElement('div');
    removeDemo.style.cssText = `
        background: #fce4ec;
        border: 1px solid #e91e63;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const removeTitle = document.createElement('h4');
    removeTitle.textContent = 'Removing Event Listeners';
    removeTitle.style.margin = '0 0 10px 0';
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Click Me (Listener Active)';
    removeButton.style.cssText = `
        background: #e91e63;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Remove Listener';
    toggleButton.style.cssText = `
        background: #9e9e9e;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    const removeLog = document.createElement('div');
    removeLog.style.cssText = `
        background: white;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        border: 1px solid #ddd;
    `;
    removeLog.textContent = 'Listener status will be shown here...';
    
    // Define handler function (must be named to remove it later)
    function handleClick() {
        const message = 'Button clicked! Listener is active.';
        console.log(message);
        removeLog.textContent = message;
        removeButton.style.background = '#4caf50';
        setTimeout(() => {
            removeButton.style.background = '#e91e63';
        }, 1000);
    }
    
    // Add listener
    removeButton.addEventListener('click', handleClick);
    
    let listenerActive = true;
    
    // Toggle listener on/off
    toggleButton.addEventListener('click', function() {
        if (listenerActive) {
            // Remove the listener
            removeButton.removeEventListener('click', handleClick);
            toggleButton.textContent = 'Add Listener';
            removeButton.textContent = 'Click Me (No Listener)';
            removeButton.style.background = '#9e9e9e';
            removeLog.textContent = 'Listener removed! Button clicks do nothing.';
            listenerActive = false;
            // USAGE: removeEventListener() requires same function reference
        } else {
            // Add the listener back
            removeButton.addEventListener('click', handleClick);
            toggleButton.textContent = 'Remove Listener';
            removeButton.textContent = 'Click Me (Listener Active)';
            removeButton.style.background = '#e91e63';
            removeLog.textContent = 'Listener added back! Button clicks work again.';
            listenerActive = true;
        }
    });
    
    removeDemo.append(
        removeTitle,
        removeButton,
        toggleButton,
        removeLog
    );
    eventDemoSection.appendChild(removeDemo);
    
    // ==========================================
    // SECTION 8: BEST PRACTICES SUMMARY
    // ==========================================
    console.log('=== BEST PRACTICES SUMMARY ===');
    
    const bestPracticesSection = document.createElement('div');
    bestPracticesSection.style.cssText = `
        background: #f1f8e9;
        border: 1px solid #8bc34a;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
    `;
    
    bestPracticesSection.innerHTML = `
        <h3 style="margin: 0 0 15px 0; color: #33691e;">DOM Events Best Practices</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4 style="color: #4caf50; margin-bottom: 10px;">✅ DO:</h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                    <li>Use <code>addEventListener()</code> instead of onclick</li>
                    <li>Use <code>DOMContentLoaded</code> to ensure DOM is ready</li>
                    <li>Use event delegation for dynamic content</li>
                    <li>Use named functions for removable listeners</li>
                    <li>Use <code>preventDefault()</code> to control default behavior</li>
                    <li>Check event.target for delegation</li>
                    <li>Remove listeners when no longer needed</li>
                </ul>
            </div>
            
            <div>
                <h4 style="color: #f44336; margin-bottom: 10px;">❌ AVOID:</h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                    <li>Inline event handlers (onclick="...")</li>
                    <li>Adding listeners before DOM is ready</li>
                    <li>Too many individual listeners on similar elements</li>
                    <li>Anonymous functions when you need to remove listeners</li>
                    <li>Forgetting preventDefault() for forms/links</li>
                    <li>Not cleaning up listeners (memory leaks)</li>
                    <li>Stopping propagation unless necessary</li>
                </ul>
            </div>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #33691e;">Event Flow Order:</h4>
            <div style="text-align: center; font-family: monospace; font-size: 14px;">
                Capturing Phase → Target Phase → Bubbling Phase
            </div>
        </div>
    `;
    
    container.appendChild(bestPracticesSection);
    
    console.log('=== DOM EVENTS FUNDAMENTALS COMPLETED ===');
    console.log('Key Concepts Covered:');
    console.log('1. Event listeners (addEventListener vs onclick)');
    console.log('2. Event object properties and methods');
    console.log('3. Event flow (capturing, target, bubbling)');
    console.log('4. preventDefault() and stopPropagation()');
    console.log('5. Event delegation pattern');
    console.log('6. Removing event listeners');
    console.log('7. Best practices and common pitfalls');
    
});

// Note: This file covers fundamental DOM event concepts
// Each example includes detailed comments explaining the concept
// Visual changes help understand what each event does
// Console output provides debugging information
// This serves as a comprehensive reference for DOM events