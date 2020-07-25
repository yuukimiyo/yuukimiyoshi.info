import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, url, name } = social;
          return (
            <li key={url}>
              <a className={`icon ${icon}`} href={url}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        &copy; Yuuki Miyoshi<br />
        (Gatsby starter:<a href="https://github.com/anubhavsrivastava/gatsby-starter-fractal">gatsby-starter-fractal</a>, Original HTML/CSS Theme : Fractal by <a href="http://html5up.net">HTML5 UP</a>)
      </p>
    </footer>
  );
}
