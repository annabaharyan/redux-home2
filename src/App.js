import './App.css';
import { Routes, Route } from 'react-router-dom'
import Connection from './MainParts/Connection';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ErrorPage from './Pages/ErrorPage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Connection />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>

    </Routes>
  )
}

export default App;
