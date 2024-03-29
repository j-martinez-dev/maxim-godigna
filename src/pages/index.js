import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      description="Maxim godigna est un chef franco-vénézuélien. Il est diplômé de Ferrandi et a travaille dans plusieurs restaurants étoilés avant d’ouvrir Galia. Il propose ses services de traiteur et restaurant."
    />
    <h1 className="text-center">Maxim Godigna</h1>
    <Row>
      <Col className="text-center" sm={{ order: 2, span: 6 }}>
        <div className="center">
          <Img fluid={data.image1.childImageSharp.fluid} alt="Chef Godigna" />
        </div>
      </Col>
      <Col className="text-center" sm={{ order: 1, span: 6 }}>
        <h2>Origines</h2>
        <p>
          Le chef Maxim Godigna a grandit au Venezuela dans les années 80 au
          sein d'une famille de médecins mais il n'a jamais souhaité suivre
          cette longue tradition familiale. Il est aussi le petit fils de
          Vittorio Godigna, footballeur Italien et premier sélectionneur du
          Venezuela.
        </p>
        <p>
          Avec un père Italo - Vénézuélien et une mère française, Maxim Godigna
          s’imprègne de ces différentes cultures depuis son très jeune âge. Il
          découvre la cuisine vénézuélienne aux côtés de sa grand-mère
          paternelle "Maruja" et profite de ses vacances en France pour se
          forger le palais avec les recettes de cuisine française de sa "mémé".
          Cependant, le jeune Maxim suit une scolarité internationale très
          exigeante au Lycée Français de Caracas, ce qui l'éloigne de son
          intérêt pour la gastronomie et le plonge dans un univers plus
          didactique.
        </p>
        <p>
          Maxim obtient son Bac ES puis intègre une école d'ingénieurs au
          Venezuela. Il décide ensuite de quitter son pays natal pour rejoindre
          sa compagne et poursuivre ses études à Paris, mais il y découvre une
          nouvelle carrière. Il poursuit d’abord ses études d’ ingénieur à l’
          Université de Versailles puis décide de se tourner vers la cuisine.
        </p>
      </Col>
    </Row>
    <Row>
      <Col className="text-center" sm={6}>
        <div className="center">
          <Img fluid={data.image2.childImageSharp.fluid} alt="Chef Godigna" />
        </div>
      </Col>
      <Col className="text-center" sm={6}>
        <h2>Une nouvelle passion, une nouvelle vie ...... </h2>
        <p>
          Il est admis à l'école Grégoire Ferrandi et profite de chaque instant
          au sein de cet établissement prestigieux. Il y suit la formation de
          "Bachelor de cuisine" et passe les diplômes de cuisinier, pâtissier et
          boulanger. Il obtient également un Master en Gestion gastronomique à
          l'Université Simon Bolivar de Caracas, ce qui lui permet de se former
          au management d'un restaurant.
        </p>
        <p>
          Sa carrière professionnelle débute au restaurant gastronomique "Au
          Gourmand" dans le quartier de l'Opéra, mais son talent lui permet de
          gravir les échelons rapidement pour intégrer les équipes des plus
          grandes tables et Palaces de Paris.
        </p>
        <p>
          Le jeune cuisinier travaille aux côtés du chef étoilé Jean François
          Rouquette au Park Hyatt Paris- Vendôme où il y découvre l'exigence des
          grands restaurants étoilés avec des plats transformés en véritables
          oeuvres d'art.
        </p>
      </Col>
    </Row>
    <Row>
      <Col className="text-center" sm={{ order: 2, span: 6 }}>
        <div className="center">
          <Img fluid={data.image3.childImageSharp.fluid} alt="Chef Godigna" />
        </div>
      </Col>

      <Col className="text-center" sm={{ order: 1, span: 6 }}>
        <h2>Une vie culinaire</h2>
        <p>
          Quelques années plus tard, il décide d'entamer une nouvelle aventure
          dans les cuisines du restaurant étoilé "Paris", l'incontournable
          symbole gastronomique du Lutetia, le plus ancien hôtel de la capitale
          française. Le chef Philippe Renard est à la tête de cette maison et
          c'est grâce aux années passées à ses côtés que notre chef va
          développer une cuisine française traditionnelle de haut niveau
        </p>
        <p>
          Le chef Godigna accepte par la suite de nouvelles propositions et
          s’occupe des fusions orientales au Buddha Bar Hôtel de Paris, il
          cuisine lors de nombreux événements pour les ambassades et devient
          professeur de cuisine pour préparer les élèves au CAP cuisine. Le chef
          est également jury pour les diplômes de cuisine dans les grandes
          écoles Parisiennes.
        </p>
        <p>
          Puis, attiré par le succès de l'émission Top chef, le chef Maxim
          Godigna revient dans les cuisines françaises et devient le second du
          finaliste Saada. Au cours de ces années, il y découvre le monde des
          petites brigades et développe sa créativité.
        </p>
        <p>
          Fin 2015, il décide d’ouvrir son premier restaurant dans la Capitale
          Française.
        </p>
      </Col>
    </Row>
    <Row>
      <Col className="text-center" sm={6}>
        <div className="center">
          <Img fluid={data.image4.childImageSharp.fluid} alt="Chef Godigna" />
        </div>
      </Col>
      <Col className="text-center" sm={6}>
        <h2>Le retour à ses racines</h2>
        <p>
          En 2020, le chef et son épouse décident de se lancer dans un nouveau
          projet. Il s’agit cette fois-ci de MIKOPÜY, un restaurant décontracté
          de cuisine vénézuélienne.
        </p>
        <p>
          Le chef Maxim avoue qu’il n’ était pas forcément très enthousiaste au
          début car il avait toujours cuisiné dans des restaurants étoilés et
          gastronomiques. Cependant, il a réussi à trouver un équilibre avec
          deux clientèles complètement différentes.
        </p>
        <p>
          Il décide donc de continuer avec cette cuisine bistronomique au
          restaurant Galia et vous fait découvrir à Mikopüy la cuisine de rue et
          la culture vénézuélienne.
        </p>
      </Col>
    </Row>

    <h1 className="text-center">Distinctions</h1>
    <p>
      En 2016 Galia a été classé 16ème meilleur restaurant de Paris et fait
      partie des 3 meilleures nouvelles ouvertures.
    </p>
    <p>
      Engagé à respecter les produits de qualité et participant activement à la
      promotion et la transmission du patrimoine culinaire français, le chef
      Godigna a été récompensé par le Collège Culinaire de France avec
      l'appellation de restaurant de qualité.
    </p>
    <p>
      En 2017 le chef devient membre actif de l'association Euro - Toques France
      et s'engage à défendre les produits sains de qualité. Euro-toques France
      est la seule association lobbyiste de chefs cuisiniers qui bénéficie d'une
      présence permanente à Bruxelles au coeur de la commission européenne.
    </p>
    <p>
      En 2018 il reçoit une toque du guide Gastronomique français Gault et
      Millau et celle-ci est confirmée par la suite chaque année.
    </p>
    <p>
      Le titre de Maitre Restaurateur lui est également attribué par l’État.
    </p>
    <Row>
      <Col className="text-center" sm={4}>
        <img src="award1.png" alt="" />
      </Col>
      <Col className="text-center" sm={4}>
        <img src="award5.jpg" alt="" />
      </Col>
      <Col className="text-center" sm={4}>
        <img src="award3.png" alt="" />
      </Col>
    </Row>
    <Row>
      <Col className="text-center" sm={6}>
        <img src="award4.jpg" alt="" />
      </Col>
      <Col className="text-center" sm={6}>
        <img src="award2.png" alt="" />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "max-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image2: file(relativePath: { eq: "max-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image3: file(relativePath: { eq: "max-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image4: file(relativePath: { eq: "max-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
