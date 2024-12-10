# Next.js: console.log after router.push not always executing

This repository demonstrates an uncommon bug in Next.js where a `console.log` statement placed after `router.push` in a component doesn't always execute after navigation.  The issue seems to be related to the asynchronous nature of `router.push` and how it interacts with component lifecycle and state updates.  

## Bug Description

The `bug.js` file contains a simple component with a button that navigates to another page using `router.push`. A `console.log` is added to track the navigation completion. However, in practice, this log message is sometimes not printed, suggesting the code following `router.push` executes before the navigation is complete.

## Solution

The `bugSolution.js` file provides a fix that ensures the action is performed after the navigation completes successfully. This is achieved by using `router.push`'s promise. The `.then` ensures that the code inside will only execute when the navigation has finished.

## Reproduction

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Click the button to navigate and observe whether the console log is printed consistently. 