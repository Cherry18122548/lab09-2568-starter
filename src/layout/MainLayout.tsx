import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function MainLayout() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        <div className="col-2 col-md-2 p-0">
          {/* Sidebar ซ้าย */}
          <Sidebar userName="Woranat" type="admin" />
        </div>
        <div className="col-10 col-md-10 p-0">
          {/* Header ด้านบน */}
          <Header />

          {/* เนื้อหาหลัก */}
          <main className="flex-grow-1 p-4 min-vh-100">
          {/* Result Text */}
          {/*<div className="container text-center">
            <h2>Counter Page</h2>
            <p>Counter:</p>
            <button>Increase</button>
          </div>*/}
          <Outlet />
        </main>

          {/* Footer ด้านล่าง */}
          <Footer year="2026" fullName="Woranat Thammawit" studentId="670612130" />
        </div>
      </div>
    </div>
  );
}
