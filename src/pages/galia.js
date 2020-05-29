import React from "react"
import { Col, Row, Carousel } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Galia = () => (
  <Layout>
    <SEO title="Restaurant Galia" />
    <Row className="p-3">
      <Col className="text-center" sm={6}>
        <img
          style={{ width: 500, height: 500 }}
          className="center"
          src="https://via.placeholder.com/500"
        ></img>
      </Col>
      <Col sm={6}>
        <h1 className="text-center">Restaurant Galia</h1>
        <p>
          Aux fourneaux de son restaurant depuis septembre 2015, le chef Godigna
          propose une carte bistronomique qui change toutes les semaines en
          fonction de son inspiration. Les assiettes vous invitent à une
          découverte culinaire caractérisée par une fusion mêlant tradition et
          exotisme, le tout préparé à base de produits frais et raffinés.
        </p>
        <ul className="list-group">
          <a
            className="list-group-item list-group-item-action"
            href="https://www.google.com/maps?q=123+Rue+Didot"
          >
            Addresse: 123 rue didot, 75014 Paris
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="tel:+33983380818"
          >
            Téléphone: +33 9 83 38 08 18
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="mailto:restaurantgalia@hotmail.com"
          >
            Email : restaurantgalia@hotmail.com
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="https://www.restaurantgalia.com/"
          >
            Web: www.restaurantgalia.com
          </a>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col sm={{ span: 6, offset: 3 }} className="p-3 text-center">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/400x400"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/400x400"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/400x400"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Layout>
)

export default Galia
