# Media Queries Notes

## Overview
Media queries are a feature of CSS that allow styles to be applied conditionally based on the characteristics of the user's device or viewport. They are a foundational tool for creating responsive web designs.

## Key Concepts

### 1. Exact Width
Used to target a specific viewport width. Styles are applied only when the width matches the specified value exactly.

### 2. Minimum Width (`min-width`)
Applies styles when the viewport width is greater than or equal to a specified value. Commonly used for scaling layouts up as the screen size increases.

### 3. Maximum Width (`max-width`)
Applies styles when the viewport width is less than or equal to a specified value. Often used for adapting layouts to smaller screens.

### 4. Combined `min-width` and `max-width`
Allows targeting a range of screen widths by combining both conditions. This is useful for styling specific breakpoints in the layout.

### 5. Orientation
Targets device orientation (portrait or landscape). Useful when different styling is needed based on how the device is held.

## Practical Use in File
- Media queries have been applied to style an `h1` element differently based on:
  - Exact screen width
  - Minimum screen width
  - Maximum screen width
  - A range of screen widths
  - Device orientation

These conditional rules enable the design to adapt across various screen sizes and orientations, improving responsiveness and user experience.