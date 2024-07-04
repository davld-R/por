function Footer() {
  const date = new Date();

  return (
    <section style={{ marginTop: '1rem' }}>
      <p>Desarrollado por Juan David Rojas Rosero</p>
      <p>{date.getFullYear()}</p>
    </section>
  );
}

export default Footer;
