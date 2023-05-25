import { useEffect,useState } from 'react';
import QuotesList from '../../components/QuotesList';
import './Home.css';
const Home = () => {
    //change page name
    useEffect(() => {
		document.title = 'IT Quotes';
	  }, []);
    //fetch data
    const [data, setData] = useState([]);
    useEffect(() => {
      console.log("Start")
      fetch('http://localhost:3000/quotes')
        .then(res => res.json())
        .then(json => setData(json));
    },[])
    return ( 
        <div>
            <QuotesList quotes={data} />
        </div>
     );
}
 
export default Home;