import Header from "../components/Header";

const style = {
  backgroundColor: "blue",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default function ErrorPage() {
  return (
    <>
      <Header />
      <h1 style={style}>Error Page</h1>
    </>
  );
}
