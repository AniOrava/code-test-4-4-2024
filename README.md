## Assignment

Create a React component called `FilteredNumberList` that generates a list of numbers based on specific filtering criteria and calculates the summation of the included numbers within a given range.

### Task Details:

- Create a React component named `FilteredNumberList` in a separate file.

- The component should consist of two input fields allowing users to specify the minimum and maximum values of the range.

- Display a list of numbers within the specified range based on the following criteria:
  - Include all even numbers.
  - Exclude numbers dividable by 50.
  - Include numbers dividable by 10 with an exclamation mark (e.g., 10!).
  - Non-numeric values or negative values are not allowed.
  
- Display the generated list of numbers separated by spaces.

- Calculate and display the summation of all included numbers.

### Requirements:
- Utilize React hooks.
- Use TypeScript for type safety.
- Handle invalid inputs gracefully
- Ensure the UI updates appropriately when the input values change.


The application is built using [Create-React-App](https://create-react-app.dev/) with Typescript.
Relevant files that are prepared to be worked in are:

#### App.tsx

- `App.tsx` file comes prepared with a Modal element `<div className="app-container"/>` where you can insert your react component.

#### App.css

- The file containing some initial CSS to style the predefined elements.
- Extend this file with your own styling code as you start creating your own elements.
