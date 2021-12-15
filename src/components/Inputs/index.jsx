import { Input } from "antd";

import "antd/dist/antd.css";

function Inputs({ textarea, filled, label, text }) {
  const { TextArea } = Input;

  return (
    <div style={{ width: "220px", marginBottom: "20px" }}>
      {label}
      {textarea ? (
        <TextArea placeholder={text} rows={4} />
      ) : filled ? (
        <Input defaultValue={text} size="large" />
      ) : (
        <Input placeholder={text} size="large" />
      )}
    </div>
  );
}

export default Inputs;
