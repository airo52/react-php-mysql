import React,{ Component } from 'react';
import "./css/style.css";
import "./css/bootstrap.css";
import axios from 'axios';
class Login extends Component{
   
    state={
        username:"",
        password:"",
        username_error:"",
        password_error:""
    }
    user=e=>{
        this.setState({username:e.target.value});
    }
    pass=e=>{
        this.setState({password:e.target.value});
    }
    Submit=e=>{
        
        e.preventDefault();
        let formData = new FormData();
        formData.append("username",this.state.username);
        formData.append("password",this.state.password);
        
        var user = this.state.username;
        var password=this.state.password;
        if(user===''){
            {this.setState({username_error:"provide username"})}
            {this.setState({password_error:""})}

        }else{
            if(password===''){
                {this.setState({password_error:"provide password"})}
                {this.setState({username_error:""})}
            }
            else{
                {this.setState({password_error:""})}
                {this.setState({username_error:""})}
                const url ="http://localhost:80/react-backend/new/login.php/";
                axios.post(url,formData)
                .then((response)=>{
                    const data=response.data;
                    if(data==='password')
                    {
                        {this.setState({password_error:"wrong password"})}
                    }else{
                     {this.setState({password_error:" "})}
                    }
                    if(data==='username')
                    {
                        {this.setState({username_error:"username does not exist!!"})}
                    }else{
                     {this.setState({username_error:" "})}
                    }
                    if(data==='success'){
                        alert("login succesfull");                                                               
                    }
                })
            }
        }

      
    }
render(){
  return(
      
        <div className="contain">
     
           
            <br></br>
            <div className="login">
                <center><div className="log-logo">Login</div></center>
                <label className="label">Username</label>
                
                <input type="text" onChange={this.user} className="form-control" id="user" placeholder="Enter username"></input>
                      <center><div className="error">{this.state.username_error}</div></center>
                <br/>
                 <label className="label">Password</label>
                 
                 <input type="text" onChange={this.pass} className="form-control" id="pass" placeholder="Enter password"></input>
                 <center><div className="error">{this.state.password_error}</div></center>
                 <br/>
                 <button id="bt" onClick={this.Submit} className="btn btn-primary primary">Login</button>
                   
                
            </div>
        </div>
        
        )
    }
}
export default Login;