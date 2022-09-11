import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom"
import Typography from '@mui/material/Typography';

function Datafetching() {
  const[posts, setPosts]=useState([])
  const {id}=useParams();
  useEffect(()=>{
    axios.get('http://jsonplaceholder.typicode.com/users')
         .then(res=>{
          console.log(res)
          setPosts(res.data)
         })
         .catch(err=>{
          console.log(err)
         })
  },[setPosts])
  return (
    <div >
        {posts.map((post)=>(
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        ID : {post.id}
                        <br/>
                        Name: {post.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Link
                        to={{
                            pathname: `/user/${post.id}`,
                            state: { posts: post }
                        }}
                        >
                        <button>more</button>
                    </Link>
                    </CardActions>
                </Card>
            ))}
    </div>
  );
}

export default Datafetching