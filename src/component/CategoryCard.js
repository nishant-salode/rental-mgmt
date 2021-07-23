import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import './CategoryCard.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 280
    },
  });

function CategoryCard(props) {
    const classes = useStyles();
    const gotoSubCategory = (e)=>{
      props.setSelectedSubCategory(props.data.subcategories);
      props.setCurrentPage('SUBCATEGORY');
      props.setbreadCrumbs([
        ...props.breadCrumbs,
        props.data.name
      ]);
    }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img src={"./assets/category/"+props.data.image} alt="Not found" onClick={(e) => gotoSubCategory(e)}/>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={(e) => gotoSubCategory(e)}>
        {props.data.name}
          <span className="categoryCard__navigationIcon">{'>'}</span>
        </Button>
      </CardActions>
    </Card>
  );
}

export default CategoryCard
