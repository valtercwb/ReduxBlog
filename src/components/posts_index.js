import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

//when are we going to call the action creator?

class PostsIndex extends Component{

    //automatically called when the component is rendered
    //componentWillMount -> call before the component be shown on the dom
    //*Just like an initializer
    componentDidMount(){

    this.props.fetchPosts();


    }

    renderPosts(){

      return _.map(this.props.posts, post => {
        return (
        <li className="list-group-item" key={post.id}>
        <Link to={`/posts/${post.id}`}>
        { post.title }
        </Link>
        </li>
         );
        });
    }

    render(){

        return (
        <div>
        <div className="text-xs-right">
        <Link className="btn btn-primary" to="/posts/new">
        Add a Post
        </Link>
        </div>
            <h3>Posts</h3>
            <ul className="list-group">
            { this.renderPosts() }
            </ul>  
        </div>
        );
    }

}

function mapStateToProps(state){
    return { posts: state.posts};
}

//abreviated sintax for mapStateToProps(dispatch)
//                 this means-> connect (this, and this) (to this)
export default connect(mapStateToProps , { fetchPosts})(PostsIndex);




