// Write your code here
import {useState} from 'react'

import {
  PasswordValidatorBgContainer,
  ValidationCardContainer,
  TextElement,
  ErrorMsg,
  PasswordInputElement,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => setPassword(event.target.value)

  return (
    <PasswordValidatorBgContainer>
      <ValidationCardContainer>
        <TextElement heading>Password Validator</TextElement>
        <TextElement as="p">
          Check how strong and secure is your password
        </TextElement>
        <PasswordInputElement
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {password.length <= 8 ? (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        ) : null}
      </ValidationCardContainer>
    </PasswordValidatorBgContainer>
  )
}
export default PasswordValidator
