import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <header>
        <h1>Sarah Altouq's Resume</h1>
        <p>An online application showcasing Sarah's career background</p>
      </header>

      <nav>
        <ul>
          <li>Home</li>
          <li>Experiences</li>
          <li>Education</li>
          <li>Projects</li>
          <li>Certifications</li>
        </ul>
      </nav>

      <main>
        <h2>Home</h2>
        <p>With a focus on Computer Science at Boston University, my core interests lie in the intersection of technology and creativity. I am fascinated by the aesthetic appeal of computers in today’s world. Thus, I have explored the area and become a skilled computer builder, one that takes that appeal into consideration. I have honed my skills in computer graphics, utilizing both Autodesk’s Maya and Blender to create intricate graphics for video games. The ideas of which come from hundreds of hours of video game experience. Finally, I use video game engines such as Unreal Engine and Godot to create my own projects. I hope to apply my own skills and ideas to the gaming industry!</p>
      </main>
   <footer>
        <p>All rights reserved.</p>
      </footer>
    </>
  )
}
export default App
