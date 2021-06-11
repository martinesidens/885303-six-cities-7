import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

function Error() {
  return (
    <html lang="en">
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>6 cities: favorites empty</title>
        <link rel="stylesheet" href="css/main.css" />
        <div style={{ display: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
        </div>
        <div className="page page--favorites-empty">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <Logo />
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Error 404</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">This page not found.</b>
                  <Link to="/">
                    <p className="favorites__status-description">Go to home page.</p>
                  </Link>
                </div>
              </section>
            </div>
          </main>
          <footer className="footer">
            <Link className="footer__logo-link" to="/">
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
            </Link>
          </footer>
        </div>
      </div>

    </html>
  );
}

export default Error;

