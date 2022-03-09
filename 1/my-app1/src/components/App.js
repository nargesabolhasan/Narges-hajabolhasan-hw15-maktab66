import Todo from "./Todo";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';
function App() {
  return (
    <div className={style.appBack}

    
    >
      <header className="App-header">
        <Todo/>
      </header>
    </div>
  );
}

export default App;
