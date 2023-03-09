import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { SectionFeedback } from "components/SectionFeedback/SectionFeedback";
import { Statistics } from "components/Statistics/Statistics";
import React, { useState } from "react";




export const App = () =>{

  const [good, setGood] = useState(0); 
  const [neutral, setNeutral] = useState(0); 
  const [bad, setBad] = useState(0); 

 
  const feedbacks = {
    good,
    neutral,
    bad,
}

  const handleFeedbacks = option => { 
    if (option === "good")  setGood(good + 1);
    if (option === "neutral")  setNeutral(neutral + 1);
    if (option === "bad")  setBad(bad + 1);
  }
  
  
    
    const totalFeedbacks = good + neutral + bad;
    const postitveFeedbacks = Math.round((good / totalFeedbacks) * 100);
     
  
  return (
      
        <SectionFeedback title="Please leave feedback">
         <FeedbackOptions
           options={Object.keys(feedbacks)}
          onLeaveFeedback={handleFeedbacks}/>
         
         < Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={totalFeedbacks}
            positivePercentage={postitveFeedbacks ? postitveFeedbacks : 0}
          />
         
         </SectionFeedback>
         
       
  );
   
};
