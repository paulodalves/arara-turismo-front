import React from "react";
import { Container } from "react-bootstrap";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div>
      <Container className="container-padd" fluid="md">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      </Container>
    </div>
  );
};

export default Profile;