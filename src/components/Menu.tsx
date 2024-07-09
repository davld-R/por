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
          <li className="dark:hover:text-yellow-300 hover:text-yellow-500">
            <a className="" href="/#experiencia">
              Experiencia
            </a>
          </li>
          <li className="dark:hover:text-yellow-300 hover:text-yellow-500">
            <a className="" href="#">
              Proyectos
            </a>
          </li>
          <li className="dark:hover:text-yellow-300 hover:text-yellow-500">
            <a className="" href="/#skills">
              Skills
            </a>
          </li>
          <li className="dark:hover:text-yellow-300 hover:text-yellow-500">
            <a className="" href="#">
              Hobbies
            </a>
          </li>
          <li className="dark:hover:text-yellow-300 hover:text-yellow-500">
            <a className="" href="#">
              Formación académica
            </a>
          </li>
          <li className="dark:hover:text-yellow-300 hover:text-yellow-500">
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
