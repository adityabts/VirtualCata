import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

const interestsList = [
    {
      id:1,
      thumbnail: 'http://simpleicon.com/wp-content/uploads/presentation.png',
      title: 'Food & Beverages',
    },
    {
      id:2,
      thumbnail: 'http://simpleicon.com/wp-content/uploads/presentation.png',
      title: 'Tech & Gadgets',
    },{
      id:3,
      thumbnail: 'http://simpleicon.com/wp-content/uploads/presentation.png',
      title: 'Dating and Social',
    },
    {
      id:4,
      thumbnail: 'https://image.flaticon.com/icons/png/512/2928/2928158.png',
      title: 'Health & Fitness',
    },{
      id:5,
      thumbnail: 'http://simpleicon.com/wp-content/uploads/presentation.png',
      title: 'Cultural Fests',
    },
    {
      id:6,
      thumbnail: 'https://image.flaticon.com/icons/png/512/2928/2928158.png',
      title: 'Science & Literature',
    },
  ];

function InterestsSelection({ onNext, onPrev}) {

    const history = useHistory(); 
    const [userInterests, setUseInterests] = useState([]);
    const [error, setError] = useState(true);
    const handleSelect = (interest) => {
        let newValue = [...userInterests];
        if(userInterests.includes(interest))
        {
        newValue =  userInterests.filter((items) => items.id !== interest.id);
        }
        else {
        newValue.push(interest);
        }
        setUseInterests(newValue);
        console.log(newValue);
    }

    const handleSubmit = () => {
      if(userInterests.length >= 3) {
        history.push("/home");        
      }
      else {
        setError(true);
      }
    } 


    return (
        <div id="signup-panel-5" className="process-panel-wrap is-active">
            <div className="form-panel">
            <img
                className="success-image"
                src="assets/img/illustrations/signup/mailbox.svg"
                alt=""
            />
            <div className="success-text">
                <h3>We are almost done. Select a few of your Interests</h3>
                </div>
                <div>
                <div className="columns is-multiline flex-portrait mt-5">
                {
                    interestsList.map(
                    item => <div className="column is-4">
                    <div
                        className="" 
                        className={`card signup-interests-card ${ userInterests. includes(item) ? "is-selected" : ""}`} 
                        onClick={() => handleSelect(item)}
                    >
                        <img src={item.thumbnail} style={{maxHeight: '40px'}}/>
                        <p>{item.title}</p>
                    </div>
                    </div>)
                }
                <div>

                </div>
                </div>
                {
                  error &&
                  <p  className="is-fullwidth m-2" style={{textAlign:'center', color: 'red'}}>
                  Please select atleast 3 interests of your choice to help us suggest better and relevant events to you.
                  </p>
                }
                <button
                id="signup-finish"
                className="button is-fullwidth"
                onClick={handleSubmit}>
                Let Me In
                </button>
            </div>
            </div>
        </div> 
    )
}

export default InterestsSelection;
