function NavBar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>ALX React App</h2>
      <ul style={styles.menu}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#282c34',
  },
  title: {
    color: 'white',
    margin: 0,
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default NavBar;
