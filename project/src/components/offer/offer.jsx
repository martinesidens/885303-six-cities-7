import React from 'react';
import Logo from '../logo/logo';
import PropTypes from 'prop-types';

function Offer(props) {

  // console.log(props);
  return (
    <html lang="en">
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>6 cities: property</title>
        <link rel="stylesheet" href="css/main.css" />
        <div style={{ display: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="icon-arrow-select" viewBox="0 0 7 4">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
              />
            </symbol>
            <symbol id="icon-bookmark" viewBox="0 0 17 18">
              <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
            </symbol>
            <symbol id="icon-star" viewBox="0 0 13 12">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
              />
            </symbol>
          </svg>
        </div>
        <div className="page">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <Logo />
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a
                        className="header__nav-link header__nav-link--profile"
                        href="#"
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__login">Sign in</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {Array.from(new Array(6), (x, i) => i + 1).map((id) => (
                    <div key={id} className="property__image-wrapper">
                      <img
                        className="property__image"
                        src={props.dataOffer.image[id]}
                        alt="Photo studio"
                      />
                    </div>
                  ))}
                </div>
                <div className="property__container container">
                  <div className="property__wrapper">
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                    <div className="property__name-wrapper">
                      <h1 className="property__name">
                        Beautiful &amp; luxurious studio at great location
                      </h1>
                      <button
                        className="property__bookmark-button button"
                        type="button"
                      >
                        <svg
                          className="property__bookmark-icon"
                          width={31}
                          height={33}
                        >
                          <use xlinkHref="#icon-bookmark" />
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="property__rating rating">
                      <div className="property__stars rating__stars">
                        <span style={{ width: '80%' }} />
                        <span className="visually-hidden">Rating</span>
                      </div>
                      <span className="property__rating-value rating__value">
                        4.8
                      </span>
                    </div>
                    <ul className="property__features">
                      <li className="property__feature property__feature--entire">
                        {props.dataOffer.property.type}
                      </li>
                      <li className="property__feature property__feature--bedrooms">
                        {props.dataOffer.property.rooms}
                      </li>
                      <li className="property__feature property__feature--adults">
                        {props.dataOffer.property.adults}
                      </li>
                    </ul>
                    <div className="property__price">
                      <b className="property__price-value">
                        €{props.dataOffer.price}
                      </b>
                      <span className="property__price-text">
                        &nbsp;{props.dataOffer.time}
                      </span>
                    </div>
                    <div className="property__inside">
                      <h2 className="property__inside-title">What is inside</h2>
                      <ul className="property__inside-list">
                        {Array.from(new Array(9), (x, i) => i + 1).map((id) => (
                          <li key={id} className="property__inside-item">
                            {props.dataOffer.advantages[id]}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="property__host">
                      <h2 className="property__host-title">Meet the host</h2>
                      <div className="property__host-user user">
                        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                          <img
                            className="property__avatar user__avatar"
                            src="img/avatar-angelina.jpg"
                            width={74}
                            height={74}
                            alt="Host avatar"
                          />
                        </div>
                        <span className="property__user-name">Angelina</span>
                        <span className="property__user-status">Pro</span>
                      </div>
                      <div className="property__description">
                        <p className="property__text">
                          A quiet cozy and picturesque that hides behind a a
                          river by the unique lightness of Amsterdam. The
                          building is green and from 18th century.
                        </p>
                        <p className="property__text">
                          An independent House, strategically located between
                          Rembrand Square and National Opera, but where the
                          bustle of the city comes to rest in this alley flowery
                          and colorful.
                        </p>
                      </div>
                    </div>
                    <section className="property__reviews reviews">
                      <h2 className="reviews__title">
                        Reviews · <span className="reviews__amount">1</span>
                      </h2>
                      <ul className="reviews__list">
                        {Array.from(new Array(6), (x, i) => i + 1).map((id) => (
                          <li key={id} className="reviews__item">
                            <div className="reviews__user user">
                              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                                <img
                                  className="reviews__avatar user__avatar"
                                  src={props.reviewsData.image}
                                  width={54}
                                  height={54}
                                  alt="Reviews avatar"
                                />
                              </div>
                              <span className="reviews__user-name">{props.reviewsData.userName}</span>
                            </div>
                            <div className="reviews__info">
                              <div className="reviews__rating rating">
                                <div className="reviews__stars rating__stars">
                                  <span style={{ width: props.reviewsData.stars }} />
                                  <span className="visually-hidden">
                                    Rating
                                  </span>
                                </div>
                              </div>
                              <p className="reviews__text">
                                {props.reviewsData.text}
                              </p>
                              <time
                                className="reviews__time"
                                dateTime="2019-04-24"
                              >
                                {props.reviewsData.date}
                              </time>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
              <section className="property__map map" />
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">
                  Other places in the neighbourhood
                </h2>
                <div className="near-places__list places__list">
                  <article className="near-places__card place-card">
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img
                          className="place-card__image"
                          src="img/room.jpg"
                          width={260}
                          height={200}
                          alt="Place image"
                        />
                      </a>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">€80</b>
                          <span className="place-card__price-text">
                            /&nbsp;night
                          </span>
                        </div>
                        <button
                          className="place-card__bookmark-button place-card__bookmark-button--active button"
                          type="button"
                        >
                          <svg
                            className="place-card__bookmark-icon"
                            width={18}
                            height={19}
                          >
                            <use xlinkHref="#icon-bookmark" />
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '80%' }} />
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">Wood and stone place</a>
                      </h2>
                      <p className="place-card__type">Private room</p>
                    </div>
                  </article>
                  <article className="near-places__card place-card">
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img
                          className="place-card__image"
                          src="img/apartment-02.jpg"
                          width={260}
                          height={200}
                          alt="Place image"
                        />
                      </a>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">€132</b>
                          <span className="place-card__price-text">
                            /&nbsp;night
                          </span>
                        </div>
                        <button
                          className="place-card__bookmark-button button"
                          type="button"
                        >
                          <svg
                            className="place-card__bookmark-icon"
                            width={18}
                            height={19}
                          >
                            <use xlinkHref="#icon-bookmark" />
                          </svg>
                          <span className="visually-hidden">To bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '80%' }} />
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">Canal View Prinsengracht</a>
                      </h2>
                      <p className="place-card__type">Apartment</p>
                    </div>
                  </article>
                  <article className="near-places__card place-card">
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img
                          className="place-card__image"
                          src="img/apartment-03.jpg"
                          width={260}
                          height={200}
                          alt="Place image"
                        />
                      </a>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">€180</b>
                          <span className="place-card__price-text">
                            /&nbsp;night
                          </span>
                        </div>
                        <button
                          className="place-card__bookmark-button button"
                          type="button"
                        >
                          <svg
                            className="place-card__bookmark-icon"
                            width={18}
                            height={19}
                          >
                            <use xlinkHref="#icon-bookmark" />
                          </svg>
                          <span className="visually-hidden">To bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '100%' }} />
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">Nice, cozy, warm big bed apartment</a>
                      </h2>
                      <p className="place-card__type">Apartment</p>
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </html>
  );
}

Offer.propTypes = {
  dataOffer: PropTypes.shape({
    image: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    property: PropTypes.shape({
      type: PropTypes.string.isRequired,
      rooms: PropTypes.string.isRequired,
      adults: PropTypes.string.isRequired,
    }),
    price: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    advantages: PropTypes.array.isRequired,
  }),
  reviewsData: PropTypes.shape({
    number: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
  }),
};

export default Offer;
