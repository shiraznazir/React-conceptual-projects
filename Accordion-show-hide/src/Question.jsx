import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
    const [visible, setVisible] = useState(false);
    
    const toggleVisible = ()=>{
        setVisible(!visible);
    }
    
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}               
                <p>{visible?info:null}</p>
                <span>
                    {visible?(
                        <button onClick={toggleVisible} className="btn" >-</button>
                    ):(
            
                        <button onClick={toggleVisible} className="btn">+</button>
                    )}
                </span>
				
			</header>
			{/* make this render conditionally */}
		</article>
	)
}

export default Question
