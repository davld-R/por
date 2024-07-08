import { ReactNode } from 'react';

interface props {
  nombre: string;
  children: ReactNode;
}

function Hobbies({ nombre, children }: props) {
  return (
    <section className="pt-4 flex flex-col items-center justify-start border border-slate-300 w-28 h-32 rounded-xl dark:bg-gray-800 dark:border-gray-600">
      <p className="pb-2 dark:text-gray-300 text-gray-500 font-mono text-sm">
        {nombre}
      </p>
      {children}
    </section>
  );
}

export default Hobbies;
