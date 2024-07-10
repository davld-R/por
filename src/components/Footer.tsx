function Footer() {
  const date = new Date();

  return (
    <footer className="mt-16 mb-10 flex justify-between text-sm ">
      <p className=" text-gray-500 dark:text-gray-300">{`© ${date.getFullYear()} Desarrollado por Juan David Rojas Rosero`}</p>
      <div className="text-black font-medium dark:text-gray-300 ">
        <a href="#" className="mr-4 hover:underline">
          Sobre mí
        </a>
        <a href="mailto:juanrojas043@gmail.com" className="hover:underline">
          Contacto
        </a>
      </div>
    </footer>
  );
}

export default Footer;
