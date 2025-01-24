# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js: unhandled exceptions in HTTP servers, and provides a solution for gracefully handling them.

## The Problem

The `bug.js` file contains a simple HTTP server that throws an unhandled exception. This causes the server to crash without any indication of what went wrong.  This is a bad user experience and makes debugging difficult.

## The Solution

The `bugSolution.js` file shows how to add error handling to the server using a `try...catch` block within the request handler, and an additional `'uncaughtException'` event listener as a safety net for exceptions that escape the `try...catch` block.  This prevents the server from crashing and allows for more robust error handling.

## Running the Code

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js` to see the unhandled exception.
4. Run `node bugSolution.js` to see the improved error handling.