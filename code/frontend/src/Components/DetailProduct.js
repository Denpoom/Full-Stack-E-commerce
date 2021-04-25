import React, { useCallback } from 'react'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { gql, useQuery } from '@apollo/client';
import { PRODUCTS_QUERY } from '../Graphql/productsQuery';
import { useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const CREATE_CART_MUTATION = gql`
mutation ($record: CreateOneStatusPostInput!) {
  createStatusPost (record: $record) {
    recordId
  }
}
`
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
        return 'Error !!'
    }
    console.log(data)
    const handelAddcart = () => {
        
    }
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
                                                                {res.detail.monitor} / {res.detail.cpu} / {res.detail.ram} / {res.detail.storage} / {res.detail.gpu} / {res.detail.os}
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
                                                <p className="leading-relaxed">
                                                    หน้าจอแสดงผลขนาด {res.detail.monitor}
                                                </p>
                                                <p className="leading-relaxed">
                                                    หน่วยประมวลผล {res.detail.cpu}
                                                </p>
                                                <p className="leading-relaxed">
                                                    หน่วยประมวลผลกราฟิก {res.detail.gpu}
                                                </p>
                                                <p className="leading-relaxed">
                                                    หน่วยความจุ {res.detail.storage} และ RAM {res.detail.ram}
                                                </p>
                                                <br></br>
                                                <hr></hr>
                                                <br></br>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                    <h1 className="title-font font-medium text-2xl text-gray-900" style={{ margin: "2%" }}>${res.price}</h1>
                                                    <button onClick={handelAddcart}className=" text-white bg-red-500 border-0 py-2 px-6  focus:outline-none hover:bg-red-600 rounded">Add Cart </button>
                                                    
                                                </div>
                                            </Grid>
                                            <Grid item xs={2}></Grid>
                                        </Grid> 
                                    )
                                }
                            }
                                )}
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