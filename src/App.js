import style from  './app.module.scss';
import "./utils/_variables.scss";
import Header from './components/header/Header';

function App() {
  return (
    <div className={style.App}>
      <Header/>
    </div>
  );
}

export default App;
