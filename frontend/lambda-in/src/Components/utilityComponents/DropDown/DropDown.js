import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Icon from '@material-ui/core/Icon';

/**
 * A wrapper component for @material-ui <ExpansionPanel />
 *
 * @description A Dropdown component wrapper, which accepts any type of children.
 *
 * @function A functional component.
 * @prop {string} header - Text ot be displayed when the Dropdown is collapsed.
 *
 * @example How to use it
 * <DropDown header="Heder text to display here">
 */
// eslint-disable-next-line react/prop-types
const DropDown = ({ header, children }) => (
  <Fragment>
    <div className="panelMargin">
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon>add_circle</Icon>}>
          <Typography>{header}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="expansionPanel">{children}</div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  </Fragment>
);

DropDown.propTypes = {
  header: PropTypes.string.isRequired,
};

export default DropDown;
