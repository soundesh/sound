
import React from "react"
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
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