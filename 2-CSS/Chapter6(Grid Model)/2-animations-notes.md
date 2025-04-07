# CSS Animations Notes

## Overview
CSS animations enable you to animate changes in CSS properties over time without needing JavaScript. They work by defining keyframes that specify styles at various points during the animation sequence.

## Animation Properties

- **animation-name:**  
  Specifies the name of the `@keyframes` animation to apply to the element.

- **animation-duration:**  
  Sets the total time an animation takes to complete one cycle.

- **animation-timing-function:**  
  Defines the speed curve of the animation (e.g., `ease-in`, `ease-out`, `linear`).

- **animation-delay:**  
  Specifies a delay before the animation starts.

- **animation-iteration-count:**  
  Determines how many times the animation should repeat. This can be a specific number or `infinite`.

- **animation-direction:**  
  Dictates the direction in which the animation plays (e.g., `normal`, `reverse`, `alternate`).

- **animation (shorthand):**  
  Combines several animation properties (name, duration, timing function, delay, iteration count, and direction) into a single line for concise code.

## Keyframes
- **@keyframes Rule:**  
  Defines the stages of an animation. Within this rule, you specify the styles the element will have at various points during the animation cycle.
  
- **Using Percentages:**  
  Instead of just using `from` and `to`, you can use percentages (0%, 50%, 80%, 100%) to define more detailed steps in the animation. This allows for smoother or more complex transitions.

- **Multiple Keyframes with the Same Name:**  
  If keyframes are defined multiple times with the same name, the later definition will override the previous one.

## Animation in Practice
- A styled element (e.g., a box) can have an animation applied using the shorthand property, which specifies which keyframes to run along with the timing and iteration details.
- The HTML file simply links to the CSS file containing the animation definitions and applies the animation to an element via its class.

*These notes serve as a quick reference to the key concepts behind CSS animations and how they are implemented using the animation properties and `@keyframes` rule.*