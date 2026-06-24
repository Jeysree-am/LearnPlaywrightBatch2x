# JavaScript Strings — Cheatsheet

---

## 1. Creating Strings

```js
let single  = 'Hello';
let double  = "World";
let backtick = `Template literal`;
let str     = String(123);   // "123"
let str2    = 123..toString(); // "123"
```

---

## 2. String Properties & Access

| Method/Property  | Description                        | Example                  | Result  |
|------------------|------------------------------------|--------------------------|---------|
| `.length`        | Length of string                   | `"Hi".length`           | `2`     |
| `str[index]`     | Character at index                 | `"Hi"[0]`               | `"H"`   |
| `.at(index)`     | Character at index (supports -ve)  | `"Hi".at(-1)`           | `"i"`   |
| `.charAt(idx)`   | Character at index                 | `"Hi".charAt(1)`        | `"i"`   |
| `.charCodeAt(i)` | UTF-16 code at index               | `"A".charCodeAt(0)`     | `65`    |

---

## 3. Searching & Checking

```js
"Hello World".includes("World");    // true
"Hello World".startsWith("He");     // true
"Hello World".endsWith("ld");       // true
"Hello World".indexOf("o");         // 4
"Hello World".lastIndexOf("o");     // 7
"Hello World".search(/World/);      // 6
```

---

## 4. Extracting Substrings

| Method                      | Description                              | Example                               |
|-----------------------------|------------------------------------------|---------------------------------------|
| `.slice(start, end)`        | Extracts (end not included, supports -ve)| `"Hello".slice(1,4)` → `"ell"`       |
| `.substring(start, end)`    | Same but swaps if start > end            | `"Hello".substring(4,1)` → `"ell"`   |
| `.substr(start, length)`    | **Deprecated** — length instead of end   | `"Hello".substr(1,3)` → `"ell"`      |

---

## 5. Transformation

```js
"hello".toUpperCase();        // "HELLO"
"HELLO".toLowerCase();        // "hello"
"  hi  ".trim();              // "hi"
"  hi  ".trimStart();         // "hi  "
"  hi  ".trimEnd();           // "  hi"
"a".concat("b", "c");         // "abc"
"Hello World".replace("World", "JS");   // "Hello JS"
"a-b-c".replaceAll("-", "/"); // "a/b/c"
"a,b,c".split(",");           // ["a", "b", "c"]
["a","b","c"].join("-");      // "a-b-c"
```

---

## 6. Padding

```js
"5".padStart(3, "0");         // "005"
"5".padEnd(3, "0");           // "500"
"hello".repeat(3);            // "hellohellohello"
```

---

## 7. Template Literals (Backticks)

```js
let name = "John";
let age = 30;
let msg = `Name: ${name}, Age: ${age}`;
// Multi-line
let html = `
  <div>
    <h1>${name}</h1>
  </div>
`;
```

---

## 8. Useful Static Methods

```js
String.fromCharCode(65);      // "A"
String.fromCodePoint(128512); // "😀"
```

---

## 9. Escape Sequences

| Sequence | Output       |
|----------|--------------|
| `\'`     | single quote |
| `\"`     | double quote |
| `\\`     | backslash    |
| `\n`     | new line     |
| `\t`     | tab          |
| `\r`     | carriage ret |
| `\``     | backtick     |

---

## 10. Convert to String

```js
String(123);                  // "123"
String(true);                 // "true"
String([1,2,3]);              // "1,2,3"
String(null);                 // "null"
String(undefined);            // "undefined"
(123).toString();             // "123"
(16).toString(16);            // "10"  (hex)
```

---

> File: `javascript_strings_cheatsheet.md` — Chapter 13: Strings
