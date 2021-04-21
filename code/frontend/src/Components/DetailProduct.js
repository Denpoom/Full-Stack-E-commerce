import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
<<<<<<< HEAD

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

=======
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
>>>>>>> cbeb370307546724608957ed405ab17c1c5f8ba0
import Typography from '@material-ui/core/Typography';
import { useQuery } from '@apollo/client';
import { PRODUCTS_QUERY } from '../Graphql/productsQuery';
import { useParams } from 'react-router-dom'
<<<<<<< HEAD
import Grid from '@material-ui/core/Grid';
=======
>>>>>>> cbeb370307546724608957ed405ab17c1c5f8ba0

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

<<<<<<< HEAD
const DetailProduct = () => {
    const { id_product } = useParams()
    const classes = useStyles();
    const { loading, error, data } = useQuery(PRODUCTS_QUERY)
    if (loading){
        console.log("loading")
        return 'Loading ...'
    }
    if (error) {
        console.log("error")
=======

// const CardList = () => {
//     const classes = useStyles();
//     const { loading, error, data } = useQuery(PRODUCTS_QUERY)
//     if (loading) {
//       return 'Loading ...'
//     }
//     if (error) {
//       return 'Error !!'
//     }
//     console.log(data)
const DetailProduct = () => {
    const { id_product } = useParams()
    console.log(id_product)
    const classes = useStyles();
    const { loading, error, data } = useQuery(PRODUCTS_QUERY)
    if (loading){
        return 'Loading ...'
    }
    if (error) {
>>>>>>> cbeb370307546724608957ed405ab17c1c5f8ba0
        return 'Error !!'
    }
    console.log(data)
    return (

        <React.Fragment>
            <section className="#">
                <div className="font-sans">
                    <div className="relative mt-8 flex flex-col lg:justify-center items-center">
                        <div className="mt-5 relative lg:max-w-screen-2xl w-full">
                            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                                    <i className="fas fa-shopping-cart"></i> Detail Test Product
                                </h1>
                                <hr></hr>
                                <br></br>
<<<<<<< HEAD
                                <Grid container alignItems="stretch" spacing={2}>
                                    {data.products.map((res) => {
                                    if (id_product === res._id) {
                                        return (
                                            <Grid item xs={12} style={{ display: 'flex' }}>
                                            <Grid item xs={2}></Grid>
                                            <Grid item style={{ display: 'flex' }} xs={3} align='center'>
                                                <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={res.url}
                                                            title="Contemplative Reptile"
                                                        />
                                                        <CardContent>
                                                            
                                                                <Typography gutterBottom variant="h7" component="h3">
                                                                {res.name}
                                                            </Typography>
                                                                <Typography variant="body2" color="textSecondary" component="p">
                                                                    15.6 inch / AMD Athlon 3050U / 4GB DDR4 / 1TB / Integrated Graphics / Win 10
                                                            </Typography>
                                                                <Typography variant="h6" color="textinfo" align="right" component="p">
                                                                    ${res.price}
                                                            </Typography>
                                                            
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={4} style={{marginLeft: "2%"}}>
                                                
                                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{res.name}</h1>
                                                <hr></hr>
                                                <br></br>
                                                <p className="leading-relaxed">{res.detail} </p>
                                                
                                                <br></br>
                                                <hr></hr>
                                                <br></br>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                    <h1 className="title-font font-medium text-2xl text-gray-900" style={{ margin: "2%" }}>${res.price}</h1>
                                                    <button className=" text-white bg-red-500 border-0 py-2 px-6  focus:outline-none hover:bg-red-600 rounded">Add Cart </button>
                                                </div>
                                            </Grid>
                                            <Grid item xs={2}></Grid>
                                        </Grid> 
=======
                                <div className="container">
                                    
                                    {data.products.map((res) => {
                                    if (id_product == res._id) {
                                        return (
                                    <div className="row">
                                        <div className="col-md-3"></div>
                                        <div className="col-md-6" style={{ backgroundColor: "" }}>
                                            <div className="row">
                                                <div className="col-4" style={{ justifyItems: "center" }}>
                                                <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={res.url}
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                      
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {res.name}
                                                        </Typography>
                                                        
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                                </div>
                                                <div className="col-8">
                                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{res.name}</h1>
                                                    <hr></hr>
                                                    <br></br>
                                                    <p className="leading-relaxed">{res.detail} </p>
                                                    <br></br>
                                                    <hr></hr>
                                                    <br></br>
                                                    <div className="flex">
                                                        <span className="title-font font-medium text-2xl text-gray-900">${res.price}</span>
                                                        
                                                        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add Cart </button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="col-md-3"></div>
                                    </div> 
>>>>>>> cbeb370307546724608957ed405ab17c1c5f8ba0
                                    )
                                }
                            }
                                )}
<<<<<<< HEAD
                                </Grid>
=======
                                </div>
>>>>>>> cbeb370307546724608957ed405ab17c1c5f8ba0
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default DetailProduct