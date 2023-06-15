import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/allusers");
  };
  return (
    <>
      <div>
        <header className="hero-section">
          <div className="hero-text-container">
            <h1>
              Next generation
              <br />
              digital banking
            </h1>
            <p>
              Take your financial life online. Your easy bank account
              <br />
              will be a one-stop-shop for spending,saving,
              <br />
              budgeting,investing, and much more.
            </p>
            <button onClick={handleSubmit}>View All customers</button>
          </div>
          <div className="hero-img-container">
            <img src="image-mockups.png" alt="hero"/>
          </div>
        </header>
        <div className="why-container">
          <section className="why-us">
            <h1>Why choose Easybank?</h1>
            <p>
              We leverage open banking to turn your bank account into your
              financial hub.
              <br />
              Control your finances like never before.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
