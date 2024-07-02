import '../css/menu/cabezera.css';

function Menu() {
  return (
    <header className="cabezera">
      <div>
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              fill="none"
              stroke="#000000"
              stroke-width="2"
              d="M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7"
            ></path>{' '}
          </g>
        </svg>
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
