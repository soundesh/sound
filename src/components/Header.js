import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Box,Avatar,Typography} from '@mui/material'
import { useDispatch } from 'react-redux';
import { Editbtn } from './reducer/ProfileReducer';


import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate()
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  const [Clicked,setClicked] = useState(true)


 const finder=useSelector((state )=> state.profile)

const  Dispatch =useDispatch()

  return (
       
    <Box className='container w-full   bg-gray-50 '>
    <img className='h-200'  src='http://react-material.fusetheme.com/assets/images/profile/morain-lake.jpg' alt="ddd"/>

    <Box className="p-12 w-full   flex  flex-col -mb-[25px] md:flex-row flex-1 items-center">
                      <Box className="border-2 border-white  rounded-full rotate-0 w-[130px] h-[129px] -mt-[130px] bg-white">     
                      <Avatar
                          alt="john doe"
                          src="http://react-material.fusetheme.com/assets/images/avatars/Velazquez.jpg"
                          sx={{ width: 120, height: 120}} 
                          className='ltr:ml-3  mt-[4px] ml-[3px]'
                      />
    </Box>
    </Box>
    <Box className='px-12'>
                <Box className=" w-full   flex  flex-col -mb-[25px] md:flex-row flex-1 items-center">

                    <Box className='flex flex-col -mt-10 md:flex-row flex-1 items-center justify-between p-8'>
                        <div className='opacity-1 rotate-0  '>
                                <Typography className='text-[3rem]'>
                                    Jhon Doe
                                    </Typography>
                        </div>
                        <div className='flex justify-between'>

                                {Clicked? 
                                <button className='rounded-full bg-[#22D3EE] px-8 py-2 mr-8 '>save</button>:
                                <button className='rounded-full bg-[#22D3EE] px-8 py-2 mr-8 ' onClick={()=>(Dispatch(Editbtn(!finder.getting)))}>edit</button>}
                                <button className='rounded-full bg-[#252F2E] text-white px-7 py-2'>sendMessage</button>
                        </div>
                    </Box>
                </Box>
                <Box className='flex  flex-rows flex items-center w-full h-[40px] -mr-10'>
                <button className='p-2 rounded-full hover:bg-[#959CA9]'onClick={()=>{setClicked(true);handleClick()}} >Timeline</button>
                <button className='p-2 rounded-full hover:bg-[#959CA9]' onClick={()=>{setClicked(false);navigate("/about")}}  >About</button>
                <button className='p-2 rounded-full hover:bg-[#959CA9]'onClick={()=>{setClicked(true);navigate("/photos")}}   >Photos & Videos</button>
                </Box>
    </Box>
  </Box>
  )
}

export default Header