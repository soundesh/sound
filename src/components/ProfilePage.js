import React from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useForm, Controller } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch } from "react-redux";
import { AddProfile } from "./reducer/ProfileReducer";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ProfilePage = () => {
  const editor = useSelector((state) => state.profile.value)
  const Dispatch = useDispatch();

  const schema = yup
    .object({
      gender: yup.string().max(20).required("please fill gender"),
      locations: yup.string().max(30).required("locations"),
      about: yup.string().max(200).required("please fill about"),
      jobs: yup.string().max(34).required("please fill jobs"),
      occupation: yup.string().required("please fill occupation"),
      skills: yup.string().required("please fill skills"),
      address: yup.string().required("please fill address "),

      mobile1: yup
        .number()
        .positive()
        .integer()
        .required("mobile number required"),
      mobile2: yup
        .number()
        .positive()
        .integer()
        .required("mobile number required"),
    //   websites: yup.string().matches(regMatch, "Website should be a valid URL"),
      email: yup
        .string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues:editor[0],
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => { Dispatch(AddProfile(data))};
  return (
    <Box>
      {editor.getting ? (
        <Box className="max-w-[720px] px-2 ">
          <Paper elevation={3} className=" w-full mb-4 ">
            <Box className="h-[64px] bg-gray-800 border-2 border-black flex rounded-t-lg  items-center px-6">
              <Typography className=" h-26 text-white items-center">
                Genral information
              </Typography>
            </Box>
            <Box className="p-6 flex flex-col ">
              <Box className="h-20 w-full ">
                <Typography className="font-bold m-5">Gender</Typography>
                <Typography>Male</Typography>
              </Box>
              <Box className="h-20 w-full  ">
                <Typography className="font-bold ">brithday</Typography>
                <Typography variant="subtitle2">feb 30 1974</Typography>
              </Box>

              <Box className="h-20 w-full">
                <Typography className="font-bold m-5">Locations</Typography>

                <Typography variant="subtitle2">
                  new york,USA
                  <LocationOnIcon />
                </Typography>

                <Typography variant="subtitle2">
                  new york,USA
                  <LocationOnIcon />
                </Typography>
              </Box>

              <Box className="w-full ">
                <Typography className="font-bold m-5 text-base">
                  About Me
                </Typography>

                <Typography variant="subtitle2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eget pharetra felis, sed ullamcorper dui. Sed et elementum
                  neque. Vestibulum pellente viverra ultrices. Etiam justo
                  augue, vehicula ac gravida a, interdum sit amet nisl. Integer
                  vitae nisi id nibh dictum mollis in vitae tortor.
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className=" w-full mb-4 ">
            <Box className="h-[64px] bg-gray-800 border-2 border-black flex rounded-t-lg  items-center px-6">
              <Typography className=" h-26 text-white items-center">
                Work
              </Typography>
            </Box>
            <Box className="p-6 flex flex-col ">
              <Box className="h-20 w-full ">
                <Typography className="font-bold m-5 text-base">
                  Occupation
                </Typography>
                <Typography>developer</Typography>
              </Box>
              <Box className="h-20 w-full  ">
                <Typography className="font-bold ">Skills</Typography>
                <Typography variant="subtitle2">
                  C#, PHP, Javascript, Angular, JS, HTML, CSS
                </Typography>
              </Box>

              <Box className="h-20 w-full">
                <Typography className="font-bold m-5">Jobs</Typography>

                <Typography variant="subtitle2">
                  Self-Employed 2010 - Now
                </Typography>

                <Typography variant="subtitle2">Google 2008 - 2010</Typography>
              </Box>
            </Box>
          </Paper>

          <Paper elevation={3} className=" w-full mb-4 ">
            <Box className="h-[64px] bg-gray-800 border-2 border-black flex rounded-t-lg  items-center px-6">
              <Typography className=" h-26 text-white items-center">
                Contact
              </Typography>
            </Box>
            <Box className="p-6 flex flex-col ">
              <Box className=" w-full ">
                <Typography className="font-bold m-5">Address</Typography>
                <Typography className="subtitle2">
                  Ut pharetra luctus est quis sodales. Duis nisi tortor,
                  bibendum eget tincidunt, aliquam ac elit. Mauris nec euismod
                  odio.
                </Typography>
              </Box>
              <Box className=" w-full  ">
                <Typography className="font-bold ">Tell</Typography>
                <Typography variant="subtitle2">
                  +6 555 6600 +9 555 5255
                </Typography>
              </Box>

              <Box className="w-full">
                <Typography className="font-bold m-5">Websites</Typography>

                <Typography variant="subtitle2">withinpixels.com</Typography>
              </Box>

              <Box className="w-full">
                <Typography className="font-bold m-5">Emails</Typography>

                <Typography variant="subtitle2">
                  soundesh@gmail.com
                  <br />
                  soundeshss@gmail.com
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      ) : (
        <Box className="max-w-[720px] px-2">
          <form onSubmit={handleSubmit(onSubmit)} >
            <Paper elevation={3} className=" w-full mb-4 ">
              <Box className="h-[64px] bg-gray-800 border-2 border-black flex rounded-t-lg items-center px-6">
                <Typography className=" h-26 text-white items-center ">
                  Genral information
                </Typography>
              </Box>
              <Box className="p-6 flex flex-col ">
                <Box className=" w-full mb-3">
                  <Typography className="font-semibold font-mono text-lg m-5">
                    Gender
                  </Typography>

                  <Controller
                    name={"gender"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        onChange={onChange}
                        value={value}
                        label={"gender"}
                        {...register("gender", { required: true })}
                        className='pl-8'
                      />
                    )}
                  />
                  <p>{errors.gender?.message}</p>
                </Box>
                <Box className=" w-full  mb-3">
                  <Typography className="font-semibold font-mono text-lg">
                    Brithday
                  </Typography>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Controller
                      control={control}
                      name="birthday"
                      render={({ field: { onChange, value } }) => (
                        <DatePicker
                          value={value}
                          onChange={onChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              {...register("birthday", { required: true })}
                            />
                          )}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>

                <Box className=" w-full mb-3">
                  <Typography className="font-semibold italic m-5">
                    Locations
                  </Typography>

                  <Controller
                    name={"locations"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        onChange={onChange}
                        value={value}
                        label={"locations"}
                        {...register("locations", { required: true })}
                      />
                    )}
                  />

                  <p>{errors.locations?.message}</p>
                </Box>

                <Box className=" w-full mb-3 ">
                  <Typography className="font-bold m-5">About Me</Typography>

                  <Controller
                    name={"about"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextareaAutosize
                        aria-label="empty textarea"
                        minRows={2}
                        onChange={onChange}
                        value={value}
                        placeholder="about me"
                        className="w-full rounded-lg h-[110px] ml-2 bg-white -mb-1 outline-none resize-none"
                        {...register("about", { required: true })}
                      />
                    )}
                  />
                  <p>{errors.about?.message}</p>
                </Box>
              </Box>
            </Paper>
            <Paper elevation={3} className=" w-full mb-4 ">
              <Box className="h-[64px] bg-gray-800 border-2 border-black flex rounded-t-lg  items-center px-6">
                <Typography className=" h-26 text-white items-center">
                  Work
                </Typography>
              </Box>
              <Box className="p-6 flex flex-col ">
                <Box className="w-full ">
                  <Typography className="font-bold m-5">Occupation</Typography>

                  <Controller
                    name={"occupation"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        onChange={onChange}
                        value={value}
                        label={"occupation"}
                        {...register("occupation", { required: true })}
                      />
                    )}
                  />
                  <p>{errors.occupation?.message}</p>
                </Box>
                <Box className=" w-full  ">
                  <Typography className="font-bold ">Skills</Typography>

                  <Controller
                    name={"skills"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextareaAutosize
                        aria-label="empty textarea"
                        minRows={2}
                        onChange={onChange}
                        value={value}
                        placeholder="Empty"
                        className="w-full rounded-lg h-[110px] ml-2 bg-white -mb-1 outline-none resize-none"
                        {...register("skills", { required: true })}
                      />
                    )}
                  />

                  <p>{errors.skills?.message}</p>
                </Box>

                <Box className=" w-full">
                  <Typography className="font-bold m-5">Jobs</Typography>
                  <Controller
                    name={"jobs"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        onChange={onChange}
                        value={value}
                        label={"jobs"}
                        {...register("jobs", { required: true })}
                      />
                    )}
                  />

                  <p>{errors.jobs?.message}</p>
                  <br />

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Controller
                      control={control}
                      name="startDate"
                      render={({ field: { onChange, value } }) => (
                        <DatePicker
                          views={["year"]}
                          label="start year"
                          minDate={new Date("2000-03-01")}
                          maxDate={new Date("2024-06-01")}
                          onChange={onChange}
                          value={value}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              helperText={null}
                              {...register("startDate", { required: true })}
                              className="min-w-100 pt-2"
                            />
                          )}
                        />
                      )}
                    />
                  </LocalizationProvider>
              
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Controller
                      control={control}
                      name="endDate"
                      render={({ field: { onChange, value } }) => (
                        <DatePicker
                          views={["year"]}
                          label="end year"
                          minDate={new Date("2000-03-01")}
                          maxDate={new Date("2024-06-01")}
                          onChange={onChange}
                          value={value}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              helperText={null}
                              {...register("endDate", { required: true })}
                              className="min-w-100 pt-2"
                            />
                          )}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
            </Paper>
            <Paper elevation={3} className=" w-full mb-4">
              <Box className="h-[64px] bg-gray-800 border-2 border-black flex rounded-t-lg  items-center px-6">
                <Typography className=" h-26 text-white items-center">
                  Contact
                </Typography>
              </Box>
              <Box className="p-6 flex flex-col ">
                <Box className="w-full ">
                  <Typography className="font-bold m-5">Address</Typography>

                  <Controller
                    name={"address"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextareaAutosize
                        aria-label="empty textarea"
                        minRows={3}
                        onChange={onChange}
                        value={value}
                        placeholder="Empty"
                        className="w-full rounded-lg h-[110px] ml-2 bg-white -mb-1 outline-none resize-none"
                        {...register("address", { required: true })}
                      />
                    )}
                  />
                  <p>{errors.address?.message}</p>
                </Box>
                <Box className=" w-full  ">
                  <Typography className="font-bold ">Tele phone</Typography>

                  <Controller
                    name={"mobile1"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        onChange={onChange}
                        value={value}
                        label={"mobile1"}
                        {...register("mobile1", { required: true })}
                      />
                    )}
                  />

                  <p>{errors.mobile1?.message}</p>
                  <Controller
                    name={"mobile2"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        onChange={onChange}
                        value={value}
                        label={"mobile2"}
                        {...register("mobile2", { required: true })}
                      />
                    )}
                  />

                  <p>{errors.mobile2?.message}</p>
                </Box>

                <Box className=" w-full">
                  <Typography className="font-bold m-5">Websites</Typography>

                  <Controller
                    name={"websites"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        type="url"
                        onChange={onChange}
                        value={value}
                        label={"websites"}
                        {...register("websites", { required: true })}
                        className="w-full"
                      />
                    )}
                  />
                  <p>{errors.websites?.message}</p>
                </Box>

                <Box className=" w-full">
                  <Typography className="font-bold m-5">Emails</Typography>

                  <Controller
                    name={"email"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        type="email"
                        onChange={onChange}
                        value={value}
                        label={"email"}
                        {...register("email", { required: true })}
                      />
                    )}
                  />

                  <p>{errors.email?.message}</p>
                </Box>

                <button
                  type="Submit"
                  className="rounded-full w-[120px] bg-[#22D3EE] px-8 py-2 mr-8 mt-4 flex justify-end"

                >
                  Submit
                </button>
              </Box>
            </Paper>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default ProfilePage;
