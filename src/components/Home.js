import React from 'react'

import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import {Box,Avatar,Typography,TextareaAutosize} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Poster from './Poster';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper'
import axios from 'axios';


const promise1=new Promise((resovle,reject) =>{
  setTimeout(() => {
    console.log("runnig 0.5s")
  }, 500);

})




promise1.then(console.log)

const promise2=new Promise((resovle,reject) =>{
  setTimeout(() => {
    console.log("runnig 3s")
  }, 3000);

})

promise2.then(console.log)

const promise3=new Promise((resovle,reject) =>{
  setTimeout(() => {
    console.log("runnig 5s")
  }, 5000);

})




const promise4=new Promise((resovle,reject) =>{
  setTimeout(() => {
    const a=10
    const b=20
   return a+b
  }, 5000);

})
promise3.then(console.log)

const gettingData=new Promise((resovle,reject) =>{

  try{
       const res=resovle( axios.get("https://dummyjson.com/products/1"))
  }catch(error){
    console.error(error)
  }
})

const rejectingData=new Promise((resovle,reject) =>{

  try{
       const res=resovle( axios.get("https://dummyjson.com/products/1"))
       return res
  }catch(error){
    console.error(error)
  }
})
console.log(rejectingData)

gettingData.then(console.log).catch(console.log)


const  settingData = async () => {
  
   const data = axios.get(process.env.REACT_APP_URL)
   return data
}
settingData().then(console.log).catch(console.log)


const Home = () => {
  return (
      
    <Box className='container  max-w-[1440px]   ml-1  bg-gray-50  mb-20'>
    
    <Box  className='py-4 bg-gray-100 shadow-lg  h-[200px] rounded-b-lg '>
      <Poster/>
      <Paper className='p-4 bg-gray-100 shadow-lg w-[100%] rounded-b-lg mb-20'>
                   <Box className=' w-full h-[60px] flex items-center justify-between pr-6'>
                     <Box className='flex'>
                            <Avatar
                            alt="john doe"
                            src="http://react-material.fusetheme.com/assets/images/avatars/garry.jpg"
                            className='ltr:ml-3 w-[40px] h-[40px] mt-[4px] ml-[3px]'
                          />
                            <Box className='mx-6 items-center'>
                            <Typography variant="body2">
                                          Garry New man posted on your timeline
                            </Typography>

                            <Typography variant="body2">
                                 32 minutes ago 
                            </Typography>
                            </Box>
                          
                      </Box>
                         <MoreVertIcon />
                      </Box>

                      <Typography variant="body2">
                      Remember the place we were talking about the other night? Found it!
                      </Typography>
                   
                      <img className='container h-[360px] rounded-lg' src='http://react-material.fusetheme.com/assets/images/profile/morain-lake.jpg' alt="ddd"/>
                      <Box className='flex p-3 space-x-2'>                                                   
                              <FavoriteIcon />       
                            <Typography variant="body2">
                              Like(5)
                            </Typography>
                            <ShareIcon/>
                            <Typography variant="body2">
                              Share(5)
                            </Typography>
                      </Box>
                      <Typography variant="body2" className='h-19'>
                            1 comments 
                      </Typography>

                      <Box  className='flex'>
                            <Avatar
                            alt="john doe"
                            src="http://react-material.fusetheme.com/assets/images/avatars/alice.jpg"
                            className='ltr:ml-3 w-[40px] h-[40px] mt-[4px] ml-[3px]'
                          />

                            <Box className='mx-6 items-center'>
                            <Typography variant="body2">
                            Alice Freeman June 10, 2015
                            </Typography>

                            <Typography variant="body2" className='text-gray-400'>
                            That’s a wonderful place. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend ligula.
                             Fusce posuere in sapien ac facilisis. Etiam sit amet justo non felis ornare feugiat.
                            </Typography>
                            </Box>
                      </Box>
                      <Box className='flex items-center space-x-4 pl-14 h-20'>
                        <button className='p-2  rounded-full  hover:bg-[#959CA9]'>replay</button>
                        <AssistantPhotoIcon/>
                      </Box>
                      <Box>
                        <Box className='flex'>
                          <Avatar
                            alt="john doe"
                            src="http://react-material.fusetheme.com/assets/images/avatars/profile.jpg"
                            className='ltr:ml-3 w-[40px] h-[40px] mt-[4px] ml-[3px]'
                          />
                          <Box>

                            <TextareaAutosize
                              aria-label="minimum height"
                              minRows={5}
                              placeholder="Write Something..."
                              className='w-full rounded-t-lg h-[110px] ml-2 bg-white -mb-1 outline-none resize-none'
                            />

                            <button className='p-2 rounded-full  hover:bg-[#959CA9] py-1 mt-4  '>Post comments</button>
              
                            </Box>
                        </Box>       
                        
                         </Box>
              </Paper>
       </Box>
  </Box>
  )
}

export default Home