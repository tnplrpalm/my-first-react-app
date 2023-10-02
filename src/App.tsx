import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting name="Palm" greetingMsg="dddd" isLoggedIn={true} />
    </div>
  )
}

export default App
