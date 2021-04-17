import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const CardList = () => {
    const classes = useStyles();

    return (

        <React.Fragment>
            <section className="#">
                <div className="font-sans">
                    <div className="relative mt-8 flex flex-col lg:justify-center items-center">
                        <div className="mt-5 relative lg:max-w-screen-2xl w-full">
                            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                                    <i class="fas fa-shopping-cart"></i> Products
                                </h1>
                                <hr></hr>
                                <br></br>
                                <div class="row" >
                                    <div class="col-md-2">
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lizard
                                            </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                            </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div> 
                                    <div class="col-md-2">
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lizard
                                            </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                            </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>  
                                    <div class="col-md-2">
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lizard
                                            </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                            </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div> 
                                    <div class="col-md-2">
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lizard
                                            </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                            </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div> 
                                    <div class="col-md-2">
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lizard
                                            </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                            </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div> 
                                    <div class="col-md-2">
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lizard
                                            </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                            </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div> 
                                </div>






                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default CardList