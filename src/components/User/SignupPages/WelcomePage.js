import React, {useState, useEffect,  useContext} from 'react';
import authContext from "../../../Context/authContext";
import { refreshTokenSetup } from "../../../utils/refreshToken";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from 'react-facebook-login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const stepValue =1;

function WelcomePage({ onNext }) {
  let clientId = process.env.REACT_APP_CLIENT_ID_GOOGLE;
  let fbAppId = process.env.REACT_APP_ID_FACEBOOK;

  const { allData, setAllData } = useContext(authContext);
  const [userDetails, setUserDetails] = useState(allData.userDetails);

  const onGoogleSignupSuccess = (data) => {
    const userData = data.profileObj;
    let newUserDetails = {};
    if(userData.imageUrl) newUserDetails.profilePicture = userData.imageUrl;
    if(userData.givenName) newUserDetails.firstName = userData.givenName;
    if(userData.familyName) newUserDetails.lastName = userData.familyName;
    if(userData.email) newUserDetails.emailAddress = userData.email;
    newUserDetails.profileType = 'social';
    setUserDetails(newUserDetails);
    // refreshTokenSetup(data);
    onNext();
  }

  const handleNext = () => {
    let newUserDetails = {};
    newUserDetails.profileType = 'native';
    setUserDetails(newUserDetails)
  }

  useEffect(() => {
    setAllData({ ...allData, userDetails });
  }, [userDetails])

  useEffect(() => {
    if(allData.userDetails && allData.userDetails.profileType) {
      if(allData.userDetails.profileType === 'native') {
        onNext();
      }
    }
  }, [allData])

  const onGoogleSignupFailure = () => {
    console.log("error");
  }

  return (
      <div
        id="signup-panel-1"
        className={`process-panel-wrap ${
          stepValue === 1 ? "is-active" : "is-narrow"
        }`}>
        <div
          className="columns mt-4"
          style={{ justifyContent: "center" }}>
          <div className="column is-4">
            <div className="account-type">
              <div className="type-image">
                <img
                  className="type-illustration"
                  src="assets/img/illustrations/signup/type-2.svg"
                  alt=""
                />
                <img
                  className="type-bg light-image"
                  src="assets/img/illustrations/signup/type-2-bg.svg"
                  alt=""
                />
                <img
                  className="type-bg dark-image"
                  src="assets/img/illustrations/signup/type-2-bg-dark.svg"
                  alt=""
                />
              </div>
              <h3>Welcome to Virtual Cata</h3>
              <p>
                Create an account to be able to do some awesome
                things.
              </p>
              <button
                className="button is-fullwidth process-button"
                data-step={"step-dot-2"}
                onClick={handleNext}>
                Signup with Email
              </button>
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign Up"
                onSuccess={onGoogleSignupSuccess}
                onFailure={onGoogleSignupFailure}
                cookiePolicy={"single_host_origin"}
                style={{ marginTop: "100px" }}
                isSignedIn={true}
                scope={"https://www.googleapis.com/auth/user.gender.read"}
                className="button is-fullwidth process-button"
                data-step={"step-dot-2"}
              />
              <FacebookLogin
                appId={fbAppId}
                fields="name,email,picture"
                // onClick={(e) => console.log("fb",e)}
                callback={(e) => console.log("fb callback",e)}
                // render={renderProps => (
                //   <button onClick={renderProps.onClick}>This is my custom FB button</button>
                // )}
              
                size="small"
                fields="Sign Up"
                
                buttonStyle={
                  {
                    marginTop: "20px",
                    width:'100%',
                    width: '100%',
                    background: 'white',
                    boxShadow: '0px 5px 7px -4px #8080809c',
                    border: '1px solid #ddd',
                    borderRadius: '3px',
                    color: '#4267B2',
                    textTransform: 'capitalize',
                    fontWeight: '600',
                    fontSize: '14px',
                    height: '40px',
                  }
                }
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default WelcomePage
