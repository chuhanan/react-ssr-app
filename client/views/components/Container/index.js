import React from 'react'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    margin: "70px 30px",
    padding: "30px"
  }
}

export default withStyles(styles)((props) => {
  return (
    <Paper className={props.classes.root}>
      { props.children }
    </Paper>
  )
})
