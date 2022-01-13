import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding : 16 // 단위를 생략하면 px로 지정 

  };

  return <div style={style}>{name}</div>
}

export default App;
