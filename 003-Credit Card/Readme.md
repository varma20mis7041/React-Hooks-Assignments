# Credit Card Input Form 
 ## Concepts used : useState()

 #### web url : https://bvreacthooks03.ccbp.tech



This React component is designed to create an interactive credit card input form. It offers the following features:

## Functionality

1. **Card Number Input:**
   - Users can input their credit card number.
   - Input is limited to a maximum of 16 digits.
   - An error message is displayed if the card number is less than 16 digits.

2. **Cardholder Name Input:**
   - Users can input the name of the cardholder.

3. **Real-Time Card Representation:**
   - A visual representation of the credit card dynamically updates as users type their card number and cardholder name.

4. **Error Handling:**
   - Error message appears when the card number is less than 16 digits.

## State Management

The component manages the following state variables:

- `cardNumber`: Holds the credit card number input.
- `holderName`: Holds the cardholder name input.
- `isError`: Controls the visibility of the error message.

