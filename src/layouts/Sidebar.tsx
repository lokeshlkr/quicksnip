import LanguageSelector from "../components/LanguageSelector";
import CategoryList from "../components/CategoryList";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <section className="section">
        <h2 className="section-title">Languages</h2>
        <div className="section-body">
          <LanguageSelector />
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Categories</h2>
        <div className="section-body">
          <CategoryList />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
