import React,{PropTypes} from 'react';

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age : props.age,
            name: props.name
        }
        // ES6 class 形式的Component ，自定义函数需要这样绑定
        this.clickHandle = this.clickHandle.bind(this);
    }
    render(){
        return (
            <div className="detial-component" onClick={this.clickHandle}>
                {this.state.name}
            </div>
        )
    }
    clickHandle(){
        this.setState({
            name: this.state.name + '0'
        })
    }
}
// 定义传入属性的限制
Detail.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};
export default Detail;