import style from  './app.module.scss';
import "./utils/_variables.scss";
import Header from './components/header/Header';
import Main from './views/Main';
import { useSelector } from 'react-redux';
import Modal from './components/modal/Modal';

function App() {
  const isModalActive = useSelector(state=> state.isModalActive)
  return (
    <div className={style.App}>
      <Header/>
      <Main/>
      { isModalActive ?  <Modal title="test" /> : null}
    </div>
  );
}

export default App;
