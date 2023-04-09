import Form from "./Form";
import User from "../pages/User";
import { UseFetch } from "../Hooks/UseFetch";
function Hero() {
  const url = "https://randomuser.me/api/?results=9";
  const {
    data,
    isPending,
    error,
    deleteOperation,
    setData,
    searchData,
    refresh,
  } = UseFetch(url);
  console.log(data);
  if (isPending) {
    return (
      <div className="content">
        <span className="loader"></span>
      </div>
    );
  }
  if (error) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <h1 style={{ fontSize: "25px" }}>{error}</h1>
      </div>
    );
  }
  return (
    <main className="main">
      <div className="hero">
        <div className="container">
          <h1>RANDOM USER GENERATOR</h1>
        </div>
      </div>

      <div className="container">
        <div className="middle">
          <Form
            data={data}
            setData={setData}
            searchData={searchData}
            refresh={refresh}
          />
          <User
            data={data}
            isPending={isPending}
            error={error}
            deleteOperation={deleteOperation}
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;
