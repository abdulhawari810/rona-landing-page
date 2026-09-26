import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToAnchor from "@/components/scrollToAnchor";

export default function App() {
  return (
    <>
      <ScrollToAnchor />
      <Navbar />
      <section className="pt-40">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}
