import React, { Component } from "react";
import PinkButton from "../../componentes/PinkButton/Index";
import firebase from "../../Firebase";
import { Link } from 'react-router-dom';
import './Profile.css';  

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", 
            surname: "",
            placeOfBirth: "", 
            yearOfBirth: "",
        };
    }

    async componentDidMount() {
        await firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                var uid = user.uid;
                await firebase.firestore().collection("users").doc(uid).get()
                .then((retorno) => {
                    const data = retorno.data();
                    this.setState({
                        name: data.name,
                        surname: data.surname,
                        yearOfBirth: data.yearOfBirth,
                    });
                });
            }
        });
    }

    render() {
        return (
            <div className="Profile-container">
                <div className="Profile-card">
                    <h1>Suas Informações</h1>
                    <p><strong>Name:</strong> {this.state.name}</p>
                    <p><strong>Surname:</strong> {this.state.surname}</p>
                    <p><strong>Year of Birth:</strong> {this.state.yearOfBirth}</p>
                    <Link to="/"><PinkButton type="button">Voltar para Home</PinkButton></Link>
                    
                </div>
            </div>
        );
    }
}

export default Profile;
