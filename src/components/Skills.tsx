import { ReactNode } from 'react';

type props = {
  nombre: string;
  children: ReactNode;
};

function Skills({ nombre, children }: props) {
  return (
    <section className="skills__main">
      <h1>{nombre}</h1>
      {children}
    </section>
  );
}

export default Skills;
