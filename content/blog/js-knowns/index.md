---
title: JavaScript Knowns
date: "2022-01-09T22:00:00.000Z"
description: "JavaScript Knowns"
tags: ["JavaScript", "Tips"]
---

# Html

| term | description |
| -- | -- |
| HTML element | An HTML element is defined by a start tag, some content, and an end tag |
| HTML Attributes | HTML attributes provide additional information about HTML elements. 1. All HTML elements can have attributes. 2. Attributes provide additional information about elements. 3. Attributes are always specified in the start tag. 4. Attributes usually come in name/value pairs like: name="value" |
|HTML heading|HTML headings are titles or subtitles that you want to display on a webpage. `<h1>`|
|HTML Paragraphs|A paragraph always starts on a new line, and is usually a block of text.|

## Html formatting
```html
<b>This text is bold</b>
<strong>This text is important!</strong>
<i>This text is italic</i>
<em>This text is emphasized</em>
<small>This is some smaller text.</small>
<p>Do not forget to buy <mark>milk</mark> today.</p>
<p>My favorite color is <del>blue</del> red.</p>
<p>My favorite color is <del>blue</del> <ins>red</ins></p>
<p>This is <sub>subscripted</sub> text.</p>
<p>This is <sup>superscripted</sup> text.</p>
```

<b>This text is bold</b>
<strong>This text is important!</strong>
<i>This text is italic</i>
<em>This text is emphasized</em>
<small>This is some smaller text.</small>
<p>Do not forget to buy <mark>milk</mark> today.</p>
<p>My favorite color is <del>blue</del> red.</p>
<p>My favorite color is <del>blue</del> <ins>red</ins></p>
<p>This is <sub>subscripted</sub> text.</p>
<p>This is <sup>superscripted</sup> text.</p>

## HTML Quotation and Citation Elements
```html
<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
</blockquote>
<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
<address>
Box 564, Disneyland USA
</address>
<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
<bdo dir="rtl">This text will be written from right to left</bdo>
```

<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
</blockquote>
<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
<address>
Box 564, Disneyland USA
</address>
<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
<bdo dir="rtl">This text will be written from right to left</bdo>


## Html Block & inline 
* There are two display values: block and inline
* A block-level element always starts on a new line and takes up the full width available
* An inline element does not start on a new line and it only takes up as much width as necessary
* The `<div>` element is a block-level and is often used as a container for other HTML elements
* The `<span>` element is an inline container used to mark up a part of a text, or a part of a document

##  box-sizing
The box-sizing property allows us to include the padding and border in the box's total width (and height), making sure that the padding stays inside of the box and that it does not break

```html
box-sizing: content-box|border-box|initial|inherit;
```

## Http Put and Post
The difference between POST and PUT is that PUT requests are idempotent. That is, calling the same PUT request multiple times will always produce the same result. In contrast, calling a POST request repeatedly have side effects of creating the same resource multiple times.


## Responsive
Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones):

## Attributes
### The alt Attribute
The required alt attribute for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to slow connection, or an error in the src attribute, or <b>if the user uses a screen reader.</b>

### The title Attribute
The title attribute defines some extra information about an element.

The value of the title attribute will be displayed as a <b>tooltip</b> when you mouse over the element

# CSS
Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language.

## basic selectors

| selector | syntax | example | description
| -- | -- | -- | --|
| Universal selector | * ns\|* | * |Selects all elements.  Optionally, it may be restricted to a specific namespace or to all namespaces.
|Type selector|elementname|input|Selects all elements that have the given node name|
|Class selector|.className|.index|Selects all elements that have the given class attribute.|
|ID selector|#idname|#toc|Selects an element based on the value of its id attribute.|
|Attribute selector|[attr] [attr=value] [attr~=value] [attr\|=value] [attr^=value] [attr$=value] [attr*=value]|[autoplay]|Selects all elements that have the given attribute.|

## Grouping selectors
|syntax|example|description|
|--|--|--|
|A, B|`div, span` will match both `<span>` and `<div>` elements|The , selector is a grouping method that selects all the matching nodes.|

## Combinators selectors
||syntax|example|description|
|-|-|-|-|
|Descendant combinator|A B|`div span` will match all `<span>` elements that are inside a `<div>` element.|The (space) combinator selects nodes that are descendants of the first element.|
|Child combinator|A > B|`ul > li` will match all `<li>` elements that are nested directly inside a `<ul>` element.|The > combinator selects nodes that are direct children of the first element.|
|General sibling combinator|A ~ B|`p ~ span` will match all `<span>` elements that follow a `<p>`, immediately or not.|The ~ combinator selects siblings. This means that the second element follows the first (though not necessarily immediately), and both share the same parent.|
|Adjacent sibling combinator|A + B|`h2 + p` will match all `<p>` elements that immediately follows `<h2>` element|The + combinator matches the second element only if it immediately follows the first element.|
|Column combinator|A \|\| B|col \|\| td will match all `<td>` elements that belong to the scope of the `<col>`.|The \|\| combinator selects nodes which belong to a column.|

## Pseudo selectors
| selector |  example | description |
| -- | -- |  --|
|Pseudo classes|`a:visited` will match all `<a>` elements that have been visited by the user.|The : pseudo allow the selection of elements based on state information that is not contained in the document tree.||
|Pseudo elements|`p::first-line` will match the first line of all <p> elements.|The :: pseudo represent entities that are not included in HTML.|

## Cascading order
The term “cascading” means hierarchical order in which different style sheet types interact when two styles come into conflict. The conflict occurs when two different styles are applied to the same element.

For these cases, there exists an order for style sheets according to their priority (4 has the highest priority):

- Browser Defaults.
- External Style Sheets (Linked or Imported).
```html
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

- Internal Style Sheets (Embedded). CSS code within the <head> </head> tags
```html
  <head>
    <title>This is my document</title>
    <style>
      body {
        background-color: #1c87c9;
      }
      p {
        color: white;
      }
    </style>
    ...
```

- Inline Styles.
```html
<p style="color:#8ebf42; font-size:15px">Some paragraph</p>
```

## Internal Priorities
1. ID
2. Class
3. Element

# Reference

https://www.w3schools.com/html/

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

https://www.w3docs.com/learn-css/css-text.html
