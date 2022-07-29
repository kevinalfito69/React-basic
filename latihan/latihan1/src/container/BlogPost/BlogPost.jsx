import React, { Component, Fragment } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import Swal from "sweetalert2";
class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost:{
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": ""
    }
  };
  // getPOst API
  handleGetApi = (data) => {
    axios.get("http://localhost:4000/post").then((res) => {
      this.setState({
        post: res.data,
      });
    });
  };

  // Handler remove data
  handleRemove = (data) => {
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
    // handle form onChange
    formOnChange =(data)=>{
        let formBlogPostNew ={...this.state.formBlogPost}
        formBlogPostNew[data.target.name] = data.target.value
        let title = data.target.value
        this.setState({
            formBlogPost:formBlogPostNew
        },()=>{
            console.log(this.state.formBlogPost)
        })
    }
  componentDidMount() {
    this.handleGetApi();
  }

render() {
    return (
    <Fragment>
        {/* card form */}
        <div className="w-60 mx-auto">
        <form>
            <div className="flex-col flex">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" onChange={this.formOnChange}/>
                <label htmlFor="body">Body</label>
                <textarea name="body" id="body" cols="30" rows="10"></textarea>
                <button type="submit" className="text-white font-semibold mt-4 rounded-lg bg-lime-500">
                    Submit
                </button>
            </div>
        </form>
        </div>
        {this.state.post.map((post) => {
            return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
    </Fragment>
    );
  }
}
export default BlogPost;
