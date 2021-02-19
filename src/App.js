
import './App.scss';
import 'antd/dist/antd.css';

import { Button } from 'antd';
import GoogleMap from './GoogleMap';


function App() {
  return (
    <div className="app">
      <div className="group-1">
        <div className="group-1-item">CathY</div>
        <div className="group-1-item">Catherine</div>
      </div>
      <div className="group-2">
        <div className="group-2-item">Catllia</div>
        <div className="group-2-item">Lyda</div>
      </div>
      <Button type="primary">SELECT</Button>
      <GoogleMap />
    </div>
  );
}

export default App;
