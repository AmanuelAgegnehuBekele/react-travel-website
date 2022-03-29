import React from 'react'
import './App.css'
import tw from 'twin.macro'
import TopSection from './containers/TopSection/TopSection'

const AppContainer = tw.div`
  flex
  w-full
  h-full
`;

const App = () => {
  return (
   <AppContainer>
     <TopSection/>
   </AppContainer>
  )
}

export default App