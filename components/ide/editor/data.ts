export type Language =
  | "javascript"
  | "typescript"
  | "cpp"
  | "c"
  | "java"
  | "python"
  | "html"
  | "json"
  | "xml"
  | "markdown"
  | "plaintext"
  | "css"
  | "scss"
  | "less"
  | "python"
  | "java"
  | "csharp"
  | "php"
  | "ruby"
  | "go"
  | "swift"
  | "kotlin"
  | "rust"
  | "dart"
  | "yaml"
  | "sql"
  | "shell"
  | "powershell"
  | "dockerfile";

export const monacoDataConfig = {
  themes: [
    {
      key: "light",
      label: "Light",
    },
    {
      key: "vs-dark",
      label: "Dark",
    },
  ],
  languages: [
    {
      key: "javascript",
      label: "JavaScript",
      codeSnippet: `// JavaScript Example
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('World');`,
    },
    {
      key: "typescript",
      label: "TypeScript",
      codeSnippet: `// TypeScript Example
function greet(name: string): void {
    console.log('Hello, ' + name + '!');
}

greet('World');`,
    },
    {
      key: "cpp",
      label: "C++",
      codeSnippet: `// C++ Example
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
    },
    {
      key: "c",
      label: "C",
      codeSnippet: `// C Example
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`,
    },
    {
      key: "java",
      label: "Java",
      codeSnippet: `// Java Example
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    },
    {
      key: "python",
      label: "Python",
      codeSnippet: `# Python Example
def greet(name):
    print(f'Hello, {name}!')
    
greet('World')`,
    },
    {
      key: "html",
      label: "HTML",
      codeSnippet: `< !DOCTYPE html>
        <html>
        <head>
        <title>Page Title </title>
        </head>
        < body >

        <h1>This is a Heading </h1>
        < p > This is a paragraph.</p>

        </body>
        </html>`,
    },
    {
      key: "json",
      label: "JSON",
      codeSnippet: `{
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}`,
    },
    {
      key: "xml",
      label: "XML",
      codeSnippet: `<?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>`,
    },
    {
      key: "markdown",
      label: "Markdown",
      codeSnippet: `# Markdown Example

## This is a sub-heading

This is a paragraph with **bold** text and *italic* text.

- Item 1
- Item 2
- Item 3

[Link to Google](https://www.google.com)`,
    },
    // Adding more languages
    {
      key: "python",
      label: "Python",
      codeSnippet: `# Python Example
def greet(name):
    print(f'Hello, {name}!')

greet('World')`,
    },
    {
      key: "java",
      label: "Java",
      codeSnippet: `// Java Example
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    },
    {
      key: "csharp",
      label: "C#",
      codeSnippet: `// C# Example
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
    },
    {
      key: "php",
      label: "PHP",
      codeSnippet: `<?php
// PHP Example
echo "Hello, World!";
?>`,
    },
    {
      key: "go",
      label: "Go",
      codeSnippet: `// Go Example
package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
    },
    {
      key: "rust",
      label: "Rust",
      codeSnippet: `// Rust Example
fn main() {
    println!("Hello, World!");
}`,
    },
    {
      key: "swift",
      label: "Swift",
      codeSnippet: `// Swift Example
import Foundation

print("Hello, World!")`,
    },
    {
      key: "kotlin",
      label: "Kotlin",
      codeSnippet: `// Kotlin Example
fun main() {
    println("Hello, World!")
}`,
    },
    {
      key: "yaml",
      label: "YAML",
      codeSnippet: `# YAML Example
name: John Doe
age: 30
city: New York`,
    },
    {
      key: "sql",
      label: "SQL",
      codeSnippet: `-- SQL Example
SELECT name, age, city
FROM users
WHERE age > 20;`,
    },
    {
      key: "shell",
      label: "Shell",
      codeSnippet: `# Shell Script Example
#!/bin/bash
echo "Hello, World!"`,
    },
    {
      key: "powershell",
      label: "PowerShell",
      codeSnippet: `# PowerShell Example
Write-Output "Hello, World!"`,
    },
    {
      key: "dockerfile",
      label: "Dockerfile",
      codeSnippet: `# Dockerfile Example
FROM node:14
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`,
    },
  ],
  snippets: {
    javascript: `// JavaScript Example
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('World');`,
    typescript: `// TypeScript Example
function greet(name: string): void {
    console.log('Hello, ' + name + '!');
}

greet('World');`,
    html: `<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`,
    json: `{
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>`,
    markdown: `# Markdown Example

## This is a sub-heading

This is a paragraph with **bold** text and *italic* text.

- Item 1
- Item 2
- Item 3

[Link to Google](https://www.google.com)`,
    python: `# Python Example
def greet(name):
    print(f'Hello, {name}!')

greet('World')`,
    java: `// Java Example
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    csharp: `// C# Example
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
    php: `<?php
// PHP Example
echo "Hello, World!";
?>`,
    go: `// Go Example
package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
    rust: `// Rust Example
fn main() {
    println!("Hello, World!");
}`,
    swift: `// Swift Example
import Foundation

print("Hello, World!")`,
    kotlin: `// Kotlin Example
fun main() {
    println("Hello, World!")
}`,
    yaml: `# YAML Example
name: John Doe
age: 30
city: New York`,
    sql: `-- SQL Example
SELECT name, age, city
FROM users
WHERE age > 20;`,
    shell: `# Shell Script Example
#!/bin/bash
echo "Hello, World!"`,
    powershell: `# PowerShell Example
Write-Output "Hello, World!"`,
    dockerfile: `# Dockerfile Example
FROM node:14
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`,
  },
};
