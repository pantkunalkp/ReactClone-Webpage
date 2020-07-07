import React from "react";
import "./Details.css";
import { Card } from "react-bootstrap";

const Details = () => {
  return (
    <div className="main-details" id = "about">
      <div className=" our-mission">
        <div>
          <h2>Our Mission</h2>
          <p>
            WordPress is software designed for everyone, emphasizing
            accessibility, performance, security, and ease of use. We believe
            great software should work with minimum set up, so you can focus on
            sharing your story, product, or services freely. The basic WordPress
            software is simple and predictable so you can easily get started. It
            also offers powerful features for growth and success.
            <br />
            <br />
            We believe in democratizing publishing and the freedoms that come
            with open source. Supporting this idea is a large community of
            people collaborating on and contributing to this project. The
            WordPress community is welcoming and inclusive. Our contributors’
            passion drives the success of WordPress which, in turn, helps you
            reach your goals.
          </p>
        </div>
      </div>
      <div className="our-story">
        <h2>Our Story</h2>
        <p>
          WordPress started in 2003 when Mike Little and Matt Mullenweg created
          a fork of b2/cafelog. The need for an elegant, well-architected
          personal publishing system was clear even then. Today, WordPress is
          built on PHP and MySQL, and licensed under the GPLv2. It is also the
          platform of choice for over 35% of all sites across the web.
          <br />
          <br /> The WordPress open source project has evolved in progressive
          ways over time — supported by skilled, enthusiastic developers,
          designers, scientists, bloggers, and more. WordPress provides the
          opportunity for anyone to create and share, from handcrafted personal
          anecdotes to world-changing movements. People with a limited tech
          experience can use it “out of the box”, and more tech-savvy folks can
          customize it in remarkable ways.
        </p>
      </div>
      <div className="bill-of-rights">
        <h2>Bill of Rights</h2>
        <p>
          WordPress is licensed under the General Public License (GPLv2 or
          later) which provides four core freedoms. Consider this the WordPress
          Bill of Rights:
        </p>
        <div className="flashcrd" id = "blog">
          <div className="flashcard1">
            <Card style={{ width: "15rem", height: "25rem" ,border:"none"  }}>
              <Card.Img variant="top" src={require("./img1.png")} />
              <Card.Body>
                <Card.Title>The 1st Freedom</Card.Title>
                <Card.Text>To run the program for any purpose.</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="flashcard2">
            <Card style={{ width: "15rem" , height: "25rem" ,border:"none"  }}>
              <Card.Img variant="top" src={require("./img2.png")} />
              <Card.Body>
                <Card.Title>The 2nd Freedom</Card.Title>
                <Card.Text>
                  To study how the program works and change it to make it do
                  what you wish.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="flashcard3">
            <Card style={{ width: "15rem", height: "25rem"  ,border:"none"  }}>
              <Card.Img variant="top" src={require("./img3.png")} />
              <Card.Body>
                <Card.Title>The 3rd Freedom</Card.Title>
                <Card.Text>To redistribute.</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="flashcard4">
            <Card style={{ width: "15rem", height: "25rem" ,border:"none" }}>
              <Card.Img variant="top" src={require("./img4.png")} />
              <Card.Body>
                <Card.Title>The 4th Freedom</Card.Title>
                <Card.Text>
                  To distribute copies of your modified versions to others.<br />
                </Card.Text>
              </Card.Body> 
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
