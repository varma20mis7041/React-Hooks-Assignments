# Clock Component

#### Concepts Used : useEffect(),useState(),Dependency Array , SetInterval(), ClearInterval() , Clean Up Function when we unmount the Component 

#### Website link : https://bvreacthooks09.ccbp.tech

## Functionality Overview

- The `Clock` component displays a clock with a heading, clock image, and the current time.
- Utilizes the `useState` and `useEffect` hooks to manage the state and side effects.
- Automatically updates the time every second using a timer in the `useEffect` hook.
- Implements a clean-up function in `useEffect` to clear the timer when the component is unmounted.

## How to Use

1. The `Clock` component can be used in other components or pages to display a clock.
2. The clock updates every second and shows the current time.

## App Integration

- The `App` component is a sample implementation that toggles the visibility of the `Clock` component using a button.

