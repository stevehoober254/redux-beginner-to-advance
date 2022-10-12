import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from './store';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(actions.add())
  }
  const less = () => {
    if(counter > 0){
      dispatch(actions.less())
    }
  }
  const addBy = (num) => {
    dispatch(actions.addBy(num))
  }
  return (
    <div className='App'>
    <h1>Counter</h1>
    <div className="counter">
    <button onClick={less}>Less - </button>
    <h2>{counter}</h2>
    <button onClick={add}>Add + </button>
    </div>
    <button onClick={() => addBy(10)}>Add by 10 </button>
  </div>
  );
}

export default App;
