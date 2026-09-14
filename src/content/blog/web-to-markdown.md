
> Designing a lightweight browser extension that converts web pages into clean, reusable Markdown.

## 1. Motivation

The web is designed for people to read through a browser, but it is not always convenient when the goal is to **save, reuse, or process the content as plain text**.

When saving information from a web page manually, the usual workflow is:

```text
Open webpage
   ↓
Select content
   ↓
Copy
   ↓
Paste somewhere else
   ↓
Clean up formatting
   ↓
Convert to Markdown
```

This becomes especially inconvenient when working with technical documentation, articles, job descriptions, or other structured content.

HTML already contains information about the structure of the document:

```text
Heading
Paragraph
Link
List
Table
Code
```

Markdown provides a lightweight way to represent the same structure.

That led to a simple idea:

> Build a browser extension that can take HTML from the current page and convert it into Markdown directly in the browser.

---

## 2. The Problem

At first glance, the problem seems straightforward:

```text
HTML → Markdown
```

However, HTML and Markdown are structurally different.

For example:

```html
<h2>Installation</h2>

<p>Install the package using:</p>

<pre>
  <code>npm install example-package</code>
</pre>
```

should become something like:

````md
    ## Installation

    Install the package using:

    ```text
    npm install example-package
    ```

````

The converter therefore needs to understand the structure of the HTML rather than simply replacing strings.

There is another problem.

A real webpage is usually much more complicated than a small HTML example.

It may contain:

```text
Header
Navigation
Slider
Main content
Sidebar
Related content
Footer
````

The extension should still be able to process the page instead of depending on one specific website's HTML structure.

---

## 3. Requirements

I defined several requirements for the extension.

### a. Convert the entire page

If there is no selected content, the extension should convert the content of the current page.

### b. Convert selected content

If the user highlights a specific part of the page, only that selection should be converted.

### c. Preserve HTML structure

Common structures should be represented appropriately in Markdown:

* Headings
* Paragraphs
* Links
* Lists
* Inline code
* Code blocks
* Tables
* Text formatting

### d. Copy the result

The generated Markdown should be easy to copy to the clipboard.

### e. Download the result

The user should also be able to save the generated content as a `.md` file.

---

## 4. Possible Solutions

There were several ways to approach the conversion problem.

### Approach 1 — Use an Existing HTML-to-Markdown Library

The first option would be to use a library that already solves HTML-to-Markdown conversion.

The architecture would be:

```text
Web Page
   ↓
Extract HTML
   ↓
HTML-to-Markdown Library
   ↓
Markdown
```

This has an obvious advantage: most of the complicated conversion rules are already implemented.

It would also provide better support for many HTML edge cases without having to implement them manually.

However, it introduces a dependency for a relatively small project.

More importantly, the goal of this project was not simply to obtain Markdown output. I also wanted to understand how the conversion works internally.

That made a custom implementation more interesting.

### Approach 2 — Build the HTML-to-Markdown Converter Manually

This became the approach I chose.

Instead of treating HTML as a string and performing replacements, the extension works directly with the browser's **DOM tree**.

The basic idea is:

```text
HTML
 ↓
DOM Tree
 ↓
Traverse nodes
 ↓
Recognize element type
 ↓
Convert to Markdown
 ↓
Combine results
```

For example:

```html
<h2>Hello</h2>
```

is represented by the browser as an element node.

The converter can recognize:

```text
H2
```

and produce:

```md
## Hello
```

Similarly:

```html
<strong>Important</strong>
```

becomes:

```md
**Important**
```

and:

```html
<a href="/docs">Documentation</a>
```

becomes:

```md
[Documentation](/docs)
```

The important idea is that the converter is based on **HTML semantics**, rather than website-specific CSS selectors.

---

## 5. Why DOM Traversal Instead of String Replacement?

A naive implementation could try something like:

```text
<h1> → #
<h2> → ##
<strong> → **
```

using string replacement.

This quickly becomes difficult.

Consider:

```html
<p>
    Hello <strong>world</strong>
    <a href="/docs">documentation</a>
</p>
```

The converter needs to preserve the relationship between the elements.

The DOM already provides that structure:

```text
P
├── Text: "Hello "
├── STRONG
│   └── Text: "world"
└── A
    └── Text: "documentation"
```

The converter can recursively process this tree:

```text
P
 │
 ├── Text
 │
 ├── STRONG
 │     └── Text
 │
 └── A
       └── Text
```

and produce:

```md
Hello **world** [documentation](/docs)
```

This makes DOM traversal much more suitable for the problem.

---

## 6. The Core Conversion Model

The core of the converter can be thought of as:

```text
convert(node)
```

For every node, the converter determines what kind of node it is.

Conceptually:

```text
convert(node)
    │
    ├── Text Node
    │      ↓
    │   convert text
    │
    └── Element Node
           │
           ├── Heading
           ├── Paragraph
           ├── Link
           ├── List
           ├── Code
           ├── Table
           └── Other element
