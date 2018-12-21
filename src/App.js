import React, { Component } from 'react'
import Header from './Header/Header'
import Home from './Home/Home'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main>
          <Home />
        </Main>
      </div>
    )
  }
}

export default App
const Main = styled.div`
  width: 960px;
  margin: 20px auto 0;
`
