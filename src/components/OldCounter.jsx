import {Component} from "react";

class OldCounter extends Component {
  constructor(props){
    super(props);
    this.state ={
        count:0
    }
    this.id=null;
    this.x=0;
  }
  
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
    const count = this.state.count;
   return (
    <>
    <h2 className="text-bold text-xl my-4">{name}</h2>
    <p className="text-bold">{`Count is: ${count}`}</p>
      <button
        className="rounded px-4 py-2 m-2 bg-slate-300 cursor-pointer hover:bg-slate-400"
        onClick={() => this.setState({count: count + 1})}
      >
        Increase Count
      </button>

      <button
        className="rounded px-4 py-2 m-2 bg-slate-300 cursor-pointer hover:bg-slate-400"
        onClick={function () {
            this.setState({count: count - 1})}.bind(this)
        }
      >
        Decrease Count
      </button>
    </>
   )
 }

}

export default OldCounter;