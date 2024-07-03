import '../css/skills/skills__main.css';

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
