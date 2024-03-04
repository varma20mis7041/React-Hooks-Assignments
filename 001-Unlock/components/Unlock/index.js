import {useState} from 'react'

import {
  UnlockBgContainer,
  UnlockCardContainer,
  UnlockDescription,
  ImageElement,
  CustomButton,
} from './styledComponents'

const Unlock = () => {
  const [isLock, updateLockStatus] = useState(true)

  const imageUrl = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const onClickButton = () => updateLockStatus(prevState => !prevState)

  return (
    <UnlockBgContainer>
      <UnlockCardContainer>
        <ImageElement src={imageUrl} alt={isLock ? 'lock' : 'unlock'} />
        <UnlockDescription>
          {isLock ? 'Your Device is Locked' : 'Your Device is Unlocked'}
        </UnlockDescription>
        <CustomButton onClick={onClickButton}>
          {isLock ? 'Unlock' : 'Lock'}
        </CustomButton>
      </UnlockCardContainer>
    </UnlockBgContainer>
  )
}
export default Unlock
