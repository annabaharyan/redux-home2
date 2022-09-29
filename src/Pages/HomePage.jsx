import React from 'react';
import { useEffect,useState } from 'react';
import './pagesCss.css'
import { useSelector,useDispatch } from 'react-redux';
import { showInfo } from '../Fetcher/Product/ProductSlice';
import { showStatus } from '../Fetcher/Statuses/StatusSlice';
import { DeleteProduct,openMyStatus,changeinitialStatus,EditProduct } from '../Fetcher/Product/ProductSlice';


const HomePage = () => {
    const myProducts=useSelector(showInfo)
    const myStatus=useSelector(showStatus)
    const dispatch=useDispatch()
    const [myStatusName,setmyStatusName]=useState('progress')
    const [mynewStat,setmynewStat]=useState(myStatusName)
  useEffect(()=>{
   dispatch(openMyStatus(myStatusName)) 
   
  },[myStatusName,mynewStat])
    return (
        <>
        <ul className='statusUl'>
            {myStatus.map(status=>(
                <li key={status.id} className={myStatusName===status.statusName?"activeStatusLi":""} onClick={()=>setmyStatusName(status.statusName)}>{status.statusName}</li>
            ))}
        </ul>
         <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>Change Status</th>
                </tr>
            </thead>
            <tbody>
                {myProducts.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                        <td>{item.title}</td>
                        <td width="200px">{item.description}</td>
                        <td>{item.price}$</td>
                        <td><img src={item.images} alt="itemImage" /></td>
                        <td>{item.status}</td>
                        <td>
                            <button onClick={()=>dispatch(EditProduct(item))}>Edit</button>
                            <button onClick={()=>dispatch(DeleteProduct(item.id))}>Delete</button>
                        </td>
                        <td>
                        {myStatus.map(status=>(
                            <button key={status.id}
                             className={status.statusName===item.status?'displayStatus':''}
                             onClick={()=>dispatch(changeinitialStatus(status.statusName,item.id,setmynewStat))}
                             >{status.statusName}</button>
                        ))
                        }
                        </td>
                      
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default HomePage;
