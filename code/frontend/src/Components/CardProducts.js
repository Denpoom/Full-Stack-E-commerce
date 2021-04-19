import React from 'react'

import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {PRODUCTS_QUERY} from '../Graphql/productsQuery';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: 25,
    },
    media: {
        height: 140,
    },
});

const CardList = () => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(PRODUCTS_QUERY)
    if (loading) {
      return 'Loading ...'
    }
    if (error) {
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
                                    <i className="fas fa-shopping-cart"></i> Products
                                </h1>
                                <hr></hr>
                                <br></br>
                                <div class="row" >
                                        {data.products.map((product) => {
                                            return (<div class="col-md-2">
                                                <Link to={`/product/detail/${product._id}`}>
                                            <Card className={classes.root}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={product.url}
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {product.name}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {product.price} THB
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                            </Link> </div>)
                                        })}
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