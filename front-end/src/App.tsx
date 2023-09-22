import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Routes>
          <Route
          path='/'
          element={
            <Main></Main>
          }
          ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
