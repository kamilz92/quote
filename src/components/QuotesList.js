import Quote from './Quote';
import './QuotesList.css';


export default function ({quotes}) {
  return (
    <div className='quotes-list'>
        {quotes.map(q => (
          <Quote key={q.id} q={q} />
        ))}
    </div>
  )
}
