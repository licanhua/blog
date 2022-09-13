---
title: How to test trusted types
date: "2022-09-13T09:30:03.284Z"
description: "How to test trusted types"
tags: ["Javascript", "Html", "trusted-types"]

---

## Background
JavaScript SDK should fully support [Trusted Types API](https://w3c.github.io/webappsec-trusted-types/dist/spec/) so that it can be seamlessly integrated in applications that enforce Trusted Types for all DOM XSS Injection Sinks (such as innerHTML setters) via CSP directive require-trusted-types-for.

To meet the requirement, you need make the html trusted before arbitrary HTML assignments into .innerHTML

code examples
```js
const ttPolicy = window.trustedTypes?.createPolicy('adaptivecards-ui-testapp', {
    createHTML: value => value,
});

const trustedHtml = ttPolicy?.createHTML(inputsAsJson) ?? inputsAsJson;
retrievedInputsDiv.innerHTML = trustedHtml as string;
```

TT docs: https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API
A Guide to TT: https://web.dev/trusted-types/
TT w3c spec: https://w3c.github.io/webappsec-trusted-types/dist/spec/

[identify-trusted-types-violations](https://web.dev/trusted-types/#identify-trusted-types-violations)

## How to test your change

Trusted Types are only available in a secure context like HTTPS and localhost. Make sure you are using https first.


- use Content-Security-Policy-Report-Only

If you are able to modify the html response header, you may use Content-Security-Policy-Report-Only

```
Content-Security-Policy-Report-Only: require-trusted-types-for 'script'; report-uri //my-csp-endpoint.example
```

- use Content-Security-Policy + meta header

If your content is served as static context(for example, a SPA app), you may add Content-Security-Policy to your html or modify the html directly from developer's tool the browser provided.

```html
<meta http-equiv="Content-Security-Policy" content="require-trusted-types-for 'script';" />
```