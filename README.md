**HTML (`Textset.html`)**
---
HTML file sets up a basic webpage structure:

- `<!DOCTYPE html>` declaration defines the document type.
- `<html>` tag defines the root of an HTML document.
- `<head>` section contains meta-information about the document, including the character set, title, and links to external CSS and JavaScript files.
- `<body>` section contains the content of the document, including an `<h1>` header with some nested `<span>` elements for styling purposes.

**JavaScript (`TaskCheaker.js`)**
---
JavaScript file defines four functions to toggle the state of buttons:

- Each function checks the current state of a button (based on its class) and toggles between three states: green, red, and white.
- Text content of the button is also updated to reflect the current state.

**CSS (`style.css`)**
---
The CSS file styles the webpage:

- `body` section sets the overall styling for the webpage, including font, margin, padding, background color, and font size.
- `h1` section styles the main header, including font size, font family, text transformation, and animation.
- `.sr-only` class hides elements visually but keeps them accessible to screen readers.
- `[aria-hidden]` attribute styles elements that are hidden from accessibility tools.
- `.stretch-o` class and related styles create a stretching animation effect for the header.
- `@keyframes textAnimation` defines the animation for the header text.
- `button` section styles the buttons, including color, border, padding, margin, width, background color, box shadow, font size, cursor, and various states (hover, active, focus).
- `.green`, `.red`, and `.white` classes define specific background colors for the buttons based on their state.
