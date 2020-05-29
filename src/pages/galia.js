import React from "react"
import { Col, Row, Carousel } from "react-bootstrap"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Galia = ({ data }) => (
  <Layout>
    <SEO title="Restaurant Galia" />
    <Row className="p-3">
      <Col className="text-center" sm={6}>
        <div className="center">
          <Img fixed={data.logo.childImageSharp.fixed} alt="Restaurant Galia" />
        </div>
      </Col>
      <Col sm={6}>
        <h1 className="text-center">Restaurant Galia</h1>
        <p>
          Aux fourneaux de son restaurant depuis septembre 2015, le chef Godigna
          propose une carte bistronomique qui change en fonction de son
          inspiration. Au programme d' un voyage gustatif exceptionnel, vous
          pourrez déguster les incontournables de cette carte changeante dans
          laquelle les fruits et les légumes d'Amérique du sud sont toujours à
          l’ honneur.
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
            <Img
              fixed={data.image1.childImageSharp.fixed}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image2.childImageSharp.fixed}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image3.childImageSharp.fixed}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image4.childImageSharp.fixed}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image5.childImageSharp.fixed}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image6.childImageSharp.fixed}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image7.childImageSharp.fixed}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image8.childImageSharp.fixed}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image9.childImageSharp.fixed}
              alt="Restaurant Galia"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={data.image10.childImageSharp.fixed}
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
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image1: file(relativePath: { eq: "galia/image1.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image2: file(relativePath: { eq: "galia/image2.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image3: file(relativePath: { eq: "galia/image3.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image4: file(relativePath: { eq: "galia/image4.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image5: file(relativePath: { eq: "galia/image5.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image6: file(relativePath: { eq: "galia/image6.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image7: file(relativePath: { eq: "galia/image7.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image8: file(relativePath: { eq: "galia/image8.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image9: file(relativePath: { eq: "galia/image9.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image10: file(relativePath: { eq: "galia/image10.jpeg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

  }
`
