import './App.css';
import './common.css';
import UserForm from './components/UserForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UsersList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
