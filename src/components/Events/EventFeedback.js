import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { StarRatingInput } from '../core/StarRating';
import { saveFeedback } from '../../services/feedback.services';

const EventFeedback = () => {

    const onSubmit = async () => {
        try {
            setLoading(true);
            await saveFeedback(feedback);
        }
        catch (err) {
            console.error(err)            
        }
        finally {
            setLoading(false);
        }
    }

    const { id } = useParams();
    const [ feedback, setFeedback ] = useState({ eventid : id, userId: 145 });
    const [ loading, setLoading ] = useState(false);


    useEffect(() => {
        console.log("Feedback", feedback);
    }, [feedback])

    return (
        <>
            <div className="modal share-modal is-xsmall has-light-bg is-active">
                <div className="modal-content">
                    <div className="card mt-5" style={{ maxWidth: '1000px', margin:"0px auto"}}>
                        <h1 style={{fontSize:'1.5rem'}} className="text-center mb-5 text-bold">Let us know how we did.</h1>
                        <div className="columns">
                            <div className="column text-center">
                                <StarRatingInput className="ml-4 text-size-2 text-gold" onChange={(rating) => setFeedback({...feedback, pRating: rating })}/>
                                <span>Rating for Presenter</span>
                            </div>
                            <div className="column text-center">
                                <StarRatingInput className="ml-4 text-size-2 text-gold" onChange={(rating) => setFeedback({...feedback, hRating: rating })}/>
                                <span>Rating for Host</span>
                            </div>
                            <div className="column text-center">
                                <StarRatingInput className="ml-4 text-size-2 text-gold" onChange={(rating) => setFeedback({...feedback, vcRating: rating })}/>
                                <span>Rating for VirtualCata</span>
                            </div>
                        </div>
                        <div>
                            <span>Feedback :</span>
                            <textarea
                            className="w-100"
                            rows="5"
                            style={{ fontSize:'1.1rem', padding:'1rem' }}
                            onChange={(e) => setFeedback({...feedback, message: e.target.value })}
                            ></textarea>        
                            <p className="text-center mt-3">
                                <button className="button is-solid mr-3">Cancel</button>
                                <button className="button is-solid accent-button" onClick={onSubmit}>{ loading ? <i class="fa fa-spinner fa-spin" /> : 'Submit Feedback'}</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventFeedback;
