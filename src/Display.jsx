import axious from "axios"
import React,{useEffect,useState} from 'react'


const Display = () => {
    let [state,setState]=useState([])
  
    let fetchdata = async()=>{
        let data = await axious.get("https://fakestoreapi.com/products")
        console.log(data.data);
        setState(data.data)
    }
    useEffect(()=>{
        fetchdata()
    },[])
        return (
            <section>
                <article>
                    <table border="1">
                    <thead>
                        <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Category</td>
                        <td>Description</td>
                        <td>Image</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        state.map((val)=>{
                            return(

                            <tr>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.category}</td>
                                <td>{val.description}</td>
                                <td><img src={val.image} alt="" height="150px" width="250px"/></td>
                            </tr>
                            )
                        })
                        }
                    </tbody>
                    </table>
                </article>
            </section>
    );
}

export default Display