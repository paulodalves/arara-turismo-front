import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import Rodape from "./Rodape"

const SaibaMais = () => {
  useEffect(() => {
    document.title = "Quem somos nos | Arara Turismo"
  }, [])
  return (
    <div>
      <Container className="container-padd" fluid="md">
        <h1 style={{ textAlign: "center" }}>Sobre o nosso projeto</h1>
        <article>
          <p style={{paddingLeft:"8%", paddingRight:"8%", textAlign:"center"}}>
            O Projeto Arara Turismo surgiu ao pensarmos em como poderíamos atuar
            na retomada financeira dos povos indígenas, obervando cuidadosamente
            o novo contexto de final e pós-pandemia. Nesse momento então que
            olhamos para a questão do turismo, importante fonte de renda dos
            povos, que foi diretamente afetada pela pandemia do COVID-19, e
            portanto, sendo suspenso por tempo indeterminado. E em cima desse
            fato, que foi formulado o Arara Turismo, um facilitador e fomentador
            da retomada do turismo em terras indígenas, prezando sempre pela
            segurança dos povos e dos visitantes. Inicialmente, o Projeto propõe
            concentrar as informações e auxiliar na divulgação das atividades,
            onde poderão ser consultados os destinos abertos à visitas, assim
            como os contatos necessários para que todos possam tirar suas
            dúvidas e/ou agendar suas visitas diretamente com os povos ou
            instituições responsáveis, não sendo possível a realização de
            pagamentos e reservas diretamente pelo site. Nosso objetivo é,
            portanto, devolver a renda trazida pelo turismo às famílias
            indígenas que antes eram direta ou indiretamente dependentes dessa
            fonte de forma segura e responsável. Agradecemos à todos que
            colaboram com o projeto!
          </p>
        </article>
      </Container>
      <Rodape />
    </div>
  )
}

export default SaibaMais
