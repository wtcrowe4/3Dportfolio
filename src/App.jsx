import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <div className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
// <div className='bg-slate-300/20'>
    // <Router>
    // <Navbar />
    // <div>
    //   <h1 class='text-5xl font-bold underline p-5'>Thomas Crowe</h1>
    //   <h2 class='text-2xl p-5'>Full Stack Developer</h2>

    //   <div class='flex flex-row justify-center items-center'>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    // </div> 
    // </Router>
    // </div>