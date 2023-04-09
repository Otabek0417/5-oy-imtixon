import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          by
          <Link to="https://github.com/Otabek0417"> Otabek Sodiqov Github</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
