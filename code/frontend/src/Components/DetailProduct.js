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

const DetailProduct = () => {
    const classes = useStyles();

    return (

        <React.Fragment>
            <section className="#">
                <div className="font-sans">
                    <div className="relative mt-8 flex flex-col lg:justify-center items-center">
                        <div className="mt-5 relative lg:max-w-screen-2xl w-full">
                            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                                    <i className="fas fa-shopping-cart"></i> Detail Name Products
                                </h1>
                                <hr></hr>
                                <br></br>
                                <div className="container">
                                    <div className="row" >
                                        <div className="col-md-3"></div>
                                        <div className="col-md-6" style={{ backgroundColor: "" }}>
                                            <div className="row">
                                                <div className="col-4" style={{ justifyItems: "center" }}>
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
                                                <div className="col-8">
                                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                                                    <hr></hr>
                                                    <br></br>
                                                    <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                                                    <br></br>
                                                    <hr></hr>
                                                    <br></br>
                                                    <div className="flex">
                                                        <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                                                        
                                                        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add Cart </button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="col-md-3"></div>
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

export default DetailProduct