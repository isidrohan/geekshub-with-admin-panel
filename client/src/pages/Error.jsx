import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section className="error-page">
        <div className="content-item">
          <h1 className="heading-error">404</h1>
          <h4>Sorry! Page not found</h4>
          <p>
            Uh-oh! It looks like you've wandered off the beaten path. The page
            you're looking for may have been moved, deleted, or simply doesn't
            exist. But fear not, we're here to help you get back on track!
          </p>

          <div className="btns">
            <button className="btn">
              <NavLink to="/">return home</NavLink>
            </button>
            <button className="secondary-btn">
              <NavLink to="/contacts">report problem</NavLink>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
