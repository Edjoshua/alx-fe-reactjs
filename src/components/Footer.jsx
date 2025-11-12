function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} ALX React App. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: '2rem',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#282c34',
    color: 'white',
  },
};

export default Footer;
