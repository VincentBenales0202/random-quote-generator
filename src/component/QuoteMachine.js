import React from 'react';
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'
import '../FontAwesomeIcons'

const QuoteMachine = ({selectedQuote, assignIndex}) => {
    return(
        <React.Fragment>
                <React.Fragment>
                    <div id="iconText">
                        <FontAwesomeIcon className="margin color" icon="quote-left"/>
                        <p id="text">{selectedQuote.quote}</p> 
                        <FontAwesomeIcon className="margin" icon="quote-right"/>
                    </div>
                    <p id="author">- {selectedQuote.author}</p>
                </React.Fragment>
            <div id="buttons">
                <div className="icons">
                    <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote} - ${selectedQuote.author}&hastags=quotes`} target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className="btn tweet"/>
                    </a>
                    <a id="tumblr-quote" href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${selectedQuote.quote} - ${selectedQuote.author}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`} target="_blank">
                        <FontAwesomeIcon icon={faTumblr} className="btn"/>
                    </a>
                </div>
                <Button buttonDisplayName="New Quote" clickHandler={assignIndex}/>
            </div>
        </React.Fragment>
    )
}

export default QuoteMachine