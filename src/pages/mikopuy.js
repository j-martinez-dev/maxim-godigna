import React from "react"
import { Col, Row, Carousel } from "react-bootstrap"


import Layout from "../components/layout"
import SEO from "../components/seo"

const Mikopuy = () => (
  <Layout>
    <SEO title="Restaurant Micopüy" />
    <Row className="p-3">
      <Col className="text-center" sm={6}>
        <img
          style={{ width: 500, height: 500 }}
          className="center"
          src="https://via.placeholder.com/500"
        ></img>
      </Col>
      <Col sm={6}>
        <h1 className="text-center">Mikopüy</h1>
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
            href="https://www.google.com/maps?q=3+Rue+des+Plantes"
          >
            Addresse: 3 rue des plantes, 75014 Paris 
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="tel:+33982216424"
          >
            Téléphone: +33 9 82 21 64 24
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="mailto:mikopuy@hotmail.com"
          >
            Email : mikopuy@hotmail.com
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

export default Mikopuy
