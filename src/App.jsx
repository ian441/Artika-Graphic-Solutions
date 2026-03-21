import { useState, useEffect, useCallback } from "react";

// Pages
import { PageHome } from "./pages/PageHome";
import { PageAbout } from "./pages/PageAbout";
import { PageServices } from "./pages/PageServices";
import { PagePortfolio } from "./pages/PagePortfolio";
import { PageGallery } from "./pages/PageGallery";
import { PageContact } from "./pages/PageContact";

// Admin
import { AdminLogin } from "./admin/AdminLogin";
import { AdminPanel } from "./admin/AdminPanel";

// Shared components
import { Nav, Footer, Cursor, PageWrapper } from "./components/SharedComponents";

// Hooks
import { useScrollY, useSecretTrigger } from "./hooks/useCustomHooks";

// Utils
import {
  DEFAULT_PROJECTS,
  DEFAULT_GALLERY,
  DEFAULT_SERVICES,
  DEFAULT_SITE,
} from "./utils/constants";
import { clearAdminSession, isAdminAuthenticated, loadContentBundle } from "./utils/storage";
import { getGlobalStyles, getAdminStyles } from "./styles/globalStyles";

export default function ArtikaGS() {
  const [page, setPageState] = useState("Home");
  const [adminMode, setAdminMode] = useState(false);
  const [adminAuth, setAdminAuth] = useState(isAdminAuthenticated());
  const scrollY = useScrollY();
  const openAdminMode = useCallback(() => setAdminMode(true), []);

  // Data state (loaded from storage or defaults)
  const [projects, setProjects] = useState(DEFAULT_PROJECTS);
  const [gallery, setGallery] = useState(DEFAULT_GALLERY);
  const [services, setServices] = useState(DEFAULT_SERVICES);
  const [site, setSite] = useState(DEFAULT_SITE);
  const [loaded, setLoaded] = useState(false);

  // Load from storage on mount
  useEffect(() => {
    (async () => {
      const content = await loadContentBundle({
        projects: DEFAULT_PROJECTS,
        gallery: DEFAULT_GALLERY,
        services: DEFAULT_SERVICES,
        site: DEFAULT_SITE,
      });
      setProjects(content.projects);
      setGallery(content.gallery);
      setServices(content.services);
      setSite(content.site);
      setLoaded(true);
    })();
  }, []);

  // Secret trigger: type "admin" anywhere
  useSecretTrigger(openAdminMode);

  const setPage = useCallback((p) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setPageState(p), 110);
  }, []);

  const logout = () => {
    clearAdminSession();
    setAdminAuth(false);
    setAdminMode(false);
  };

  if (!loaded)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#080806",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "1rem",
            letterSpacing: "0.3em",
            color: "rgba(200,169,126,0.4)",
            textTransform: "uppercase",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        >
          Artika
        </div>
      </div>
    );

  if (adminMode) {
    if (!adminAuth)
      return <AdminLogin onLogin={() => setAdminAuth(true)} />;
    return (
      <>
        <style>{getAdminStyles()}</style>
        <Cursor />
        <AdminPanel
          projects={projects}
          setProjects={setProjects}
          gallery={gallery}
          setGallery={setGallery}
          services={services}
          setServices={setServices}
          site={site}
          setSite={setSite}
          onLogout={logout}
        />
      </>
    );
  }

  const renderPage = () => {
    switch (page) {
      case "Home":
        return (
          <PageHome
            scrollY={scrollY}
            setPage={setPage}
            projects={projects}
            gallery={gallery}
            site={site}
            services={services}
          />
        );
      case "Portfolio":
        return <PagePortfolio projects={projects} />;
      case "Gallery":
        return <PageGallery gallery={gallery} />;
      case "Services":
        return <PageServices setPage={setPage} services={services} />;
      case "About":
        return <PageAbout site={site} />;
      case "Contact":
        return <PageContact site={site} />;
      default:
        return (
          <PageHome
            scrollY={scrollY}
            setPage={setPage}
            projects={projects}
            gallery={gallery}
            site={site}
            services={services}
          />
        );
    }
  };

  return (
    <>
      <style>{getGlobalStyles()}</style>
      <Cursor />
      <Nav page={page} setPage={setPage} scrollY={scrollY} site={site} onSecretAdminTrigger={openAdminMode} />
      <PageWrapper k={page}>{renderPage()}</PageWrapper>
      <Footer setPage={setPage} site={site} onSecretAdminTrigger={openAdminMode} />
    </>
  );
}
