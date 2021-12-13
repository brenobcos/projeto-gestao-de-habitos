import { useState, useEffect } from "react";

import { Input } from "antd";
import "antd/dist/antd.css";

//**************** STYLES *******************
const standart = {
  borderColor: "#121212",
  marginBottom: "20px",
};
const filled = {
  marginBottom: "20px",
};
const unfilled = {
  marginBottom: "20px",
};

const textArea = {
  borderColor: "#121212",
  marginBottom: "20px",
};
//**************** STYLES *******************

function Inputs({ variant, label, text }) {
  const { TextArea } = Input;

  const [style, setStyle] = useState(standart);

  //   const [isFilled, setIsFilled] = useState(false);
  const [isBordered, setIsBordered] = useState(true);
  const [isTextArea, setIsTextArea] = useState(false);

  useEffect(() => {
    if (variant === "filled") {
      setStyle(filled);
      //   setIsFilled(true);
      setIsBordered(false);
    }

    if (variant === "unfilled") {
      setStyle(unfilled);
      setIsBordered(false);
    }

    if (variant === "textarea") {
      setIsTextArea(true);
    }
  }, [variant]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "220px" }}>
      {label}
      {isTextArea ? (
        <TextArea placeholder={text} rows={4} style={textArea} />
      ) : (
        <Input
          placeholder={text}
          style={style}
          size="large"
          state="normal"
          //   filled={isFilled}
          filled={true}
          bordered={isBordered}
        />
      )}
    </div>
  );
}

export default Inputs;
