import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-accordion">
            <div className="pier-accordion__title">
                <h1 className="pier-accordion__heading">
                    <span className="pier-accordion__icon fas fa-atom"></span>Accordion
                </h1>
            </div>
            <div className="pier-accordion__content">
                <div className="pier-section">
                    <p className="pier-body-text -m-b-0 -m-b-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-accordion pier-accordion--dark pier-accordion--open">
            <div className="pier-accordion__title">
                <h1 className="pier-accordion__heading">
                    <span className="pier-accordion__icon fas fa-atom"></span>Accordion
                </h1>
            </div>
            <div className="pier-accordion__content">
                <div className="pier-section">
                    <p className="pier-body-text -m-b-0 -m-b-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </Fragment>
);

export const disabled = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-accordion pier-accordion--disabled">
            <div className="pier-accordion__title">
                <h1 className="pier-accordion__heading">
                    <span className="pier-accordion__icon fas fa-atom"></span>Accordion
                </h1>
            </div>
            <div className="pier-accordion__content">
                <div className="pier-section">
                    <p className="pier-body-text -m-b-0 -m-b-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </Fragment>
);

export const incard = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-accordion pier-accordion--card pier-accordion--open">
            <div className="pier-accordion__title">
                <h1 className="pier-accordion__heading">
                    <span className="pier-accordion__icon fas fa-atom"></span>Accordion
                </h1>
            </div>
            <div className="pier-accordion__content">
                <div className="pier-section">
                    <p className="pier-body-text -m-b-0 -m-b-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </Fragment>
);

export const open = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-accordion pier-accordion--open">
            <div className="pier-accordion__title">
                <h1 className="pier-accordion__heading">
                    <span className="pier-accordion__icon fas fa-atom"></span>Accordion
                </h1>
            </div>
            <div className="pier-accordion__content">
                <div className="pier-section">
                    <p className="pier-body-text -m-b-0 -m-b-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-accordion pier-accordion--xs pier-accordion--open">
            <div className="pier-accordion__title">
                <h1 className="pier-accordion__heading">
                    <span className="pier-accordion__icon fas fa-atom"></span>Accordion XS
                </h1>
            </div>
            <div className="pier-accordion__content">
                <div className="pier-section">
                    <p className="pier-body-text -m-b-0 -m-b-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
        <div className="pier-accordion pier-accordion--sm pier-accordion--open">
            <div className="pier-accordion__title">
                <h1 className="pier-accordion__heading">
                    <span className="pier-accordion__icon fas fa-atom"></span>Accordion SM
                </h1>
            </div>
            <div className="pier-accordion__content">
                <div className="pier-section">
                    <p className="pier-body-text -m-b-0 -m-b-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
        <div className="pier-accordion pier-accordion--md pier-accordion--open">
            <div className="pier-accordion__title">
                <h1 className="pier-accordion__heading">
                    <span className="pier-accordion__icon fas fa-atom"></span>Accordion MD
                </h1>
            </div>
            <div className="pier-accordion__content">
                <div className="pier-section">
                    <p className="pier-body-text -m-b-0 -m-b-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
        <div className="pier-accordion pier-accordion--lg pier-accordion--open">
            <div className="pier-accordion__title">
                <h1 className="pier-accordion__heading">
                    <span className="pier-accordion__icon fas fa-atom"></span>Accordion LG
                </h1>
            </div>
            <div className="pier-accordion__content">
                <div className="pier-section">
                    <p className="pier-body-text -m-b-0 -m-b-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </Fragment>
);
