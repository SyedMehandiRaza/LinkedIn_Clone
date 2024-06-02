import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home.jsx';
import Video from './pages/video/Video.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App
