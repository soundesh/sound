import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import {Box,Paper,TextareaAutosize} from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import RoomIcon from '@mui/icons-material/Room';


let url = 'https://bavapayments.mocklab.io/transaction';
let data =[]
fetch(url)
.then(res => res.json())
.then((out) => {
  data.push(out)
})
.catch(err => { throw err });  



const Poster = () => {

  const [Post,SetPost]=useState()

    const {register,handleSubmit} = useForm();
      const onSubmit = (data) => console.log(data);
    
    
  return (
    <Paper  elevation={3} className='pb-8 bg-gray-100 shadow-lg  h-[200px] w-[100%] rounded-b-lg'>
    <form onSubmit={handleSubmit(onSubmit)}>    
    <TextareaAutosize
    aria-label="minimum height"
    minRows={5}
    placeholder="Write Something..."
    className='w-full rounded-t-lg h-[110px]  bg-white -mb-1 outline-none resize-none'
    {...register('lastName')}
  />
  <Box className='bg-slate-200 w-full h-[46px] flex items-center justify-between'>
    <Box className='ml-3 space-x-4' >
      <InsertPhotoIcon/>
      <PersonOutlineIcon/>
      <RoomIcon/>
    </Box>
    <button type='Submit' className='bg-black text-white px-4 py-1 mr-3 rounded-full '>Post</button>
  </Box>
  </form>
</Paper>
  )
}

export default Poster