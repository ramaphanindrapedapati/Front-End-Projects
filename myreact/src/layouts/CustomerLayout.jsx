import { Outlet, Link } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <>
      <h2>Customer Panel</h2>
      <nav>
        <Link to="dashboard">Dashboard</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default CustomerLayout;