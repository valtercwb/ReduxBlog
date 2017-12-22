import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from '../actions';

class PostsShow extends Component{

    componentDidMount(){
        //the params gets all the wildcards values from the url
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render(){
        //posts[this.props.match.params.id];  the post
    const { post } = this.props;

        if(!post){
            return <div>Loading...</div>;
        }

        return (
    <div>
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
    console.log({ post : posts[ownProps.match.params.id] });
return { post : posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps,{ fetchPost })(PostsShow);