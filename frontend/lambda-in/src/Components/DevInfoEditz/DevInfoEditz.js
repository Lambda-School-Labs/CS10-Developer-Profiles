import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import './DevInfoEditz.css';
import BioSkills from '../utilityComponents/SeekerEditUtils/BioSkills';

/**
 * Form handling user profile updates
 *
 * @description This component handle in a local-state all data modification.
 * The global state is updeated only when the PUT request response with status 200
 */
export default class DevInfoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);
  }

  /**
   * Get a copy of user's data to keep global state inmutable.
   */
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { getGS } = this.props;
    const userInfo = getGS('userInfo');
    this.setState({ ...userInfo });
  }

  /**
   * Sync local state with input field.
   */
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  update() {
    // eslint-disable-next-line react/prop-types
    const { getGS, setGS } = this.props;
    const userInfo = getGS('userInfo');
    const { _id } = userInfo;

    if (_id) {
      /**
       * Set in GS 'updateState': 'updateState' = 'updating'
       */
      setGS({ updateState: 'updating' });

      /**
       * axios.put: Make an HTTP PUT request
       *
       * @description update the 'seekers' model.
       * @param {string} endpoint - API endppoint
       * @param {objetc} userInfo - Data to be updated
       * @param {object} httpHeaders - Add Authorization header.
       * @return {promise}
       * @example axios.put( endpoint, userInfo, httpHeaders )
       */
      // prettier-ignore
      axios
        // axios 1 argument is URL and 2 argument is data 3 argument is options
        .put(
          `/api/seekers/${_id}`,
          {
            ...userInfo, // UPDATE current userInfo's state. TODO: pass only updated fields.
          },
          {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          },
        )
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log('UPDATE USER', { status: response.status });
          /**
           * Set in GS 'updateState': 'updateState' = 'updated'
           */
          setGS({ updateState: 'updated' });
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          /**
           * Set in GS 'updateState': 'updateState' = 'error'
           */
          setGS({ updateState: 'error' });
        });
    } else {
      // eslint-disable-next-line no-console
      console.log('updating without ID');
      /**
       * Set in GS 'updateState': 'updateState' = 'error'
       */
      setGS({ updateState: 'error' });
      // eslint-disable-next-line no-alert, no-undef
      alert('An error occurred updating your information, please resubmit the form'); // TODO: improve UX
    }
  }

  render() {
    /**
     * Get a reference to APP's global state.
     */
    const userInfo = this.state;
    const { setGS, getGS } = this.props;

    return (
      <div className="EditContainer">
        <Paper className="paperContainer" elevation={1}>
          <Typography variant="display1" gutterBottom align="center">
            Lambda Network
          </Typography>
          <br />
          <form onChange={this.handleChange}>
            <div className="inputRow">
              {/* User basic info: name, desired title, current location */}
              {/* <BasicInfo userInfo={userInfo} /> */}

              {/* SOCIAL LINKS */}
              {/* <SocialLinks userInfo={userInfo} /> */}

              {/* BIO - TOP SKILLS */}
              <BioSkills setGS={setGS} getGS={getGS} userInfo={userInfo} />

              {/* PROJECTS */}
              {/* <Projects userInfo={userInfo} /> */}

              {/* EXPERIENCES */}
              {/* <Experience userInfo={userInfo} /> */}

              {/* EDUCATION */}
              {/* <Education userInfo={userInfo} /> */}

              <div>
                <Button variant="outlined" color="primary" align="center" onClick={this.update}>
                  {' '}
                  Update profile
                </Button>
              </div>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}
