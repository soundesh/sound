
import React from "react";
import ReactDatePicker from "react-datepicker";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const Photos = () => {

  const { handleSubmit,register, control } = useForm();
  return (
    
    <form onSubmit={handleSubmit(data => console.log(data))}>

      <Controller
        name={"textValue"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={"Text Value"} {...register('textValue', { required: true })}/>
        )}
      />
      
      <input type="submit" />
    </form>
  )
}

export default Photos