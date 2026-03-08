import {Outlet} from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

export default function Structuring() {
  return ( <>
      <Header/>
      <div id="container">
        <Nav/><main><Outlet/>
        </main></div><Footer/>
    </>
  )
}