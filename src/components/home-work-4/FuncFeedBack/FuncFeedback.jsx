
import style from './funFeedback.module.scss';
import { useState} from 'react';
//3 butoane, 3 span-uri +2 de prezentare a rezultatelor

const FunFeedback = () => {
        
        const [good,setGood] = useState(0);
        const [bad, setBad] = useState(0);
        const [neutral, setNeutral] = useState(0);
        const handleGood = () => setGood(prevState => prevState +1 );   
        const handleBad = () => setBad(prevState => prevState +1 )     
        const handleNeutral = () => setNeutral(prevState => prevState + 1); 
        const total = good + bad+ neutral
        const percentage = (good / total * 100).toFixed(2) ;

        return (
                
                <section className={style.feedbackFAll}>
        <h2>Share your feedback</h2>
                <div className={style.btnsFeedbackF}>
                        <button type="button" name="good" onClick={handleGood}>Good</button>
                        <button type="button" name="bad" onClick={handleBad}>Bad</button>
                        <button type="button" name="neutral" onClick={handleNeutral}>Neutral</button>
                        </div><br/>
                        <h2>Results</h2>
                <div>
                                <span>Good : {good}</span><br/>
                                <span>Bad: {bad}</span><br/>
                                <span>Neutal: {neutral}</span><br/>
                                <span>Total: {total}</span><br/>
                                {<span style={{visibility: percentage>0 ? 'visible': 'hidden'}}>Percentage of positive feedback: {percentage} %</span>}
                </div>
                        
  </section>)
};

export default FunFeedback;
