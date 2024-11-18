import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li><Link to="/see-messages">Ver mensajes</Link></li>
        <li><Link to="/send-messages">Enviar mensaje</Link></li>
      </ul>
    </div>
  );
};

export default Home;