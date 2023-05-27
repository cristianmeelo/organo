import "./index.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="../../images/fb.png" alt="facebook logo" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="../../images/tw.png" alt="twitter logo" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="../../images/ig.png" alt="instagram logo" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="../../images/logo.png" alt="organo logo" />
      </section>
      <section>
        <p>Desenvolvido por Alura / Cristian Melo</p>
      </section>
    </footer>
  );
};
