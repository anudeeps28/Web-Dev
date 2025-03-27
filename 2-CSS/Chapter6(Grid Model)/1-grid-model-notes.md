# Grid Model Notes

## Overview
CSS Grid is a powerful two-dimensional layout system that enables the creation of complex and responsive grid-based designs. It provides simultaneous control over rows and columns, making it ideal for sophisticated layouts.

## Grid Container
- Established by setting `display: grid;` (or `inline-grid;`) on an element.
- Creates a new grid formatting context in which all direct children become grid items.
- Defined with properties such as `grid-template-rows`, `grid-template-columns`, and `grid-template-areas`.

## Grid Items
- Direct children of the grid container.
- Automatically placed into grid cells based on the grid structure defined in the container.
- Their placement and size can be further controlled using properties like `grid-column`, `grid-row`, and `grid-area`.

## Grid Tracks
- The rows and columns that form the structural framework of the grid.
- Their sizes are defined using `grid-template-rows` and `grid-template-columns`.
- These tracks determine the layout and distribution of space within the grid container.

## Grid Gaps
- Refers to the space between grid tracks (both rows and columns).
- Controlled with the `gap` property (formerly `grid-gap`), which provides consistent spacing without the need for extra margins.

## Inline Elements and Grid Layout
- Only elements that are direct children of a grid container become grid items.
- Elements outside the grid container (for example, a `<span>` placed after the grid container) remain in the normal document flow and are not affected by the grid layout.

## Practical Usage
- The accompanying HTML file (`1-grid-model.html`) demonstrates a grid playground where a container is defined as a grid holding several grid items.
- The structure provides a clear illustration of how grid items are arranged, how gaps are applied, and how the overall grid layout responds to defined track sizes.
- These notes serve as a quick reference for the key concepts and terminology associated with CSS Grid as seen in the project files.

*These notes are intended for future reference to quickly recall core CSS Grid concepts without additional examples.*
