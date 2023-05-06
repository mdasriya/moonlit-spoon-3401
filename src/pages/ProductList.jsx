import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/productReducer/action'
import ProductCart from './ProductCart'
import styled from 'styled-components'
import { useLocation, useSearchParams } from 'react-router-dom'
import {  SkeletonCircle,Box, SkeletonText,Grid } from '@chakra-ui/react'
const ProductList = ({setLength}) => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [search, setSearch] = useSearchParams();

    const location = useLocation()
const {products,isLoading} = useSelector((store)=> store.productReducer) 


let obj = {
    params: {
        category:search.getAll("category"),
        brand:search.getAll("brand"),
        _sort:search.get("order") && "price",
        _order: search.get("order"),
        
    }
}

useEffect(()=> {
    dispatch(getProducts(obj))
    
    
  },[location.search])
  
  setLength(products.length) 

  return ( 



   <DIV> 
{
  isLoading?
  <>
  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
</>
  : 
  (products.length>0 && products.map((prod)=> {
    return <ProductCart key={prod.id} {...prod}/>
  }) ) 
 }     
    </DIV>
  )
}

export default ProductList;

const DIV = styled.div`
  
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 10px;

`;
