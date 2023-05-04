import "../css/Footer.css";
function Footer() {
  return (
    <footer className="Footer">
      <div class="footer">
        <div class="footerSide">
          <h1>About</h1>
          <p>We Care About you</p>
          <p>
            Copyright © 2020 Rishav Singh — All Rights Reserved — Made with{" "}
            <i class="fa fa-coffee" aria-hidden="true"></i>{" "}
          </p>
        </div>
        <div class="footerside2">
          <h1>Links</h1>
          <ul>
            <li>
              <a href="#home">
                <p>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i> Home
                </p>
              </a>
            </li>
            <li>
              <a href="/services">
                <p>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i> Service
                </p>
              </a>
            </li>
            <li>
              <a href="#about">
                <p>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i> About
                </p>
              </a>
            </li>
            <li>
              <a href="/work">
                <p>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i> Work
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