```

For elements that have a direct Markdown representation, the converter applies a specific rule.

For example:

````text
H1 → # ...
H2 → ## ...
H3 → ### ...

STRONG → **...**

EM → *...*

A → [...](...)

CODE → `...`

PRE → ```...```
````

For elements that primarily act as containers, the converter recursively processes their children.

---

## 7. Recursive Child Conversion

This is one of the most important parts of the implementation.

Not every HTML element needs its own Markdown syntax.

Consider:

```html
<div>
    <h2>Products</h2>

    <p>Available products:</p>

    <ul>
        <li>Product A</li>
        <li>Product B</li>
    </ul>
</div>
```

The `div` itself does not need a Markdown representation.

Instead, the converter processes its children:

```text
DIV
 │
 ├── H2
 │    └── "Products"
 │
 ├── P
 │    └── "Available products:"
 │
 └── UL
      ├── LI
      └── LI
```

which produces:

```md
## Products

Available products:

- Product A
- Product B
```

This recursive approach is what allows the converter to work with deeply nested HTML structures.

---

## 8. Converting the Entire Page

The extension does not try to determine which part of a website is the "real article".

Instead, it can process the page content as a whole.

For example, a page may contain:

```text
<body>
├── Header
├── Navigation
├── Slider
├── Main Content
├── Sidebar
└── Footer
</body>
```

The extension does not need a special rule saying:

```text
"Ignore everything except <main>"
```

Instead, it traverses the structure.

Elements such as `nav`, `footer`, sliders, and other containers can still contribute useful information through their child elements.

For example:

```html
<nav>
    <a href="/home">Home</a>
    <a href="/jobs">Jobs</a>
</nav>
```

can become:

```md
[Home](/home)
[Jobs](/jobs)
```

The `nav` element itself does not need special Markdown syntax.

Its children are what matter.

This makes the converter less dependent on the implementation details of individual websites.

---

## 9. Selected Content vs Entire Page

The extension supports two input modes.

```text
                 Current Web Page
                        │
                 Is something selected?
                    /          \
                  Yes           No
                   │             │
                   ▼             ▼
             Selected DOM     Page DOM
                   │             │
                   └──────┬──────┘
                          ▼
                    DOM Converter
                          │
                          ▼
                      Markdown
```

The important part is that both paths eventually use the **same conversion logic**.

The difference is only the input.

If the user selects something, the extension obtains the selected DOM fragment.

If nothing is selected, it uses the page content.

This avoids maintaining two different conversion systems.

---

## 10. Text Nodes

Text nodes are handled separately.

For example:

```html
<p>
    Hello <strong>world</strong>
</p>
```

contains:

```text
P
├── Text Node
│   └── "Hello "
│
└── STRONG
    └── Text Node
        └── "world"
```

The converter first processes the text node:

```text
"Hello "
```

Then processes the `strong` element:

```text
"world" → **world**
```

The final result is:

```md
Hello **world**
```

Separating text-node handling from element handling keeps the recursive conversion logic simpler.

---

## 11. Handling Links

Links are another example where simply extracting text is not enough.

Given:

```html
<a href="https://example.com">
    Example
