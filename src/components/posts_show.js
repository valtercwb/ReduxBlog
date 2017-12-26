import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component{

    componentDidMount(){
        //the params gets all the wildcards(query params) values from the url
        if(!this.props.post){
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
        }
    }

    onDeleteClick(){
        const { id } = this.props.match.params;
        console.log(1);
        this.props.deletePost(id,() => {
            this.props.history.push('/');
        });
    }

    render(){
        //this.props === ownProps
        //posts[this.props.match.params.id];  the post
    const { post } = this.props;

        if(!post){
            return <div>Loading...</div>;
        }

        return (
    <div>
        <Link to="/" >Back to home</Link>
        <button onClick={this.onDeleteClick.bind(this)} 
        className="btn btn-danger pull-xr-right">Delete Post</button>
        <h3> { post.title } </h3>
        <h6>Categories: { post.categories }</h6>
        <p> { post.content } </p>
    </div>
        );

    };
}

//                      the list  onwProps is the
// props object that is headed or going to this component
function mapStateToProps({ posts }, ownProps){
    //console.log({ post : posts[ownProps.match.params.id] });
return { post : posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps,{ fetchPost, deletePost })(PostsShow);