import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
// import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { createGlobalStyle } from 'styled-components';

import FontProvider from '../assets/fonts/FontProvider'
const StyledWrapper = styled.div`
background: #FFFCF2;
width: 80%;
margin: 0px auto;
padding:  34px 10%;
color: #252422;

* {
  font-family: Guardian Sans Regular
}


h1, h2, h3, h4, i, a {
  font-family: Publico;
}
a{ text-decoration: none}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  grid-gap: 21px;

}

.grid .item {
  padding: 11px;
  overflow: hidden;
  border-left: 1px solid #252422
 
}

.item:nth-child(1){
  grid-row: span 1;
  grid-column: span 3;
}
.item:nth-child(2){
  grid-row: span 3;
}
.item:nth-child(4){
  grid-row: span 1;
  grid-column: span 2;
}
.item:nth-child(6){
  grid-row: span 1;
  grid-column: span 3;
}
.item:nth-child(7){
  grid-row: span 2;
  grid-column: span 1;
}
.item:nth-child(8){
  grid-row: span 2;

}
.item:nth-child(9){
  grid-row: span 3;

}



.white {
  color: #FFFCF2
}
.lightgray {
  color: #CCC5B9
}
.darkgray {
  color: #403D39
}
.black {
  color: #252422
}
.blue {
  color: #6EE5DD;
}
.white-bg {
  background-color: #FFFCF2
}
.lightgray-bg {
  background-color: #CCC5B9
}
.darkgray-bg {
  background-color: #403D39
}
.black-bg {
  background-color: #252422
}
.blue-bg {
  background-color: #6EE5DD;
}


`

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    
    <StyledWrapper>
      <FontProvider/>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
      </Helmet>
      <Navbar />
      
      <div className='page'>{children}</div>
      {/* <Footer /> */}
    </StyledWrapper>
  )
}

export default TemplateWrapper
