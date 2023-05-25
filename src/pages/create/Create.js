import { useEffect,useState } from 'react';
import './Create.css';

const Create = () => {
    useEffect(() => {
        document.title = 'IT Quotes - Add quote'
    },[]);


    const [quote,setQuote] = useState("");
    const [author,setAuthor] = useState("");
    const [known,setKnown] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return ( 
        <div className='create'>
            <h2 className='page-title'>Add a new Quote</h2>

            <form className='form' onSubmit={handleSubmit}>
                <label>
                    <span>Quote:</span>
                    <textarea type="text" onFocus={()  => console.log("")} onChange={(e) => setQuote(e.target.value)}  value={quote} />
                </label>
                <label>
                    <span>Author:</span>
                    <input type="text" onChange={(e) => setAuthor(e.target.value)}  value={author} />
                </label>
                <label>
                    <span>Known for:</span>
                    <textarea type="text" onChange={(e) => setKnown(e.target.value)}  value={known} />
                </label>
                <button className='btn'>Submit</button>
            </form>
        </div>
     );
}
 
export default Create;