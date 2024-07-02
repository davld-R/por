import '../css/skills/skills__main.css';
import html from '../assets/html.svg';

type props = {
  key: number;
  nombre: string;
};

function Skills({ nombre }: props) {
  return (
    <section className="skills__main">
      <img src={html} alt="Img icono" />
      <h1>{nombre}</h1>
    </section>
  );
}

export default Skills;
