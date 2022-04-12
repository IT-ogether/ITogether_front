import Footer from './Footer';
import Header from './Header';
const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="AppLayout">{children}</div>
      <Footer />
    </div>
  );
};
export default AppLayout;
