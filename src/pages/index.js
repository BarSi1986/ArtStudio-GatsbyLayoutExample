import React from "react"
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Helmet } from "react-helmet";

import Header from '../components/Header'
import Nav from '../components/Nav'
import About from '../components/About'
import Works from '../components/Works'
import Credits from '../components/Credits'
import FollowMe from '../components/FollowMe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`

const theme = {
    // colors
    main_bg: '#FFFFFF',
    main_red: '#D07C7C',
    main_header: '#5A5957',
    main_para: '#848282',
}

export default () => (
    <React.Fragment>
        <Helmet>
            {/* <meta charSet="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
            <title>ArtStudio photography</title>
            <meta name="description" content="Photography studio, best photos, capture the moments, works with the best people" />
        </Helmet>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Nav />
            <About />
            <Works />
            <Credits />
            <FollowMe />
            <Contact />
            <Footer />
        </ThemeProvider>
    </React.Fragment>
)
