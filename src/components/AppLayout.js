import Footer from './Footer';
const AppLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};
export default AppLayout;
