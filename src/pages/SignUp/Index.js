import React, { Component } from "react";
import PinkButton from "../../componentes/PinkButton/Index";
import './SignUp.css';
import firebase from "../../Firebase";
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "", 
            surname: "", 
            email: "", 
            yearOfBirth: "",
            password: "",
        };

        this.gravar = this.gravar.bind(this); 
    }

    async gravar(){
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(async (retorno) => {
            await firebase.firestore().collection("users").doc(retorno.user.uid).set({
                name: this.state.name,
                surname: this.state.surname,
                yearOfBirth: this.state.yearOfBirth
            });
        })
    }

    render() {
        return (
            <div className="signup-container">
                <form className="signup-form">
                    <h1>Get Started!</h1>
                    
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange={(e) => this.setState({name: e.target.value})} 
                    />

                    <label htmlFor="surname">Surname</label>
                    <input 
                        type="text" 
                        name="surname" 
                        id="surname" 
                        onChange={(e) => this.setState({surname: e.target.value})} 
                    />

                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        onChange={(e) => this.setState({email: e.target.value})} 
                    />

                    <label htmlFor="yearOfBirth">Year of Birth</label>
                    <input 
                        type="text" 
                        name="yearOfBirth" 
                        id="yearOfBirth" 
                        onChange={(e) => this.setState({yearOfBirth: e.target.value})} 
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={(e) => this.setState({password: e.target.value})} 
                    />
                    <div className="signup-buttons">
                        <Link to="/Profile"><PinkButton type="button" onClick={this.gravar}>Sign Up</PinkButton></Link>
                        <Link to="/"><PinkButton type="button">Back to Home</PinkButton></Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
