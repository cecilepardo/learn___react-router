import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles/1">Article 1</Link>
        <Link to="/articles/2">Article 2</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
