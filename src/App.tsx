import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/home'
function App() {
  return (
    <>
      <Header/>
      <div id="container">
        <Nav/>
        <Home/>
      </div>

      <Footer/>
    </>
  )
}
export default App