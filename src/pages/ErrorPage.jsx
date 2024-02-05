import Header3 from "../components/Header3";

const style = {
  backgroundColor: "blue",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function ErrorPage() {
  return (
    <>
      <Header3 />
      <h1 style={style}>Error Page</h1>
    </>
  );
}
