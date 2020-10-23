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

export interface PhaseTwoProps {}

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

export default function PhaseTwo(props: PhaseTwoProps) {
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
          <ListItemText primary="Rest" secondary="2.5 min" />
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
          <ListItemText primary="Reps" secondary="10" />
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
          Phase two
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom color="textSecondary">
            At the start of each phase the rep range will change, this causes a
            change in stimulus and allows for continued growth. As well as this
            we will continue our progression up the weights inducing the effects
            of progressive overload.
          </Typography>
          <Typography gutterBottom>
            For this phase we will be dropping the repetitions down to 10 and
            focus on slow controlled reps. This hypertrophy inducing zone will
            continue to cause an environment in which the fascia will adapt by
            becoming thicker.
          </Typography>
          <Typography gutterBottom color="textSecondary">
            During this phase tempo is of the upmost importance, make sure each
            rep takes exactly 4 seconds, as we want the muscle to be under
            tension for at least 40 seconds throughout this phase.
          </Typography>
          <Typography gutterBottom color="textSecondary">
            As always the eccentric ( lowering ) phase is the most important,
            ensure it lasts 2 seconds with 1 second squeeze at the top.
          </Typography>
          <Typography gutterBottom color="textSecondary">
            The final day of this phase will be your 10 rep max on all
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
