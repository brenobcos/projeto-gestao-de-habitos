import { useState, useEffect } from "react";
import { Container } from "./styles";

const medium = {
  width: "216px",
  height: "40px",
  fontWeight: 900,
  fontSize: "16px",

  background: "var(--color-primary)",
};

const large = {
  width: "370px",
  height: "60px",
  fontWeight: 900,
  fontSize: "26px",

  background: "var(--color-primary)",
};

function ButtonMain({ children, variant }) {
  const [style, setStyle] = useState();

  useEffect(() => {
    if (variant === "medium") {
      setStyle(medium);
    }
    if (variant === "large") {
      setStyle(large);
    }
  }, [variant]);

  return <Container style={style}>{children}</Container>;
}

export default ButtonMain;
