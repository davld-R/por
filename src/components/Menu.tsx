import CodeIcon from './Icons/CodeIcon';

function Menu() {
  return (
    <header className="flex justify-between mt-2 mb-28 items-center">
      <div className="flex gap-2 items-center">
        <CodeIcon width="32px" height="32px" color="#FACC15"></CodeIcon>
        <p className="">Juan Rojas</p>
      </div>
      <nav className="">
        <ul className="flex gap-5">
          <li className="">
            <a className="" href="#">
              Experiencia
            </a>
          </li>
          <li className="">
            <a className="" href="#">
              Proyectos
            </a>
          </li>
          <li className="">
            <a className="" href="#">
              Skills
            </a>
          </li>
          <li className="">
            <a className="" href="#">
              Hobbies
            </a>
          </li>
          <li className="">
            <a className="" href="#">
              Formación académica
            </a>
          </li>
          <li className="">
            <a className="" href="#">
              Sobre mi
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
