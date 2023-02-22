import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
