import React from 'react'
//mui
import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import { Face } from 'material-ui-icons'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const style = {
  root: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px 30px"
  },
  flex: 1,
  text: {
    alignItems: "center",
    alignContent: "center"
  },
  icon: {
    height: "1.5rem",
    width: "2rem"
  }
}

export default withStyles(style)((props, context) => {
  const classes = props.classes
  return (
    <AppBar className={classes.root}>
      <IconButton color="accent" className={classes.icon}><Face /></IconButton>
      <Typography type="title" color="inherit" className={classes.flex}>
        给我一支猫
      </Typography>
      <Button raised color="accent">登录</Button>
    </AppBar>
  )
})
