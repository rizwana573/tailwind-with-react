import {Component} from "react";
import withCounter from "./withCounter.jsx";

class HoverCounter extends Component { 
 render(){
    const name = this.props.name;
   return (
    <>
    <h2 className="text-bold text-xl my-4">{name}</h2>
    <p className="text-bold">{`Count is: ${this.props.count}`}</p>
      <button
        className="rounded px-4 py-2 m-2 bg-slate-300 cursor-pointer hover:bg-slate-400"
        onMouseOver={this.props.increaseCount}
      >
        Increase Count
      </button>

      <button
        className="rounded px-4 py-2 m-2 bg-slate-300 cursor-pointer hover:bg-slate-400"
        onMouseOver={this.props.decreaseCount}
      >
        Decrease Count
      </button>
    </>
   )
 }

}

export default withCounter(HoverCounter);