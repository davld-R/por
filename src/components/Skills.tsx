import '../css/skills/skills__main.css';
import html from '../assets/html.svg';
import { FaHtml5 } from 'react-icons/fa';

type props = {
  key: number;
  nombre: string;
};

function Skills({ nombre }: props) {
  return (
    <section className="skills__main">
      <img src={''} alt={`Img ${nombre}`} />
      <h1>{nombre}</h1>
    </section>
  );
}

export default Skills;
