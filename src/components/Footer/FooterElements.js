import styled from 'styled-components'
import {Link} from 'react-router-dom'



export const FooterContainer = styled.footer`

  background-color:#1B949A;
`
export const FooterWrap = styled.div`
  padding:24px 24px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width:600px;
  margin:0 auto;
`

export const SocialMedia = styled.section`
  max-width:1000px;
  width:100%;
`

export const SocialMediaWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  max-width:500px;
  margin: 40px auto 0 auto;

  @media screen and (max-width:820px){
    flex-direction: column;
  }
`
export const SocialIcons = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:240px;
`

export const SocialIconLink = styled.a`
  color:white;
  font-size:40px;
`