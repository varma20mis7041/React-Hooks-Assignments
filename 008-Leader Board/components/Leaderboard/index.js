import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {
  LeaderboardContainer,
  LoadingViewContainer,
  ErrorMessage,
} from './styledComponents'

import LeaderboardTable from '../LeaderboardTable'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Leaderboard = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    errorMsg: null,
    data: null,
  })

  useEffect(() => {
    const getLeaderBoardData = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        data: null,
        errorMsg: null,
      })
      const url = 'https://apis.ccbp.in/leaderboard'
      const options = {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU',
        },
      }
      const response = await fetch(url, options)
      const responseData = await response.json()
      if (response.ok) {
        setApiResponse(prevResponse => ({
          ...prevResponse,
          status: apiStatusConstants.success,
          data: responseData,
        }))
      } else {
        setApiResponse(prevResponse => ({
          ...prevResponse,
          status: apiStatusConstants.failure,
          errorMsg: responseData.error_msg,
        }))
      }
    }
    getLeaderBoardData()
  }, [])

  const renderLoadingView = () => (
    <LoadingViewContainer>
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoadingViewContainer>
  )
  const renderSuccessView = () => {
    const {data} = apiResponse
    const formattedData = data.leaderboard_data.map(eachUser => ({
      id: eachUser.id,
      rank: eachUser.rank,
      name: eachUser.name,
      profileImgUrl: eachUser.profile_image_url,
      score: eachUser.score,
      language: eachUser.language,
      timeSpent: eachUser.time_spent,
    }))

    return <LeaderboardTable leaderboardData={formattedData} />
  }
  const renderFailureView = () => {
    const {errorMsg} = apiResponse
    return <ErrorMessage>{errorMsg}</ErrorMessage>
  }
  const renderLeaderboard = () => {
    const {status} = apiResponse
    switch (status) {
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      default:
        return null
    }
  }

  return <LeaderboardContainer>{renderLeaderboard()}</LeaderboardContainer>
}

export default Leaderboard
