import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container-body">{children}</div>
      </div>
    </>
  );
}

export default Layout;
