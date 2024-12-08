"use strict";exports.id=296,exports.ids=[296],exports.modules={47607:(e,l,t)=>{t.d(l,{W:()=>s,X:()=>i});var a=t(10326),o=t(17577),n=t.n(o);let r=(0,o.createContext)(void 0),i=({children:e})=>{let[l,t]=(0,o.useState)("javascript"),[i,s]=(0,o.useState)("vs-dark"),[d,c]=(0,o.useState)(""),[p,m]=(0,o.useState)("");return n().useEffect(()=>{let e=localStorage.getItem("code");e&&c(e);let l=localStorage.getItem("language");l&&t(l);let a=localStorage.getItem("theme");a&&s(a);let o=localStorage.getItem("output");o&&m(o)},[]),n().useEffect(()=>{localStorage.setItem("code",d),localStorage.setItem("language",l),localStorage.setItem("theme",i),localStorage.setItem("output",p)},[d,l,i,p]),a.jsx(r.Provider,{value:{language:l,setLanguage:t,theme:i,setTheme:s,code:d,setCode:c,output:p,setOutput:m},children:e})},s=()=>{let e=(0,o.useContext)(r);if(void 0===e)throw Error("useIDEContext must be used within an IDEProvider");return e}},51546:(e,l,t)=>{t.d(l,{default:()=>b});var a=t(10326),o=t(31929),n=t(17577),r=t.n(n),i=t(57766),s=t(47607);let d={themes:[{key:"light",label:"Light"},{key:"vs-dark",label:"Dark"}],languages:[{key:"javascript",label:"JavaScript",codeSnippet:`// JavaScript Example
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('World');`},{key:"typescript",label:"TypeScript",codeSnippet:`// TypeScript Example
function greet(name: string): void {
    console.log('Hello, ' + name + '!');
}

greet('World');`},{key:"html",label:"HTML",codeSnippet:`<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`},{key:"json",label:"JSON",codeSnippet:`{
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}`},{key:"xml",label:"XML",codeSnippet:`<?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>`},{key:"markdown",label:"Markdown",codeSnippet:`# Markdown Example

## This is a sub-heading

This is a paragraph with **bold** text and *italic* text.

- Item 1
- Item 2
- Item 3

[Link to Google](https://www.google.com)`},{key:"python",label:"Python",codeSnippet:`# Python Example
def greet(name):
    print(f'Hello, {name}!')

greet('World')`},{key:"java",label:"Java",codeSnippet:`// Java Example
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`},{key:"csharp",label:"C#",codeSnippet:`// C# Example
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`},{key:"php",label:"PHP",codeSnippet:`<?php
// PHP Example
echo "Hello, World!";
?>`},{key:"go",label:"Go",codeSnippet:`// Go Example
package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`},{key:"rust",label:"Rust",codeSnippet:`// Rust Example
fn main() {
    println!("Hello, World!");
}`},{key:"swift",label:"Swift",codeSnippet:`// Swift Example
import Foundation

print("Hello, World!")`},{key:"kotlin",label:"Kotlin",codeSnippet:`// Kotlin Example
fun main() {
    println("Hello, World!")
}`},{key:"yaml",label:"YAML",codeSnippet:`# YAML Example
name: John Doe
age: 30
city: New York`},{key:"sql",label:"SQL",codeSnippet:`-- SQL Example
SELECT name, age, city
FROM users
WHERE age > 20;`},{key:"shell",label:"Shell",codeSnippet:`# Shell Script Example
#!/bin/bash
echo "Hello, World!"`},{key:"powershell",label:"PowerShell",codeSnippet:`# PowerShell Example
Write-Output "Hello, World!"`},{key:"dockerfile",label:"Dockerfile",codeSnippet:`# Dockerfile Example
FROM node:14
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`}],snippets:{javascript:`// JavaScript Example
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('World');`,typescript:`// TypeScript Example
function greet(name: string): void {
    console.log('Hello, ' + name + '!');
}

greet('World');`,html:`<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`,json:`{
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}`,xml:`<?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>`,markdown:`# Markdown Example

## This is a sub-heading

This is a paragraph with **bold** text and *italic* text.

- Item 1
- Item 2
- Item 3

[Link to Google](https://www.google.com)`,python:`# Python Example
def greet(name):
    print(f'Hello, {name}!')

greet('World')`,java:`// Java Example
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,csharp:`// C# Example
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,php:`<?php
// PHP Example
echo "Hello, World!";
?>`,go:`// Go Example
package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,rust:`// Rust Example
fn main() {
    println!("Hello, World!");
}`,swift:`// Swift Example
import Foundation

print("Hello, World!")`,kotlin:`// Kotlin Example
fun main() {
    println("Hello, World!")
}`,yaml:`# YAML Example
name: John Doe
age: 30
city: New York`,sql:`-- SQL Example
SELECT name, age, city
FROM users
WHERE age > 20;`,shell:`# Shell Script Example
#!/bin/bash
echo "Hello, World!"`,powershell:`# PowerShell Example
Write-Output "Hello, World!"`,dockerfile:`# Dockerfile Example
FROM node:14
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`}};function c(){let{language:e,code:l,setCode:t,theme:o}=(0,s.W)();return a.jsx(i.ZP,{className:"rounded-large overflow-hidden absolute h-full",height:"100%",language:e,loading:a.jsx("div",{className:"flex items-center justify-center w-full h-full bg-foreground-500 rounded-large"}),options:{fontSize:16,minimap:{enabled:!1},automaticLayout:!0},theme:o,value:l,width:"100%",onChange:e=>{t(e)}})}var p=t(18855),m=t(1481),h=t(30752);/**
 * @license hugeicons-react v0.2.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */let u=(0,t(39950).Z)("PlayIcon",[["path",{d:"M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z",stroke:"currentColor",key:"k0"}]]);var g=t(20361);let f=t(44099).Z.create({baseURL:"https://emkc.org/api/v1/piston",headers:{"Content-Type":"application/json"}}),x=async(e,l)=>{try{return console.log(e,l),(await f.post("/execute",{language:e,source:l,files:[{name:"stdin",content:l}]})).data}catch(e){throw console.error(e),Error("Failed to run code")}};function S(){let{code:e,language:l,setLanguage:t,setTheme:o,setOutput:n}=(0,s.W)(),i=d.themes,c=d.languages,[f,S]=r().useState(new Set([])),[y,b]=r().useState(new Set([])),[w,k]=r().useState(!1),E=r().useCallback(async()=>{try{k(!0);let{output:t}=await x(l,e);n(t)}catch(e){console.error(e)}finally{k(!1)}},[e,l]);return(0,a.jsxs)(g.E,{direction:"row",space:"md",children:[a.jsx(p.g,{shouldFlip:!0,"aria-label":"Select theme",placeholder:"Select theme",radius:"full",selectedKeys:f,onSelectionChange:S,children:i.map((e,l)=>a.jsx(m.R,{children:e.key},e.key))}),a.jsx(p.g,{shouldFlip:!0,"aria-label":"Select language",placeholder:"Select language",radius:"full",selectedKeys:y,onSelectionChange:b,children:c.map((e,l)=>a.jsx(m.R,{children:e.key},e.key))}),a.jsx(h.A,{"aria-label":"Run code",className:"bg-foreground-900 text-foreground-100",isLoading:w,radius:"full",startContent:a.jsx(u,{size:24}),onClick:E,children:"Run"})]})}function y(){let{output:e}=(0,s.W)();return a.jsx("div",{className:"flex p-4 w-full h-full bg-foreground-900 text-foreground-100 rounded-medium",children:e})}function b(e){let{layout:l="horizontal"}=e;return(0,a.jsxs)(g.E,{fullheight:!0,fullwidth:!0,direction:"column",space:"lg",children:[a.jsx(S,{}),(0,a.jsxs)(o.Splitter,{className:"w-full h-full",layout:l,children:[a.jsx(o.SplitterPanel,{size:60,children:a.jsx(c,{})}),a.jsx(o.SplitterPanel,{size:40,children:a.jsx(y,{})})]})]})}},68032:(e,l,t)=>{t.r(l),t.d(l,{default:()=>r,metadata:()=>n});var a=t(19510),o=t(42108);t(7633);let n={title:"Dashboard"};function r({children:e}){return a.jsx(o.kz,{children:e})}},69882:(e,l,t)=>{t.d(l,{ZP:()=>i});var a=t(68570);let o=(0,a.createProxy)(String.raw`/Users/hoangducbach/Downloads/oj-frontend/components/ide/index.tsx`),{__esModule:n,$$typeof:r}=o;o.default;let i=(0,a.createProxy)(String.raw`/Users/hoangducbach/Downloads/oj-frontend/components/ide/index.tsx#default`)},79223:(e,l,t)=>{t.d(l,{E:()=>r});var a=t(19510),o=t(55761),n=t(62386);function r(e){let{direction:l="row",space:t="md",fullwidth:r=!1,fullheight:i=!1,isCentered:s=!1,isCenteredX:d=!1,isCenteredY:c=!1,roundedMedium:p=!0,classnames:m,className:h,...u}=e;return(0,a.jsxs)("div",{className:(0,n.m6)("flex flex-col gap-2 h-fit",p&&"rounded-medium",r&&"w-full",i&&"h-full",(0,n.dV)(h,m?.wrapper)),children:[e.label&&a.jsx("h3",{className:(0,n.m6)("text-sm font-medium text-foreground","sm"===e.labelSize&&"text-sm","md"===e.labelSize&&"text-md","lg"===e.labelSize&&"text-lg","2xl"===e.labelSize&&"text-2xl font-semibold",m?.label),children:e.label}),a.jsx("div",{...e,className:(0,o.Z)("flex w-full h-full","row"===l&&"flex-row","column"===l&&"flex-col","sm"===t&&"gap-2","md"===t&&"gap-4","lg"===t&&"gap-6",s&&"justify-center items-center",d&&"justify-center",c&&"items-center",m?.container),children:e.children})]})}},42108:(e,l,t)=>{t.d(l,{kz:()=>i,EY:()=>s.E,_z:()=>n,o8:()=>d});var a=t(19510),o=t(62386);function n(e){let{isCentered:l=!1,isCenteredX:t=!1,isCenteredY:n=!1,title:r,label:i,className:s,...d}=e;return(0,a.jsxs)("div",{...e,className:(0,o.m6)("w-full h-full flex flex-col gap-6",l&&"justify-center items-center",n&&"justify-center",t&&"items-center",s),children:[r&&a.jsx("h1",{className:"text-4xl font-bold text-foreground",children:r}),i,e.children]})}var r=t(55761);function i(e){return a.jsx("div",{...e,className:(0,r.Z)("w-full h-full",e.className),children:e.children})}var s=t(79223);function d(e){let{leftContents:l,rightContents:t,classNames:o,...n}=e;return(0,a.jsxs)("div",{className:(0,r.Z)("flex items-center justify-between gap-2 w-full flex-row",o?.container),...n,children:[a.jsx("div",{className:(0,r.Z)("flex items-center gap-2",o?.leftWrapper),children:l}),a.jsx("div",{className:(0,r.Z)("flex items-center gap-2",o?.rightWrapper),children:t})]})}}};