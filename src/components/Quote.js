import { useState } from "react";
//import { FaClipboard } from 'react-icons/fa';

const Quote = ({q}) => {
    const [tooltip,setTooltip] = useState(false);
    const [copied, setCopied] = useState(false);
    const handleCopyClick = () => {
        navigator.clipboard.writeText(`"${q.quote}" - ${q.author}`);
        setTooltip(false);
        setCopied(true);
        setTimeout(() => setCopied(false),1000);
    }
    return ( 
        <div onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)} className="quote" onClick={handleCopyClick}>
            <p>{q.quote}</p>
            <p>{q.author} - <span>{q.known_for}</span></p>
            {tooltip && <span className="tooltip">Click to copy!</span>}
            {copied && <span className="tooltip">Copied!</span>}
        </div>
     );
}
 
export default Quote;