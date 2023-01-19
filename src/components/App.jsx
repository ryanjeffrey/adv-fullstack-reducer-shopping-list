import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import './Design.css';
import ShoppingListPage from './Page/ShoppingListPage.jsx';
import { ShoppingListProvider } from './ShoppingListProvider.jsx';

export default function App() {

  return (
    <Router>
      <ShoppingListProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<ShoppingListPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ShoppingListProvider>
    </Router>
  );
}
