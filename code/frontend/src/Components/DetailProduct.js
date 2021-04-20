import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: 20,
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
                                <Grid container alignItems="stretch" spacing={2}>
                                    <Grid item xs={12} style={{ display: 'flex' }}>
                                        <Grid item xs={2}></Grid>
                                        <Grid item style={{ display: 'flex' }} xs={3} align='center'>
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
                                        <Grid item xs={4} style={{marginLeft: "2%"}}>
                                            
                                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Notebook Asus D533UA-BQ001TS</h1>
                                            <hr></hr>
                                            <br></br>
                                            <p className="leading-relaxed">หน้าจอแสดงผลขนาด 15.6 ระดับ FHD </p>
                                            <p className="leading-relaxed">หน่วยประมวลผล AMD Ryzen 7 4700U Processor</p>
                                            <p className="leading-relaxed">หน่วยประมวลผลกราฟิก AMD Radeon RX 640 Graphics</p>
                                            <p className="leading-relaxed">หน่วยความจุ 512GB และ RAM DDR4 8GB</p>
                                            <br></br>
                                            <hr></hr>
                                            <br></br>
                                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <h1 className="title-font font-medium text-2xl text-gray-900" style={{ margin: "2%" }}>$58.00</h1>
                                                <button className=" text-white bg-red-500 border-0 py-2 px-6  focus:outline-none hover:bg-red-600 rounded">Add Cart </button>
                                            </div>
                                        </Grid>
                                        <Grid item xs={2}></Grid>
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

export default DetailProduct