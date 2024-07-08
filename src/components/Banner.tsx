function Banner() {
  return (
    <section className="pb-36">
      <div className="flex gap-4 mb-4 items-center">
        <img
          src="https://github.com/davld-R.png"
          alt="Imagen Juan Rojas"
          className="size-16 rounded-full"
        />

        <button className="dark:bg-gray-800 dark:text-white dark:border-teal-300 border h-8 px-3 text-sm rounded-xl border-slate-300 hover:scale-105 hover:duration-300 hover:-translate-y-0.5">
          Disponible para trabajar
        </button>
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-6">Hola, mi nombre es Juan</h1>
        <p className="text-xl max-w-xl">
          Ingeniero de sistemas y desarrollador web de
          <span className="text-yellow-400"> Colombia</span>. Especializado en
          el desarrollo de aplicaciones web únicas
        </p>

        <nav className="mt-8">
          <ul className="flex gap-4 ">
            <li className="dark:border-gray-600 dark:bg-gray-800 border border-slate-300 rounded-xl h-8 w-36 py-1 text-center ">
              <a href="#">Github</a>
            </li>
            <li className="dark:border-gray-600 dark:bg-gray-800 border border-slate-300 rounded-xl h-8 w-36 py-1 text-center">
              <a href="#">Linkedin</a>
            </li>
            <li className="dark:border-gray-600 dark:bg-gray-800 border border-slate-300 rounded-xl h-8 w-36 py-1 text-center">
              <a href="#">Twitter</a>
            </li>
            <li className="dark:border-gray-600 dark:bg-gray-800 border border-slate-300 rounded-xl h-8 w-36 py-1 text-center">
              <a href="#">Curriculo</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Banner;
