import React, {useState} from 'react';
// import style from './recipe.module.css';
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  makeStyles} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {amber} from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  avatar: {
    color: '#fff',
    backgroundColor: amber[500],
  }
}))

const Recipe = ({title, calories, img, ingredients}) => {
  const [openList, setOpenList] = useState(false);
  const classes = useStyles();

  const showHandler = () => {
    setOpenList(!openList);
  };

  return (
    <Card
      // className={style.recipe}
    >
      <CardContent>
        <div>
          <Avatar className={classes.avatar}>{title.slice(0, 2)}</Avatar><Typography variant="h5">{title}</Typography>
          <Avatar src={img} alt={title} />
        </div>
        <List dense={true}>
          <ListItem button>
            <ListItemText primary={`Calories: ${calories.toFixed()}`} />
          </ListItem>
          <ListItem button onClick={showHandler}>
            <ListItemText primary="Show Ingriedients" />
            {openList ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
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
        </List>
      </CardContent>
    </Card>
  );
};

export default Recipe;
