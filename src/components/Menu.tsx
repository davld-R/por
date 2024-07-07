import '../css/menu/cabezera.css';

import CodeIcon from './Icons/CodeIcon';

function Menu() {
  return (
    <header className="cabezera">
      <div>
        <CodeIcon width="32px" height="32px"></CodeIcon>
        <p>Juan Rojas</p>
      </div>
      <nav className="menu">
        <ul className="menu__lista">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Experiencia
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Proyectos
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Skills
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Hobbies
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Formación académica
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Sobre mi
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
