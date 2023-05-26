import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Example components for different pages
/**
 * We import the necessary components from react-router-dom, including BrowserRouter, Route, and Link.
 * We create separate components for each page: Home, About, and Contact. These components are placeholders for the actual content of each page.
 * Inside the App component, we use BrowserRouter to wrap the entire application, enabling client-side routing.
 * We define a navigation menu using the Link component, which creates clickable links to navigate between different pages within the application.
 * We use the Switch component to ensure that only one route matches at a time. This allows React Router to render the appropriate component based on the current URL path.
 * We define different routes using the Route component. Each Route is associated with a specific path and renders the corresponding component when the URL matches that path.
 * The exact keyword ensures that the home page is only rendered when the URL path exactly matches /.
 * When a route is matched, the corresponding component (e.g., Home, About, or Contact) is rendered.
 */
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Router>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
    </Router>
  );
};

export default App;
