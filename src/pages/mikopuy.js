import React from "react"
import { Col, Row, Carousel } from "react-bootstrap"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Mikopuy = ({ data }) => (
  <Layout>
    <SEO title="Mikopüy" />
    <Row className="p-3">
      <Col className="text-center" sm={6}>
        <div className="center">
          <Img fluid={data.logo.childImageSharp.fluid} alt="Mikopüy" />
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
            <Img fluid={data.image1.childImageSharp.fluid} alt="Mikopüy" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={data.image2.childImageSharp.fluid} alt="Mikopüy" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={data.image3.childImageSharp.fluid} alt="Mikopüy" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={data.image4.childImageSharp.fluid} alt="Mikopüy" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={data.image5.childImageSharp.fluid} alt="Mikopüy" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={data.image6.childImageSharp.fluid} alt="Mikopüy" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={data.image7.childImageSharp.fluid} alt="Mikopüy" />
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
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image1: file(relativePath: { eq: "mikopuy/1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image2: file(relativePath: { eq: "mikopuy/2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image3: file(relativePath: { eq: "mikopuy/3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image4: file(relativePath: { eq: "mikopuy/4.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image5: file(relativePath: { eq: "mikopuy/5.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image6: file(relativePath: { eq: "mikopuy/6.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image7: file(relativePath: { eq: "mikopuy/7.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
