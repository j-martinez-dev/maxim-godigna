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
          MIKOPÜY c’ est la première « panadería vénézuélienne » ( boulangerie et
          restaurant streed food ) de Paris dans laquelle on retrouve toutes les
          spécialités du petit déjeuner, desserts ainsi qu’ un nouveau concept
          d’ empanadas « operadas »  (opérées) qu’ on peut déguster tout au
          long de la journée avec les boissons typiques, cocktails et bières
          vénézuéliennes.
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
