import moment from "moment";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Calendar from "./components/Calendar";
import Month from "./pages/Month";

function App() {
  window.moment = moment;
  moment.updateLocale('en', {week: {dow: 1}});
  
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/month/:id" element={<Month />} />
      </Routes>
    </Router>
  );
}

export default App;
