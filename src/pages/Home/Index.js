import './Home.css'
import LoginForm from '../../componentes/LoginForm/LoginForm';
import Registration from '../../componentes/Registration/Registration';


function Home() {
  return (
    <div className="Home">
      <section className="Home-section1">
        <LoginForm/>
      </section>
      <section className="Home-section2">
        <Registration/>
      </section>
    </div>
  );
}

export default Home;
