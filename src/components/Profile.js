import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AuthService from "../services/auth.service";
import Rodape from "./Rodape";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    document.title = "Perfil | Arara Turismo"
  },[])

  return (
    <div>
      <Container className="container-padd" fluid="md">
        <h1 style={{ textAlign: "center" }}>Informações do Usuário</h1>
        <div className="perfil-informacoes">
          <div>
          <p>
            <strong>Nome de Usuário:</strong> {currentUser.username}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          </div>
        </div>
      </Container>
      <Rodape />
    </div>
  );
};

export default Profile;
