    // Mouse and Pointer Events - Complete Guide
// Topics: All mouse events, hover effects, drag events, mouse coordinates
// This file serves as comprehensive reference notes for mouse/pointer interactions

console.log('=== MOUSE AND POINTER EVENTS ===');

// Wait for DOM to load before working with events
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to HTML elements
    const container = document.querySelector('.container') || document.body;
    
    // Create main demo section
    const mouseSection = document.createElement('section');
    mouseSection.className = 'mouse-events-demo';
    mouseSection.style.cssText = `
        background: #f8f9fa;
        border: 2px solid #007bff;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
    `;
    
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = 'Mouse & Pointer Events Demo';
    sectionTitle.style.cssText = `
        color: #007bff;
        margin-top: 0;
        text-align: center;
    `;
    
    mouseSection.appendChild(sectionTitle);
    container.appendChild(mouseSection);
    
    // ==========================================
    // SECTION 1: BASIC MOUSE EVENTS
    // ==========================================
    console.log('=== BASIC MOUSE EVENTS ===');
    
    const basicMouseDemo = document.createElement('div');
    basicMouseDemo.style.cssText = `
        background: #e3f2fd;
        border: 1px solid #2196f3;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const basicTitle = document.createElement('h3');
    basicTitle.textContent = 'Basic Mouse Events';
    basicTitle.style.margin = '0 0 15px 0';
    
    // Create interactive button for basic mouse events
    const mouseButton = document.createElement('button');
    mouseButton.textContent = 'Interact with this button';
    mouseButton.style.cssText = `
        background: #2196f3;
        color: white;
        border: none;
        padding: 12px 24px;
        margin: 10px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s ease;
    `;
    
    const mouseEventLog = document.createElement('div');
    mouseEventLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 200px;
        overflow-y: auto;
    `;
    mouseEventLog.textContent = 'Mouse events will be logged here...';
    
    // Function to log events
    function logMouseEvent(eventType, event) {
        const timestamp = new Date().toLocaleTimeString();
        const message = `[${timestamp}] ${eventType} - Position: (${event.clientX}, ${event.clientY})`;
        console.log(message);
        mouseEventLog.innerHTML += message + '<br>';
        mouseEventLog.scrollTop = mouseEventLog.scrollHeight;
    }
    
    // mousedown - mouse button pressed down
    mouseButton.addEventListener('mousedown', function(event) {
        logMouseEvent('MOUSEDOWN', event);
        this.style.transform = 'scale(0.95)';
        this.style.background = '#1976d2';
        // VISUAL CHANGE: Button shrinks and darkens when pressed
        // USAGE: Useful for drag operations, custom button states
    });
    
    // mouseup - mouse button released
    mouseButton.addEventListener('mouseup', function(event) {
        logMouseEvent('MOUSEUP', event);
        this.style.transform = 'scale(1)';
        this.style.background = '#2196f3';
        // VISUAL CHANGE: Button returns to normal size and color
        // USAGE: Complements mousedown, used in drag operations
    });
    
    // click - complete click (mousedown + mouseup)
    mouseButton.addEventListener('click', function(event) {
        logMouseEvent('CLICK', event);
        this.style.background = '#4caf50';
        setTimeout(() => {
            this.style.background = '#2196f3';
        }, 200);
        // VISUAL CHANGE: Brief green flash
        // USAGE: Most common event for user interactions
    });
    
    // dblclick - double click
    mouseButton.addEventListener('dblclick', function(event) {
        logMouseEvent('DOUBLE-CLICK', event);
        this.style.background = '#ff9800';
        this.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            this.style.background = '#2196f3';
            this.style.transform = 'rotate(0deg)';
        }, 500);
        // VISUAL CHANGE: Orange color and rotation animation
        // USAGE: Advanced interactions, text selection, file opening
    });
    
    basicMouseDemo.append(basicTitle, mouseButton, mouseEventLog);
    mouseSection.appendChild(basicMouseDemo);
    
    // ==========================================
    // SECTION 2: MOUSE MOVEMENT EVENTS
    // ==========================================
    console.log('=== MOUSE MOVEMENT EVENTS ===');
    
    const movementDemo = document.createElement('div');
    movementDemo.style.cssText = `
        background: #f3e5f5;
        border: 1px solid #9c27b0;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const movementTitle = document.createElement('h3');
    movementTitle.textContent = 'Mouse Movement Events';
    movementTitle.style.margin = '0 0 15px 0';
    
    // Create tracking area
    const trackingArea = document.createElement('div');
    trackingArea.style.cssText = `
        background: #e1bee7;
        border: 2px dashed #9c27b0;
        padding: 30px;
        margin: 10px 0;
        text-align: center;
        cursor: crosshair;
        min-height: 100px;
        position: relative;
    `;
    trackingArea.textContent = 'Move your mouse over this area';
    
    const coordinatesDisplay = document.createElement('div');
    coordinatesDisplay.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 14px;
    `;
    coordinatesDisplay.textContent = 'Mouse coordinates will appear here...';
    
    // mousemove - mouse moves within element
    trackingArea.addEventListener('mousemove', function(event) {
        // Get element bounds for relative positioning
        const rect = this.getBoundingClientRect();
        const relativeX = event.clientX - rect.left;
        const relativeY = event.clientY - rect.top;
        
        coordinatesDisplay.innerHTML = `
            <strong>Mouse Coordinates:</strong><br>
            • Client Position: (${event.clientX}, ${event.clientY})<br>
            • Page Position: (${event.pageX}, ${event.pageY})<br>
            • Screen Position: (${event.screenX}, ${event.screenY})<br>
            • Relative to Element: (${Math.round(relativeX)}, ${Math.round(relativeY)})<br>
            • Movement: (${event.movementX}, ${event.movementY})
        `;
        
        // Create visual cursor trail effect
        if (Math.random() < 0.1) { // Only create trail occasionally for performance
            const trail = document.createElement('div');
            trail.style.cssText = `
                position: absolute;
                left: ${relativeX}px;
                top: ${relativeY}px;
                width: 4px;
                height: 4px;
                background: #9c27b0;
                border-radius: 50%;
                pointer-events: none;
                opacity: 0.7;
                transform: translate(-50%, -50%);
            `;
            this.appendChild(trail);
            
            // Remove trail after animation
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }, 1000);
        }
        
        // VISUAL CHANGE: Coordinates update and trail dots appear
        // USAGE: Mouse tracking, drawing applications, hover effects
    });
    
    movementDemo.append(movementTitle, trackingArea, coordinatesDisplay);
    mouseSection.appendChild(movementDemo);
    
    // ==========================================
    // SECTION 3: HOVER EVENTS (mouseenter, mouseleave, mouseover, mouseout)
    // ==========================================
    console.log('=== HOVER EVENTS ===');
    
    const hoverDemo = document.createElement('div');
    hoverDemo.style.cssText = `
        background: #fff3e0;
        border: 1px solid #ff9800;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const hoverTitle = document.createElement('h3');
    hoverTitle.textContent = 'Hover Events (enter/leave vs over/out)';
    hoverTitle.style.margin = '0 0 15px 0';
    
    // Create nested structure to demonstrate event differences
    const hoverParent = document.createElement('div');
    hoverParent.className = 'hover-parent';
    hoverParent.style.cssText = `
        background: #ffcc02;
        border: 2px solid #ff9800;
        padding: 20px;
        margin: 10px 0;
        cursor: pointer;
    `;
    
    const hoverChild = document.createElement('div');
    hoverChild.className = 'hover-child';
    hoverChild.style.cssText = `
        background: #fff8e1;
        border: 2px solid #ffc107;
        padding: 15px;
        margin: 10px;
        cursor: pointer;
    `;
    hoverChild.textContent = 'Child Element';
    
    const hoverLog = document.createElement('div');
    hoverLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 150px;
        overflow-y: auto;
    `;
    hoverLog.textContent = 'Hover events will be logged here...';
    
    function logHoverEvent(eventType, target) {
        const message = `${eventType} on ${target}`;
        console.log(message);
        hoverLog.innerHTML += message + '<br>';
        hoverLog.scrollTop = hoverLog.scrollHeight;
    }
    
    // mouseenter - fires once when mouse enters (doesn't bubble)
    hoverParent.addEventListener('mouseenter', function(event) {
        logHoverEvent('MOUSEENTER', 'PARENT');
        this.style.background = '#ffab00';
        // USAGE: Best for hover effects, doesn't fire when moving over children
    });
    
    // mouseleave - fires once when mouse leaves (doesn't bubble)
    hoverParent.addEventListener('mouseleave', function(event) {
        logHoverEvent('MOUSELEAVE', 'PARENT');
        this.style.background = '#ffcc02';
        // USAGE: Complements mouseenter, clean hover state cleanup
    });
    
    // mouseover - fires every time mouse enters element or its children (bubbles)
    hoverParent.addEventListener('mouseover', function(event) {
        logHoverEvent('MOUSEOVER', 'PARENT');
        // USAGE: More frequent firing, useful for detailed tracking
    });
    
    // mouseout - fires every time mouse leaves element or its children (bubbles)
    hoverParent.addEventListener('mouseout', function(event) {
        logHoverEvent('MOUSEOUT', 'PARENT');
        // USAGE: Complements mouseover, fires more frequently
    });
    
    // Child events to show the difference
    hoverChild.addEventListener('mouseenter', function(event) {
        logHoverEvent('MOUSEENTER', 'CHILD');
        this.style.background = '#f57f17';
    });
    
    hoverChild.addEventListener('mouseleave', function(event) {
        logHoverEvent('MOUSELEAVE', 'CHILD');
        this.style.background = '#fff8e1';
    });
    
    hoverParent.appendChild(hoverChild);
    hoverParent.insertAdjacentText('afterbegin', 'Parent Element - ');
    
    hoverDemo.append(hoverTitle, hoverParent, hoverLog);
    mouseSection.appendChild(hoverDemo);
    
    // ==========================================
    // SECTION 4: CONTEXT MENU EVENT
    // ==========================================
    console.log('=== CONTEXT MENU EVENT ===');
    
    const contextDemo = document.createElement('div');
    contextDemo.style.cssText = `
        background: #f1f8e9;
        border: 1px solid #8bc34a;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const contextTitle = document.createElement('h3');
    contextTitle.textContent = 'Context Menu Event (Right-click)';
    contextTitle.style.margin = '0 0 15px 0';
    
    const contextArea = document.createElement('div');
    contextArea.style.cssText = `
        background: #c8e6c9;
        border: 2px solid #4caf50;
        padding: 30px;
        margin: 10px 0;
        text-align: center;
        cursor: context-menu;
    `;
    contextArea.textContent = 'Right-click here for custom context menu';
    
    const customContextMenu = document.createElement('div');
    customContextMenu.style.cssText = `
        position: absolute;
        background: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        padding: 5px 0;
        z-index: 1000;
        display: none;
    `;
    
    const menuItems = ['Copy', 'Paste', 'Delete', 'Properties'];
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.textContent = item;
        menuItem.style.cssText = `
            padding: 8px 16px;
            cursor: pointer;
            hover: background-color: #f0f0f0;
        `;
        
        menuItem.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f0f0';
        });
        
        menuItem.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
        
        menuItem.addEventListener('click', function() {
            console.log(`Context menu item clicked: ${item}`);
            customContextMenu.style.display = 'none';
            contextArea.textContent = `"${item}" action performed!`;
            setTimeout(() => {
                contextArea.textContent = 'Right-click here for custom context menu';
            }, 2000);
        });
        
        customContextMenu.appendChild(menuItem);
    });
    
    document.body.appendChild(customContextMenu);
    
    // contextmenu - right-click event
    contextArea.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Prevent default browser context menu
        console.log('Right-click detected - showing custom menu');
        
        // Position custom menu at cursor
        customContextMenu.style.left = event.pageX + 'px';
        customContextMenu.style.top = event.pageY + 'px';
        customContextMenu.style.display = 'block';
        
        // VISUAL CHANGE: Custom context menu appears at cursor position
        // USAGE: Creating custom right-click menus, context-sensitive actions
    });
    
    // Hide context menu when clicking elsewhere
    document.addEventListener('click', function() {
        customContextMenu.style.display = 'none';
    });
    
    contextDemo.append(contextTitle, contextArea);
    mouseSection.appendChild(contextDemo);
    
    // ==========================================
    // SECTION 5: DRAG EVENTS
    // ==========================================
    console.log('=== DRAG EVENTS ===');
    
    const dragDemo = document.createElement('div');
    dragDemo.style.cssText = `
        background: #fce4ec;
        border: 1px solid #e91e63;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const dragTitle = document.createElement('h3');
    dragTitle.textContent = 'Drag and Drop Events';
    dragTitle.style.margin = '0 0 15px 0';
    
    // Create draggable element
    const draggableElement = document.createElement('div');
    draggableElement.draggable = true;
    draggableElement.textContent = 'Drag me!';
    draggableElement.style.cssText = `
        background: #e91e63;
        color: white;
        padding: 15px 25px;
        margin: 10px;
        border-radius: 6px;
        cursor: move;
        display: inline-block;
        user-select: none;
    `;
    
    // Create drop zone
    const dropZone = document.createElement('div');
    dropZone.textContent = 'Drop zone - drag the element here';
    dropZone.style.cssText = `
        background: #f8bbd9;
        border: 3px dashed #e91e63;
        padding: 30px;
        margin: 10px 0;
        text-align: center;
        min-height: 100px;
        border-radius: 6px;
    `;
    
    const dragLog = document.createElement('div');
    dragLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 150px;
        overflow-y: auto;
    `;
    dragLog.textContent = 'Drag events will be logged here...';
    
    function logDragEvent(eventType) {
        const message = `${eventType} event fired`;
        console.log(message);
        dragLog.innerHTML += message + '<br>';
        dragLog.scrollTop = dragLog.scrollHeight;
    }
    
    // Drag events on draggable element
    draggableElement.addEventListener('dragstart', function(event) {
        logDragEvent('DRAGSTART');
        this.style.opacity = '0.5';
        event.dataTransfer.setData('text/plain', 'dragged-element');
        // VISUAL CHANGE: Element becomes semi-transparent
        // USAGE: Initialize drag operation, set drag data
    });
    
    draggableElement.addEventListener('drag', function(event) {
        // This fires continuously during drag - we'll only log occasionally
        if (Math.random() < 0.05) {
            logDragEvent('DRAG');
        }
        // USAGE: Track drag progress, update drag ghost
    });
    
    draggableElement.addEventListener('dragend', function(event) {
        logDragEvent('DRAGEND');
        this.style.opacity = '1';
        // VISUAL CHANGE: Element returns to full opacity
        // USAGE: Clean up after drag operation
    });
    
    // Drop events on drop zone
    dropZone.addEventListener('dragenter', function(event) {
        event.preventDefault();
        logDragEvent('DRAGENTER');
        this.style.background = '#e1bee7';
        this.style.borderColor = '#9c27b0';
        // VISUAL CHANGE: Drop zone changes color
        // USAGE: Visual feedback when drag enters zone
    });
    
    dropZone.addEventListener('dragover', function(event) {
        event.preventDefault(); // Must prevent default to allow drop
        // This fires continuously - we'll only log occasionally
        if (Math.random() < 0.02) {
            logDragEvent('DRAGOVER');
        }
        // USAGE: Continuously check if drop is valid
    });
    
    dropZone.addEventListener('dragleave', function(event) {
        logDragEvent('DRAGLEAVE');
        this.style.background = '#f8bbd9';
        this.style.borderColor = '#e91e63';
        // VISUAL CHANGE: Drop zone returns to original color
        // USAGE: Remove visual feedback when drag leaves
    });
    
    dropZone.addEventListener('drop', function(event) {
        event.preventDefault();
        logDragEvent('DROP');
        
        const draggedData = event.dataTransfer.getData('text/plain');
        this.style.background = '#c8e6c9';
        this.style.borderColor = '#4caf50';
        this.textContent = 'Drop successful! Element was dropped here.';
        
        setTimeout(() => {
            this.style.background = '#f8bbd9';
            this.style.borderColor = '#e91e63';
            this.textContent = 'Drop zone - drag the element here';
        }, 3000);
        
        // VISUAL CHANGE: Drop zone turns green briefly
        // USAGE: Handle the dropped data, perform drop action
    });
    
    dragDemo.append(dragTitle, draggableElement, dropZone, dragLog);
    mouseSection.appendChild(dragDemo);
    
    // ==========================================
    // SECTION 6: MOUSE BUTTON DETECTION
    // ==========================================
    console.log('=== MOUSE BUTTON DETECTION ===');
    
    const buttonDemo = document.createElement('div');
    buttonDemo.style.cssText = `
        background: #e8f5e8;
        border: 1px solid #4caf50;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const buttonTitle = document.createElement('h3');
    buttonTitle.textContent = 'Mouse Button Detection';
    buttonTitle.style.margin = '0 0 15px 0';
    
    const buttonTestArea = document.createElement('div');
    buttonTestArea.style.cssText = `
        background: #c8e6c9;
        border: 2px solid #4caf50;
        padding: 30px;
        margin: 10px 0;
        text-align: center;
        cursor: pointer;
    `;
    buttonTestArea.textContent = 'Click with different mouse buttons';
    
    const buttonLog = document.createElement('div');
    buttonLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 100px;
        overflow-y: auto;
    `;
    buttonLog.textContent = 'Button clicks will be logged here...';
    
    buttonTestArea.addEventListener('mousedown', function(event) {
        let buttonName;
        switch(event.button) {
            case 0:
                buttonName = 'Left Button';
                this.style.background = '#81c784';
                break;
            case 1:
                buttonName = 'Middle Button (Wheel)';
                this.style.background = '#ffb74d';
                break;
            case 2:
                buttonName = 'Right Button';
                this.style.background = '#f06292';
                break;
            default:
                buttonName = `Button ${event.button}`;
                this.style.background = '#ba68c8';
        }
        
        const message = `${buttonName} pressed (button code: ${event.button})`;
        console.log(message);
        buttonLog.innerHTML += message + '<br>';
        buttonLog.scrollTop = buttonLog.scrollHeight;
        
        // VISUAL CHANGE: Different colors for different buttons
        // USAGE: Creating context-sensitive interactions
    });
    
    buttonTestArea.addEventListener('mouseup', function(event) {
        this.style.background = '#c8e6c9';
    });
    
    // Prevent default context menu for better button testing
    buttonTestArea.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
    
    buttonDemo.append(buttonTitle, buttonTestArea, buttonLog);
    mouseSection.appendChild(buttonDemo);
    
    // ==========================================
    // SECTION 7: PRACTICAL MOUSE EVENT APPLICATIONS
    // ==========================================
    console.log('=== PRACTICAL APPLICATIONS ===');
    
    const practicalDemo = document.createElement('div');
    practicalDemo.style.cssText = `
        background: #fff8e1;
        border: 1px solid #ffc107;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const practicalTitle = document.createElement('h3');
    practicalTitle.textContent = 'Practical Mouse Event Applications';
    practicalTitle.style.margin = '0 0 15px 0';
    
    // Application 1: Drawing Canvas
    const drawingCanvas = document.createElement('canvas');
    drawingCanvas.width = 400;
    drawingCanvas.height = 200;
    drawingCanvas.style.cssText = `
        border: 2px solid #ffc107;
        cursor: crosshair;
        display: block;
        margin: 10px 0;
        background: white;
    `;
    
    const ctx = drawingCanvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    drawingCanvas.addEventListener('mousedown', function(event) {
        isDrawing = true;
        const rect = this.getBoundingClientRect();
        lastX = event.clientX - rect.left;
        lastY = event.clientY - rect.top;
    });
    
    drawingCanvas.addEventListener('mousemove', function(event) {
        if (!isDrawing) return;
        
        const rect = this.getBoundingClientRect();
        const currentX = event.clientX - rect.left;
        const currentY = event.clientY - rect.top;
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = '#ff9800';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        lastX = currentX;
        lastY = currentY;
        
        // VISUAL CHANGE: Drawing lines as mouse moves
        // USAGE: Drawing applications, signature capture
    });
    
    drawingCanvas.addEventListener('mouseup', function() {
        isDrawing = false;
    });
    
    drawingCanvas.addEventListener('mouseleave', function() {
        isDrawing = false;
    });
    
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear Canvas';
    clearButton.style.cssText = `
        background: #f44336;
        color: white;
        border: none;
        padding: 8px 16px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    clearButton.addEventListener('click', function() {
        ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
    });
    
    // Application 2: Image Gallery with Hover Effects
    const gallery = document.createElement('div');
    gallery.style.cssText = `
        display: flex;
        gap: 10px;
        margin: 15px 0;
        flex-wrap: wrap;
    `;
    
    for (let i = 1; i <= 4; i++) {
        const imageBox = document.createElement('div');
        imageBox.style.cssText = `
            width: 80px;
            height: 80px;
            background: linear-gradient(45deg, #ff9800, #ffc107);
            border: 2px solid #ff9800;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        `;
        imageBox.textContent = `Img ${i}`;
        
        imageBox.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.boxShadow = '0 10px 20px rgba(255, 152, 0, 0.3)';
            // VISUAL CHANGE: Image scales and rotates with shadow
        });
        
        imageBox.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = 'none';
            // VISUAL CHANGE: Returns to original state
        });
        
        imageBox.addEventListener('click', function() {
            this.style.background = 'linear-gradient(45deg, #4caf50, #8bc34a)';
            setTimeout(() => {
                this.style.background = 'linear-gradient(45deg, #ff9800, #ffc107)';
            }, 1000);
            // VISUAL CHANGE: Brief color change on click
        });
        
        gallery.appendChild(imageBox);
    }
    
    // Application 3: Random Color Generator Activity
    const colorGeneratorTitle = document.createElement('h4');
    colorGeneratorTitle.textContent = '3. Random Color Generator Activity';
    colorGeneratorTitle.style.margin = '20px 0 10px 0';
    
    const colorGeneratorContainer = document.createElement('div');
    colorGeneratorContainer.style.cssText = `
        background: white;
        border: 2px solid #ffc107;
        padding: 20px;
        margin: 15px 0;
        border-radius: 8px;
        text-align: center;
    `;
    
    // Create heading that will change color
    const colorHeading = document.createElement('h3');
    colorHeading.id = 'color-heading';
    colorHeading.textContent = 'Random Color Generator';
    colorHeading.style.cssText = `
        margin: 0 0 20px 0;
        transition: color 0.3s ease;
    `;
    
    // Create button to generate random color
    const colorButton = document.createElement('button');
    colorButton.textContent = 'Generate Random Color';
    colorButton.style.cssText = `
        background: #ffc107;
        color: #212529;
        border: none;
        padding: 12px 24px;
        margin: 10px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: all 0.3s ease;
    `;
    
    // Create div that will change background color
    const colorDiv = document.createElement('div');
    colorDiv.style.cssText = `
        width: 100%;
        height: 100px;
        border: 2px solid #ddd;
        border-radius: 6px;
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        transition: all 0.3s ease;
        background: #f8f9fa;
    `;
    colorDiv.textContent = 'Click button to change my background!';
    
    // Color display
    const colorDisplay = document.createElement('div');
    colorDisplay.style.cssText = `
        background: #f8f9fa;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        border-radius: 4px;
        font-family: monospace;
        font-size: 14px;
    `;
    colorDisplay.textContent = 'Generated color will appear here...';
    
    // Random color generator function
    function getRandomColor() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        
        let color = `rgb(${red}, ${green}, ${blue})`;
        return color;
    }
    
    // Button click event handler
    colorButton.addEventListener('click', function() {
        console.log('Color generator button clicked!');
        
        // Generate random color
        let randomColor = getRandomColor();
        
        // Apply color to heading text
        const h3 = document.getElementById('color-heading');
        h3.style.color = randomColor;
        
        // Apply color to div background
        colorDiv.style.backgroundColor = randomColor;
        
        // Update color display
        colorDisplay.innerHTML = `
            <strong>Generated Color:</strong> ${randomColor}<br>
            <strong>Applied to:</strong> Heading text & Div background
        `;
        
        // Update div text based on color brightness
        const rgb = randomColor.match(/\d+/g);
        const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
        
        if (brightness > 128) {
            colorDiv.style.color = '#000';
            colorDiv.textContent = `Bright color: ${randomColor}`;
        } else {
            colorDiv.style.color = '#fff';
            colorDiv.textContent = `Dark color: ${randomColor}`;
        }
        
        // Add visual feedback to button
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        console.log(`Color updated: ${randomColor}`);
        
        // VISUAL CHANGE: Heading text and div background change to random color
        // USAGE: Demonstrates click events, function calls, style manipulation
        // CONCEPTS: Math.random(), RGB colors, DOM selection, event handling
    });
    
    // Add hover effect to button
    colorButton.addEventListener('mouseenter', function() {
        this.style.background = '#e0a800';
        this.style.transform = 'scale(1.05)';
    });
    
    colorButton.addEventListener('mouseleave', function() {
        this.style.background = '#ffc107';
        this.style.transform = 'scale(1)';
    });
    
    colorGeneratorContainer.append(
        colorHeading,
        colorButton,
        colorDiv,
        colorDisplay
    );
    
    practicalDemo.append(
        practicalTitle,
        document.createTextNode('1. Drawing Canvas (click and drag to draw):'),
        drawingCanvas,
        clearButton,
        document.createElement('br'),
        document.createTextNode('2. Interactive Image Gallery:'),
        gallery,
        colorGeneratorTitle,
        colorGeneratorContainer
    );
    
    mouseSection.appendChild(practicalDemo);
    
    // ==========================================
    // SECTION 8: MOUSE EVENT BEST PRACTICES
    // ==========================================
    console.log('=== MOUSE EVENT BEST PRACTICES ===');
    
    const bestPracticesSection = document.createElement('div');
    bestPracticesSection.style.cssText = `
        background: #f3e5f5;
        border: 1px solid #9c27b0;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
    `;
    
    bestPracticesSection.innerHTML = `
        <h3 style="margin: 0 0 15px 0; color: #7b1fa2;">Mouse Events Best Practices</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4 style="color: #4caf50; margin-bottom: 10px;">✅ DO:</h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                    <li>Use <code>mouseenter/mouseleave</code> for simple hover effects</li>
                    <li>Use <code>preventDefault()</code> for custom context menus</li>
                    <li>Debounce or throttle <code>mousemove</code> for performance</li>
                    <li>Use <code>getBoundingClientRect()</code> for accurate positioning</li>
                    <li>Provide visual feedback for interactive elements</li>
                    <li>Test with different mouse button combinations</li>
                    <li>Consider touch events for mobile compatibility</li>
                </ul>
            </div>
            
            <div>
                <h4 style="color: #f44336; margin-bottom: 10px;">❌ AVOID:</h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                    <li>Heavy calculations in <code>mousemove</code> handlers</li>
                    <li>Too many nested elements with mouse events</li>
                    <li>Forgetting to handle <code>mouseleave</code> for cleanup</li>
                    <li>Relying only on mouse events (think accessibility)</li>
                    <li>Creating memory leaks with unremoved listeners</li>
                    <li>Blocking right-click unnecessarily</li>
                    <li>Inconsistent hover states across elements</li>
                </ul>
            </div>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #7b1fa2;">Mouse Event Coordinate Systems:</h4>
            <div style="font-family: monospace; font-size: 13px; line-height: 1.6;">
                • <strong>clientX/Y:</strong> Relative to viewport<br>
                • <strong>pageX/Y:</strong> Relative to entire page (includes scroll)<br>
                • <strong>screenX/Y:</strong> Relative to user's screen<br>
                • <strong>offsetX/Y:</strong> Relative to target element<br>
                • <strong>movementX/Y:</strong> Distance moved since last event
            </div>
        </div>
    `;
    
    container.appendChild(bestPracticesSection);
    
    console.log('=== MOUSE AND POINTER EVENTS COMPLETED ===');
    console.log('Key Concepts Covered:');
    console.log('1. Basic mouse events (click, mousedown, mouseup, dblclick)');
    console.log('2. Mouse movement tracking (mousemove, coordinates)');
    console.log('3. Hover events (mouseenter/leave vs mouseover/out)');
    console.log('4. Context menu handling (right-click)');
    console.log('5. Drag and drop events');
    console.log('6. Mouse button detection');
    console.log('7. Practical applications (drawing, galleries, color generator)');
    console.log('8. Random color generator activity');
    console.log('9. Best practices and performance considerations');
    
});

// Note: This file covers comprehensive mouse and pointer events
// Each example includes visual feedback and detailed logging
// Practical applications demonstrate real-world usage
// Performance considerations are highlighted for optimization
// This serves as a complete reference for mouse interactions