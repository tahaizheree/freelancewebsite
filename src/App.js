import './App.css';
import Navigation from './components/navigation/navigation.jsx';
import IntroSearch from './components/introsearch/introsearch.jsx';
import InfiniteSlider from './components/infiniteslider/infiniteslider';
import Discover from './components/discover/discover';
function App() {
  return (
   <>
   <Navigation/>
   <IntroSearch/>
   <InfiniteSlider/>
   <Discover/>

   </>
  );
}

export default App;
