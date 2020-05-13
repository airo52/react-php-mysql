import React,{ Component } from 'react';
import "./css/style.css";
import "./css/bootstrap.css";
import axios from "axios";
class Register extends Component{

    state={
        username:"",
        password:"",
        username_error:"",
        password_error:""
    }
    user1=e=>{
        this.setState({username:e.target.value});
    }
    pass1=e=>{
        this.setState({password:e.target.value});
    }
    register=e=>{
        e.preventDefault();
        var user =this.state.username;
        var pass=this.state.password;
        if(user.length<5){
            {this.setState({username_error:"username cannot bi less than 5 letters"})}
            {this.setState({password_error:" "})}
        }
        else
        {
         if(pass.length<6){
            {this.setState({password_error:"password cannot bi less than 6 letters"})}
            {this.setState({username_error:""})}
         }
         else
         {
         let formData = new FormData();
         const url="http://localhost:80/react-backend/new/register.php/";
         formData.append("username",this.state.username);
         formData.append("password",this.state.password);
         axios.post(url,formData)
         .then((response)=>{
             const data=response.data;
            if(data==='success'){
               alert("you have succesfully registered");
            }
            if(data==='username')
            {
               alert("you already have an account");
            }
            
         })
         .catch(err=>console.log(err));
         }
        }
    }
   
render(){
  return(
      
        <div className="contain">
     
           
            <br></br>
            <div className="login">
                <center><div className="log-logo">Register</div></center>
                <label className="label">Username</label>
                
                <input type="text" onChange={this.user1} className="form-control" id="user" placeholder="Enter username"></input>
                     <center><div className="error">{this.state.username_error}</div></center>
                <br/>
                 <label className="label">Password</label>
                 
                 <input type="text" onChange={this.pass1} className="form-control" id="pass" placeholder="Enter password"></input>
                 <center><div className="error">{this.state.password_error}</div></center>
                 <br/>
                 <button id="bt" onClick={this.register} className="btn btn-primary primary">Register</button>
                   
                
            </div>
        </div>
        
        )
    }
}
export default Register;