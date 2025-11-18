import {Component} from "react";

class OldCounter extends Component {
  constructor(props){
    super(props);
    this.state ={
        count:0
    }
  }
 render(){
    const name = this.props.name;
    const count = this.state.count;
   return (
    <>
    <h2 className="text-bold text-xl my-4">{name}</h2>
    <p className="text-bold">{`Count is: ${count}`}</p>
      <button
        className="rounded px-4 py-2 m-2 bg-slate-300 cursor-pointer hover:bg-slate-400"
        onClick={() => this.setCount({count: {count} + 1})}
      >
        Increase Count
      </button>

      <button
        className="rounded px-4 py-2 m-2 bg-slate-300 cursor-pointer hover:bg-slate-400"
        onClick={() => this.setCount({count: {count} - 1})}
      >
        Decrease Count
      </button>
    </>
   )
 }

}

export default OldCounter;