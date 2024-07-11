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
    <section className="flex justify-between gap-7 mb-10 max-md:flex-col">
      <div className="w-full h-64 max-md:h-auto">
        <img
          src={imagen}
          alt="Imagen proyecto"
          className="object-cover rounded-2xl object-top transition hover:scale-95 hover:duration-300 size-full border-b-4 border-r-4 border-black max-sm:size-auto"
        />
      </div>
      <div className=" w-full">
        <p className="text-2xl flex font-bold mb-2">{nombre}</p>
        <div>
          {children}
          <p className="my-2 dark:text-gray-400">{contenido}</p>
        </div>
        <div className="flex gap-4 max-sm:flex-wrap">
          <a
            href={code}
            className="flex border border-slate-50 rounded-xl py-2 px-3 items-center gap-2 dark:bg-gray-950 bg-gray-800 text-slate-50"
          >
            <span>
              <GithubIcon width="20px" height="20px" />
            </span>
            Code
          </a>
          <a
            href={link}
            className="flex border border-slate-50 rounded-xl py-2 px-3 items-center gap-2 dark:bg-gray-950 bg-gray-800 text-slate-50"
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
