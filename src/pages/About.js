import { Link, useParams } from "react-router-dom";
import { fakeFetch } from "../api/fakeFetch";
import {useEffect, useState} from 'react'

export const About = () => {
  const {id} = useParams()
  console.log(id)
  const [productLists, setProductLists] = useState([])
 
  const getProductData = async () => {
    const response = await fakeFetch('https://example.com/api/products')
    if (response.status===200) {
      setProductLists(response.data.products);
      
    }
  }
  
  useEffect(() => {getProductData()}, [])
  console.log(id )
  const product = productLists.find((product) => product.id === Number(id))
  console.log(product)

  return (
    <>
      
      <Link to='/'>See All</Link>
      
    </>
  );
};
  