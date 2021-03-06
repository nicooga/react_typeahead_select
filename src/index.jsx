import 'regenerator-runtime/runtime'
import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import SimpleSolution from './SimpleSolution'
import BetterSolution from './BetterSolution'

const Root = styled.div`
  font-family: Helvetica;
  > * {
    margin: 40px;
  }
`

const SolutionWrapper = styled.div`
  margin: 24px;
  padding: 24px;
  border: 1px solid black;
`

const BetterSolutionAlternateSize = styled(BetterSolution)`
  width: 800px;
`

const BetterSolutionAlternateSize2 = styled(BetterSolution)`
  width: 300px;
`

const App = _props => (
  <Root>
    <SolutionWrapper>
      <p>
        This is the simplest solution I figured out.
        <br />
        I didn&apos;t want to invest a lot of time into making a custom checkbox.
        <br />
        I know how to do that, but in real life we would most likely use a 3rd party component and it&apos;s not one of our biggest concerns anyway.
        <br />
        This thing has a lot UX problems that I will solve in the next proposal. These are a few of them:
      </p>

      <ul>
        <li>There&apos;s no feedback while suggestions are being fetched</li>
        <li>There&apos;s no feedback when API returns no results</li>
        <li>Sometimes the API returns a 500 status code, leaving the user on limbo. I assume you did this on purpose to see how I handle it, but I didn&apos;t fix it here.</li>
        <li>Checkbox in the only clickable thing, not whole suggestion</li>
        <li>There&apos;s no way to close the suggestions list once is displayed. Even if you could, there would be no feedback about which cities were selected</li>
        <li>Power users would benefit from being able to use this input with just a keyboard, but we don&apos;t support that</li>
      </ul>

      <SimpleSolution />
    </SolutionWrapper>

    <SolutionWrapper>
      <p>
        I think you are going to like this one. It adapts well to different sizes and all the problems listed above are solved.
      </p>

      <BetterSolution />
      <br />
      <BetterSolutionAlternateSize />
      <br />
      <BetterSolutionAlternateSize2 />
    </SolutionWrapper>
  </Root>
)

ReactDOM.render(<App />, document.getElementById('root'))
