import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from '../actions';

class PostsShow extends Component{

    componentDidMount(){
        this.props.match.params.id;
        this.props.fetchPost();
    }

    render(){
    return (
    <div>
        Posts show!
    </div>
        );

    };
}

function mapStateToProps({posts}){
return {  };
}

export default connect(null,{ fetchPost })(PostsShow);