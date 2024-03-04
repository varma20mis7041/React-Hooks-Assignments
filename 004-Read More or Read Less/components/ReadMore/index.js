import {useState} from 'react'

import {
  ReadMoreComponentBgContainer,
  ReactHookInfoCardContainer,
  MainHeading,
  CustomText,
  ReactHookImgElement,
  CustomButton,
} from './styledComponents'

const ReadMore = props => {
  const [isReadMoreActive, updateReadMoreStatus] = useState(false)
  const {reactHooksDescription} = props
  const slicedDescription = reactHooksDescription.slice(0, 170)
  console.log(slicedDescription)
  const displayedDescription = isReadMoreActive
    ? reactHooksDescription
    : slicedDescription
  const onClickReadStatusButton = () =>
    updateReadMoreStatus(prevState => !prevState)
  return (
    <ReadMoreComponentBgContainer>
      <ReactHookInfoCardContainer>
        <MainHeading>React Hooks</MainHeading>
        <CustomText>Hooks are a new addition to React</CustomText>
        <ReactHookImgElement
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <CustomText description>{displayedDescription}</CustomText>
        <CustomButton type="button" onClick={onClickReadStatusButton}>
          {isReadMoreActive ? 'Read Less' : 'Read More'}
        </CustomButton>
      </ReactHookInfoCardContainer>
    </ReadMoreComponentBgContainer>
  )
}

export default ReadMore
