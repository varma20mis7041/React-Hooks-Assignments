import {useState} from 'react'
import {
  MainHeading,
  CreditCardBgContainer,
  CustomCreditCardPageSideContainer,
  CreditCardImageContainer,
  CardNumberText,
  CardImageCustomText,
  CreditCardPaymentFormCardContainer,
  FormHeading,
  InputElement,
  ErrorContainer,
  ErrorMsg,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [holderName, setHolderName] = useState('')
  const [isError, toggleErrorMsg] = useState(false)

  const onChangeCardNumber = event => {
    const userInput = event.target.value
    if (userInput.length <= 16) {
      setCardNumber(event.target.value)
    }

    if (userInput.length < 16) {
      toggleErrorMsg(true)
    } else {
      toggleErrorMsg(false)
    }
  }
  const onChangeCardHolderName = event => setHolderName(event.target.value)

  return (
    <CreditCardBgContainer>
      <CustomCreditCardPageSideContainer left>
        <MainHeading>CREDIT CARD</MainHeading>
        <CreditCardImageContainer data-testid="creditCard">
          <CardNumberText>{cardNumber}</CardNumberText>
          <CardImageCustomText>CARDHOLDER NAME</CardImageCustomText>
          <CardImageCustomText name>{holderName}</CardImageCustomText>
        </CreditCardImageContainer>
      </CustomCreditCardPageSideContainer>
      <CustomCreditCardPageSideContainer>
        <CreditCardPaymentFormCardContainer>
          <FormHeading>Payment Method</FormHeading>
          <InputElement
            type="number"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          {isError ? (
            <ErrorContainer>
              <ErrorMsg>Your card number must be at least 16 digits</ErrorMsg>
            </ErrorContainer>
          ) : null}
          <InputElement
            type="text"
            placeholder="Cardholder Name"
            value={holderName}
            onChange={onChangeCardHolderName}
          />
        </CreditCardPaymentFormCardContainer>
      </CustomCreditCardPageSideContainer>
    </CreditCardBgContainer>
  )
}
export default CreditCard
