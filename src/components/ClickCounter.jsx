import {Component} from "react";
import withCounter from "./withCounter.jsx";

class ClickCounter extends Component {
  
  
 /* componentDidMount(){
    console.log("component did mount");
    // this.id= setInterval(()=> {
    //   console.log(this.x++);
    // }, 1000);
  }
  componentDidUpdate(){
     console.log("component did update");
  }
  componentWillUnmount(){
     console.log("component will unmount");
    //  clearInterval(this.id);
  }*/
 render(){
    const name = this.props.name;
   return (
    <>
    <h2 className="text-bold text-xl my-4">{name}</h2>
    <p className="text-bold">{`Count is: ${this.props.count}`}</p>
      <button
        className="rounded px-4 py-2 m-2 bg-slate-300 cursor-pointer hover:bg-slate-400"
        onClick={this.props.increaseCount}
      >
        Increase Count
      </button>

      <button
        className="rounded px-4 py-2 m-2 bg-slate-300 cursor-pointer hover:bg-slate-400"
        onClick={this.props.decreaseCount}
      >
        Decrease Count
      </button>
    </>
   )
 }

}

export default withCounter(ClickCounter);