import React, {useState} from 'react'

function QuestionCard(props) {

    const [qstate,setState] = useState(false);

    function qclick(){
        qstate === true ? setState(false) : setState(true);
    }
    return (
        <div>
            <button className="question__card" onClick={()=>{
                qclick();
            }}>
                <p>{props.q}</p>
                <p className={`${qstate === true ? "obtn" : "cbtn"}`}>+</p>
            </button>
            <div className={`${qstate === true ? "question__card__content open" : "question__card__content closed"}`}>
                <p>{props.ans}</p>
            </div>
        </div>
    )
}

export default QuestionCard
