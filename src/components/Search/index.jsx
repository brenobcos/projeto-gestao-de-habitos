import { Input } from "antd";

function Search() {
  const { Search } = Input;

  return (
    <>
      <Search bordered={false} style={{ width: 180 }} />
      <div
        style={{
          height: "4px",
          width: "140px",
          background: "var(--color-primary)",

          position: "relative",
          top: "-5px",
        }}
      ></div>
    </>
  );
}

export default Search;
