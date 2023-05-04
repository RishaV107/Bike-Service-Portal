 
import Header from './Header/header';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
       
        <title>The Best Car/Bike Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap"
          rel="stylesheet"
        ></link>
       
      <Header />
     
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
