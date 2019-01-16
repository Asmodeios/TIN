import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Form from './FormComponent'
import Views from './Views'
import Text from './TextComponent'
import Label from './LabelComponent'



class App extends Component {
  
  render() {
    return (
      <div>
       <Route exact path='/' component={Views} />
       <Route path='/text' render={() => (
         <Text text="This is text view" />
       )} />
       <Route path='/label' render={() => (
         <Label labelName="LabelName" value="This is label view" />
       )} />
       <Route path='/form' component={Form} />
      </div>
    );
  }
}

export default App;
