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

export interface PhaseFourProps {}

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

export default function PhaseFour(props: PhaseFourProps) {
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
          <ListItemText primary="Rest" secondary="3 min" />
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
          <ListItemText primary="Reps" secondary="2" />
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
          Phase four
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom color="textSecondary">
            So now you have completed the 6 week strength and size program and
            you are left with two options...
          </Typography>
          <Typography gutterBottom>
            Option 1: If you are not an advanced lifter or you do not want to do
            eccentric workouts ; 1 - 2 weeks of strategic deconditioning and
            then restart the program with heavier weights than previously used.
          </Typography>
          <Typography gutterBottom color="textSecondary">
            Option 2: You are an advanced lifter and really want to break
            through those annoying plateus ; Begin 2 weeks of eccentric workouts
            with 5 sets of 2 negative reps at 105% - 110% of your 1rm
          </Typography>
          <Typography gutterBottom color="textSecondary">
            At the end of these 2 weeks you are COMPLETELY DONE.
          </Typography>
          <Typography gutterBottom color="textSecondary">
            Now it's time to take those 9-12 days of strategic deconditioning
            and then restart the program with heavier weights than previously
            used.
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
