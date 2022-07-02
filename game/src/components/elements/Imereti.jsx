import React from 'react'
import { Navigation } from '../Navigation'
import { imereti } from '../wordbase/Imeretibase'
import { EachContainer } from './EachContainer'

export const Imereti = () => {
  return (
    <div>
      <Navigation/>
      <EachContainer datas={imereti} />
    </div>
  )
}
