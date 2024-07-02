import '../css/skills/skills__main.css';
import html from '../assets/html.svg';

type props = {
  key: number;
  nombre: string;
  img: any;
};

function Skills({ nombre, img }: props) {
  return (
    <section className="skills__main">
      <img src={html} alt="Img icono" />
      <h1>{nombre}</h1>
    </section>
  );
}

export default Skills;
