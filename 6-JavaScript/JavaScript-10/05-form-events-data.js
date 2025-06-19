// Form Events and Data Extraction - Complete Guide
// Topics: Form events, data extraction, validation, submission handling
// This file serves as comprehensive reference notes for form interactions

console.log('=== FORM EVENTS AND DATA EXTRACTION ===');

// Wait for DOM to load before working with events
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to HTML elements
    const container = document.querySelector('.container') || document.body;
    
    // Create main demo section
    const formSection = document.createElement('section');
    formSection.className = 'form-events-demo';
    formSection.style.cssText = `
        background: #f8f9fa;
        border: 2px solid #17a2b8;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
    `;
    
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = 'Form Events & Data Extraction Demo';
    sectionTitle.style.cssText = `
        color: #17a2b8;
        margin-top: 0;
        text-align: center;
    `;
    
    formSection.appendChild(sectionTitle);
    container.appendChild(formSection);
    
    // ==========================================
    // SECTION 1: BASIC FORM EVENTS
    // ==========================================
    console.log('=== BASIC FORM EVENTS ===');
    
    const basicFormDemo = document.createElement('div');
    basicFormDemo.style.cssText = `
        background: #d1ecf1;
        border: 1px solid #17a2b8;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const basicTitle = document.createElement('h3');
    basicTitle.textContent = 'Basic Form Events';
    basicTitle.style.margin = '0 0 15px 0';
    
    // Create comprehensive form for demonstrating events
    const basicForm = document.createElement('form');
    basicForm.id = 'basic-form';
    basicForm.style.cssText = `
        background: white;
        padding: 20px;
        border-radius: 6px;
        border: 1px solid #17a2b8;
    `;
    
    // Form HTML structure
    basicForm.innerHTML = `
        <div style="margin-bottom: 15px;">
            <label for="username" style="display: block; margin-bottom: 5px; font-weight: bold;">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter username" 
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
        </div>
        
        <div style="margin-bottom: 15px;">
            <label for="email" style="display: block; margin-bottom: 5px; font-weight: bold;">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email"
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
        </div>
        
        <div style="margin-bottom: 15px;">
            <label for="password" style="display: block; margin-bottom: 5px; font-weight: bold;">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter password"
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
        </div>
        
        <div style="margin-bottom: 15px;">
            <label for="country" style="display: block; margin-bottom: 5px; font-weight: bold;">Country:</label>
            <select id="country" name="country" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                <option value="">Select country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
            </select>
        </div>
        
        <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Interests:</label>
            <label style="display: block; margin: 5px 0;">
                <input type="checkbox" name="interests" value="tech" style="margin-right: 5px;">
                Technology
            </label>
            <label style="display: block; margin: 5px 0;">
                <input type="checkbox" name="interests" value="sports" style="margin-right: 5px;">
                Sports
            </label>
            <label style="display: block; margin: 5px 0;">
                <input type="checkbox" name="interests" value="music" style="margin-right: 5px;">
                Music
            </label>
        </div>
        
        <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Gender:</label>
            <label style="display: inline-block; margin-right: 15px;">
                <input type="radio" name="gender" value="male" style="margin-right: 5px;">
                Male
            </label>
            <label style="display: inline-block; margin-right: 15px;">
                <input type="radio" name="gender" value="female" style="margin-right: 5px;">
                Female
            </label>
            <label style="display: inline-block;">
                <input type="radio" name="gender" value="other" style="margin-right: 5px;">
                Other
            </label>
        </div>
        
        <div style="margin-bottom: 15px;">
            <label for="comments" style="display: block; margin-bottom: 5px; font-weight: bold;">Comments:</label>
            <textarea id="comments" name="comments" rows="4" placeholder="Enter your comments"
                      style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;"></textarea>
        </div>
        
        <button type="submit" style="background: #17a2b8; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">
            Submit Form
        </button>
        <button type="reset" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-left: 10px;">
            Reset Form
        </button>
    `;
    
    const eventLog = document.createElement('div');
    eventLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 200px;
        overflow-y: auto;
    `;
    eventLog.textContent = 'Form events will be logged here...';
    
    // Function to log form events
    function logFormEvent(eventType, element, value = '') {
        const timestamp = new Date().toLocaleTimeString();
        const elementInfo = `${element.tagName.toLowerCase()}${element.id ? '#' + element.id : ''}${element.name ? '[' + element.name + ']' : ''}`;
        const message = `[${timestamp}] ${eventType} on ${elementInfo}${value ? ': ' + value : ''}`;
        console.log(message);
        eventLog.innerHTML += message + '<br>';
        eventLog.scrollTop = eventLog.scrollHeight;
    }
    
    // Add event listeners to all form elements
    const formElements = basicForm.querySelectorAll('input, select, textarea');
    
    formElements.forEach(element => {
        // focus - element gains focus
        element.addEventListener('focus', function() {
            logFormEvent('FOCUS', this);
            this.style.borderColor = '#007bff';
            this.style.boxShadow = '0 0 0 0.2rem rgba(0, 123, 255, 0.25)';
            // VISUAL CHANGE: Blue border and shadow
            // USAGE: Show which field is active, initialize helpers
        });
        
        // blur - element loses focus
        element.addEventListener('blur', function() {
            logFormEvent('BLUR', this, this.value);
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
            // VISUAL CHANGE: Return to normal border
            // USAGE: Validate field when user moves away
        });
        
        // input - value changes (real-time)
        element.addEventListener('input', function() {
            logFormEvent('INPUT', this, this.value.substring(0, 20) + (this.value.length > 20 ? '...' : ''));
            // USAGE: Real-time validation, character counting, search suggestions
        });
        
        // change - value changes and element loses focus
        element.addEventListener('change', function() {
            logFormEvent('CHANGE', this, this.value);
            // USAGE: Final validation, update dependent fields
        });
    });
    
    // Form-level events
    basicForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission
        logFormEvent('SUBMIT', this);
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.textContent = '✅ Form submitted successfully! (prevented default)';
        successMsg.style.cssText = `
            background: #d4edda;
            border: 1px solid #c3e6cb;
            color: #155724;
            padding: 10px;
            margin: 10px 0;
            border-radius: 4px;
        `;
        this.appendChild(successMsg);
        
        setTimeout(() => {
            if (successMsg.parentNode) {
                successMsg.remove();
            }
        }, 3000);
        
        // USAGE: Validate form, submit via AJAX, show feedback
    });
    
    basicForm.addEventListener('reset', function() {
        logFormEvent('RESET', this);
        
        // Clear event log after reset
        setTimeout(() => {
            eventLog.textContent = 'Form events will be logged here...';
        }, 100);
        
        // USAGE: Clean up form state, reset validation messages
    });
    
    basicFormDemo.append(basicTitle, basicForm, eventLog);
    formSection.appendChild(basicFormDemo);
    
    // ==========================================
    // SECTION 2: FORM DATA EXTRACTION
    // ==========================================
    console.log('=== FORM DATA EXTRACTION ===');
    
    const dataExtractionDemo = document.createElement('div');
    dataExtractionDemo.style.cssText = `
        background: #fff3cd;
        border: 1px solid #ffc107;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const dataTitle = document.createElement('h3');
    dataTitle.textContent = 'Form Data Extraction Methods';
    dataTitle.style.margin = '0 0 15px 0';
    
    // Create buttons to demonstrate different extraction methods
    const extractionButtons = document.createElement('div');
    extractionButtons.style.cssText = `
        margin: 10px 0;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    `;
    
    const methods = [
        { name: 'FormData API', id: 'formdata' },
        { name: 'Manual Collection', id: 'manual' },
        { name: 'Serialize to JSON', id: 'json' },
        { name: 'Query Selectors', id: 'query' },
        { name: 'Elements Collection', id: 'elements' }
    ];
    
    methods.forEach(method => {
        const button = document.createElement('button');
        button.textContent = method.name;
        button.style.cssText = `
            background: #ffc107;
            color: #212529;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        `;
        
        button.addEventListener('click', function() {
            extractFormData(method.id);
        });
        
        extractionButtons.appendChild(button);
    });
    
    const dataDisplay = document.createElement('div');
    dataDisplay.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 15px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 300px;
        overflow-y: auto;
        white-space: pre-wrap;
    `;
    dataDisplay.textContent = 'Click a button above to extract form data using different methods...';
    
    // Form data extraction functions
    function extractFormData(method) {
        const form = document.getElementById('basic-form');
        let result = '';
        
        switch(method) {
            case 'formdata':
                // Method 1: FormData API (modern, easy)
                result = '=== FormData API ===\n';
                const formData = new FormData(form);
                
                result += 'FormData entries:\n';
                for (let [key, value] of formData.entries()) {
                    result += `${key}: ${value}\n`;
                }
                
                result += '\nFormData.getAll() for multiple values:\n';
                const interests = formData.getAll('interests');
                result += `interests: [${interests.join(', ')}]\n`;
                
                result += '\nConverting to Object:\n';
                const formObject = {};
                for (let [key, value] of formData.entries()) {
                    if (formObject[key]) {
                        // Handle multiple values (checkboxes)
                        if (Array.isArray(formObject[key])) {
                            formObject[key].push(value);
                        } else {
                            formObject[key] = [formObject[key], value];
                        }
                    } else {
                        formObject[key] = value;
                    }
                }
                result += JSON.stringify(formObject, null, 2);
                
                // USAGE: Best for file uploads and modern form handling
                break;
                
            case 'manual':
                // Method 2: Manual element selection
                result = '=== Manual Collection ===\n';
                const data = {
                    username: form.querySelector('#username').value,
                    email: form.querySelector('#email').value,
                    password: form.querySelector('#password').value,
                    country: form.querySelector('#country').value,
                    interests: Array.from(form.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value),
                    gender: form.querySelector('input[name="gender"]:checked')?.value || '',
                    comments: form.querySelector('#comments').value
                };
                
                result += JSON.stringify(data, null, 2);
                
                // USAGE: When you need specific processing for each field
                break;
                
            case 'json':
                // Method 3: Serialize to JSON
                result = '=== Serialize to JSON ===\n';
                
                function serializeFormToJSON(form) {
                    const formData = new FormData(form);
                    const json = {};
                    
                    for (let [key, value] of formData.entries()) {
                        if (json[key]) {
                            if (Array.isArray(json[key])) {
                                json[key].push(value);
                            } else {
                                json[key] = [json[key], value];
                            }
                        } else {
                            // Check if this field has multiple values
                            const allValues = formData.getAll(key);
                            json[key] = allValues.length > 1 ? allValues : value;
                        }
                    }
                    
                    return json;
                }
                
                const jsonData = serializeFormToJSON(form);
                result += JSON.stringify(jsonData, null, 2);
                
                // USAGE: For API submissions and data storage
                break;
                
            case 'query':
                // Method 4: Using query selectors
                result = '=== Query Selectors Method ===\n';
                
                // Text inputs
                result += 'Text Inputs:\n';
                form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]').forEach(input => {
                    result += `${input.name}: "${input.value}"\n`;
                });
                
                // Select elements
                result += '\nSelect Elements:\n';
                form.querySelectorAll('select').forEach(select => {
                    result += `${select.name}: "${select.value}" (${select.selectedOptions[0]?.text || 'None'})\n`;
                });
                
                // Checkboxes
                result += '\nCheckboxes:\n';
                form.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                    result += `${checkbox.value}: ${checkbox.checked}\n`;
                });
                
                // Radio buttons
                result += '\nRadio Buttons:\n';
                const radioGroups = {};
                form.querySelectorAll('input[type="radio"]').forEach(radio => {
                    if (!radioGroups[radio.name]) {
                        radioGroups[radio.name] = [];
                    }
                    radioGroups[radio.name].push({ value: radio.value, checked: radio.checked });
                });
                
                Object.entries(radioGroups).forEach(([name, radios]) => {
                    const selected = radios.find(r => r.checked);
                    result += `${name}: ${selected ? selected.value : 'none'}\n`;
                });
                
                // Textareas
                result += '\nTextareas:\n';
                form.querySelectorAll('textarea').forEach(textarea => {
                    result += `${textarea.name}: "${textarea.value}"\n`;
                });
                
                // USAGE: When you need detailed control over each input type
                break;
                
            case 'elements':
                // Method 5: Form elements collection
                result = '=== Form Elements Collection ===\n';
                
                result += `Form name: "${form.name || 'unnamed'}"\n`;
                result += `Form action: "${form.action || 'none'}"\n`;
                result += `Form method: "${form.method}"\n`;
                result += `Total elements: ${form.elements.length}\n\n`;
                
                result += 'All form elements:\n';
                for (let i = 0; i < form.elements.length; i++) {
                    const element = form.elements[i];
                    let value = '';
                    
                    if (element.type === 'checkbox' || element.type === 'radio') {
                        value = element.checked ? element.value : '(unchecked)';
                    } else {
                        value = element.value || '(empty)';
                    }
                    
                    result += `[${i}] ${element.tagName.toLowerCase()}.${element.type} "${element.name}": ${value}\n`;
                }
                
                result += '\nAccessing by name:\n';
                if (form.elements.username) {
                    result += `form.elements.username.value: "${form.elements.username.value}"\n`;
                }
                if (form.elements.interests) {
                    result += `form.elements.interests.length: ${form.elements.interests.length}\n`;
                    for (let i = 0; i < form.elements.interests.length; i++) {
                        result += `  interests[${i}]: ${form.elements.interests[i].value} (${form.elements.interests[i].checked})\n`;
                    }
                }
                
                // USAGE: When working with legacy code or need element access by index
                break;
        }
        
        dataDisplay.textContent = result;
        console.log(result);
    }
    
    dataExtractionDemo.append(dataTitle, extractionButtons, dataDisplay);
    formSection.appendChild(dataExtractionDemo);
    
    // ==========================================
    // SECTION 3: FORM VALIDATION
    // ==========================================
    console.log('=== FORM VALIDATION ===');
    
    const validationDemo = document.createElement('div');
    validationDemo.style.cssText = `
        background: #f8d7da;
        border: 1px solid #dc3545;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const validationTitle = document.createElement('h3');
    validationTitle.textContent = 'Form Validation Examples';
    validationTitle.style.margin = '0 0 15px 0';
    
    // Create validation form
    const validationForm = document.createElement('form');
    validationForm.id = 'validation-form';
    validationForm.style.cssText = `
        background: white;
        padding: 20px;
        border-radius: 6px;
        border: 1px solid #dc3545;
    `;
    
    validationForm.innerHTML = `
        <div style="margin-bottom: 15px;">
            <label for="val-username" style="display: block; margin-bottom: 5px; font-weight: bold;">Username (3-20 chars):</label>
            <input type="text" id="val-username" name="username" required minlength="3" maxlength="20"
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            <div class="error-message" style="color: #dc3545; font-size: 12px; margin-top: 2px;"></div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <label for="val-email" style="display: block; margin-bottom: 5px; font-weight: bold;">Email:</label>
            <input type="email" id="val-email" name="email" required
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            <div class="error-message" style="color: #dc3545; font-size: 12px; margin-top: 2px;"></div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <label for="val-age" style="display: block; margin-bottom: 5px; font-weight: bold;">Age (18-100):</label>
            <input type="number" id="val-age" name="age" min="18" max="100" required
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            <div class="error-message" style="color: #dc3545; font-size: 12px; margin-top: 2px;"></div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <label for="val-website" style="display: block; margin-bottom: 5px; font-weight: bold;">Website URL:</label>
            <input type="url" id="val-website" name="website" placeholder="https://example.com"
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            <div class="error-message" style="color: #dc3545; font-size: 12px; margin-top: 2px;"></div>
        </div>
        
        <button type="submit" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">
            Validate & Submit
        </button>
    `;
    
    const validationLog = document.createElement('div');
    validationLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 150px;
        overflow-y: auto;
    `;
    validationLog.textContent = 'Validation results will appear here...';
    
    // Validation functions
    function validateField(field) {
        const errorElement = field.parentNode.querySelector('.error-message');
        let isValid = true;
        let errorMessage = '';
        
        // Clear previous error
        errorElement.textContent = '';
        field.style.borderColor = '#ddd';
        
        // Required field validation
        if (field.hasAttribute('required') && !field.value.trim()) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Specific field validations
        if (field.value.trim()) {
            switch(field.type) {
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid email address';
                    }
                    break;
                    
                case 'number':
                    const num = parseInt(field.value);
                    const min = parseInt(field.getAttribute('min'));
                    const max = parseInt(field.getAttribute('max'));
                    
                    if (isNaN(num)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid number';
                    } else if (min && num < min) {
                        isValid = false;
                        errorMessage = `Minimum value is ${min}`;
                    } else if (max && num > max) {
                        isValid = false;
                        errorMessage = `Maximum value is ${max}`;
                    }
                    break;
                    
                case 'url':
                    try {
                        new URL(field.value);
                    } catch {
                        isValid = false;
                        errorMessage = 'Please enter a valid URL';
                    }
                    break;
                    
                case 'text':
                    if (field.name === 'username') {
                        if (field.value.length < 3) {
                            isValid = false;
                            errorMessage = 'Username must be at least 3 characters';
                        } else if (field.value.length > 20) {
                            isValid = false;
                            errorMessage = 'Username must be less than 20 characters';
                        } else if (!/^[a-zA-Z0-9_]+$/.test(field.value)) {
                            isValid = false;
                            errorMessage = 'Username can only contain letters, numbers, and underscores';
                        }
                    }
                    break;
            }
        }
        
        // Show error state
        if (!isValid) {
            field.style.borderColor = '#dc3545';
            field.style.boxShadow = '0 0 0 0.2rem rgba(220, 53, 69, 0.25)';
            errorElement.textContent = errorMessage;
        } else {
            field.style.borderColor = '#28a745';
            field.style.boxShadow = '0 0 0 0.2rem rgba(40, 167, 69, 0.25)';
        }
        
        return isValid;
    }
    
    // Add validation event listeners
    const validationFields = validationForm.querySelectorAll('input');
    validationFields.forEach(field => {
        // Real-time validation on input
        field.addEventListener('input', function() {
            validateField(this);
        });
        
        // Validation on blur
        field.addEventListener('blur', function() {
            const isValid = validateField(this);
            const message = `Field "${this.name}" ${isValid ? 'valid' : 'invalid'}`;
            console.log(message);
            validationLog.innerHTML += message + '<br>';
            validationLog.scrollTop = validationLog.scrollHeight;
        });
    });
    
    // Form submission with validation
    validationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let allValid = true;
        const results = [];
        
        // Validate all fields
        validationFields.forEach(field => {
            const isValid = validateField(field);
            results.push(`${field.name}: ${isValid ? 'valid' : 'invalid'}`);
            if (!isValid) allValid = false;
        });
        
        // Log results
        const timestamp = new Date().toLocaleTimeString();
        validationLog.innerHTML += `[${timestamp}] Form validation: ${allValid ? 'PASSED' : 'FAILED'}<br>`;
        results.forEach(result => {
            validationLog.innerHTML += `  ${result}<br>`;
        });
        validationLog.scrollTop = validationLog.scrollHeight;
        
        if (allValid) {
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.textContent = '✅ All validations passed! Form ready for submission.';
            successMsg.style.cssText = `
                background: #d4edda;
                border: 1px solid #c3e6cb;
                color: #155724;
                padding: 10px;
                margin: 10px 0;
                border-radius: 4px;
            `;
            this.appendChild(successMsg);
            
            setTimeout(() => {
                if (successMsg.parentNode) {
                    successMsg.remove();
                }
            }, 3000);
        }
        
        // USAGE: Comprehensive form validation before submission
    });
    
    validationDemo.append(validationTitle, validationForm, validationLog);
    formSection.appendChild(validationDemo);
    
    // ==========================================
    // SECTION 4: DYNAMIC FORM MANIPULATION
    // ==========================================
    console.log('=== DYNAMIC FORM MANIPULATION ===');
    
    const dynamicDemo = document.createElement('div');
    dynamicDemo.style.cssText = `
        background: #e2e3e5;
        border: 1px solid #6c757d;
        padding: 15px;
        margin: 15px 0;
        border-radius: 6px;
    `;
    
    const dynamicTitle = document.createElement('h3');
    dynamicTitle.textContent = 'Dynamic Form Manipulation';
    dynamicTitle.style.margin = '0 0 15px 0';
    
    // Create dynamic form
    const dynamicForm = document.createElement('form');
    dynamicForm.id = 'dynamic-form';
    dynamicForm.style.cssText = `
        background: white;
        padding: 20px;
        border-radius: 6px;
        border: 1px solid #6c757d;
    `;
    
    // Initial form structure
    dynamicForm.innerHTML = `
        <div style="margin-bottom: 15px;">
            <label for="dyn-name" style="display: block; margin-bottom: 5px; font-weight: bold;">Name:</label>
            <input type="text" id="dyn-name" name="name" 
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
        </div>
        
        <div id="skills-container" style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Skills:</label>
            <div class="skill-item" style="display: flex; gap: 10px; margin-bottom: 5px; align-items: center;">
                <input type="text" name="skills" placeholder="Enter skill"
                       style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                <button type="button" class="remove-skill" style="background: #dc3545; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">Remove</button>
            </div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <button type="button" id="add-skill" style="background: #28a745; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Add Skill</button>
            <button type="button" id="populate-form" style="background: #17a2b8; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-left: 10px;">Populate Sample Data</button>
        </div>
        
        <button type="submit" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">
            Submit Dynamic Form
        </button>
    `;
    
    const dynamicLog = document.createElement('div');
    dynamicLog.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px 0;
        font-family: monospace;
        font-size: 12px;
        max-height: 150px;
        overflow-y: auto;
    `;
    dynamicLog.textContent = 'Dynamic form events will be logged here...';
    
    // Dynamic form functionality
    const skillsContainer = dynamicForm.querySelector('#skills-container');
    const addSkillBtn = dynamicForm.querySelector('#add-skill');
    const populateBtn = dynamicForm.querySelector('#populate-form');
    
    // Add skill functionality
    addSkillBtn.addEventListener('click', function() {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.style.cssText = 'display: flex; gap: 10px; margin-bottom: 5px; align-items: center;';
        
        skillItem.innerHTML = `
            <input type="text" name="skills" placeholder="Enter skill"
                   style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            <button type="button" class="remove-skill" style="background: #dc3545; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">Remove</button>
        `;
        
        skillsContainer.appendChild(skillItem);
        
        const message = 'New skill field added';
        console.log(message);
        dynamicLog.innerHTML += message + '<br>';
        dynamicLog.scrollTop = dynamicLog.scrollHeight;
        
        // Focus on new input
        skillItem.querySelector('input').focus();
        
        // USAGE: Dynamic form field addition
    });
    
    // Remove skill functionality (event delegation)
    skillsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-skill')) {
            const skillItems = skillsContainer.querySelectorAll('.skill-item');
            
            if (skillItems.length > 1) {
                event.target.parentNode.remove();
                
                const message = 'Skill field removed';
                console.log(message);
                dynamicLog.innerHTML += message + '<br>';
                dynamicLog.scrollTop = dynamicLog.scrollHeight;
            } else {
                alert('At least one skill field is required');
            }
            
            // USAGE: Dynamic form field removal with validation
        }
    });
    
    // Populate sample data
    populateBtn.addEventListener('click', function() {
        const nameField = dynamicForm.querySelector('#dyn-name');
        nameField.value = 'John Doe';
        
        const skillInputs = dynamicForm.querySelectorAll('input[name="skills"]');
        const sampleSkills = ['JavaScript', 'Python', 'React', 'Node.js'];
        
        skillInputs.forEach((input, index) => {
            if (sampleSkills[index]) {
                input.value = sampleSkills[index];
            }
        });
        
        // Add more skills if needed
        for (let i = skillInputs.length; i < sampleSkills.length; i++) {
            addSkillBtn.click();
            const newInput = dynamicForm.querySelectorAll('input[name="skills"]')[i];
            newInput.value = sampleSkills[i];
        }
        
        const message = 'Sample data populated';
        console.log(message);
        dynamicLog.innerHTML += message + '<br>';
        dynamicLog.scrollTop = dynamicLog.scrollHeight;
        
        // USAGE: Form auto-population for testing
    });
    
    // Dynamic form submission
    dynamicForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Extract data from dynamic form
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            skills: formData.getAll('skills').filter(skill => skill.trim() !== '')
        };
        
        const message = `Dynamic form submitted: ${JSON.stringify(data)}`;
        console.log(message);
        dynamicLog.innerHTML += message + '<br>';
        dynamicLog.scrollTop = dynamicLog.scrollHeight;
        
        // USAGE: Handle dynamic form submissions
    });
    
    dynamicDemo.append(dynamicTitle, dynamicForm, dynamicLog);
    formSection.appendChild(dynamicDemo);
    
    // ==========================================
    // SECTION 5: BEST PRACTICES SUMMARY
    // ==========================================
    console.log('=== FORM EVENTS BEST PRACTICES ===');
    
    const bestPracticesSection = document.createElement('div');
    bestPracticesSection.style.cssText = `
        background: #f8f9fa;
        border: 1px solid #6c757d;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
    `;
    
    bestPracticesSection.innerHTML = `
        <h3 style="margin: 0 0 15px 0; color: #495057;">Form Events & Data Extraction Best Practices</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4 style="color: #28a745; margin-bottom: 10px;">✅ DO:</h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                    <li>Use FormData API for modern form handling</li>
                    <li>Validate on both input and blur events</li>
                    <li>Provide real-time feedback to users</li>
                    <li>Use preventDefault() to control form submission</li>
                    <li>Handle multiple values properly (checkboxes)</li>
                    <li>Clean up dynamic form elements</li>
                    <li>Use semantic HTML form elements</li>
                    <li>Implement client-side AND server-side validation</li>
                </ul>
            </div>
            
            <div>
                <h4 style="color: #dc3545; margin-bottom: 10px;">❌ AVOID:</h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                    <li>Relying only on client-side validation</li>
                    <li>Not handling form submission events</li>
                    <li>Ignoring accessibility in dynamic forms</li>
                    <li>Over-validating (annoying users)</li>
                    <li>Not sanitizing extracted data</li>
                    <li>Memory leaks in dynamic form elements</li>
                    <li>Blocking form submission unnecessarily</li>
                    <li>Not providing clear error messages</li>
                </ul>
            </div>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #495057;">Form Event Types:</h4>
            <div style="font-family: monospace; font-size: 13px; line-height: 1.8;">
                • <strong>focus/blur:</strong> Element gains/loses focus<br>
                • <strong>input:</strong> Value changes (real-time)<br>
                • <strong>change:</strong> Value changes and element loses focus<br>
                • <strong>submit:</strong> Form is submitted<br>
                • <strong>reset:</strong> Form is reset
            </div>
        </div>
        
        <div style="margin-top: 15px; padding: 15px; background: white; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #495057;">Data Extraction Methods:</h4>
            <div style="font-family: monospace; font-size: 13px; line-height: 1.8;">
                • <strong>FormData:</strong> new FormData(form) - best for files and modern apps<br>
                • <strong>Query selectors:</strong> form.querySelector() - specific field access<br>
                • <strong>Elements collection:</strong> form.elements - legacy but reliable<br>
                • <strong>Manual:</strong> Custom extraction logic - full control
            </div>
        </div>
    `;
    
    container.appendChild(bestPracticesSection);
    
    console.log('=== FORM EVENTS AND DATA EXTRACTION COMPLETED ===');
    console.log('Key Concepts Covered:');
    console.log('1. Basic form events (focus, blur, input, change, submit, reset)');
    console.log('2. Multiple data extraction methods (FormData, manual, query selectors)');
    console.log('3. Real-time form validation');
    console.log('4. Dynamic form manipulation (add/remove fields)');
    console.log('5. Form serialization and JSON conversion');
    console.log('6. Error handling and user feedback');
    console.log('7. Best practices for form handling');
    console.log('8. Accessibility considerations');
    
});

// Note: This file covers comprehensive form event handling and data extraction
// Examples include practical validation and dynamic form manipulation
// Demonstrates modern FormData API alongside traditional methods
// Includes real-world patterns for form processing
// Performance and accessibility considerations are highlighted
// This serves as a complete reference for form interactions