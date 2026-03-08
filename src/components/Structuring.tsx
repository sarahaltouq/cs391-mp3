import {Outlet} from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
//outlet is a react layout component that i didnt find on the slides so thought id explain briefly, its an easier way to put the parts of the site that are gonna stay the same no matter what. Outlet basically is like a hole so where our main usually is. Since every page has the same header, nav and footer, the outlet is the hole where we just insert whatever content depending on what page we are currently on!
export default function Structuring() {
  return (<> <Header/>
      <div id="container">
        <Nav/>
        <main>
            <Outlet/> 
        </main></div><Footer/>
    </>
  )
}