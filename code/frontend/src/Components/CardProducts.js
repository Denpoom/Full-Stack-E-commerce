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
                                    <i className="fas fa-shopping-cart"></i> Products
                                </h1>
                                <hr></hr>
                                <br></br>
                                <div className="row" >
                                    <div className="col-md-2" >
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://static.thairath.co.th/media/dFQROr7oWzulq5FZUIErQIKM7rH2vOhMMAwOSuvhR6wKJQcSFfQXgcRIh3VzHtN3z94.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                        <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            iPhone 12 mini
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            จอภาพ iPhone 12 mini มีมุมมนที่รับกับดีไซน์แบบโค้งอันงดงาม
และมุมทั้งหมดนี้อยู่ในสี่เหลี่ยมมุมฉากมาตรฐาน และเมื่อวัดเป็นรูป
สี่เหลี่ยมมุมฉากมาตรฐานแล้ว 
                                                        </Typography>
                                                        </a>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                    <div className="col-md-2">
                                    <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://static.thairath.co.th/media/dFQROr7oWzulq5FZUIErQIKM7rH2vOhMMAwOSuvhR6wKJQcSFfQXgcRIh3VzHtN3z94.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                        <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            iPhone 12 mini
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            จอภาพ iPhone 12 mini มีมุมมนที่รับกับดีไซน์แบบโค้งอันงดงาม
และมุมทั้งหมดนี้อยู่ในสี่เหลี่ยมมุมฉากมาตรฐาน และเมื่อวัดเป็นรูป
สี่เหลี่ยมมุมฉากมาตรฐานแล้ว 
                                                        </Typography>
                                                        </a>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                    <div className="col-md-2">
                                    <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://static.thairath.co.th/media/dFQROr7oWzulq5FZUIErQIKM7rH2vOhMMAwOSuvhR6wKJQcSFfQXgcRIh3VzHtN3z94.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                        <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            iPhone 12 mini
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            จอภาพ iPhone 12 mini มีมุมมนที่รับกับดีไซน์แบบโค้งอันงดงาม
และมุมทั้งหมดนี้อยู่ในสี่เหลี่ยมมุมฉากมาตรฐาน และเมื่อวัดเป็นรูป
สี่เหลี่ยมมุมฉากมาตรฐานแล้ว 
                                                        </Typography>
                                                        </a>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                    <div className="col-md-2">
                                    <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://static.thairath.co.th/media/dFQROr7oWzulq5FZUIErQIKM7rH2vOhMMAwOSuvhR6wKJQcSFfQXgcRIh3VzHtN3z94.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                        <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            iPhone 12 mini
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            จอภาพ iPhone 12 mini มีมุมมนที่รับกับดีไซน์แบบโค้งอันงดงาม
และมุมทั้งหมดนี้อยู่ในสี่เหลี่ยมมุมฉากมาตรฐาน และเมื่อวัดเป็นรูป
สี่เหลี่ยมมุมฉากมาตรฐานแล้ว 
                                                        </Typography>
                                                        </a>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                    <div className="col-md-2">
                                    <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://static.thairath.co.th/media/dFQROr7oWzulq5FZUIErQIKM7rH2vOhMMAwOSuvhR6wKJQcSFfQXgcRIh3VzHtN3z94.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                        <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            iPhone 12 mini
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            จอภาพ iPhone 12 mini มีมุมมนที่รับกับดีไซน์แบบโค้งอันงดงาม
และมุมทั้งหมดนี้อยู่ในสี่เหลี่ยมมุมฉากมาตรฐาน และเมื่อวัดเป็นรูป
สี่เหลี่ยมมุมฉากมาตรฐานแล้ว 
                                                        </Typography>
                                                        </a>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                    <div className="col-md-2">
                                    <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="https://static.thairath.co.th/media/dFQROr7oWzulq5FZUIErQIKM7rH2vOhMMAwOSuvhR6wKJQcSFfQXgcRIh3VzHtN3z94.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                        <a href='/product/detail'>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            iPhone 12 mini
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            จอภาพ iPhone 12 mini มีมุมมนที่รับกับดีไซน์แบบโค้งอันงดงาม
และมุมทั้งหมดนี้อยู่ในสี่เหลี่ยมมุมฉากมาตรฐาน และเมื่อวัดเป็นรูป
สี่เหลี่ยมมุมฉากมาตรฐานแล้ว 
                                                        </Typography>
                                                        </a>
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