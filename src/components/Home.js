import React from "react";



const Home = () => {
  return (
    <section className="hero"
   style={{ backgroundImage: `url(/Martin_Luther_King.jpg)` }}
    >
      <div className="overlay">
        <div className="quote">
          <p>
            “The function of education is to teach one to think intensively and
            to think critically. But education which stops with efficiency may
            prove the greatest menace to society. Intelligence plus character —
            that is the goal of true education.”
          </p>
          <p className="author">
            <em>
              The Purpose of Education <br />
              Martin Luther King, Jr. <br />
              Morehouse College, GA, 1947
            </em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
