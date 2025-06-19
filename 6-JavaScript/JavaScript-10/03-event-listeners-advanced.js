// Advanced Event Listeners - Complete Guide
// Topics: Event Listeners for Elements, 'this' in Event Listeners, Advanced Patterns
// This file serves as comprehensive reference notes for advanced event handling

console.log('=== ADVANCED EVENT LISTENERS ===');

// Wait for DOM to load before working with events
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to HTML elements
    const container = document.querySelector('.container') || document.body;
    
    // Create main demo section
    const advancedSection = document.createElement('section');
    advancedSection.className = 'advanced-events-demo';
    advancedSection.style.cssText = `
        background: #f8f9fa;
        border: 2px solid #6f42c1;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
    `;
    
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = 'Advanced Event Listeners Demo';
    sectionTitle.style.cssText = `
        color: #6f42c1;
        margin-top: 0;
        text-align: center;
    `;
    
    advancedSection.appendChild(sectionTitle);
    container.appendChild(advancedSection);
    
    // ==========================================
    // SECTION 1: 'this' CONTEXT IN EVENT LISTENERS
    // ==========================================
    console.log('=== THIS CONTEXT IN EVENT LISTENERS ===');
    
    const thisDemo = document.createElement('div');
    thisDemo.style.cssText = `
        background: #e8e2ff;
        border: 1px solid #6f42c1;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const thisTitle = document.createElement('h3');
    thisTitle.textContent = "'this' Context in Event Listeners";
    thisTitle.style.margin = '0 0 15px 0';
    
    // Example 1: Regular function - 'this' refers to element
    const regularButton = document.createElement('button');
    regularButton.textContent = 'Regular Function';
    regularButton.className = 'demo-button';
    regularButton.style.cssText = `
        background: #6f42c1;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    regularButton.addEventListener('click', function(event) {
        console.log('Regular function - this refers to:', this);
        console.log('this.tagName:', this.tagName);
        console.log('this.className:', this.className);
        console.log('this.textContent:', this.textContent);
        
        // 'this' refers to the button element
        this.style.background = '#28a745';
        this.textContent = 'Clicked! (this = button)';
        
        setTimeout(() => {
            this.style.background = '#6f42c1';
            this.textContent = 'Regular Function';
        }, 2000);
        
        // VISUAL CHANGE: Button changes color and text
        // USAGE: 'this' is the element that triggered the event
    });
    
    // Example 2: Arrow function - 'this' refers to outer scope
    const arrowButton = document.createElement('button');
    arrowButton.textContent = 'Arrow Function';
    arrowButton.className = 'demo-button';
    arrowButton.style.cssText = `
        background: #dc3545;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    // Store outer scope context
    const outerThis = this;
    console.log('Outer scope this:', outerThis);
    
    arrowButton.addEventListener('click', (event) => {
        console.log('Arrow function - this refers to:', this);
        console.log('this === outerThis:', this === outerThis);
        console.log('event.target (the button):', event.target);
        
        // 'this' does NOT refer to the button in arrow functions
        // Use event.target to access the button
        event.target.style.background = '#ffc107';
        event.target.textContent = 'Clicked! (this ≠ button)';
        
        setTimeout(() => {
            event.target.style.background = '#dc3545';
            event.target.textContent = 'Arrow Function';
        }, 2000);
        
        // VISUAL CHANGE: Button changes color and text
        // USAGE: Arrow functions maintain outer scope 'this'
    });
    
    // Example 3: Method binding demonstration
    const objectWithMethods = {
        name: 'DemoObject',
        clickCount: 0,
        
        // Method using regular function
        handleClick: function(event) {
            console.log('Method - this refers to:', this);
            console.log('this.name:', this.name);
            this.clickCount++;
            console.log('Click count:', this.clickCount);
            
            // 'this' refers to the object, not the button
            event.target.style.background = '#17a2b8';
            event.target.textContent = `Clicked ${this.clickCount} times`;
            
            setTimeout(() => {
                event.target.style.background = '#6c757d';
                event.target.textContent = 'Method Binding';
            }, 2000);
            
            // USAGE: Access object properties and methods
        },
        
        // Arrow function method
        handleArrowClick: (event) => {
            console.log('Arrow method - this refers to:', this);
            // 'this' does not refer to the object in arrow functions
            event.target.style.background = '#fd7e14';
            event.target.textContent = 'Arrow method (no object this)';
            
            setTimeout(() => {
                event.target.style.background = '#6c757d';
                event.target.textContent = 'Arrow Method';
            }, 2000);
        }
    };
    
    const methodButton = document.createElement('button');
    methodButton.textContent = 'Method Binding';
    methodButton.style.cssText = `
        background: #6c757d;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    // Bind object method to button
    methodButton.addEventListener('click', objectWithMethods.handleClick.bind(objectWithMethods));
    
    const arrowMethodButton = document.createElement('button');
    arrowMethodButton.textContent = 'Arrow Method';
    arrowMethodButton.style.cssText = `
        background: #6c757d;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    arrowMethodButton.addEventListener('click', objectWithMethods.handleArrowClick);
    
    const thisLog = document.createElement('div');
    thisLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        border-radius: 4px;
    `;
    thisLog.innerHTML = `
        <strong>'this' Context Rules:</strong><br>
        • Regular function: 'this' = element that triggered event<br>
        • Arrow function: 'this' = outer scope context<br>
        • Method binding: 'this' = bound object<br>
        • Check console for detailed 'this' values
    `;
    
    thisDemo.append(
        thisTitle,
        regularButton,
        arrowButton,
        methodButton,
        arrowMethodButton,
        thisLog
    );
    advancedSection.appendChild(thisDemo);
    
    // ==========================================
    // SECTION 2: EVENT LISTENER OPTIONS
    // ==========================================
    console.log('=== EVENT LISTENER OPTIONS ===');
    
    const optionsDemo = document.createElement('div');
    optionsDemo.style.cssText = `
        background: #fff3cd;
        border: 1px solid #ffc107;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const optionsTitle = document.createElement('h3');
    optionsTitle.textContent = 'Event Listener Options';
    optionsTitle.style.margin = '0 0 15px 0';
    
    // Option 1: 'once' - listener runs only once
    const onceButton = document.createElement('button');
    onceButton.textContent = 'Click Me Once';
    onceButton.style.cssText = `
        background: #ffc107;
        color: #212529;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    onceButton.addEventListener('click', function() {
        console.log('This listener runs only once!');
        this.style.background = '#28a745';
        this.textContent = 'Listener removed!';
        this.style.cursor = 'default';
        
        // VISUAL CHANGE: Button becomes green and unclickable
        // USAGE: One-time initialization, welcome messages
    }, { once: true }); // 'once' option
    
    // Option 2: 'passive' - cannot call preventDefault()
    const passiveButton = document.createElement('button');
    passiveButton.textContent = 'Passive Listener';
    passiveButton.style.cssText = `
        background: #17a2b8;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    passiveButton.addEventListener('click', function(event) {
        console.log('Passive listener - cannot prevent default');
        // event.preventDefault(); // This would be ignored in passive mode
        this.style.background = '#6f42c1';
        this.textContent = 'Passive (no preventDefault)';
        
        setTimeout(() => {
            this.style.background = '#17a2b8';
            this.textContent = 'Passive Listener';
        }, 2000);
        
        // USAGE: Performance optimization for scroll/touch events
    }, { passive: true }); // 'passive' option
    
    // Option 3: 'capture' - listener runs during capture phase
    const captureParent = document.createElement('div');
    captureParent.style.cssText = `
        background: #f8d7da;
        border: 2px solid #dc3545;
        padding: 20px;
        margin: 10px 0;
        cursor: pointer;
    `;
    
    const captureChild = document.createElement('div');
    captureChild.style.cssText = `
        background: #d4edda;
        border: 2px solid #28a745;
        padding: 15px;
        margin: 10px;
        cursor: pointer;
    `;
    captureChild.textContent = 'Click me (capture demo)';
    
    const captureLog = document.createElement('div');
    captureLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 100px;
        overflow-y: auto;
    `;
    captureLog.textContent = 'Click child to see capture vs bubble order...';
    
    // Add capturing listener (runs first)
    captureParent.addEventListener('click', function() {
        const message = '1. Parent CAPTURE phase';
        console.log(message);
        captureLog.innerHTML += message + '<br>';
        captureLog.scrollTop = captureLog.scrollHeight;
    }, { capture: true }); // 'capture' option
    
    // Add bubbling listener (runs last)
    captureParent.addEventListener('click', function() {
        const message = '3. Parent BUBBLE phase';
        console.log(message);
        captureLog.innerHTML += message + '<br>';
        captureLog.scrollTop = captureLog.scrollHeight;
    });
    
    // Child listener (runs in middle)
    captureChild.addEventListener('click', function() {
        const message = '2. Child TARGET phase';
        console.log(message);
        captureLog.innerHTML += message + '<br>';
        captureLog.scrollTop = captureLog.scrollHeight;
    });
    
    captureParent.appendChild(captureChild);
    captureParent.insertAdjacentText('afterbegin', 'Parent element - ');
    
    // Option 4: Multiple options combined
    const combinedButton = document.createElement('button');
    combinedButton.textContent = 'Combined Options';
    combinedButton.style.cssText = `
        background: #6f42c1;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    combinedButton.addEventListener('click', function() {
        console.log('Combined: once + passive + capture');
        this.style.background = '#e83e8c';
        this.textContent = 'All options used!';
        
        // USAGE: Specific performance-critical scenarios
    }, { 
        once: true,
        passive: true,
        capture: true 
    });
    
    optionsDemo.append(
        optionsTitle,
        onceButton,
        passiveButton,
        captureParent,
        captureLog,
        combinedButton
    );
    advancedSection.appendChild(optionsDemo);
    
    // ==========================================
    // SECTION 3: MULTIPLE LISTENERS ON SAME EVENT
    // ==========================================
    console.log('=== MULTIPLE LISTENERS ===');
    
    const multipleDemo = document.createElement('div');
    multipleDemo.style.cssText = `
        background: #d1ecf1;
        border: 1px solid #17a2b8;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const multipleTitle = document.createElement('h3');
    multipleTitle.textContent = 'Multiple Event Listeners';
    multipleTitle.style.margin = '0 0 15px 0';
    
    const multipleButton = document.createElement('button');
    multipleButton.textContent = 'Multiple Listeners';
    multipleButton.style.cssText = `
        background: #17a2b8;
        color: white;
        border: none;
        padding: 12px 24px;
        margin: 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    `;
    
    const multipleLog = document.createElement('div');
    multipleLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 150px;
        overflow-y: auto;
    `;
    multipleLog.textContent = 'Click button to see multiple listeners execute...';
    
    // Add multiple listeners to the same event
    
    // Listener 1: Visual feedback
    multipleButton.addEventListener('click', function() {
        const message = 'Listener 1: Visual feedback';
        console.log(message);
        multipleLog.innerHTML += message + '<br>';
        this.style.background = '#28a745';
    });
    
    // Listener 2: Analytics tracking
    multipleButton.addEventListener('click', function() {
        const message = 'Listener 2: Analytics tracking';
        console.log(message);
        multipleLog.innerHTML += message + '<br>';
        // Simulate analytics call
        console.log('📊 Button click tracked');
    });
    
    // Listener 3: Sound effect (simulated)
    multipleButton.addEventListener('click', function() {
        const message = 'Listener 3: Sound effect';
        console.log(message);
        multipleLog.innerHTML += message + '<br>';
        console.log('🔊 Click sound played');
    });
    
    // Listener 4: Reset after delay
    multipleButton.addEventListener('click', function() {
        const message = 'Listener 4: Reset scheduled';
        console.log(message);
        multipleLog.innerHTML += message + '<br>';
        multipleLog.scrollTop = multipleLog.scrollHeight;
        
        setTimeout(() => {
            this.style.background = '#17a2b8';
            multipleLog.innerHTML += 'Button reset completed<br>';
            multipleLog.scrollTop = multipleLog.scrollHeight;
        }, 2000);
    });
    
    multipleDemo.append(multipleTitle, multipleButton, multipleLog);
    advancedSection.appendChild(multipleDemo);
    
    // ==========================================
    // SECTION 4: DYNAMIC EVENT LISTENER MANAGEMENT
    // ==========================================
    console.log('=== DYNAMIC EVENT MANAGEMENT ===');
    
    const dynamicDemo = document.createElement('div');
    dynamicDemo.style.cssText = `
        background: #f8d7da;
        border: 1px solid #dc3545;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const dynamicTitle = document.createElement('h3');
    dynamicTitle.textContent = 'Dynamic Event Listener Management';
    dynamicTitle.style.margin = '0 0 15px 0';
    
    // Create container for dynamic buttons
    const dynamicContainer = document.createElement('div');
    dynamicContainer.style.cssText = `
        border: 2px dashed #dc3545;
        padding: 20px;
        margin: 10px 0;
        min-height: 100px;
        text-align: center;
    `;
    
    const addDynamicButton = document.createElement('button');
    addDynamicButton.textContent = 'Add Dynamic Button';
    addDynamicButton.style.cssText = `
        background: #dc3545;
        color: white;
        border: none;
        padding: 8px 16px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    const removeDynamicButton = document.createElement('button');
    removeDynamicButton.textContent = 'Remove All Buttons';
    removeDynamicButton.style.cssText = `
        background: #6c757d;
        color: white;
        border: none;
        padding: 8px 16px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    const dynamicLog = document.createElement('div');
    dynamicLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 100px;
        overflow-y: auto;
    `;
    dynamicLog.textContent = 'Dynamic button events will be logged here...';
    
    let buttonCounter = 1;
    const dynamicButtons = new Map(); // Store button references and their handlers
    
    // Add dynamic button functionality
    addDynamicButton.addEventListener('click', function() {
        const newButton = document.createElement('button');
        newButton.textContent = `Button ${buttonCounter}`;
        newButton.id = `dynamic-btn-${buttonCounter}`;
        newButton.style.cssText = `
            background: #fd7e14;
            color: white;
            border: none;
            padding: 8px 16px;
            margin: 3px;
            border-radius: 4px;
            cursor: pointer;
        `;
        
        // Create handler function for this specific button
        const handler = function() {
            const message = `Dynamic ${this.textContent} clicked!`;
            console.log(message);
            dynamicLog.innerHTML += message + '<br>';
            dynamicLog.scrollTop = dynamicLog.scrollHeight;
            
            this.style.background = '#28a745';
            setTimeout(() => {
                this.style.background = '#fd7e14';
            }, 1000);
        };
        
        // Add event listener
        newButton.addEventListener('click', handler);
        
        // Store button and handler reference for later removal
        dynamicButtons.set(newButton, handler);
        
        // Add to container
        dynamicContainer.appendChild(newButton);
        
        console.log(`Dynamic button ${buttonCounter} added with event listener`);
        buttonCounter++;
        
        // VISUAL CHANGE: New interactive button appears
        // USAGE: Dynamic content with proper event management
    });
    
    // Remove all dynamic buttons
    removeDynamicButton.addEventListener('click', function() {
        // Properly remove event listeners before removing elements
        dynamicButtons.forEach((handler, button) => {
            button.removeEventListener('click', handler);
        });
        
        // Clear the map
        dynamicButtons.clear();
        
        // Remove all buttons from DOM
        dynamicContainer.innerHTML = '';
        
        console.log('All dynamic buttons and their event listeners removed');
        dynamicLog.innerHTML += 'All dynamic buttons removed<br>';
        dynamicLog.scrollTop = dynamicLog.scrollHeight;
        
        // Reset counter
        buttonCounter = 1;
        
        // USAGE: Proper cleanup prevents memory leaks
    });
    
    dynamicDemo.append(
        dynamicTitle,
        addDynamicButton,
        removeDynamicButton,
        dynamicContainer,
        dynamicLog
    );
    advancedSection.appendChild(dynamicDemo);
    
    // ==========================================
    // SECTION 5: EVENT LISTENER PERFORMANCE
    // ==========================================
    console.log('=== EVENT LISTENER PERFORMANCE ===');
    
    const performanceDemo = document.createElement('div');
    performanceDemo.style.cssText = `
        background: #d4edda;
        border: 1px solid #28a745;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const performanceTitle = document.createElement('h3');
    performanceTitle.textContent = 'Event Listener Performance';
    performanceTitle.style.margin = '0 0 15px 0';
    
    // Performance Test 1: Many individual listeners vs Event Delegation
    const perfContainer1 = document.createElement('div');
    perfContainer1.style.cssText = `
        background: #f8f9fa;
        border: 1px solid #dee2e6;
        padding: 15px;
        margin: 10px 0;
        border-radius: 4px;
    `;
    
    const perfTitle1 = document.createElement('h4');
    perfTitle1.textContent = 'Individual Listeners vs Event Delegation';
    perfTitle1.style.margin = '0 0 10px 0';
    
    // Individual listeners approach
    const individualContainer = document.createElement('div');
    individualContainer.style.cssText = `
        background: #fff3cd;
        border: 1px solid #ffc107;
        padding: 10px;
        margin: 5px 0;
    `;
    
    const createIndividualButton = document.createElement('button');
    createIndividualButton.textContent = 'Create 100 Buttons (Individual Listeners)';
    createIndividualButton.style.cssText = `
        background: #ffc107;
        color: #212529;
        border: none;
        padding: 8px 16px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    // Event delegation approach
    const delegationContainer = document.createElement('div');
    delegationContainer.style.cssText = `
        background: #d1ecf1;
        border: 1px solid #17a2b8;
        padding: 10px;
        margin: 5px 0;
    `;
    
    const createDelegationButton = document.createElement('button');
    createDelegationButton.textContent = 'Create 100 Buttons (Event Delegation)';
    createDelegationButton.style.cssText = `
        background: #17a2b8;
        color: white;
        border: none;
        padding: 8px 16px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    const perfLog = document.createElement('div');
    perfLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 100px;
        overflow-y: auto;
    `;
    perfLog.textContent = 'Performance results will appear here...';
    
    // Individual listeners implementation
    createIndividualButton.addEventListener('click', function() {
        console.time('Individual listeners creation');
        individualContainer.innerHTML = ''; // Clear existing
        
        for (let i = 1; i <= 100; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.style.cssText = `
                background: #ffc107;
                color: #212529;
                border: none;
                padding: 4px 8px;
                margin: 1px;
                border-radius: 2px;
                cursor: pointer;
                font-size: 12px;
            `;
            
            // Individual listener for each button
            btn.addEventListener('click', function() {
                this.style.background = '#28a745';
                setTimeout(() => {
                    this.style.background = '#ffc107';
                }, 500);
            });
            
            individualContainer.appendChild(btn);
        }
        
        console.timeEnd('Individual listeners creation');
        const message = '✅ 100 buttons with individual listeners created';
        console.log(message);
        perfLog.innerHTML += message + '<br>';
        perfLog.scrollTop = perfLog.scrollHeight;
        
        // USAGE: Simple but memory-intensive for large numbers
    });
    
    // Event delegation implementation
    createDelegationButton.addEventListener('click', function() {
        console.time('Event delegation creation');
        delegationContainer.innerHTML = ''; // Clear existing
        
        // Single event listener on container
        delegationContainer.addEventListener('click', function(event) {
            if (event.target.tagName === 'BUTTON') {
                event.target.style.background = '#28a745';
                setTimeout(() => {
                    event.target.style.background = '#17a2b8';
                }, 500);
            }
        });
        
        for (let i = 1; i <= 100; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.style.cssText = `
                background: #17a2b8;
                color: white;
                border: none;
                padding: 4px 8px;
                margin: 1px;
                border-radius: 2px;
                cursor: pointer;
                font-size: 12px;
            `;
            
            // No individual listener needed!
            delegationContainer.appendChild(btn);
        }
        
        console.timeEnd('Event delegation creation');
        const message = '✅ 100 buttons with event delegation created';
        console.log(message);
        perfLog.innerHTML += message + '<br>';
        perfLog.scrollTop = perfLog.scrollHeight;
        
        // USAGE: More efficient memory usage, better performance
    });
    
    perfContainer1.append(
        perfTitle1,
        createIndividualButton,
        individualContainer,
        createDelegationButton,
        delegationContainer,
        perfLog
    );
    
    performanceDemo.appendChild(perfContainer1);
    advancedSection.appendChild(performanceDemo);
    
    // ==========================================
    // SECTION 6: ADVANCED EVENT PATTERNS
    // ==========================================
    console.log('=== ADVANCED EVENT PATTERNS ===');
    
    const patternsDemo = document.createElement('div');
    patternsDemo.style.cssText = `
        background: #e2e3e5;
        border: 1px solid #6c757d;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const patternsTitle = document.createElement('h3');
    patternsTitle.textContent = 'Advanced Event Patterns';
    patternsTitle.style.margin = '0 0 15px 0';
    
    // Pattern 1: Event Throttling
    const throttleDemo = document.createElement('div');
    throttleDemo.style.cssText = `
        background: #fff3cd;
        border: 1px solid #ffc107;
        padding: 10px;
        margin: 10px 0;
        border-radius: 4px;
    `;
    
    const throttleTitle = document.createElement('h4');
    throttleTitle.textContent = 'Event Throttling';
    throttleTitle.style.margin = '0 0 10px 0';
    
    const throttleArea = document.createElement('div');
    throttleArea.style.cssText = `
        background: #fff8e1;
        border: 1px solid #ffcc02;
        padding: 20px;
        margin: 5px 0;
        text-align: center;
        cursor: pointer;
    `;
    throttleArea.textContent = 'Move mouse here (throttled events)';
    
    const throttleCounter = document.createElement('div');
    throttleCounter.style.cssText = `
        background: white;
        padding: 5px;
        margin: 5px 0;
        font-family: monospace;
        font-size: 14px;
    `;
    throttleCounter.textContent = 'Throttled events: 0';
    
    // Throttle function implementation
    function throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;
        
        return function (...args) {
            const currentTime = Date.now();
            
            if (currentTime - lastExecTime > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    lastExecTime = Date.now();
                }, delay - (currentTime - lastExecTime));
            }
        };
    }
    
    let throttleCount = 0;
    const throttledMouseMove = throttle(function(event) {
        throttleCount++;
        throttleCounter.textContent = `Throttled events: ${throttleCount}`;
        console.log(`Throttled mousemove: ${throttleCount}`);
    }, 100); // Throttle to 10 times per second
    
    throttleArea.addEventListener('mousemove', throttledMouseMove);
    
    throttleDemo.append(throttleTitle, throttleArea, throttleCounter);
    
    // Pattern 2: Event Debouncing
    const debounceDemo = document.createElement('div');
    debounceDemo.style.cssText = `
        background: #d1ecf1;
        border: 1px solid #17a2b8;
        padding: 10px;
        margin: 10px 0;
        border-radius: 4px;
    `;
    
    const debounceTitle = document.createElement('h4');
    debounceTitle.textContent = 'Event Debouncing';
    debounceTitle.style.margin = '0 0 10px 0';
    
    const debounceInput = document.createElement('input');
    debounceInput.type = 'text';
    debounceInput.placeholder = 'Type here (debounced search)';
    debounceInput.style.cssText = `
        width: 100%;
        padding: 8px;
        margin: 5px 0;
        border: 1px solid #17a2b8;
        border-radius: 4px;
    `;
    
    const debounceResult = document.createElement('div');
    debounceResult.style.cssText = `
        background: white;
        padding: 5px;
        margin: 5px 0;
        font-family: monospace;
        font-size: 14px;
    `;
    debounceResult.textContent = 'Search results will appear here...';
    
    // Debounce function implementation
    function debounce(func, delay) {
        let timeoutId;
        
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }
    
    const debouncedSearch = debounce(function(event) {
        const query = event.target.value;
        if (query.length > 0) {
            console.log(`Debounced search for: "${query}"`);
            debounceResult.textContent = `🔍 Searching for: "${query}"`;
            
            // Simulate search results
            setTimeout(() => {
                debounceResult.textContent = `📄 Found ${Math.floor(Math.random() * 10) + 1} results for "${query}"`;
            }, 500);
        } else {
            debounceResult.textContent = 'Search results will appear here...';
        }
    }, 300); // Wait 300ms after user stops typing
    
    debounceInput.addEventListener('input', debouncedSearch);
    
    debounceDemo.append(debounceTitle, debounceInput, debounceResult);
    
    patternsDemo.append(throttleDemo, debounceDemo);
    advancedSection.appendChild(patternsDemo);
    
    // ==========================================
    // SECTION 7: BEST PRACTICES SUMMARY
    // ==========================================
    console.log('=== ADVANCED EVENT LISTENERS BEST PRACTICES ===');
    
    const bestPracticesSection = document.createElement('div');
    bestPracticesSection.style.cssText = `
        background: #f1f3f4;
        border: 1px solid #6c757d;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
    `;
    
    bestPracticesSection.innerHTML = `
        <h3 style="margin: 0 0 15px 0; color: #495057;">Advanced Event Listeners Best Practices</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4 style="color: #28a745; margin-bottom: 10px;">✅ DO:</h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                    <li>Use event delegation for dynamic content</li>
                    <li>Understand 'this' context (regular vs arrow functions)</li>
                    <li>Use appropriate event options (once, passive, capture)</li>
                    <li>Throttle/debounce high-frequency events</li>
                    <li>Store handler references for removal</li>
                    <li>Clean up listeners when removing elements</li>
                    <li>Use meaningful variable names for handlers</li>
                </ul>
            </div>
            
            <div>
                <h4 style="color: #dc3545; margin-bottom: 10px;">❌ AVOID:</h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                    <li>Anonymous functions when you need to remove listeners</li>
                    <li>Arrow functions when you need element context</li>
                    <li>Too many individual listeners on similar elements</li>
                    <li>Heavy computations in frequently-fired events</li>
                    <li>Forgetting to remove listeners (memory leaks)</li>
                    <li>Using 'capture' unnecessarily</li>
                    <li>Mixing up 'this' context in different function types</li>
                </ul>
            </div>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #495057;">Context Rules Summary:</h4>
            <div style="font-family: monospace; font-size: 13px; line-height: 1.8;">
                • <strong>Regular function:</strong> 'this' = element that triggered event<br>
                • <strong>Arrow function:</strong> 'this' = outer scope (usually window/undefined)<br>
                • <strong>Bound method:</strong> 'this' = bound object<br>
                • <strong>Event delegation:</strong> 'this' = container, event.target = actual element
            </div>
        </div>
        
        <div style="margin-top: 15px; padding: 15px; background: white; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #495057;">Performance Tips:</h4>
            <div style="font-family: monospace; font-size: 13px; line-height: 1.8;">
                • <strong>Event delegation:</strong> One listener for many elements<br>
                • <strong>Throttling:</strong> Limit event frequency (scrolling, resizing)<br>
                • <strong>Debouncing:</strong> Wait for event sequence to end (search, validation)<br>
                • <strong>Passive listeners:</strong> Improve scroll performance<br>
                • <strong>Proper cleanup:</strong> Prevent memory leaks
            </div>
        </div>
    `;
    
    container.appendChild(bestPracticesSection);
    
    console.log('=== ADVANCED EVENT LISTENERS COMPLETED ===');
    console.log('Key Concepts Covered:');
    console.log('1. this context in different function types');
    console.log('2. Event listener options (once, passive, capture)');
    console.log('3. Multiple listeners on same event');
    console.log('4. Dynamic event listener management');
    console.log('5. Performance considerations and optimization');
    console.log('6. Advanced patterns (throttling, debouncing)');
    console.log('7. Memory management and cleanup');
    console.log('8. Event delegation vs individual listeners');
    
});

// Note: This file covers advanced event listener concepts
// Focus on proper context management and performance
// Includes practical patterns for real-world applications
// Demonstrates memory management and cleanup techniques
// This serves as a complete reference for advanced event handling