import './Registration.css'
import Titles from '../Titles/Titles'
import WhiteButton from '../WhiteButton/Index';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <section className='registration'>
            <form>
                <h2>Hello, curious!</h2>
                <p>Enter your personal details and start journey with us.</p>
                <Link to="SignUp"><WhiteButton children="Sign Up"/></Link>
            </form>
        </section>
    )
}

export default Registration;