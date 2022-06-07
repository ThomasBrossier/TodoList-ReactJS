import style from  './app.module.scss';
import "./utils/_variables.scss";
import Header from './components/header/Header';
import Main from './views/Main';
import { useSelector } from 'react-redux';

function App() {
  const currentList = useSelector(state=> state.currentList);
  if(currentList){
  
  }
  return (
    <div className={style.App}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
