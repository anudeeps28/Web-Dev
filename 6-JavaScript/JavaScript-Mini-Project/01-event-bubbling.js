document.getElementById('outer').addEventListener('click', function() {
    console.log('Outer div clicked!');
});

document.getElementById('inner').addEventListener('click', function() {
    console.log('Inner div clicked!');
});

document.getElementById('button').addEventListener('click', function() {
    console.log('Button clicked!');
});

// Example with event bubbling stopped
document.getElementById('button').addEventListener('click', function(event) {
    console.log('Button clicked with stopPropagation!');
    event.stopPropagation(); // This stops the event from bubbling up
});