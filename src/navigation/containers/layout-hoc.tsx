import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Menu from './menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const LayoutWrapper = ({ classes, children }) => {
  const menu = <Menu />;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={3}>
          {menu}
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(LayoutWrapper);
