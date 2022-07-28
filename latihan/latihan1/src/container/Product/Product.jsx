import React,{Component, Fragment} from "react";

class Product extends Component{
    state ={
        order:0
    }
    handlePlus = () =>{
        this.setState({
            order: this.state.order + 1
        })
    }
    handleMinus = () =>{
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            })
        }

        
    
    }
    render(){
        return(
            <Fragment>
                <div className="bg-white md:max-w-md rounded-lg shadow-xl">
                    <div className="mx-auto overflow-hidden relative">
                        <img className="w-full h-28 object-cover" src="https://source.unsplash.com/400x600" alt="" />
                        
                            <p className="bg-slate-900 bottom-1 right-0 text-white absolute px-2 text-sm">Cart :{this.state.order}</p>
                    </div>
                    <h2>Makanan</h2>
                    <p>15.000</p>
                    <div className="px-4">
                        <button className="px-2 py-2 bg-sky-500 font-bold text-white" onClick={this.handlePlus}>+</button>
                        <input className="px-4 outline-none border-b-2 border-slate-800 text-center" type="text" value={this.state.order} />
                        <button className="px-2 py-2 bg-sky-500 font-bold text-white" onClick={this.handleMinus}>-</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Product