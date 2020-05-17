import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import './all.css'
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
