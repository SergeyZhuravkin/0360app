import { NavLink, Route, Routes } from "react-router-dom";
import './App.css';

const Profile = () => {
  return <h1>Это страница с профилем</h1>;
};
const Messages = () => {
  return <h1>Это страница с сообщениями</h1>;
  };
function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="nav flex-column nav-pills">           
            <NavLink className="nav-link" to='profile'>Профиль</NavLink>
            <NavLink className="nav-link" to='messages'>Сообщения</NavLink>
            <NavLink className="nav-link" to='settings'>Настройки</NavLink>
            <NavLink className="nav-link" to='friends'>Мои друзья</NavLink>
          </div>
        </div>
        <div className="col-md-9">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<Messages />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
