import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
        maxWidth: 340,
        height: "100%",
        marginBottom: 25,
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
                                    <i className="fas fa-shopping-cart"></i> Products
                                </h1>
                                <hr></hr>
                                <br></br>
                                <Grid container alignItems="stretch" spacing={2}>
                                    <Grid item style={{ display: 'flex' }} xs={3}>
                                        <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://img.advice.co.th/images_nas/pic_product4/A0135183/A0135183OK_ORI_1.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h7" component="h3">
                                                            Notebook Asus D533UA-BQ001TS
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            15.6 inch / AMD Athlon 3050U / 4GB DDR4 / 1TB / Integrated Graphics / Win 10
                                                        </Typography>
                                                        <Typography variant="h6" color="textinfo" align="right" component="p">
                                                            $50.00
                                                        </Typography>
                                                    </a>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item style={{ display: 'flex' }} xs={3}>
                                        <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://img.advice.co.th/images_nas/pic_product4/A0134865/A0134865OK_ORI_1.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h7" component="h3">
                                                            Notebook Acer Aspire A515-44G-R67L/T003
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            15.6 inch / AMD Ryzen 7 4700U / 8GB DDR4 / 512GB SSD / Radeon RX 640 2GB GDDR5 / Win 10
                                                        </Typography>
                                                        <Typography variant="h6" color="textinfo" align="right" component="p">
                                                            $80.00
                                                        </Typography>
                                                    </a>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item style={{ display: 'flex' }} xs={3}>
                                        <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://static.thairath.co.th/media/dFQROr7oWzulq5FZUIErQIKM7rH2vOhMMAwOSuvhR6wKJQcSFfQXgcRIh3VzHtN3z94.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h7" component="h3">
                                                            Notebook Asus D533UA-BQ001TS
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            15.6 inch / AMD Athlon 3050U / 4GB DDR4 / 1TB / Integrated Graphics / Win 10
                                                        </Typography>
                                                        <Typography variant="h6" color="textinfo" align="right" component="p">
                                                            $50.00
                                                        </Typography>
                                                    </a>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item style={{ display: 'flex' }} xs={3}>
                                        <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://static.thairath.co.th/media/dFQROr7oWzulq5FZUIErQIKM7rH2vOhMMAwOSuvhR6wKJQcSFfQXgcRIh3VzHtN3z94.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h7" component="h3">
                                                            Notebook Asus D533UA-BQ001TS
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            15.6 inch / AMD Athlon 3050U / 4GB DDR4 / 1TB / Integrated Graphics / Win 10
                                                        </Typography>
                                                        <Typography variant="h6" color="textinfo" align="right" component="p">
                                                            $50.00
                                                        </Typography>
                                                    </a>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item style={{ display: 'flex' }} xs={3}>
                                        <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://static.thairath.co.th/media/dFQROr7oWzulq5FZUIErQIKM7rH2vOhMMAwOSuvhR6wKJQcSFfQXgcRIh3VzHtN3z94.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h7" component="h3">
                                                            Notebook Asus D533UA-BQ001TS
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            15.6 inch / AMD Athlon 3050U / 4GB DDR4 / 1TB / Integrated Graphics / Win 10
                                                        </Typography>
                                                        <Typography variant="h6" color="textinfo" align="right" component="p">
                                                            $50.00
                                                        </Typography>
                                                    </a>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item style={{ display: 'flex' }} xs={3}>
                                        <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://static.thairath.co.th/media/dFQROr7oWzulq5FZUIErQIKM7rH2vOhMMAwOSuvhR6wKJQcSFfQXgcRIh3VzHtN3z94.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h7" component="h3">
                                                            Notebook Asus D533UA-BQ001TS
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            15.6 inch / AMD Athlon 3050U / 4GB DDR4 / 1TB / Integrated Graphics / Win 10
                                                        </Typography>
                                                        <Typography variant="h6" color="textinfo" align="right" component="p">
                                                            $50.00
                                                        </Typography>
                                                    </a>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item style={{ display: 'flex' }} xs={3}>
                                        <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://static.thairath.co.th/media/dFQROr7oWzulq5FZUIErQIKM7rH2vOhMMAwOSuvhR6wKJQcSFfQXgcRIh3VzHtN3z94.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h7" component="h3">
                                                            Notebook Asus D533UA-BQ001TS
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            15.6 inch / AMD Athlon 3050U / 4GB DDR4 / 1TB / Integrated Graphics / Win 10
                                                        </Typography>
                                                        <Typography variant="h6" color="textinfo" align="right" component="p">
                                                            $50.00
                                                        </Typography>
                                                    </a>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default CardList