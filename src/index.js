/* @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Suggestions from './components/Suggestions'

import './styles.css'

const API_URL = 'https://api.npms.io/v2/search/suggestions'

export default class App extends React.Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    console.log(this.state.query)
    axios
      .get(`${API_URL}?q=${this.state.query}`)
      .then(({ data }) => {
        // Just to check what we get back
        //if we dont' want to use postman or the browser:
        console.log(data)
        this.setState({
          results: data
        })
      })
  }

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (
          this.state.query &&
          this.state.query.length > 1
        ) {
          this.getInfo()
        } else if (!this.state.query) {
          return 'No results can be found'
        }
      }
    )
  }

  render() {
    return (
      <div className="App" css={{ color: 'darkgray' }}>
        <input
          type="text"
          placeholder="Search NPM"
          class="searchbox"
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
