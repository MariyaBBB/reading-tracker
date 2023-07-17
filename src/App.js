import moment from "moment";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  window.moment = moment;
  moment.updateLocale('en', {week: {dow: 1}});
  
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
