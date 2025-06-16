# DOM Content Properties: innerHTML, textContent, and innerText

## Overview
These three properties are used to get or set content in DOM elements, but they behave differently:

## Key Differences

| Property | What it Returns/Sets | HTML Tags | CSS Styling | Hidden Elements | Performance |
|----------|---------------------|-----------|-------------|-----------------|-------------|
| `innerHTML` | HTML markup as string | **Includes** HTML tags | N/A | Includes all content | Slower (parses HTML) |
| `textContent` | Plain text only | **Strips** HTML tags | Ignores CSS styling | Includes hidden content | Faster |
| `innerText` | Visible text only | **Strips** HTML tags | Respects CSS styling | **Excludes** hidden content | Slower (considers styling) |

## Detailed Explanations

### innerHTML
- Returns/sets the HTML content inside an element
- Parses and renders HTML tags
- Can execute JavaScript if script tags are included
- Use for: Setting HTML content with tags

### textContent
- Returns/sets only the text content
- Ignores all HTML tags and styling
- Gets text from all child elements, even hidden ones
- Use for: Safe text manipulation, better performance

### innerText
- Returns/sets only the visible text
- Considers CSS styling (display, visibility, etc.)
- Excludes text from hidden elements
- Use for: Getting text as user sees it

## Examples Using Spider-Man HTML

```html
<!-- Example HTML structure from index.html -->
<h1>Spider Man</h1>
<p>
  <b>Spider-Man</b> is a superhero appearing in American comic books
  published by <a href="#">Marvel Comics</a>.
</p>
<div class="box">
  <h4>Publication Info</h4>
  <ul>
    <li><a href="#" class="boxLink">Publisher</a></li>
    <li style="display:none">Hidden Item</li>
  </ul>
</div>
```

### Example 1: Getting Content

```javascript
// Select the main heading
const heading = document.querySelector('h1');

console.log(heading.innerHTML);    // "Spider Man"
console.log(heading.textContent);  // "Spider Man"  
console.log(heading.innerText);    // "Spider Man"

// Select paragraph with HTML content
const paragraph = document.querySelector('p');

console.log(paragraph.innerHTML);
// "<b>Spider-Man</b> is a superhero appearing in American comic books published by <a href="#">Marvel Comics</a>."

console.log(paragraph.textContent);
// "Spider-Man is a superhero appearing in American comic books published by Marvel Comics."

console.log(paragraph.innerText);
// "Spider-Man is a superhero appearing in American comic books published by Marvel Comics."
```

### Example 2: Setting Content

```javascript
// Select elements from Spider-Man HTML
const heading = document.querySelector('h1');
const description = document.getElementById('description');
const box = document.querySelector('.box h4');

// Using innerHTML - sets HTML content
heading.innerHTML = '<span style="color: red;">Amazing</span> Spider-Man';
// Result: "Amazing" appears in red, "Spider-Man" in normal color

// Using textContent - sets plain text only
description.textContent = 'Spider-Man is a fictional superhero.';
// Result: Plain text, any existing HTML tags are removed

// Using innerText - sets visible text
box.innerText = 'Character Information';
// Result: Plain text that respects styling
```

### Example 3: Practical Applications

```javascript
// 1. Safe text insertion (prevents XSS attacks)
const userInput = '<script>alert("hack")</script>';
const safeElement = document.querySelector('#description');

// Safe - treats as plain text
safeElement.textContent = userInput;
// Result: Displays the actual text "<script>alert("hack")</script>"

// Unsafe - executes HTML/JavaScript
// safeElement.innerHTML = userInput; // DON'T DO THIS with user input

// 2. Adding HTML content safely
const boxTitle = document.querySelector('.box h4');
boxTitle.innerHTML = '<i class="icon"></i> Publication Info';
// Result: Adds an icon before the text

// 3. Getting visible text only
const listWithHidden = document.querySelector('.box ul');
console.log(listWithHidden.textContent);  // Includes hidden items
console.log(listWithHidden.innerText);    // Excludes hidden items

// 4. Dynamic content creation
const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'Created by <strong>Stan Lee</strong> and <strong>Steve Ditko</strong>';
document.body.appendChild(newParagraph);
```

### Example 4: Working with Spider-Man HTML Elements

```javascript
// Modify main image alt text
const mainImage = document.getElementById('mainImg');
mainImage.alt = 'Spider-Man superhero image'; // Setting attribute, not content

// Change box links text
const boxLinks = document.querySelectorAll('.boxLink');
boxLinks.forEach((link, index) => {
    const titles = ['Marvel Comics', 'Amazing Fantasy #15', 'Stan Lee'];
    link.textContent = titles[index] || link.textContent;
});

// Add emphasis to creator names in description
const descriptionPara = document.getElementById('description');
const currentText = descriptionPara.textContent;
descriptionPara.innerHTML = currentText.replace(/Stan Lee/g, '<strong>Stan Lee</strong>');

// Create new content with HTML
const factBox = document.createElement('div');
factBox.innerHTML = `
    <h3>Quick Facts</h3>
    <ul>
        <li><strong>First Appearance:</strong> Amazing Fantasy #15</li>
        <li><strong>Creator:</strong> Stan Lee & Steve Ditko</li>
        <li><strong>Publisher:</strong> Marvel Comics</li>
    </ul>
`;
document.body.appendChild(factBox);
```

## Best Practices

### When to Use Each

**Use `innerHTML` when:**
- Setting HTML content with tags
- Creating dynamic HTML structures
- You trust the content source (not user input)

**Use `textContent` when:**
- Setting plain text safely
- Performance is important
- Handling user input
- You want all text content regardless of visibility

**Use `innerText` when:**
- You need only visible text
- Mimicking user text selection
- Working with styled content

### Security Considerations

```javascript
// ❌ Dangerous - can execute scripts
element.innerHTML = userInput;

// ✅ Safe - treats as plain text
element.textContent = userInput;

// ✅ Safe alternative for HTML content
element.innerHTML = sanitizeHTML(trustedContent);
```

### Performance Tips

```javascript
// ✅ Faster - direct text assignment
element.textContent = 'Plain text';

// ❌ Slower - HTML parsing
element.innerHTML = 'Plain text';

// ✅ Batch DOM changes
const fragment = document.createDocumentFragment();
// Add multiple elements to fragment
document.body.appendChild(fragment); // Single DOM update
```

## Summary

- **innerHTML**: Full HTML content manipulation
- **textContent**: Safe, fast text manipulation
- **innerText**: Visible text that respects styling

Choose based on your specific needs: security, performance, and whether you need HTML rendering or plain text.