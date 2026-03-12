import React from 'react'
import { useBear } from '../store/zustand'

const Card = () => {

function BearCounter() {
  const bears = useBear((state) => state.bears)
  return <h1>{bears} bears around here...</h1>
}

function Controls() {
  const increasePopulation = useBear((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
  return (
    <div>
        {BearCounter()}
        {Controls()}
    </div>
  )
}

export default Card