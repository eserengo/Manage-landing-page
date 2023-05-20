import Route from './Route.js';
import Home from './Home.js';
import Products from './Products.js';
import About from './About.js';
import Careers from './Careers.js';
import Community from './Community.js';
import PrivacyPolicy from './Privacy__Policy.js';

const App = () => {

  return (
    <>
      <Route path='/Frontendmentor.io/Manage-landing-page/index.html'>
        <Home />
      </Route>
      <Route path='/Frontendmentor.io/Manage-landing-page/'>
        <Home />
      </Route>
      <Route path='/Frontendmentor.io/Manage-landing-page/products'>
        <Products />
      </Route>
      <Route path='/Frontendmentor.io/Manage-landing-page/about'>
        <About />
      </Route>
      <Route path='/Frontendmentor.io/Manage-landing-page/careers'>
        <Careers />
      </Route>
      <Route path='/Frontendmentor.io/Manage-landing-page/community'>
        <Community />
      </Route>
      <Route path='/Frontendmentor.io/Manage-landing-page/privacy_policy'>
        <PrivacyPolicy />
      </Route>
    </>
  )
};

export default App;
