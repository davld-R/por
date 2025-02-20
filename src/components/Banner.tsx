function Banner() {
  return (
    <section className="pb-36">
      <div className="flex gap-4 mb-4 items-center">
        <img
          src="https://github.com/davld-R.png"
          alt="Imagen Juan Rojas"
          className="size-16 rounded-full"
        />
        <button
          onClick={() =>
            (window.location.href =
              'https://www.linkedin.com/in/juan-david-rojas-ing/')
          }
          className="
        dark:bg-gray-800 dark:text-white dark:border-teal-300 
        border h-8 max-sm:h-11 px-3 text-sm rounded-xl bg-green-100 border-gray-700 hover:scale-105 hover:duration-300 hover:-translate-y-0.5"
        >
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
            <a
              className="dark:border-gray-600 dark:bg-gray-800 border dark:hover:bg-gray-800
             hover:bg-gray-800 hover:text-slate-50 border-slate-300 rounded-xl h-8 w-36 py-1 text-center"
              href="https://github.com/davld-R"
            >
              Github
            </a>
            <a
              className="dark:border-gray-600 dark:bg-gray-800 border dark:hover:bg-gray-800
             hover:bg-gray-800 hover:text-slate-50 border-slate-300 rounded-xl h-8 w-36 py-1 text-center"
              href="https://www.linkedin.com/in/juan-david-rojas-ing/"
            >
              Linkedin
            </a>
            <a
              className="dark:border-gray-600 dark:bg-gray-800 border dark:hover:bg-gray-800
             hover:bg-gray-800 hover:text-slate-50 border-slate-300 rounded-xl h-8 w-36 py-1 text-center max-sm:hidden"
              href="https://x.com/dAVidr143"
            >
              Twitter
            </a>
            <a
              className="dark:border-gray-600 dark:bg-gray-800 border dark:hover:bg-gray-800
             hover:bg-gray-800 hover:text-slate-50 border-slate-300 rounded-xl h-8 w-36 py-1 text-center"
              href="https://drive.google.com/file/d/1j9QwB3NDO4zhMTXQjsKRqYj9IxkAo_Ub/view?usp=sharing"
            >
              Curriculo
            </a>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Banner;
