import React from 'react'
import './App.css'
import tw from 'twin.macro'
import TopSection from './containers/TopSection/TopSection'
import ExploreSection from './containers/ExploreSection/ExploreSection';
import Footer from './components/footer/Footer';

const AppContainer = tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-hidden
`;

const App = () => {
  return (
   <AppContainer>
     <TopSection/>
     <ExploreSection/>
     <Footer/>
   </AppContainer>
  )
}

export default App