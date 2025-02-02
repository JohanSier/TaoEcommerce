import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CookieContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 3%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 25rem;
  background: var(--secondary);
  color: var(--white);
  padding: 16px 20px;
  border: 2px solid var(--white);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 1000;
`;

const CookieText = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
  color: var(--greyE);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const AcceptButton = styled.button`
  display: flex;
  white-space: nowrap;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.5s ease, color 0.5s ease;
  background: #4da809;
`;

const RejectButton = styled.button`
  display: flex;
  white-space: nowrap;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.5s ease, color 0.5s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Cookies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setTimeout(() => setIsVisible(true), 5000); // Show with a slight delay
      localStorage.clear();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <CookieContainer isVisible={isVisible}>
      <CookieText>
        🍪 Usamos cookies para mejorar tu experiencia. ¿Aceptas nuestras
        cookies?
      </CookieText>
      <ButtonGroup>
        <RejectButton onClick={handleReject}>Rechazar</RejectButton>
        <AcceptButton onClick={handleAccept}>Aceptar</AcceptButton>
      </ButtonGroup>
    </CookieContainer>
  );
};

export default Cookies;
