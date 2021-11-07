import './App.css';
import { AuthProvider } from './Hooks/Auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexRoutes from './routes/IndexRoutes';

function App() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route path="/" exact component={IndexRoutes} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
