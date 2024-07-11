import CodeFICon from './Icons/CodeFIcon';

function Menu() {
  return (
    <header className="flex justify-between mt-2 mb-28 items-center">
      <div className="flex gap-2 items-center">
        <div className="cursor-pointer">
          <CodeFICon></CodeFICon>
        </div>
        <p className="">Juan Rojas</p>
      </div>
      <nav className="">
        <ul className="flex gap-5">
          <li
            className="dark:hover:text-yellow-300 hover:text-yellow-500 
          max-md:hidden "
          >
            <a className="" href="/#experiencia">
              Experiencia
            </a>
          </li>
          <li className="dark:hover:text-yellow-300 hover:text-yellow-500 max-md:hidden ">
            <a className="" href="/#proyectos">
              Proyectos
            </a>
          </li>
          <li className="dark:hover:text-yellow-300 hover:text-yellow-500 max-md:hidden ">
            <a className="" href="/#skills">
              Skills
            </a>
          </li>
          <li className="dark:hover:text-yellow-300 hover:text-yellow-500 max-md:hidden ">
            <a className="" href="/#hobbies">
              Hobbies
            </a>
          </li>
          <li className="dark:hover:text-yellow-300 hover:text-yellow-500 max-md:hidden ">
            <a className="" href="/#sobre-mi">
              Sobre mi
            </a>
          </li>
          <li className="dark:hover:text-yellow-300 hover:text-yellow-500">
            <a className="" href="mailto:juanrojas043@gmail.com">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
