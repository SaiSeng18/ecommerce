import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import Product from './Product/Product'; 
import useStyle from './styles';

const Products = ({products, onAddToCart}) =>{
    const classes = useStyle();
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [value, setValue] = useState(query || '');
    const filterItems = (products, query) => {
        if (!query) {
            return products;
        }
    
        return products.filter((product) => {
            const productName = product.name.toLowerCase();
            return productName.includes(query);
        });
    };
    const filteredPosts = filterItems(products, query);

    
    return(
        <main className={classes.content}> 
            <form action="/" method="get" className={classes.searchbar}>
                <TextField
                    value={value}
                    onInput={e => setValue(e.target.value)}
                    type="text"
                    id="product-search"
                    placeholder="Search items"
                    name="s" 
                    variant="outlined"
                >

                </TextField>
                <Button type="submit">Search</Button>
            </form>
            <div className={classes.toolbar}/>
            <Grid container justifyContent="center" spacing={4}>
                {/* {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))} */}
                {filteredPosts.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );

}

export default Products;