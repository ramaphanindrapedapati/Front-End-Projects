import { Outlet, Link } from "react-router-dom";

const ManagerLayout = () => {
  return (
    <>
      <h2>Manager Panel</h2>
      <nav>
        <Link to="dashboard">Dashboard</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default ManagerLayout;
