import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getInterestCategories, updateUserInterestCategories } from '../../../services/profile.services';

function InterestsSelection({ onNext, onPrev}) {

    const history = useHistory(); 
    const [userInterests, setUseInterests] = useState([]);
    const [interestsList, setInterestList] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false);

    useEffect(() => {
      getInterestCategories()
      .then((interests) => {
        console.log("Interests", interests);
        setInterestList(interests);
      })
      .catch((error) => console.error(error))
    }, [])

    const handleSelect = (interest) => {
        let newValue = [...userInterests];
        if(userInterests.includes(interest))
        {
        newValue =  userInterests.filter((items) => items.CategoryId !== interest.CategoryId);
        }
        else {
        newValue.push(interest);
        }
        setUseInterests(newValue);
        console.log(newValue);
    }

    const handleSubmit = () => {
      if(userInterests.length >= 3) {
        setLoading(true);
        const payload = [];
        console.log(userInterests)
        for(let item of userInterests) payload.push(item.CategoryId);
        updateUserInterestCategories(payload)
        .then(() => history.push("/home"))
        .catch((error) => setError(error.message))    
        .finally(() => setLoading(false))
      }
      else {
        setError("Please select atleast 3 interests of your choice to help us suggest better and relevant events to you.");
      }
    } 


    return (
        <div id="signup-panel-5" className="process-panel-wrap is-active">
            <div className="form-panel">
            <div className="success-text">
                <h3>We are almost done. Select a few of your Interests</h3>
                </div>
                <div>
                <div className="columns is-multiline flex-portrait mt-5">
                {
                    interestsList.map(
                    item => <div className="column is-4">
                    <div
                        className={`card signup-interests-card ${ userInterests. includes(item) ? "is-selected" : ""}`} 
                        onClick={() => handleSelect(item)}
                    >
                        <img src={item.ImageURL} style={{maxHeight: '40px'}}/>
                        <p>{item.CategoryName}</p>
                    </div>
                    </div>)
                }
                <div>

                </div>
                </div>
                {
                  error &&
                  <p  className="is-fullwidth m-2" style={{textAlign:'center', color: 'red'}}>
                  {error}
                  </p>
                }
                <button
                  id="signup-finish"
                  className="button is-fullwidth is-solid accent-button"
                  onClick={handleSubmit}
                >
                  { loading ? <i className="fa fa-spinner fa-spin mr-4" /> : "Let Me In"}
                </button>
            </div>
            </div>
        </div> 
    )
}

export default InterestsSelection;
