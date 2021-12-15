import { Input } from "antd";

import "antd/dist/antd.css";

function Inputs({ name, textarea, filled, label, text }) {
  const { TextArea } = Input;

  return (
    <div style={{ width: "220px", marginBottom: "20px" }}>
      {label}
      {textarea ? (
        <TextArea placeholder={text} rows={4} name={name} />
      ) : filled ? (
        <Input defaultValue={text} size="large" name={name} />
      ) : (
        <Input placeholder={text} size="large" name={name} />
      )}
    </div>
  );
}

export default Inputs;
