import React,{Component, Fragment} from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
class BlogPost extends Component{
    state ={
        post:[]
    }
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then( json => this.setState({
        //             post:json
        //         })
        //         )
        axios.get('http://localhost:4000/post')
        .then((res)=>{
            this.setState({
                post:res.data
            })
        })
    }
    render(){
        return(
            <Fragment>
                {
                    this.state.post.map(post =>{
                        return <Post key={post.id} title={post.title} desc={post.body}/>
                    })
                }
                <p>Blog Blabla</p>
            
            </Fragment>
        )
    }
}
export default BlogPost