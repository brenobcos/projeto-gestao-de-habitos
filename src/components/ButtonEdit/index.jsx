import { EditFilled } from "@ant-design/icons";

function ButtonEdit({ onClick }) {
  return (
    <>
      <div
        style={{
          fontFamily: "Inter,Helvetica,Arial,Sans-serif",
          fontSize: "12px",
          width: "50px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          cursor: "pointer",
        }}
        onClick={onClick}
      >
        Editar
        <EditFilled />
      </div>
    </>
  );
}

export default ButtonEdit;
