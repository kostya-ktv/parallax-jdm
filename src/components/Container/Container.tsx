import "./container.style.css";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container">
      <section className="gallery">{children}</section>
    </div>
  );
};

export default Container;
