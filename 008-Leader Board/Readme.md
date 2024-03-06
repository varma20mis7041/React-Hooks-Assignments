# Leaderboard Component

#### Concepts Used : useState() , useEffect() 

#### webpage ursl : https://bvreacthooks08.ccbp.tech

## Functionality Overview

- The `Leaderboard` component fetches data from an API and displays a leaderboard.
- It handles various API response states: initial, in progress, success, and failure.
- A loading spinner is displayed while data is being fetched.
- The data is formatted and displayed in a table upon successful API response.
- In case of a failure, an error message is shown.
- Utilizes `useEffect` to manage side effects, particularly to make the API request and update document title.

## How to Use

1. The component automatically fetches leaderboard data upon rendering.
2. During data fetch, a loading spinner is displayed.
3. On successful fetch, the leaderboard table is rendered with user details.
4. In case of a failure, an error message is displayed.

## API Integration

- The component sends a GET request to the [Leaderboard API](https://apis.ccbp.in/leaderboard).
- Authorization is handled with a bearer token.

## Component Structure

- The `Leaderboard` component is composed of:
  - `LeaderboardContainer`: Main container for the leaderboard.
  - `LoadingViewContainer`: Container for the loading spinner.
  - `ErrorMessage`: Component to display error messages.
  - `LeaderboardTable`: Child component responsible for rendering the leaderboard table.


