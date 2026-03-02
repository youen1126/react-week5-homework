//後台layout

import { Outlet, NavLink } from "react-router";

export default function AdminLayout() {
  return (
    <>
      <header
        className="align-items-center text-white"
        style={{
          minHeight: "5vh",
          backgroundColor: "#493c33",
        }}
      >
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/product">
              後台管理商品列
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/order">
              後台管理訂單列
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              登入後台
            </NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Outlet />
      </main>

      <footer
        className="align-items-center text-white"
        style={{
          minHeight: "10vh",
          backgroundColor: "#737c75",
        }}
      >
        <p className="text-center p-4">後台footer</p>
        <p className="text-center p-4">© 2026 React專班-UN個人作業網站</p>
      </footer>
    </>
  );
}
