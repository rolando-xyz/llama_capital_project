import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Navigation from './components/Navigation';
import CreateUser from './views/CreateUser';
import UserLogin from './views/UserLogin';

const BadLink = () => {
  return( <div className="container text-center text-danger mt-4"><h1 className="display-6">the ROUTE you attempted to travel was blocked by an unknown celestial event</h1></div> )
}

function App() {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Main />} />
          <Route path='/user/new' element={<CreateUser />} />
          <Route path='/user/login' element={<UserLogin />} />
          <Route path='*' element={<BadLink />} />
        </Route>
      </Routes>
  )
}

export default App