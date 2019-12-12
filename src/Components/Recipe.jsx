import React, {useState} from 'react';
// import style from './recipe.module.css';
import {
  Avatar,
  Chip,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Collapse,
  makeStyles} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {amber} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  avatar: {
    color: '#fff',
    backgroundColor: amber[500],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'cover'
  }
}))

const Recipe = ({title, calories, cautions, img, ingredients}) => {
  const [openList, setOpenList] = useState(false);
  const [rising, setRising] = useState(false);
  const classes = useStyles();

  const showHandler = () => {
    setOpenList(!openList);
    setRising(!rising);
  };

  return (
    <Card
      raised={rising}
      // className={style.recipe}
    >

      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>{title.slice(0, 2).toLowerCase()}</Avatar>
        }
        title={title}
        subheader={`Calories: ${calories.toFixed()}`}
        action={
          <IconButton aria-label="settings" onClick={() => {setRising(!rising)}} >
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        className={classes.media}
        image={img}
        title={title}
      />
      <CardContent>
        {
          cautions.map((caution, index) => (
            <Chip key={index} label={caution} size="small" color="secondary" />
          ))
        }
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Show Ingriedients" onClick={showHandler}>
          {openList ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </CardActions>
      <Collapse in={openList} timeout={1000} unmountOnExit>
        <List dense={true}>
          {ingredients.map((ingredient, index) => (
            <ListItem key={index} >
              <ListItemText
                primary={ingredient.text}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Card>
  );
};

export default Recipe;
