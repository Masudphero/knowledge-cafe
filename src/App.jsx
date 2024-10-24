
import './App.css'
import Hedear from './components/Header/Hedear'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  
  return (
    <>
      
      <Hedear></Hedear>
      
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    
    </>
  )
}

export default App
