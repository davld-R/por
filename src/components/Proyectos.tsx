import HtmlIco from './Icons/Html5Icon';
import Proyecto1 from '../assets/p1.webp';

function Proyectos() {
  return (
    <section className="flex justify-between gap-7">
      <div className="">
        <img
          src={Proyecto1}
          alt="Imagen proyecto"
          className="object-cover object-top w-full transition hover:scale-95 hover:duration-300"
        />
      </div>
      <div>
        <p className="text-2xl flex font-bold mb-2">
          SVGL - A beautiful library with SVG logos
        </p>
        <div>
          <ul className="flex gap-4">
            <li className="flex border border-slate-50 rounded-2xl py-1 px-2 items-center gap-2">
              <span>
                <HtmlIco width="20px" height="20px" />
              </span>
              HTML5
            </li>
            <li className="flex border border-slate-50 rounded-2xl py-1 px-2 items-center gap-2">
              <span>
                <HtmlIco width="20px" height="20px" />
              </span>
              CSS
            </li>
          </ul>
          <p className="my-2 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            tenetur fugiat expedita quas est vitae a reprehenderit fuga eius?
            Autem, facilis odit? Odio dolore alias enim! Eaque dolorem aliquid
            sunt.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href=""
            className="flex border border-slate-50 rounded-xl py-2 px-3 items-center gap-2"
          >
            <span>
              <HtmlIco width="20px" height="20px" />
            </span>
            Code
          </a>
          <a
            href=""
            className="flex border border-slate-50 rounded-xl py-2 px-3 items-center gap-2"
          >
            <span>
              <HtmlIco width="20px" height="20px" />
            </span>
            Preview
          </a>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
