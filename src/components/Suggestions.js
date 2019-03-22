import { jsx } from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'

const Suggestions = props => {
  const options = props.results.map(r => (
    <div key={r.id} class="package">
      <h2 class="package-name">{r.package.name}</h2>
      <div class="package-info">{r.package.scope}</div>
      <div class="package-info">{r.package.version}</div>
      <div class="package-info">
        {r.package.date.slice(0, 10)}
      </div>
      <div class="package-info">
      <b>Links:</b>
        <li>{r.package.links.npm}</li>
        <li>{r.package.links.homepage}</li>
        <li>{r.package.links.repository}</li>
        <li>{r.package.links.bugs}</li>
      </div>
      <div class="package-info">
        <b>Author:</b>
        {/* {Object.keys(r.package.author).map(authorKey => {
          // console.log(r.package.author[authorKey])
          // if (!r.package.author[authorKey]) {
          //   return 'No author information'
          // } else {
          //   return (
          //     <li authorKey={authorKey}>
          //       {authorKey}: {r.package.author[authorKey]}
          //     </li>
          //   )
          // }
        })} */}
      </div>
      <div class="package-info">
        <b>Publisher:</b>
        {Object.keys(r.package.publisher).map(key => {
          return (
            <li key={key}>{r.package.publisher[key]}</li>
          )
        })}
      </div>
      <div class="package-info">
        <b>Maintainers:</b>
        {Object.keys(r.package.maintainers).map(
          maintKey => {
            return (
              <li key={maintKey}>
                {r.package.maintainers[maintKey].username}
                {r.package.maintainers[maintKey].email}
              </li>
            )
          }
        )}
      </div>
      <div class="package-info">
        <b>Score:</b>
        <li>{r.score.final}</li>
        {Object.keys(r.score).map(key => {
          return (
            <li key={key}>
              {r.score.detail[key]}
            </li>
          )
        })}
      </div>
      <div class="package-info">Score: {r.searchScore}</div>
      <div class="package-info">Highlight: {r.highlight}</div>
    </div>
  ))
  return <div>{options}</div>
}

export default Suggestions
