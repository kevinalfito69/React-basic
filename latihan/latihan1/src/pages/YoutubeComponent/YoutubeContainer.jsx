import YoutubeComponent from "./YoutubeComponent";
import React from "react";

class YoutubeContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            youtube:[
                {   
                    id : 1,
                    time:'19.22',
                    title:'lorem ipsum dolor sit amet'
            },
            {
                id : 2,
                time:'50.22',
                title:'ayam betina'
            },
            {
                id:4,
                time:'27.22',
                title:'ayam Sate'
            }
            ,
            {
                id:5,
                time:'01.22',
                title:'ayam Bebek'
            }
            ,
            {
                id:6,
                time:'09.22',
                title:'ayam Bakso'
            }
            ,
            {
                id:3,
                time:'17.22',
                title:'ayam jantan'
            }


            ]
        
        }
    }
    render(){
        return(
            <div className="flex flex-wrap gap-2 justify-evenly">
                {
                    this.state.youtube.map((data)=>{
                    return <YoutubeComponent key={data.id} time={data.time} title={data.title}/>
                    })
                }
                
            
          
           
            </div>
        )
    }
     
}

export default YoutubeContainer