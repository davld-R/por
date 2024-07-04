interface props {
  id: number;
  nombre: string;
  Imagen: React.FC;
}

function Hobbies({ nombre, Imagen }: props) {
  return (
    <section style={{ marginTop: '1rem' }}>
      <Imagen />
      <h1>{nombre}</h1>
    </section>
  );
}

export default Hobbies;
