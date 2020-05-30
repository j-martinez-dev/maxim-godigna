import React from "react"
import { Col, Row, Carousel } from "react-bootstrap"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Galia = ({ data }) => (
  <Layout>
    <SEO
      title="Restaurant Galia"
      description="Galia par Maxim Godigna (123 Rue Didot, Paris 14) est un restaurant bistronomique fusion franco-sudaméricaine. Spécialités foie gras exotique, ceviche, viande d’argentine, vins chiliens et argentins, viandes confites, cocktails."
    />
    <Row className="p-3">
      <Col className="text-center" sm={6}>
        <div className="center">
          <Img fluid={data.logo.childImageSharp.fluid} alt="Restaurant Galia" />
        </div>
      </Col>
      <Col sm={6}>
        <h1 className="text-center">Galia par Maxim Godigna</h1>
        <p>
          Aux fourneaux de son restaurant depuis septembre 2015, le chef Godigna
          propose une carte bistronomique qui change tous les mois en fonction
          de son inspiration. Au programme d' un voyage gustatif exceptionnel,
          vous pourrez déguster les incontournables de cette carte changeante
          dans laquelle les fruits et les légumes d'Amérique du sud sont
          toujours à l’ honneur.
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
        <p class="text-center p-2">
          <a
            href="https://www.restaurantgalia.com/reservation.html"
            class="btn btn-primary"
            role="button"
            aria-disabled="true"
          >
            Réservations
          </a>
        </p>
      </Col>
    </Row>
    <Row>
      <Col sm={{ span: 6, offset: 3 }} className="p-3 text-center">
        <Carousel>
          <Carousel.Item>
            <Img
              fluid={data.image1.childImageSharp.fluid}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={data.image3.childImageSharp.fluid}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={data.image4.childImageSharp.fluid}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={data.image5.childImageSharp.fluid}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={data.image6.childImageSharp.fluid}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={data.image7.childImageSharp.fluid}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={data.image8.childImageSharp.fluid}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={data.image9.childImageSharp.fluid}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={data.image10.childImageSharp.fluid}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Layout>
)

export default Galia

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "galia-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image1: file(relativePath: { eq: "galia/image1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image2: file(relativePath: { eq: "galia/image2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image3: file(relativePath: { eq: "galia/image3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image4: file(relativePath: { eq: "galia/image4.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image5: file(relativePath: { eq: "galia/image5.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image6: file(relativePath: { eq: "galia/image6.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image7: file(relativePath: { eq: "galia/image7.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image8: file(relativePath: { eq: "galia/image8.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image9: file(relativePath: { eq: "galia/image9.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image10: file(relativePath: { eq: "galia/image10.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