</a>
```

the converter should preserve both the visible text and the destination:

```md
[Example](https://example.com)
```

This is important because Markdown is not only a plain-text representation.

It can also preserve relationships represented by HTML.

---

## 12. Handling Code

Code requires special treatment because Markdown distinguishes between inline code and code blocks.
~
Inline code:

```html
<code>npm install</code>
```

becomes:

```md
`npm install`
```

A block:

```html
<pre>
    <code>
        npm install example
    </code>
</pre>
```

becomes:

````md
```text
npm install example
```
````

I separated code handling from the general conversion logic because code blocks have different formatting requirements.

This also makes the converter easier to extend later with language detection.

---

## 13. Handling Tables

Tables are another structure that cannot be represented by simply concatenating child text.

An HTML table has a tree structure:

```text
TABLE
├── THEAD
│   └── TR
│       ├── TH
│       └── TH
│
└── TBODY
    ├── TR
    │   ├── TD
    │   └── TD
    │
    └── TR
        ├── TD
        └── TD
```

Markdown requires:

```md
| Name | Description |
| --- | --- |
| Java | Backend |
| JavaScript | Frontend |
```

Therefore, table conversion needs its own processing logic.

The converter extracts:

1. Rows
2. Header cells
3. Data cells
4. Cell contents

and constructs the Markdown table.

This is one reason table processing is kept separate from the generic child conversion logic.

---

## 14. Project Structure

The extension uses **Manifest V3** and plain JavaScript.

A simplified structure is:

```text
extension/
│
├── manifest.json
│
├── popup.html
├── popup.js
│
└── content/
    ├── inline.js
    ├── content.js
    ├── convertChildren.js
    ├── convertTextNode.js
    ├── table.js
    └── code.js
```

The responsibilities are separated roughly like this:

```text
popup.html
    ↓
User Interface

popup.js
    ↓
Popup logic and extension messaging

content.js
    ↓
Interaction with the current webpage

convertChildren.js
    ↓
Recursive DOM traversal

convertTextNode.js
    ↓
Text-node conversion

table.js
    ↓
Table conversion

code.js
    ↓
Code / code-block conversion
```

This separation prevents the main content script from becoming one large conversion function.

---

## 15. Popup and Content Script Communication

A browser extension has different execution contexts.

The popup runs in the extension's UI context, while the content script runs inside the current webpage.

Therefore, the popup cannot simply access the page DOM directly.

The communication looks like:

```text
Popup
  │
  │ Message
  ▼
Content Script
  │
  ├── Read selection
  ├── Read page
  ├── Convert DOM
  └── Return Markdown
  │
  ▼
Popup
  │
  ├── Display result
  ├── Copy
  └── Download
```

This separation was also one of the practical parts of building the extension.

---

## 16. Why Plain JavaScript?

The extension could have been implemented using React or another frontend framework.

I deliberately chose plain JavaScript.

The extension has a relatively small UI:

```text
Convert
Copy
Download
Textarea
```

There was no need for a component framework or build system.

Using plain JavaScript also keeps the browser-extension architecture easier to see:

```text
Manifest
   ↓
Popup
   ↓
Content Script
   ↓
DOM
```

The main complexity of the project is the DOM-to-Markdown transformation, not the UI.

Keeping the technology stack small allowed more attention to be placed on the actual problem.

---

## 17. Problems Encountered

### 1. Content Script Messaging

One practical problem was communication between the popup and the content script.

For example:

```text
Could not establish connection.
Receiving end does not exist.
```

This happens when the popup sends a message but the expected content-script receiver is not available in the current tab.

This helped clarify an important browser-extension concept:

> The popup and webpage do not share the same execution context.

The extension therefore needs to explicitly communicate between them.

---

### 2. Script Loading Order

Another issue appeared while splitting the converter into multiple JavaScript files.

Instead of putting everything into one large file, the implementation was divided into several modules of responsibility.

However, when using plain scripts, their loading order matters.

For example:

```text
inline.js
    ↓
content.js
    ↓
convertChildren.js
    ↓
convertTextNode.js
    ↓
table.js
    ↓
code.js
```

The dependent functions need to be available at the appropriate time.

This led to using explicitly ordered scripts rather than introducing module/build-system complexity for a small extension.

---

## 18. Why I Chose the Manual Converter

The final decision can be summarized as:

| Approach                    | Advantages                              | Disadvantages                       |
| --------------------------- | --------------------------------------- | ----------------------------------- |
| Existing library            | Fast, mature conversion                 | Dependency, less control            |
| Manual DOM conversion       | Full control, lightweight, educational  | More implementation work            |
| Website-specific extraction | Can produce cleaner output for one site | Fragile and difficult to generalize |

I chose **manual DOM conversion**.

The important reason was not simply avoiding dependencies.

It was that the project itself was an opportunity to understand:

* DOM traversal
* HTML semantics
* Recursive processing
* Browser extension architecture
* Message passing
* Structured data transformation

The extension therefore became more than a simple utility.

It became a small exercise in designing a transformation pipeline.

---

## 19. The Final Pipeline

The final architecture can be summarized as:

```text
                  Web Page
                     │
                     ▼
              Content Script
                     │
          ┌──────────┴──────────┐
          │                     │
     Selected content       Entire page
          │                     │
          └──────────┬──────────┘
                     ▼
                 DOM Tree
                     │
                     ▼
              Recursive Traversal
                     │
       ┌─────────────┼─────────────┐
       │             │             │
     Text         Element       Special
       │             │             │
       │       ┌─────┼─────┐   ┌──┴───┐
       │       │     │     │   │      │
      Text   Heading Link List Code  Table
       │       │     │     │   │      │
       └───────┴─────┴─────┴───┴──────┘
                     │
                     ▼
                Markdown
                     │
              ┌──────┴──────┐
              │             │
             Copy         Download
```

---

# 20 . Result

[Github](https://github.com/anh0701/web-to-markdown)

[![Demo Video](https://img.youtube.com/vi/Frxs-IOG6AI/maxresdefault.jpg)](https://www.youtube.com/watch?v=Frxs-IOG6AI)

---

## 21. Conclusion

The project started with a simple requirement:

> Convert a web page into Markdown.

But implementing the converter manually revealed that the real challenge was not Markdown syntax itself.

The important part was understanding the structure of the HTML document and designing a recursive transformation process that could work with different kinds of web pages.

The final approach was therefore:

```text
HTML DOM
   ↓
Traverse recursively
   ↓
Recognize semantic elements
   ↓
Convert specialized elements
   ↓
Recursively process generic containers
   ↓
Combine Markdown
```

Instead of trying to guess which part of a website should be considered the "main content", the extension works with the document structure it receives.

This makes the solution more general and keeps the core idea simple:

> **Don't convert the appearance of a webpage. Convert the structure of its DOM into another structured representation.**
