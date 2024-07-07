function Footer() {
  const date = new Date();

  return (
    <footer style={{ marginTop: '3rem' }}>
      <p>Desarrollado por Juan David Rojas Rosero</p>
      <p>{date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
