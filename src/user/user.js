import React, {Component} from 'react';

class user extends Component {
    state = {
        data: "Admin"
    };

    changeHandler = e => {
        this.setState({data: e.target.value});
    }

    buttonHandler = e => {
        fetch("http://127.0.0.1:5000/", {
            method : "GET",
            mode:'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin'
        })
        .then(dt => dt.json())
        .then(res => {
            this.setState({
                data : res['h']
            });
        });
    }

    render() { 
        return (
        <div>
            <input 
            className="user_ip"
             value={this.state.data} 
             onChange={this.changeHandler} />
            <p>{this.state.data}</p>
            <button onClick={this.buttonHandler}>Click Me</button>
        </div>
        );
    }
}

export default user;