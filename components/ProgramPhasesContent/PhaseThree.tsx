import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import classes from "*.module.css";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface PhaseThreeProps {}

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function PhaseThree(props: PhaseThreeProps) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Rest" secondary="4 min" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Tempo" secondary="1-1-2" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Reps" secondary="5" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          {/* <Typography
            gutterBottom
            color="textSecondary"
            style={{ color: "#FFD700" }}
          >
            More information...
          </Typography> */}
          <Button variant="contained" onClick={handleClickOpen}>
            More information
          </Button>
        </ListItem>
      </List>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Phase three
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom color="textSecondary">
            So now we move into the main strength building phase, although we
            have been building strength along the way, we now put more emphasis
            on that aspect of our training.
          </Typography>
          <Typography gutterBottom>
            That's not to say we won't be still gaining size here, don't worry,
            we will be..
          </Typography>
          <Typography gutterBottom color="textSecondary">
            As we again change the stimulus that the muscle, the motor neurons
            and the motor units receive, we will continue developing all aspects
            as long as we remain in the environment which we have created by
            training our muscles so frequently.
          </Typography>
          <Typography gutterBottom color="textSecondary">
            For this phase a spotter is absolutely necessary as you risk injury
            training by yourself.
          </Typography>
          <Typography gutterBottom color="textSecondary">
            On the final day of this phase you will lift your 5 rep max for all
            exercises.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained" onClick={handleClose}>
            Let's do this!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
