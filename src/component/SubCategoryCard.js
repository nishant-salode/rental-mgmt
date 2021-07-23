import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import './CategoryCard.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });


function SubCategoryCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
      <CardActionArea>
        <img src={"./assets/category/subcategory/"+props.data.image} alt="Not found"/>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        {props.data.name}
          <span className="categoryCard__navigationIcon">{'>'}</span>
        </Button>
      </CardActions>
    </Card>
  );
}

export default SubCategoryCard
