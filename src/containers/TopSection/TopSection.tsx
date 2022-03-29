import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import NavBar from '../../components/NavBar/NavBar';
const BackgroundImage = require('../../Images/indonesia-high-res.jpg');

const TopSectionContainer = styled.div`
   ${tw`
      w-full
      flex
      flex-col
      h-screen
      relative
   `}
`;
const LandingSection = styled.div`
  ${tw`
      w-full
      h-screen
      flex
      flex-col      
  `};

  background-image: url(${BackgroundImage}),
    linear-gradient(to left, #005b9c, #b1d1b148);
  background-size: cover;
  background-position: bottom 10% left;
  background-blend-mode: overlay;
  
`;



const TopSection = () => {
  return (
    <TopSectionContainer>
      <LandingSection>
        <NavBar/>
      </LandingSection>
    </TopSectionContainer>
  )
}

export default TopSection