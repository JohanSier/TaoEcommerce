import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TawkToChat = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica si estamos en la homepage
    const isHomepage = location.pathname === "/";

    if (isHomepage) {
      const script = document.createElement("script");
      script.src = "https://embed.tawk.to/67a0c24d3a8427326079176b/1ij5ve05d";
      script.async = true;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      script.id = "tawk-script"; // Agregamos un ID para identificarlo
      document.body.appendChild(script);

      script.onload = () => {
        // Esperamos que TawkTo se cargue y usamos su API para mostrarlo
        if (window.Tawk_API) {
          window.Tawk_API.showWidget();
        }
      };
    } else {
      // Si no estamos en la homepage, intentamos ocultar el widget
      if (window.Tawk_API) {
        window.Tawk_API.hideWidget();
      }
    }

    return () => {
      // Cuando el componente se desmonta, eliminamos el script si no estamos en la homepage
      if (!isHomepage) {
        const existingScript = document.getElementById("tawk-script");
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      }
    };
  }, [location.pathname]);

  return null;
};

export default TawkToChat;
