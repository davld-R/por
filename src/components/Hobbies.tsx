import { ReactNode } from 'react';

interface props {
  nombre: string;
  children: ReactNode;
}

function Hobbies({ nombre, children }: props) {
  return (
    <section style={{ marginTop: '1rem' }}>
      <h1>{nombre}</h1>
      {children}
    </section>
  );
}

export default Hobbies;
