import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel"

import "../App.css"

import Arara from "../images/parrot-g6e7441b3c_640.jpg"
import Aldeia from "../images/aldeia.jpg"
import Papagaio from "../images/macaw-gaf289b378_640.jpg"

import Modal from "react-bootstrap/Modal"

const ButtonModal = () => {
  const [lgShow, setLgShow] = useState(false)

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <h3 style={{ textAlign: "center" }}>O turismo de base comunitária</h3>
          <article>
            <p style={{textAlign:"center"}}>
              Turismo de Base Comunitária é um modelo de gestão da visitação
              protagonizado pela comunidade, gerando benefícios coletivos,
              promovendo a vivência intercultural, a qualidade de vida, a
              valorização da história e da cultura dessas populações, bem como a
              utilização sustentável para fins recreativos e educativos, dos
              recursos da Unidade de Conservação.
            </p>
            <p>
              <a href="https://www.icmbio.gov.br/portal/images/stories/comunicacao/publicacoes/turismo_de_base_comunitaria_em_uc_2017.pdf">
                Fonte
              </a>
            </p>
          </article>
          <h3 style={{ textAlign: "center" }}>
            Como o turismo pode ajudar a preservar a cultura indígena
            incentivando a preservação das tradições
          </h3>
          <article>
            <p style={{textAlign:"center"}}>
              Conhecer os povos indígenas é a melhor forma de encontrar nossas
              raízes. Toda brasileiro, por mais distante que seja, possui
              descendência indígena. Pensando nisso, preservar essa cultura e
              manter essa identidade é um dever de todo brasileiro. Mas,
              considerando a realidade atual, são inúmeros os desafios
              enfrentados por esses povos para conservar essas tradições que
              perduram a centenas de anos.
            </p>
            <p>
              <a href="https://roteirosecotrilhas.com.br/2019/06/25/o-turismo-de-base-comunitaria-nas-comunidades-indigenas/">
                Fonte
              </a>
            </p>
          </article>
        </Modal.Body>
      </Modal>
      <button
        className="button-sabermais"
        onClick={() => setLgShow(true)}
      >
        Saber mais
      </button>
    </>
  )
}

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel
      className="tamanho-carousel"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 img-tamanho"
          src={Arara}
          alt="First slide"
        />
        <Carousel.Caption>
          <ButtonModal />
          <p>Aventure-se na natureza.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-tamanho"
          src={Aldeia}
          alt="Second slide"
        />

        <Carousel.Caption>
          <ButtonModal />
          <p>Conheça animais de diversas espécies.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-tamanho"
          src={Papagaio}
          alt="Third slide"
        />

        <Carousel.Caption>
          <ButtonModal />
          <p>Conheça a cultura dos povos indígenas.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel
