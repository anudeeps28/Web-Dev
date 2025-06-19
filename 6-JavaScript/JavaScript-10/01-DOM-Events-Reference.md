# DOM Events Reference Guide

## What are DOM Events?

DOM events are **actions or occurrences** that happen in the browser that JavaScript can detect and respond to. They make websites interactive by allowing us to respond to user actions.

**Basic Concept:** "Hey JavaScript, when THIS happens, do THAT!"

---

## Event Handling Syntax

```javascript
element.addEventListener('eventType', function() {
    // Code to run when event occurs
});
```

**Example:**
```javascript
button.addEventListener('click', function() {
    console.log('Button was clicked!');
});
```

---

## Common Event Types

### 🖱️ Mouse Events

| Event | Description | When it fires |
|-------|-------------|---------------|
| `click` | User clicks an element | Mouse button pressed and released |
| `dblclick` | User double-clicks | Two quick clicks |
| `mouseover` | Mouse enters element | Mouse pointer moves over element |
| `mouseout` | Mouse leaves element | Mouse pointer moves away |
| `mouseenter` | Mouse enters (no bubbling) | Mouse enters element area |
| `mouseleave` | Mouse leaves (no bubbling) | Mouse leaves element area |
| `mousedown` | Mouse button pressed | Button pressed down |
| `mouseup` | Mouse button released | Button released |

### ⌨️ Keyboard Events

| Event | Description | When it fires |
|-------|-------------|---------------|
| `keydown` | Key is pressed down | Key pressed (repeats if held) |
| `keyup` | Key is released | Key released |
| `keypress` | Key character inputted | ⚠️ Deprecated - use keydown |

### 📝 Form Events

| Event | Description | When it fires |
|-------|-------------|---------------|
| `submit` | Form is submitted | Form submission attempted |
| `focus` | Element gets focus | Element becomes active/selected |
| `blur` | Element loses focus | Element becomes inactive |
| `change` | Input value changes | Value changes and element loses focus |
| `input` | Input value changes | Value changes immediately |

### 🪟 Window/Document Events

| Event | Description | When it fires |
|-------|-------------|---------------|
| `load` | Page fully loaded | All resources (images, CSS, etc.) loaded |
| `DOMContentLoaded` | HTML parsed | HTML document parsed (faster than load) |
| `resize` | Window resized | Browser window size changes |
| `scroll` | Page scrolled | User scrolls the page |
| `beforeunload` | Page about to close | User tries to leave page |

---

## Event Object

When an event occurs, JavaScript provides an **event object** with useful information:

```javascript
button.addEventListener('click', function(event) {
    console.log(event.target);        // Element that triggered event
    console.log(event.type);          // Event type (e.g., 'click')
    console.log(event.clientX);       // Mouse X position
    console.log(event.clientY);       // Mouse Y position
    
    event.preventDefault();           // Prevent default behavior
    event.stopPropagation();          // Stop event bubbling
});
```

### Useful Event Object Properties

| Property | Description |
|----------|-------------|
| `event.target` | Element that triggered the event |
| `event.type` | Type of event (click, keydown, etc.) |
| `event.preventDefault()` | Prevents default browser behavior |
| `event.stopPropagation()` | Stops event from bubbling up |
| `event.key` | Key that was pressed (keyboard events) |
| `event.clientX/Y` | Mouse coordinates (mouse events) |

---

## Event Examples

### Mouse Click Example
```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    button.style.backgroundColor = 'red';
    console.log('Button clicked!');
});
```

### Keyboard Input Example
```javascript
const input = document.getElementById('textInput');
input.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {
        console.log('Enter key pressed!');
    }
});
```

### Form Submission Example
```javascript
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    console.log('Form submitted!');
    // Handle form data here
});
```

### DOM Ready Example
```javascript
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is ready!');
    // Safe to manipulate DOM elements here
});
```

---

## Event Delegation

**Problem:** Events on dynamically created elements don't work  
**Solution:** Attach event to parent element and check target

```javascript
// Instead of adding events to each button individually
document.body.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        console.log('A button was clicked:', event.target.textContent);
    }
});
```

---

## Removing Event Listeners

```javascript
function handleClick() {
    console.log('Clicked!');
}

// Add event listener
button.addEventListener('click', handleClick);

// Remove event listener
button.removeEventListener('click', handleClick);
```

**Note:** Must use the same function reference to remove!

---

## Best Practices

### ✅ Do:
- Use `addEventListener()` instead of inline `onclick`
- Use `DOMContentLoaded` to ensure DOM is ready
- Use `event.preventDefault()` to control default behavior
- Remove event listeners when no longer needed
- Use event delegation for dynamic content

### ❌ Avoid:
- Inline event handlers in HTML (`onclick="..."`)
- Accessing DOM before it's ready
- Adding too many individual event listeners
- Forgetting to prevent default form submission

---

## Quick Reference - Most Used Events

```javascript
// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Click events
    element.addEventListener('click', function() {});
    
    // Hover effects
    element.addEventListener('mouseenter', function() {});
    element.addEventListener('mouseleave', function() {});
    
    // Keyboard input
    input.addEventListener('keydown', function(event) {});
    
    // Form handling
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    });
    
});
```

---

## Connection to DOM Manipulation

Events work perfectly with DOM manipulation methods you've learned:

```javascript
button.addEventListener('click', function() {
    // Content manipulation
    element.innerHTML = 'New content';
    
    // Style manipulation
    element.style.color = 'red';
    
    // Class manipulation
    element.classList.toggle('active');
    
    // Create new elements
    const newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
});
```

Events are what make your DOM manipulations **interactive** and **responsive** to user actions!