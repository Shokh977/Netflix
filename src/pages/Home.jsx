import React from 'react'
import { Main } from '../Component/Main'
import { Row } from '../Component/Row'
import requests from '../request'

export const Home = () => {
  return (
    <>
    <Main/>
    <Row rowId='1' title='Up Coming' fetchUrl = {requests.upcoming}/>
    <Row rowId='2' title='Top Rated' fetchUrl = {requests.top_rated}/>
    <Row rowId='3' title='Trending' fetchUrl = {requests.popular}/>
    {/* <Row title='TV series' fetchUrl = {requests.tv_series}/> */}
    </>
  )
}
