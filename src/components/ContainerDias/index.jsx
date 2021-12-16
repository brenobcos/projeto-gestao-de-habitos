function ContainerDias() {
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
          Hoje
        </div>
        <div>Correr 10km</div>
        <div>Ir na academia</div>
        <div>Comer salada no almoço</div>
        <div>Tomar 5 litros de água</div>
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
          Amanhã
        </div>

        <div>Correr 10km</div>

        <div>Ir na academia</div>

        <div>Comer salada no almoço</div>

        <div>Tomar 5 litros de água</div>
      </div>
    </div>
  );
}

export default ContainerDias;
