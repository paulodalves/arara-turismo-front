import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Logo from "./images/Logo_Arara_Turismo.png"
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import EventBus from "./common/EventBus";
import Mapa from "./components/Mapa";
import Detalhes from "./components/Detalhes";
import { Container, Nav, Navbar} from "react-bootstrap";
import SaibaMais from "./components/SaibaMais";
import FaleConosco from "./components/FaleConosco";

const App = () => {

  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    console.log(user);
    if (user) {
      setCurrentUser(user);
    }
    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };
  }, []);
  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home"><img style={{width: "100px"}} src={Logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              {currentUser && <Nav.Link href="/profile">Perfil</Nav.Link>}
              <Nav.Link href="/mapa">Locais</Nav.Link>              
              <Nav.Link href="/quemsomos">Quem somos</Nav.Link>
              <Nav.Link href="/faleconosco">Fale conosco</Nav.Link>
            </Nav>
            {currentUser ? (
              <Nav>
                <Nav.Link href="/profile">{currentUser.username}</Nav.Link>
                <Nav.Link href="/login" onClick={logOut}>
                  Sair
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Cadastre-se</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/home"} element={<Home />} />
        <Route exact path={"/login"} element={<Login />} />
        <Route exact path={"/register"} element={<Register />} />
        <Route exact path={"/profile"} element={<Profile />} />
        <Route exact path={"/mapa"} element={<Mapa />} />
        <Route
          exact
          path={"/detalhes/:id/comentarios"}
          element={<Detalhes />}
        />
        <Route exact path={"/quemsomos"} element={<SaibaMais />} />
        <Route exact path={"/faleconosco"} element={<FaleConosco />} />

      </Routes>
    </div>
  );
};
export default App;
