import '../css/skills/skills__main.css';

type props = {
  key: number;
  nombre: string;
  Icon: React.FC;
};

function Skills({ nombre, Icon }: props) {
  return (
    <section className="skills__main">
      <Icon />
      <h1>{nombre}</h1>
    </section>
  );
}

export default Skills;
