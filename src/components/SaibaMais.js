import React from "react";
import { Container } from "react-bootstrap";
import Rodape from "./Rodape";

const SaibaMais = () => {
    return(
    <div>
        <Container className="container-padd" fluid="md">
            <h1 style={{textAlign: "center"}}>O turismo de base comunitária</h1>
            <article>
                <p>
                Turismo de Base Comunitária é um modelo de gestão da visitação protagonizado
pela comunidade, gerando benefícios coletivos, promovendo a vivência intercultural,
a qualidade de vida, a valorização da história e da cultura dessas populações, bem
como a utilização sustentável para fins recreativos e educativos, dos recursos da
Unidade de Conservação. 
                </p>
                <p><a href="https://www.icmbio.gov.br/portal/images/stories/comunicacao/publicacoes/turismo_de_base_comunitaria_em_uc_2017.pdf">Fonte</a></p>
            </article>
            <h3 style={{textAlign: "center"}}>Como o turismo pode ajudar a preservar a cultura indígena incentivando a preservação das tradições</h3>
            <article>
                <p>
                Conhecer os povos indígenas é a melhor forma de encontrar nossas raízes. Toda brasileiro, por mais distante que seja, possui descendência indígena. Pensando nisso, preservar essa cultura e manter essa identidade é um dever de todo brasileiro. Mas, considerando a realidade atual, são inúmeros os desafios enfrentados por esses povos para conservar essas tradições que perduram a centenas de anos.
                </p>
                <p><a href="https://roteirosecotrilhas.com.br/2019/06/25/o-turismo-de-base-comunitaria-nas-comunidades-indigenas/">Fonte</a></p>
            </article>
        </Container>
        <Rodape />
    </div>
    )
}

export default SaibaMais;