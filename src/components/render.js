import React,{ Component } from 'react';
import "./login";
import Login from './login';
import Register from './register';
class Real extends Component{
    state={
        Login:true,
        Register:false
    }
    RegisterHandle=e=>{
    this.setState({Login:false,Register:true,});
    }
    LoginHandle=e=>{
     this.setState({Register:false,Login:true});
    }
    render(){

        return(
           <div>
                   <center><div className="text">React,Php,Mysql</div></center>
                <div className="nav">
              <input onClick={this.LoginHandle} type="button" className="log-btn"value="Login"></input>
            <button onClick={this.RegisterHandle} className="reg-btn">Register</button>
               </div>
               {this.state.Login && <Login/>}
               {this.state.Register && <Register/>}
              </div> 
        )
    }
}
export default Real;    