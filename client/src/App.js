import Header from './Header/Header';
import MainContainer from './_MainContainer/MainContainer';
import { Auth0Provider } from '@auth0/auth0-react';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
function App() {
  return (
    <Auth0Provider
      domain='YOUR_DOMAIN'
      clientId='YOUR_CLIENT_ID'
      redirectUri={window.location.origin}
    >
      <div>
        <Header />
        <MainContainer />
        <AboutUs />
        <Contact />
      </div>
    </Auth0Provider>
  );
}

export default App;
