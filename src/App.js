import style from  './app.module.scss';
import "./utils/_variables.scss";
import "./utils/_global.scss";
import Header from './components/header/Header';
import Main from './views/Main';

function App() {
  
  return (
    <div className={style.App}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
