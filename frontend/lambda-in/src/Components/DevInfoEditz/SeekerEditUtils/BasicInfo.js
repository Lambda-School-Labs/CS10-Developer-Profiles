import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import StateCapsule from '../../utilityComponents/StateCapsule/StateCapsule';

// eslint-disable-next-line react/prop-types
const BasicInfo = ({ userInfo }) => {
  const schema = {
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    desiredTitle: userInfo.desiredTitle,
    currentLocation: userInfo.currentLocation,
  };

  return (
    <StateCapsule schema={schema} object={schema}>
      {({ stateCapsule }) => (
        <div className="smallInputContainer">
          <div className="expansionPanel">
            <div className="inputField">
              <TextField
                id="edit-firstName"
                label="First Name"
                fullWidth
                value={stateCapsule.firstName}
                margin="normal"
                variant="outlined"
              />
            </div>

            <div className="inputField">
              <TextField
                id="edit-lastName"
                label="Last Name"
                fullWidth
                value={stateCapsule.lastName}
                margin="normal"
                variant="outlined"
              />
            </div>

            <div className="inputField">
              <TextField
                id="edit-desiredTitle"
                label="Desired Title"
                fullWidth
                value={stateCapsule.desiredTitle}
                margin="normal"
                variant="outlined"
              />
            </div>

            {/* TODO : WIRE InputGeolocation component here */}
            {/* <div className="inputField">
              <TextField
                id="edit-currentLocation"
                label="Current Location"
                fullWidth
                value={stateCapsule.currentLocation}
                margin="normal"
                variant="outlined"
              />
            </div> */}
          </div>
          <div className="imageContainer">
            <img
              className="displayPic"
              src={`https://robohash.org/1${stateCapsule.firstName}`}
              alt="Italian "
            />
          </div>
        </div>
      )}
    </StateCapsule>
  );
};

BasicInfo.prototype = {
  userInfo: PropTypes.shape({}),
};

export default BasicInfo;
