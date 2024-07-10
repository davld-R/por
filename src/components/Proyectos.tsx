import { ReactNode } from 'react';
import LinkIcon from './Icons/LinkIcon';
import GithubIcon from './Icons/GitHubIcon';

interface props {
  nombre: string;
  contenido: string;
  imagen: string;
  code: string;
  link: string;
  children: ReactNode;
}

function Proyectos({ nombre, contenido, imagen, children, code, link }: props) {
  return (
    <section className="flex justify-between gap-7 mb-10">
      <div className="w-full h-64">
        <img
          src={imagen}
          alt="Imagen proyecto"
          className="object-cover rounded-2xl object-top transition hover:scale-95 hover:duration-300 size-full"
        />
      </div>
      <div className=" w-full">
        <p className="text-2xl flex font-bold mb-2">{nombre}</p>
        <div>
          {children}
          <p className="my-2 dark:text-gray-400">{contenido}</p>
        </div>
        <div className="flex gap-4">
          <a
            href={code}
            className="flex border border-slate-50 rounded-xl py-2 px-3 items-center gap-2"
          >
            <span>
              <GithubIcon width="20px" height="20px" />
            </span>
            Code
          </a>
          <a
            href={link}
            className="flex border border-slate-50 rounded-xl py-2 px-3 items-center gap-2"
          >
            <span>
              <LinkIcon width="20px" height="20px" />
            </span>
            Preview
          </a>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
