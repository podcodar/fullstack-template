# Coding Standards

We have a few coding standards that we follow to ensure that our code is consistent and maintainable.

## Introduction

The coding standards are a set of guidelines that we follow when writing code. They cover various aspects of coding, including naming conventions, formatting, and code organization. By following these standards, we can ensure that our code is consistent, maintainable, and easy to read.

## General

- **Consistency** - Follow the existing coding style and conventions in the codebase. This includes naming conventions, formatting, and code organization.
- **Readability** - Write code that is easy to read and understand. Use descriptive variable names, comments, and whitespace to make the code more readable.
- **Simplicity** - Keep the code simple and avoid unnecessary complexity. Write code that is easy to understand and maintain.
- **Error Handling** - Always handle errors and exceptions in a consistent and predictable way. Use try/catch blocks to handle exceptions and provide meaningful error messages to the user.
- **Testing** - Write tests for your code to ensure that it works as expected. Write unit tests, integration tests, and end-to-end tests as needed to cover all aspects of the code.
- **Performance** - Write code that is performant and efficient. Avoid unnecessary loops, recursion, or other operations that could slow down the code.
- **Security** - Write code that is secure and resistant to common security vulnerabilities. Sanitize input, validate user input, and use secure coding practices to prevent attacks.

## TypeScript

Here are some additional guidelines specific to TypeScript:

- **Type Definition** - Prefer using `type` over `interface` for defining types. Use `interface` when defining objects that will be implemented by classes.
- **Type Coercion** - Avoid using type coercion where possible (`as` keyword). Use explicit type conversions instead of relying on implicit type coercion.
- **Type Inference** - Use type inference where possible to reduce the amount of boilerplate code. TypeScript can often infer types based on context, so you don't need to specify them explicitly.
- **Type Aliases** - Use type aliases to define complex types that are used in multiple places. This helps reduce duplication and makes the code more maintainable.
- **Partial Types** - Use partial types to define types where some properties are optional. This can be useful when working with APIs that return partial data.
- **Pick and Omit Types** - Use pick and omit types to create new types by selecting or excluding properties from an existing type. This can help create more specific types that are tailored to a particular use case.
- **Type Utilities** - Use type utilities like Partial, Required, Readonly, and Record to manipulate types and create new types based on existing ones. This can help reduce duplication and make the code more maintainable.
- **Non-Nullable Types** - Use non-nullable types to prevent null or undefined values from being assigned to a variable. This can help catch common errors and make the code more robust.
- **Generics** - Use generics to write reusable code that can work with different types. This helps reduce code duplication and makes the code more flexible.

## Naming conventions

Coding practices:

- **Variables** - Use descriptive variable names that indicate the purpose of the variable. Use camelCase for variable names. `let firstName = 'John';`
- **Functions** - Use descriptive function names that indicate what the function does. Use camelCase for function names. `function calculateTotal() { }`
- **Classes** - Use PascalCase for class names. Class names should be nouns that describe the object being represented. `class User { }`
- **Types & Interfaces** - Use PascalCase for interface names. Interface names should be descriptive and indicate the shape of the object. `interface Person { }`
- **Constants** - Use uppercase snake_case for constant names. Constants should be descriptive and indicate the purpose of the value. `const MAX_LENGTH = 100;`

Files and folders:

- **File Names** - Use kebab-case for file names. File names should be descriptive and indicate the contents of the file. `user-service.ts`
- **Folders** - Use kebab-case for folder names. Folder names should be descriptive and indicate the purpose of the folder. `components/`

General:

- **Plurals** - Use plural names for collections or arrays. This makes it clear that the variable contains multiple items. `const users = [ { name: 'John' }, { name: 'Jane' } ];`
- **Singular** - Use singular names for single items or objects. This makes it clear that the variable contains a single item. `const user = { name: 'John' };`
- **Consistency** - Be consistent with your naming conventions. Use the same naming style throughout your codebase to make it easier to read and understand.

## Formatting

Just use our formatter `bun run fmt` to format your code. We also have git hooks that will run the formatter before you commit your code, you just need to run `bun install` to set them up.
