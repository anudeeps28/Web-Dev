# DOM (Document Object Model)

## What is DOM?
- Programming interface for HTML/XML documents
- Represents document as a tree structure of objects
- Allows JavaScript to interact with web pages dynamically

## Key Concepts
- **Nodes**: Every element, attribute, and text is a node
- **Tree Structure**: Hierarchical representation of HTML elements
- **Dynamic**: Can modify content, structure, and styling in real-time

## Common DOM Methods

### Selecting Elements
```javascript
// By ID
document.getElementById('myId')

// By class name
document.getElementsByClassName('myClass')

// By tag name
document.getElementsByTagName('div')

// Query selectors (CSS-style)
document.querySelector('.myClass')
document.querySelectorAll('div.myClass')
```

### Modifying Content
```javascript
// Change HTML content
element.innerHTML = '<strong>Bold text</strong>'

// Change text content
element.textContent = 'Plain text only'

// Change attributes
element.setAttribute('src', 'image.jpg')
element.src = 'image.jpg'
```

### Styling Elements
```javascript
// Direct style changes
element.style.color = 'red'
element.style.backgroundColor = 'blue'

// CSS classes
element.classList.add('newClass')
element.classList.remove('oldClass')
element.classList.toggle('activeClass')
```

### Creating and Removing Elements
```javascript
// Create new element
const newDiv = document.createElement('div')
newDiv.textContent = 'Hello World'

// Add to DOM
parent.appendChild(newDiv)
parent.insertBefore(newDiv, existingChild)

// Remove from DOM
parent.removeChild(element)
element.remove()
```

### Event Handling
```javascript
// Add event listener
element.addEventListener('click', function() {
    console.log('Element clicked!')
})

// Remove event listener
element.removeEventListener('click', handlerFunction)

// Common events: click, submit, load, keydown, mouseover
```

## DOM Tree Navigation
```javascript
// Parent/child relationships
element.parentNode
element.childNodes
element.firstChild
element.lastChild

// Sibling relationships
element.nextSibling
element.previousSibling

// Element-only versions (skip text nodes)
element.parentElement
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling
```

## Best Practices
- Cache DOM references instead of querying repeatedly
- Use `querySelector`/`querySelectorAll` for modern browsers
- Minimize DOM manipulations for better performance
- Use event delegation for dynamic content
- Always check if elements exist before manipulating them