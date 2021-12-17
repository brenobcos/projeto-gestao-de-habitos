import { CalendarOutlined, FieldTimeOutlined } from "@ant-design/icons";

function ContainerDays() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        margin: "5vh 10vw",
      }}
    >
      <div style={{ marginRight: "10vw" }}>
        <div
          style={{
            fontFamily: "Roboto, black, sans-serif",
            fontSize: "24px",
            color: "var(--black)",
            fontWeight: "900",
          }}
        >
          <CalendarOutlined style={{ marginRight: "5px" }} />
          Hoje
        </div>
        <ul>
          <li>Correr 10km</li>
          <li>Ir na academia</li>
          <li>Comer salada no almoço</li>
          <li>Tomar 5 litros de água</li>
        </ul>
      </div>

      <div
        style={{
          padding: "10px",
        }}
      >
        <div
          style={{
            fontFamily: "Roboto, black, sans-serif",
            fontSize: "24px",
            color: "var(--black)",
            fontWeight: "900",
          }}
        >
          <FieldTimeOutlined style={{ marginRight: "5px" }} />
          Amanhã
        </div>
        <ul>
          <li>Correr 10km</li>

          <li>Ir na academia</li>

          <li>Comer salada no almoço</li>

          <li>Tomar 5 litros de água</li>
        </ul>
      </div>
    </div>
  );
}

export default ContainerDays;
