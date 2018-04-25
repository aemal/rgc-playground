import React, { Component } from 'react';

class Todo extends Component {

    render() {
        const CustomComponent = this.props.customComponents 

        const todoList = this.props.todoListDataSource.map((item, index) => {
            return (
                <div key={item.id} style={{padding: '5px'}}>
                    <div>{item.todoItem}</div>
                    {
                        CustomComponent !== undefined 
                        ? <CustomComponent {...props} id={item.id} />
                        : null 
                    }
                </div>
            );
        });
    
        return (
            <div>
                {todoList}
            </div>
        );
    }

    
}

export default Todo;