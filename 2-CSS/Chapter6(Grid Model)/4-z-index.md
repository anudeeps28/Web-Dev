# Z-index and Stacking Order Notes

## Overview
- The `z-index` property controls the stacking order of positioned elements.
- It determines which elements appear on top when elements overlap.
- Only elements with a positioning context (such as those with `position: relative`, `absolute`, `fixed`, or `sticky`) can use `z-index`.

## Container
- A container with relative positioning serves as a reference for absolutely positioned child elements.
- The container can define a specific area for layout, including dimensions and borders, which influences how overlapping elements are displayed.

## Stacking Order
- Stacking order determines the visual layering of elements.
- Elements with higher `z-index` values are rendered in front of elements with lower values.
- When `z-index` is not specified, elements follow the default stacking order defined by the document flow (with the default value being `auto`).

## Element-Specific Notes
- An element with a lower `z-index` will be placed behind one with a higher `z-index`.
- If an element does not specify a `z-index`, it will participate in the stacking context based on its order in the document and its parent's stacking context.

## Additional Considerations
- The `z-index` property only affects elements that are explicitly positioned.
- A new stacking context is created when an element is positioned and assigned a `z-index` value other than `auto`, which isolates its children from the global stacking order.