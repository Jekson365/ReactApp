import React from 'react'
import { guria } from '../wordbase/Guriabase'
import { Navigation } from '../Navigation'
import { EachContainer } from './EachContainer'

export const Guria = () => {
  return (
    <>
    <Navigation />
      <EachContainer datas={guria}/>
    </>
  )
}
