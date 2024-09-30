import './LoginForm.css'
import Titles from '../Titles/Titles'
import PinkButton from '../PinkButton/Index'
import { Component } from 'react'
import { Link } from 'react-router-dom';
import firebase from 'firebase';

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "", 
            password: "",
            errorMessage: "" // Variável para armazenar a mensagem de erro
        }

        this.acessar = this.acessar.bind(this);
    }

    async acessar() {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            window.location.href = "./profile"
        })
        .catch((erro) => {
            // Define a mensagem de erro caso a autenticação falhe
            this.setState({ errorMessage: "User not registered or incorrect credentials." });
        })
    }

    render() {
        return (
            <section className='login-form'>
                <form>
                    <Titles h2="Welcome back!"/>
                    <p>Access your account right now.</p>

                    <label placeholder="E-mail"/>
                    <input 
                        placeholder='Digite seu email.'
                        type='text' 
                        name='email'
                        id='email'
                        onChange={(e) => this.setState({email: e.target.value})}
                    />

                    <label placeholder="Senha"/>
                    <input 
                        placeholder='Digite sua senha.'
                        type='password' 
                        name='password'
                        id='password'
                        onChange={(e) => this.setState({password:e.target.value})}
                    />

                    <PinkButton type="button" onClick={this.acessar}>Login</PinkButton>
                    <p></p>
                    {this.state.errorMessage && (
                    <p className="error-message">{this.state.errorMessage}</p>
                    )}
                </form>
            </section>
        )
    }
}

export default LoginForm;
