import React from 'react'
import { Navigation } from '../Navigation'
import { racha } from '../wordbase/RachaBase'
import { EachContainer } from './EachContainer'

export const Racha = () => {
  return (
    <div>
      <Navigation />
      <EachContainer datas={racha} />
    </div>
  )
}
