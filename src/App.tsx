import { useAppContext } from "./contexts/AppContext";

import Header from "./layouts/Header";
import Banner from "./layouts/Banner";
import Sidebar from "./layouts/Sidebar";
import Footer from "./layouts/Footer";

import SnippetList from "./components/SnippetList";

const App = () => {
  const { category } = useAppContext();

  return (
    <div className="container flow">
      <Header />
      <Banner />
      <main className="main">
        <Sidebar />  
        <section className="section">
        <h2 className="section-title">{category ? "Snippets for - "+category : "Select a category"}</h2>
        <div className="section-body">
          <SnippetList />
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
