import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "react-bootstrap";
import "../App.css";

import Rodape from "./Rodape";

const FaleConosco = () => {
  const form = useRef();

  useEffect(() => {
    document.title = "Fale conosco | Arara Turismo"
  },[])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n55zxc5",
        "template_kslupcb",
        form.current,
        "MJl9d9aWHK9Bw2ytf"
      )
      .then(
        (result) => {
          alert("Enviado com sucesso!");
        },
        (error) => {
          alert("[ERRO] - Falha no envio, tente novamente!");
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Container className="container-padd" fluid="md">
        <h1 className="h1-centraliza">Fale Conosco</h1>
        <div className="form-contato">
        <form ref={form} onSubmit={sendEmail}>
          <label>Nome</label>
          <input type="text" name="name" />
          <label>Email:</label>
          <input type="email" name="email" />
          <label>Assunto:</label>
          <input type="text" name="subject" />
          <label>Mensagem:</label>
          <textarea className="area-comentario" name="message" />
          <button style={{width: "90px", marginTop: "15px"}} type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </div>
      </Container>
      <Rodape />
    </div>
  );
};

export default FaleConosco;
