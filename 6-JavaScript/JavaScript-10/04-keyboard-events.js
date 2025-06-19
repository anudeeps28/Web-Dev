// Keyboard Events - Complete Guide
// Topics: All keyboard events, key detection, input handling, shortcuts
// This file serves as comprehensive reference notes for keyboard interactions

console.log('=== KEYBOARD EVENTS ===');

// Wait for DOM to load before working with events
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to HTML elements
    const container = document.querySelector('.container') || document.body;
    
    // Create main demo section
    const keyboardSection = document.createElement('section');
    keyboardSection.className = 'keyboard-events-demo';
    keyboardSection.style.cssText = `
        background: #f8f9fa;
        border: 2px solid #28a745;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
    `;
    
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = 'Keyboard Events Demo';
    sectionTitle.style.cssText = `
        color: #28a745;
        margin-top: 0;
        text-align: center;
    `;
    
    keyboardSection.appendChild(sectionTitle);
    container.appendChild(keyboardSection);
    
    // ==========================================
    // SECTION 1: BASIC KEYBOARD EVENTS
    // ==========================================
    console.log('=== BASIC KEYBOARD EVENTS ===');
    
    const basicKeyDemo = document.createElement('div');
    basicKeyDemo.style.cssText = `
        background: #d4edda;
        border: 1px solid #28a745;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const basicTitle = document.createElement('h3');
    basicTitle.textContent = 'Basic Keyboard Events';
    basicTitle.style.margin = '0 0 15px 0';
    
    // Create input field for testing keyboard events
    const keyInput = document.createElement('input');
    keyInput.type = 'text';
    keyInput.placeholder = 'Type here to test keyboard events';
    keyInput.style.cssText = `
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 2px solid #28a745;
        border-radius: 6px;
        font-size: 16px;
    `;
    
    const keyEventLog = document.createElement('div');
    keyEventLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 200px;
        overflow-y: auto;
    `;
    keyEventLog.textContent = 'Keyboard events will be logged here...';
    
    // Function to log keyboard events with detailed information
    function logKeyEvent(eventType, event) {
        const timestamp = new Date().toLocaleTimeString();
        const message = `[${timestamp}] ${eventType} - Key: "${event.key}" Code: "${event.code}" KeyCode: ${event.keyCode}`;
        console.log(message);
        keyEventLog.innerHTML += message + '<br>';
        keyEventLog.scrollTop = keyEventLog.scrollHeight;
    }
    
    // keydown - fired when key is pressed down
    keyInput.addEventListener('keydown', function(event) {
        logKeyEvent('KEYDOWN', event);
        
        // Visual feedback
        this.style.borderColor = '#dc3545';
        this.style.boxShadow = '0 0 5px rgba(220, 53, 69, 0.5)';
        
        // USAGE: Capture key press immediately, good for shortcuts
        // TIMING: Fires first, before character appears in input
    });
    
    // keyup - fired when key is released
    keyInput.addEventListener('keyup', function(event) {
        logKeyEvent('KEYUP', event);
        
        // Reset visual feedback
        this.style.borderColor = '#28a745';
        this.style.boxShadow = 'none';
        
        // USAGE: Detect when key is released, good for key combinations
        // TIMING: Fires last, after character appears in input
    });
    
    // keypress - fired when character-producing key is pressed (DEPRECATED)
    keyInput.addEventListener('keypress', function(event) {
        logKeyEvent('KEYPRESS', event);
        
        // USAGE: Only for printable characters (letters, numbers, symbols)
        // NOTE: Deprecated - use keydown instead
    });
    
    basicKeyDemo.append(basicTitle, keyInput, keyEventLog);
    keyboardSection.appendChild(basicKeyDemo);
    
    // ==========================================
    // SECTION 2: KEY IDENTIFICATION
    // ==========================================
    console.log('=== KEY IDENTIFICATION ===');
    
    const keyIdDemo = document.createElement('div');
    keyIdDemo.style.cssText = `
        background: #fff3cd;
        border: 1px solid #ffc107;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const keyIdTitle = document.createElement('h3');
    keyIdTitle.textContent = 'Key Identification Methods';
    keyIdTitle.style.margin = '0 0 15px 0';
    
    const keyIdInput = document.createElement('input');
    keyIdInput.type = 'text';
    keyIdInput.placeholder = 'Press any key to see identification details';
    keyIdInput.style.cssText = `
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 2px solid #ffc107;
        border-radius: 6px;
        font-size: 16px;
    `;
    
    const keyInfoDisplay = document.createElement('div');
    keyInfoDisplay.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 15px;
        margin: 10px 0;
        border-radius: 4px;
        font-family: monospace;
        font-size: 14px;
    `;
    keyInfoDisplay.innerHTML = 'Press a key to see detailed information...';
    
    keyIdInput.addEventListener('keydown', function(event) {
        // Comprehensive key information
        keyInfoDisplay.innerHTML = `
            <strong>Key Information:</strong><br>
            • <strong>event.key:</strong> "${event.key}" (Human-readable key value)<br>
            • <strong>event.code:</strong> "${event.code}" (Physical key position)<br>
            • <strong>event.keyCode:</strong> ${event.keyCode} (Legacy numeric code)<br>
            • <strong>event.which:</strong> ${event.which} (Legacy - same as keyCode)<br>
            <br>
            <strong>Modifiers:</strong><br>
            • <strong>Ctrl:</strong> ${event.ctrlKey}<br>
            • <strong>Shift:</strong> ${event.shiftKey}<br>
            • <strong>Alt:</strong> ${event.altKey}<br>
            • <strong>Meta (Cmd/Win):</strong> ${event.metaKey}<br>
            <br>
            <strong>Properties:</strong><br>
            • <strong>Repeat:</strong> ${event.repeat} (Key held down)<br>
            • <strong>Location:</strong> ${event.location} (0=standard, 1=left, 2=right, 3=numpad)<br>
            • <strong>Printable:</strong> ${event.key.length === 1 && event.key.match(/\S/)}<br>
            • <strong>Special Key:</strong> ${event.key.length > 1}
        `;
        
        // USAGE: Different properties for different needs
        // event.key: Human-readable (best for most cases)
        // event.code: Physical key position (keyboard layout independent)
        // event.keyCode: Legacy (avoid in new code)
    });
    
    keyIdDemo.append(keyIdTitle, keyIdInput, keyInfoDisplay);
    keyboardSection.appendChild(keyIdDemo);
    
    // ==========================================
    // SECTION 3: SPECIAL KEYS AND COMBINATIONS
    // ==========================================
    console.log('=== SPECIAL KEYS AND COMBINATIONS ===');
    
    const specialKeysDemo = document.createElement('div');
    specialKeysDemo.style.cssText = `
        background: #e2e3e5;
        border: 1px solid #6c757d;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const specialTitle = document.createElement('h3');
    specialTitle.textContent = 'Special Keys and Key Combinations';
    specialTitle.style.margin = '0 0 15px 0';
    
    const specialInput = document.createElement('input');
    specialInput.type = 'text';
    specialInput.placeholder = 'Try special keys: Enter, Escape, Arrow keys, Function keys, etc.';
    specialInput.style.cssText = `
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 2px solid #6c757d;
        border-radius: 6px;
        font-size: 16px;
    `;
    
    const specialLog = document.createElement('div');
    specialLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 150px;
        overflow-y: auto;
    `;
    specialLog.textContent = 'Special key events will be logged here...';
    
    specialInput.addEventListener('keydown', function(event) {
        let specialAction = '';
        
        // Check for specific special keys
        switch(event.key) {
            case 'Enter':
                specialAction = '↩️ Enter key pressed - submit action';
                event.preventDefault(); // Prevent form submission if in form
                this.style.background = '#d4edda';
                break;
                
            case 'Escape':
                specialAction = '⛔ Escape key pressed - cancel action';
                this.style.background = '#f8d7da';
                this.value = ''; // Clear input
                break;
                
            case 'Tab':
                specialAction = '⭾ Tab key pressed - navigation';
                // Don't prevent default to allow normal tab behavior
                this.style.background = '#d1ecf1';
                break;
                
            case 'Backspace':
                specialAction = '⌫ Backspace key pressed - delete';
                this.style.background = '#fff3cd';
                break;
                
            case 'Delete':
                specialAction = '🗑️ Delete key pressed - forward delete';
                this.style.background = '#fff3cd';
                break;
                
            case 'ArrowUp':
                specialAction = '⬆️ Arrow Up pressed - navigation up';
                event.preventDefault();
                this.style.background = '#e2e3e5';
                break;
                
            case 'ArrowDown':
                specialAction = '⬇️ Arrow Down pressed - navigation down';
                event.preventDefault();
                this.style.background = '#e2e3e5';
                break;
                
            case 'ArrowLeft':
                specialAction = '⬅️ Arrow Left pressed - navigation left';
                this.style.background = '#e2e3e5';
                break;
                
            case 'ArrowRight':
                specialAction = '➡️ Arrow Right pressed - navigation right';
                this.style.background = '#e2e3e5';
                break;
                
            case 'Home':
                specialAction = '🏠 Home key pressed - go to beginning';
                this.style.background = '#f0f9ff';
                break;
                
            case 'End':
                specialAction = '🔚 End key pressed - go to end';
                this.style.background = '#f0f9ff';
                break;
                
            case 'PageUp':
                specialAction = '📄⬆️ Page Up pressed - scroll up';
                event.preventDefault();
                this.style.background = '#f0f9ff';
                break;
                
            case 'PageDown':
                specialAction = '📄⬇️ Page Down pressed - scroll down';
                event.preventDefault();
                this.style.background = '#f0f9ff';
                break;
                
            default:
                if (event.key.startsWith('F') && event.key.length <= 3) {
                    specialAction = `🔧 Function key ${event.key} pressed`;
                    event.preventDefault(); // Prevent browser function key actions
                    this.style.background = '#ffe4e6';
                }
        }
        
        // Check for key combinations
        if (event.ctrlKey || event.metaKey) {
            switch(event.key.toLowerCase()) {
                case 'a':
                    specialAction = '🔤 Ctrl/Cmd+A - Select All';
                    event.preventDefault();
                    this.select(); // Select all text in input
                    break;
                case 'c':
                    specialAction = '📋 Ctrl/Cmd+C - Copy';
                    break;
                case 'v':
                    specialAction = '📄 Ctrl/Cmd+V - Paste';
                    break;
                case 'x':
                    specialAction = '✂️ Ctrl/Cmd+X - Cut';
                    break;
                case 'z':
                    specialAction = '↶ Ctrl/Cmd+Z - Undo';
                    event.preventDefault();
                    break;
                case 'y':
                    specialAction = '↷ Ctrl/Cmd+Y - Redo';
                    event.preventDefault();
                    break;
                case 's':
                    specialAction = '💾 Ctrl/Cmd+S - Save';
                    event.preventDefault();
                    break;
            }
        }
        
        // Alt key combinations
        if (event.altKey) {
            switch(event.key) {
                case 'F4':
                    specialAction = '❌ Alt+F4 - Close window';
                    event.preventDefault();
                    break;
            }
        }
        
        if (specialAction) {
            console.log(specialAction);
            specialLog.innerHTML += specialAction + '<br>';
            specialLog.scrollTop = specialLog.scrollHeight;
            
            // Reset background after short delay
            setTimeout(() => {
                this.style.background = 'white';
            }, 1000);
        }
        
        // USAGE: Handle specific keys for app functionality
        // TIMING: Most special key handling should be in keydown
    });
    
    specialKeysDemo.append(specialTitle, specialInput, specialLog);
    keyboardSection.appendChild(specialKeysDemo);
    
    // ==========================================
    // SECTION 4: KEYBOARD SHORTCUTS SYSTEM
    // ==========================================
    console.log('=== KEYBOARD SHORTCUTS SYSTEM ===');
    
    const shortcutsDemo = document.createElement('div');
    shortcutsDemo.style.cssText = `
        background: #e7f3ff;
        border: 1px solid #007bff;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const shortcutsTitle = document.createElement('h3');
    shortcutsTitle.textContent = 'Keyboard Shortcuts System';
    shortcutsTitle.style.margin = '0 0 15px 0';
    
    // Create shortcuts help display
    const shortcutsHelp = document.createElement('div');
    shortcutsHelp.style.cssText = `
        background: white;
        border: 1px solid #007bff;
        padding: 15px;
        margin: 10px 0;
        border-radius: 4px;
        font-family: monospace;
        font-size: 13px;
    `;
    shortcutsHelp.innerHTML = `
        <strong>Available Shortcuts (focus anywhere on page):</strong><br>
        • <strong>Ctrl/Cmd + 1:</strong> Show alert<br>
        • <strong>Ctrl/Cmd + 2:</strong> Change background color<br>
        • <strong>Ctrl/Cmd + 3:</strong> Toggle demo visibility<br>
        • <strong>Ctrl/Cmd + H:</strong> Show/hide this help<br>
        • <strong>Ctrl/Cmd + R:</strong> Reset all demos<br>
        • <strong>Escape:</strong> Clear all highlights<br>
        • <strong>Space:</strong> Scroll to next section
    `;
    
    const shortcutsLog = document.createElement('div');
    shortcutsLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 100px;
        overflow-y: auto;
    `;
    shortcutsLog.textContent = 'Keyboard shortcuts will be logged here...';
    
    // Global keyboard shortcuts system
    const shortcuts = {
        'ctrl+1': function() {
            alert('🎉 Shortcut Ctrl/Cmd+1 activated!');
            return 'Alert shown';
        },
        
        'ctrl+2': function() {
            const colors = ['#ffebee', '#e8f5e8', '#e3f2fd', '#fff3e0', '#f3e5f5'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
            return `Background changed to ${randomColor}`;
        },
        
        'ctrl+3': function() {
            const isHidden = keyboardSection.style.display === 'none';
            keyboardSection.style.display = isHidden ? 'block' : 'none';
            return `Demo ${isHidden ? 'shown' : 'hidden'}`;
        },
        
        'ctrl+h': function() {
            const isHidden = shortcutsHelp.style.display === 'none';
            shortcutsHelp.style.display = isHidden ? 'block' : 'none';
            return `Help ${isHidden ? 'shown' : 'hidden'}`;
        },
        
        'ctrl+r': function() {
            // Reset all demo states
            document.body.style.backgroundColor = '';
            keyboardSection.style.display = 'block';
            shortcutsHelp.style.display = 'block';
            
            // Clear all input fields
            document.querySelectorAll('input[type="text"]').forEach(input => {
                input.value = '';
                input.style.background = 'white';
                input.style.borderColor = '';
                input.style.boxShadow = 'none';
            });
            
            return 'All demos reset';
        },
        
        'escape': function() {
            // Clear all highlights and reset styles
            document.querySelectorAll('input, div').forEach(element => {
                element.style.background = '';
                element.style.borderColor = '';
                element.style.boxShadow = '';
            });
            return 'All highlights cleared';
        },
        
        'space': function() {
            // Scroll to next section smoothly
            window.scrollBy({ top: 300, behavior: 'smooth' });
            return 'Scrolled to next section';
        }
    };
    
    // Function to normalize shortcut keys
    function normalizeShortcut(event) {
        let keys = [];
        
        if (event.ctrlKey || event.metaKey) keys.push('ctrl');
        if (event.altKey) keys.push('alt');
        if (event.shiftKey) keys.push('shift');
        
        // Add the main key
        if (event.key !== 'Control' && event.key !== 'Meta' && 
            event.key !== 'Alt' && event.key !== 'Shift') {
            keys.push(event.key.toLowerCase());
        }
        
        return keys.join('+');
    }
    
    // Global shortcut handler
    document.addEventListener('keydown', function(event) {
        const shortcut = normalizeShortcut(event);
        
        if (shortcuts[shortcut]) {
            event.preventDefault();
            const result = shortcuts[shortcut]();
            
            const message = `🎯 Shortcut "${shortcut}" executed: ${result}`;
            console.log(message);
            shortcutsLog.innerHTML += message + '<br>';
            shortcutsLog.scrollTop = shortcutsLog.scrollHeight;
            
            // USAGE: Global application shortcuts
            // SCOPE: Document-level listener catches all keystrokes
        }
    });
    
    shortcutsDemo.append(shortcutsTitle, shortcutsHelp, shortcutsLog);
    keyboardSection.appendChild(shortcutsDemo);
    
    // ==========================================
    // SECTION 5: TEXT INPUT VALIDATION
    // ==========================================
    console.log('=== TEXT INPUT VALIDATION ===');
    
    const validationDemo = document.createElement('div');
    validationDemo.style.cssText = `
        background: #f8d7da;
        border: 1px solid #dc3545;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const validationTitle = document.createElement('h3');
    validationTitle.textContent = 'Real-time Input Validation';
    validationTitle.style.margin = '0 0 15px 0';
    
    // Numbers only input
    const numbersInput = document.createElement('input');
    numbersInput.type = 'text';
    numbersInput.placeholder = 'Numbers only (0-9)';
    numbersInput.style.cssText = `
        width: 100%;
        padding: 10px;
        margin: 5px 0;
        border: 2px solid #dc3545;
        border-radius: 4px;
    `;
    
    numbersInput.addEventListener('keydown', function(event) {
        // Allow backspace, delete, arrow keys, and tab
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
        
        if (allowedKeys.includes(event.key)) {
            return; // Allow these keys
        }
        
        // Allow numbers (0-9)
        if (event.key >= '0' && event.key <= '9') {
            this.style.borderColor = '#28a745';
            return; // Allow numbers
        }
        
        // Block everything else
        event.preventDefault();
        this.style.borderColor = '#dc3545';
        this.style.boxShadow = '0 0 5px rgba(220, 53, 69, 0.5)';
        
        setTimeout(() => {
            this.style.boxShadow = 'none';
        }, 200);
        
        console.log(`Blocked non-numeric key: ${event.key}`);
        // USAGE: Real-time input validation
    });
    
    // Letters only input
    const lettersInput = document.createElement('input');
    lettersInput.type = 'text';
    lettersInput.placeholder = 'Letters only (a-z, A-Z)';
    lettersInput.style.cssText = `
        width: 100%;
        padding: 10px;
        margin: 5px 0;
        border: 2px solid #dc3545;
        border-radius: 4px;
    `;
    
    lettersInput.addEventListener('keydown', function(event) {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', ' '];
        
        if (allowedKeys.includes(event.key)) {
            return;
        }
        
        // Allow letters
        if (event.key.match(/^[a-zA-Z]$/)) {
            this.style.borderColor = '#28a745';
            return;
        }
        
        event.preventDefault();
        this.style.borderColor = '#dc3545';
        this.style.boxShadow = '0 0 5px rgba(220, 53, 69, 0.5)';
        
        setTimeout(() => {
            this.style.boxShadow = 'none';
        }, 200);
        
        console.log(`Blocked non-letter key: ${event.key}`);
    });
    
    // Email format input
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.placeholder = 'Email format validation';
    emailInput.style.cssText = `
        width: 100%;
        padding: 10px;
        margin: 5px 0;
        border: 2px solid #dc3545;
        border-radius: 4px;
    `;
    
    const emailStatus = document.createElement('div');
    emailStatus.style.cssText = `
        font-size: 12px;
        margin: 5px 0;
        padding: 5px;
    `;
    emailStatus.textContent = 'Type an email address...';
    
    emailInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(this.value);
        
        if (this.value === '') {
            this.style.borderColor = '#dc3545';
            emailStatus.textContent = 'Type an email address...';
            emailStatus.style.color = '#6c757d';
        } else if (isValid) {
            this.style.borderColor = '#28a745';
            emailStatus.textContent = '✅ Valid email format';
            emailStatus.style.color = '#28a745';
        } else {
            this.style.borderColor = '#ffc107';
            emailStatus.textContent = '⚠️ Invalid email format';
            emailStatus.style.color = '#ffc107';
        }
        
        // USAGE: Real-time format validation
    });
    
    validationDemo.append(
        validationTitle,
        numbersInput,
        lettersInput,
        emailInput,
        emailStatus
    );
    keyboardSection.appendChild(validationDemo);
    
    // ==========================================
    // SECTION 6: VIRTUAL KEYBOARD DISPLAY
    // ==========================================
    console.log('=== VIRTUAL KEYBOARD DISPLAY ===');
    
    const virtualKeyboardDemo = document.createElement('div');
    virtualKeyboardDemo.style.cssText = `
        background: #f0f9ff;
        border: 1px solid #0ea5e9;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const virtualTitle = document.createElement('h3');
    virtualTitle.textContent = 'Virtual Keyboard Display';
    virtualTitle.style.margin = '0 0 15px 0';
    
    const virtualInput = document.createElement('input');
    virtualInput.type = 'text';
    virtualInput.placeholder = 'Type to see keys highlight on virtual keyboard';
    virtualInput.style.cssText = `
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 2px solid #0ea5e9;
        border-radius: 4px;
    `;
    
    // Create simplified virtual keyboard
    const virtualKeyboard = document.createElement('div');
    virtualKeyboard.style.cssText = `
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        gap: 2px;
        background: #e0f2fe;
        padding: 10px;
        border-radius: 4px;
        margin: 10px 0;
    `;
    
    // Create virtual keys
    const keyRows = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
    ];
    
    const virtualKeys = new Map();
    
    keyRows.forEach(row => {
        row.forEach(key => {
            const keyElement = document.createElement('div');
            keyElement.textContent = key;
            keyElement.style.cssText = `
                background: white;
                border: 1px solid #0ea5e9;
                padding: 8px 4px;
                text-align: center;
                border-radius: 3px;
                font-family: monospace;
                font-size: 12px;
                transition: all 0.1s;
            `;
            
            virtualKeys.set(key, keyElement);
            virtualKeyboard.appendChild(keyElement);
        });
    });
    
    // Add special keys
    const spaceKey = document.createElement('div');
    spaceKey.textContent = 'SPACE';
    spaceKey.style.cssText = `
        background: white;
        border: 1px solid #0ea5e9;
        padding: 8px;
        text-align: center;
        border-radius: 3px;
        font-family: monospace;
        font-size: 12px;
        grid-column: span 10;
        margin-top: 5px;
        transition: all 0.1s;
    `;
    virtualKeys.set(' ', spaceKey);
    virtualKeyboard.appendChild(spaceKey);
    
    // Highlight keys when pressed
    virtualInput.addEventListener('keydown', function(event) {
        const key = event.key.toLowerCase();
        const keyElement = virtualKeys.get(key);
        
        if (keyElement) {
            keyElement.style.background = '#0ea5e9';
            keyElement.style.color = 'white';
            keyElement.style.transform = 'scale(0.95)';
            
            // VISUAL CHANGE: Virtual key lights up when pressed
            // USAGE: Visual feedback, educational tools, accessibility
        }
    });
    
    virtualInput.addEventListener('keyup', function(event) {
        const key = event.key.toLowerCase();
        const keyElement = virtualKeys.get(key);
        
        if (keyElement) {
            keyElement.style.background = 'white';
            keyElement.style.color = 'black';
            keyElement.style.transform = 'scale(1)';
        }
    });
    
    virtualKeyboardDemo.append(virtualTitle, virtualInput, virtualKeyboard);
    keyboardSection.appendChild(virtualKeyboardDemo);
    
    // ==========================================
    // SECTION 7: KEYBOARD EVENT BEST PRACTICES
    // ==========================================
    console.log('=== KEYBOARD EVENT BEST PRACTICES ===');
    
    const bestPracticesSection = document.createElement('div');
    bestPracticesSection.style.cssText = `
        background: #f8f9fa;
        border: 1px solid #6c757d;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
    `;
    
    bestPracticesSection.innerHTML = `
        <h3 style="margin: 0 0 15px 0; color: #495057;">Keyboard Events Best Practices</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4 style="color: #28a745; margin-bottom: 10px;">✅ DO:</h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                    <li>Use <code>event.key</code> instead of <code>keyCode</code></li>
                    <li>Handle both <code>keydown</code> and <code>keyup</code> appropriately</li>
                    <li>Provide visual feedback for key interactions</li>
                    <li>Support standard keyboard shortcuts (Ctrl+C, etc.)</li>
                    <li>Use <code>preventDefault()</code> for custom key behavior</li>
                    <li>Test with different keyboard layouts</li>
                    <li>Make keyboard navigation accessible</li>
                    <li>Validate input in real-time when appropriate</li>
                </ul>
            </div>
            
            <div>
                <h4 style="color: #dc3545; margin-bottom: 10px;">❌ AVOID:</h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                    <li>Relying on <code>keyCode</code> or <code>which</code> (deprecated)</li>
                    <li>Using <code>keypress</code> event (deprecated)</li>
                    <li>Blocking essential system shortcuts</li>
                    <li>Hard-coding keyboard layouts</li>
                    <li>Ignoring accessibility considerations</li>
                    <li>Over-restricting user input</li>
                    <li>Not providing alternative interaction methods</li>
                    <li>Forgetting to handle modifier keys properly</li>
                </ul>
            </div>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #495057;">Key Event Properties:</h4>
            <div style="font-family: monospace; font-size: 13px; line-height: 1.8;">
                • <strong>event.key:</strong> Human-readable key value ("a", "Enter", "ArrowUp")<br>
                • <strong>event.code:</strong> Physical key code ("KeyA", "Enter", "ArrowUp")<br>
                • <strong>event.keyCode:</strong> Numeric code (deprecated)<br>
                • <strong>event.ctrlKey/altKey/shiftKey/metaKey:</strong> Modifier key states
            </div>
        </div>
        
        <div style="margin-top: 15px; padding: 15px; background: white; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #495057;">Event Timing:</h4>
            <div style="font-family: monospace; font-size: 13px; line-height: 1.8;">
                • <strong>keydown:</strong> Key pressed (before character appears) - use for shortcuts<br>
                • <strong>keyup:</strong> Key released (after character appears) - use for cleanup<br>
                • <strong>input:</strong> Text actually changed - use for validation
            </div>
        </div>
    `;
    
    container.appendChild(bestPracticesSection);
    
    console.log('=== KEYBOARD EVENTS COMPLETED ===');
    console.log('Key Concepts Covered:');
    console.log('1. Basic keyboard events (keydown, keyup, keypress)');
    console.log('2. Key identification (event.key, event.code, modifiers)');
    console.log('3. Special keys and key combinations');
    console.log('4. Global keyboard shortcuts system');
    console.log('5. Real-time input validation');
    console.log('6. Virtual keyboard visualization');
    console.log('7. Best practices and accessibility');
    console.log('8. Modern vs deprecated approaches');
    
});

// Note: This file covers comprehensive keyboard event handling
// Examples include practical applications like shortcuts and validation
// Demonstrates modern event.key approach vs deprecated keyCode
// Includes accessibility considerations and best practices
// Virtual keyboard provides visual feedback for learning
// This serves as a complete reference for keyboard interactions