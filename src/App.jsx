import { Routes, Route } from 'react-router-dom';
import ShortenerPage from './pages/ShortenerPage';
import StatisticsPage from './pages/StatisticsPage';
import RedirectPage from './pages/RedirectPage';

function App() {
return (
<Routes>
<Route path="/" element={<ShortenerPage />} />
<Route path="/stats" element={<StatisticsPage />} />
<Route path="/:shortcode" element={<RedirectPage />} />
</Routes>
);
}

export default App;