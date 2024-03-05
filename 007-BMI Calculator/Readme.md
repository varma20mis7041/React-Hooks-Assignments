# BMI Calculator Component

## Functionality Overview

- The `BmiCalculator` component calculates BMI (Body Mass Index) based on user-provided height and weight.
- The document title is dynamically updated to display the user's BMI.
- Users can input their height and weight, and the BMI is calculated and displayed.
- Buttons allow users to increment or decrement both height and weight.
- A "Reset" button resets the height and weight to their initial values and clears stored data.

## How to Use

1. The component initially displays BMI calculated from default values (height: 170 cms, weight: 60 kgs).
2. Use the "+" and "-" buttons to adjust both height and weight.
3. The document title is updated to show the calculated BMI in real-time.
4. Click the "Reset" button to restore default values and clear stored data.

## `useEffect()` Functionality

- Three `useEffect` hooks are used to:
  1. Set the document title dynamically with the calculated BMI.
  2. Store and retrieve height and weight values in/from localStorage.


