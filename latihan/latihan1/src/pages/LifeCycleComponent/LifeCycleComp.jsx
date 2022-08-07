import React, {Component} from "react";

class LifeCycleComp extends Component{
    constructor(props){
        super(props);
        this.state={
            count:1
        }
    }
    render(){
        return(
            <button className="bg-sky-500 font-bold text-white rounded-md hover:ring-2 ring-sky-200 py-2 px-4">Component Button</button>
        )
    }
}
export default LifeCycleComp