import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
//BrowserRouter -> intereacts with the history library and decides 
//what components to show in the screen

//Route -> (work horse)A component that we can render inside of any other react component
// provide configuration if the url is like this show these component else show those
//BrowserRouter ->
import { BrowserRouter , Route  }from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


// class Hello extends React.Component{
//   render(){
// return(<div>Hello!</div>);
//   };
// }

// class GoodBye extends React.Component{
//   render(){
// return(<div>Good Bye!</div>);
//   };
// }

//Route must have  a path("string url") and components
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
 
    <BrowserRouter>
      <div>
      <Route path="/" component={ PostsIndex } />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));


      // <div className="page-header">
      // <h1>React <small>Router</small></h1>
      // </div>
      //   <Route path="/" component={Hello}/>
      //   <Route path="/goodbye" component={GoodBye}/>