import { useState, useRef } from "react";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import TopBar from "./components/TopBar.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage       from "./pages/HomePage.jsx";
import AboutPage      from "./pages/AboutPage.jsx";
import AcademicsPage  from "./pages/AcademicsPage.jsx";
import AdmissionsPage from "./pages/AdmissionsPage.jsx";
import StudentLifePage from "./pages/StudentLifePage.jsx";
import NewsPage       from "./pages/NewsPage.jsx";
import ContactPage    from "./pages/ContactPage.jsx";

// ── Page registry ─────────────────────────────────────────────────────────────
const PAGES = {
  "home":           HomePage,
  "about-us":       AboutPage,
  "academics":      AcademicsPage,
  "admissions":     AdmissionsPage,
  "student-life":   StudentLifePage,
  "news-&-events":  NewsPage,
  "contact-us":     ContactPage,
};

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const mainRef = useRef(null);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PageComponent = PAGES[page] || HomePage;

  return (
    <>
      <GlobalStyle />
      <TopBar />
      <Navbar activePage={page} setPage={navigate} />
      <main
        ref={mainRef}
        key={page}
        style={{ animation: "fadeIn 0.35s ease both" }}
      >
        <PageComponent setPage={navigate} />
      </main>
      <Footer setPage={navigate} />
    </>
  );
}
