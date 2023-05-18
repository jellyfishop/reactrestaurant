import {React,useState,useEffect} from 'react'
import Restocard from './Restocard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { restList } from '../actions/restaction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Restaurant() {
 
const dispatch=useDispatch()

    useEffect(()=>{

        dispatch(restList())
    },[])
    
   const {restaurantList}= useSelector(state=>state.restaurantReducer)

  return (
    <Row>
      {
        restaurantList.map(item=>(
         <Col className='p-5' lg={4} md={6} > 
         <Restocard restdata={item}></Restocard>
         </Col>
        ))
      }
    </Row>
  )
}

export default Restaurant
