# Device Lock/Unlock App

## Concepts used : useState() 

[webpage link](https://bvreacthooks01.ccbp.tech/)

## Functionality Overview

When the app is opened:

- The provided lock image is displayed.
- The text "Your Device is Locked" is shown.
- The Unlock button is visible.

When the Unlock button is clicked:

- The provided unlock image is displayed.
- The text "Your Device is Unlocked" is shown.
- The Lock button is visible.

When the Lock button is clicked:

- The given lock image is displayed.
- The text "Your Device is Locked" is shown.
- The Unlock button is visible.

## App Flow

1. **Initial State**
   - ![Lock Image](https://assets.ccbp.in/frontend/hooks/lock-img.png)
   - Text: Your Device is Locked
   - Button: Unlock

2. **Unlock State (After Clicking Unlock)**
   - ![Unlock Image](https://assets.ccbp.in/frontend/hooks/unlock-img.png)
   - Text: Your Device is Unlocked
   - Button: Lock

3. **Lock State (After Clicking Lock)**
   - ![Lock Image](https://assets.ccbp.in/frontend/hooks/lock-img.png)
   - Text: Your Device is Locked
   - Button: Unlock

## How to Use

Simply click the provided buttons to toggle between the locked and unlocked states of the device. Visual cues and text will guide you through the process.
