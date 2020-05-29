import React from "react"
import { Col, Row, Carousel } from "react-bootstrap"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Mikopuy = ({ data }) => (
  <Layout>
    <SEO title="Restaurant Micopüy" />
    <Row className="p-3">
      <Col className="text-center" sm={6}>
        <div className="center">
          <Img fixed={data.logo.childImageSharp.fixed} alt="Mikopüy" />
        </div>
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
            <Img
              fixed={data.image1.childImageSharp.fixed}
              alt="Mikopüy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image2.childImageSharp.fixed}
              alt="Mikopüy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image3.childImageSharp.fixed}
              alt="Mikopüy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image4.childImageSharp.fixed}
              alt="Mikopüy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image5.childImageSharp.fixed}
              alt="Mikopüy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image6.childImageSharp.fixed}
              alt="Mikopüy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image7.childImageSharp.fixed}
              alt="Mikopüy"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Layout>
)

export default Mikopuy

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "mikopuy-1.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image1: file(relativePath: { eq: "mikopuy/1.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image2: file(relativePath: { eq: "mikopuy/2.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image3: file(relativePath: { eq: "mikopuy/3.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image4: file(relativePath: { eq: "mikopuy/4.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image5: file(relativePath: { eq: "mikopuy/5.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image6: file(relativePath: { eq: "mikopuy/6.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image7: file(relativePath: { eq: "mikopuy/7.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

  }
`
