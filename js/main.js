require('../style/index.css');
var text = require('./commonjs-module');   // 混用CommonJS  模块 和 ES6 模块
console.log(text+6);
import React from 'react';
import ReactDOM from 'react-dom';
import Detail from './es6-module';

class App extends React.Component{
    constructor(props){
        super(props);
        // 初始化 state
        this.state = {
            age : 5
        }
    }
    render(){
        return (
          <div className="container">
              <h1>Hello React!</h1>
              {/* age 要求是数字，不能有引号 */}
              <Detail name="hong" age={this.state.age}></Detail>
          </div>
        )
    }
}

const app = document.createElement('div');
document.body.appendChild(app);
// 将组建挂载到DOM上
ReactDOM.render(<App/>,app);