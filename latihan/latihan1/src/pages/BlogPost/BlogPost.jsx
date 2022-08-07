import React, { Component, Fragment } from "react";
import axios from "axios";
import Post from "./Post/Post";
import Swal from "sweetalert2";
class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost:{
    "userId": 1,
    "id": 8,
    "title": "",
    "body": ""
    },
    isUpdate:false
  };
  // getPOst API
  handleGetApi = (data) => {
    axios.get("http://localhost:4000/post?_sort=id&_order=desc").then((res) => {
      this.setState({
        post: res.data,
      });
    });
  };

  putDataToAPI=()=>{
      axios.put(`http://localhost:4000/post/${this.state.formBlogPost.id}`,this.state.formBlogPost).then((res) => {
      this.setState({
        isUpdate:false,
        formBlogPost:{
          "userId": 1,
          "id": 8,
          "title": "",
          "body": ""
          },
      })
      this.handleGetApi();
      })
  }
// Handler update data post
handleUpdate = (data)=>{
  console.log(data);
  this.setState({
    formBlogPost:data, 
    isUpdate:true
  })
}
   
  // Handler remove data
  handleRemove = (data) => {
    // delete data
    axios.delete(`http://localhost:4000/post/${data}`).then((res) => {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Your work has been remove",
        showConfirmButton: false,
        timer: 1500,
      });
      this.handleGetApi();
    });
  };
  handlePostData = ()=>{
    axios.post(`http://localhost:4000/post/`,this.state.formBlogPost).then((result)=>{
      this.handleGetApi();
      this.setState({
        formBlogPost:{
          "userId": 1,
          "id": 8,
          "title": "",
          "body": ""
          },
      })
    })
  }

    // handle form onChange
    formOnChange =(data)=>{
      let formBlogPostNew ={...this.state.formBlogPost}
      let timeStamp = new Date().getTime();
      if(!this.state.isUpdate){
        formBlogPostNew['id'] = timeStamp
      }
      formBlogPostNew[data.target.name] = data.target.value
        
        this.setState({
            formBlogPost:formBlogPostNew
        },()=>{
            console.log(this.state.formBlogPost)
        })
    }
  // handler submit
  handlerSubmit = () =>{
    if(this.state.isUpdate){
      this.putDataToAPI();
    }else{
      this.handlePostData();
    }
  }

  // Detail Handler
  handlerDetail=(id)=>{
    this.props.history.pushState(`/detail-post/${id}`);
  }

  componentDidMount() {
    this.handleGetApi();
  }
 
render() {
    return (
    <Fragment>
        {/* card form */}
        <div className="w-96 mx-auto">
        
            <div className="flex-col flex">
                <label htmlFor="title">Title</label>
                <input type="text" className="w-full" id="title" name="title" maxLength={40} onChange={this.formOnChange} value={this.state.formBlogPost.title}/>
                <label htmlFor="body">Body</label>
                <textarea name="body" id="body" onChange={this.formOnChange} cols="30" rows="10" value={this.state.formBlogPost.body}></textarea>
                <button onClick={this.handlerSubmit} className="text-white font-semibold mt-4 rounded-lg bg-lime-500 p-2">
                    Submit
                </button>
            </div>
       
        </div>
        {this.state.post.map((post) => {
            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handlerDetail}/>;
            
        })}
    </Fragment>
    );
  }
}
export default BlogPost;
