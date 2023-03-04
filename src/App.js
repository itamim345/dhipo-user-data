import './App.css';
import './common.css';
import UserForm from './components/UserForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersList from './components/UsersList';
import UserView from './components/UserView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UsersList/>}/>
          <Route path='/create-user' element={<UserForm/>}/>
          <Route path='/edit-user/:id' element={<UserForm/>}/>
          <Route path='/view-user/:id' element={<UserView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
