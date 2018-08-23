import React from 'react';
import Form from './Form';



class Order extends React.Component {
    state = {
      fields: {}
    };
    
    onChange = updatedValue => {
      this.setState({ fields: {
        ...this.state.fields,
        ...updatedValue 
      }});
    };
    render(){
        return <Form onChange={fields => this.onChange(fields)}/>
    }
}

export default Order;