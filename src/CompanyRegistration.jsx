import {Alert, Avatar, Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import axios from './AxiosConfig'
import { useState } from 'react';
import { motion } from 'framer-motion';

const CompanyRegistration = () => {

  const [serverErrorMsg, setServerErrorMsg]=useState(null);
  const [serverSuccessMsg, setServerSuccessMsg]=useState(null);

  const errorStyle={
    color:'red',
    fontWeight:'400',
    fontSize:'18px'
  }

  const successStyle={
   color:'green',
   fontWeight:'400',
   fontSize:'18px'
 }

 const helperTextStyle={
  color:'red',
  fontWeight:'400',
  fontSize:'15px'
 }

 const options = [
  { value: 'Marketplaces', label: 'Marketplaces' },
  { value: 'IT Infrustructure', label: 'IT Infrustructure' },
  { value: 'Logistics and Delivery', label: 'Logistics and Delivery' },
  { value: 'Digital Finance and E-Payment', label: 'Digital Finance and E-Payment' },
  { value: 'Legal and Regulatory', label: 'Legal and Regulatory' },
  { value: 'Business to Business (B2B)', label: 'Business to Business (B2B)' },
  { value: 'Business to Customer (B2C)', label: 'Business to Customer (B2C)' },
  { value: 'Customer to Customer (C2C)', label: 'Customer to Customer (C2C)' },
  { value: 'Customer to Business (C2B)', label: 'Customer to Business (C2B)' },
  { value: 'Mobile Commerce', label: 'Mobile Commerce' },
];

const years=[
  {value:'2000', label:'2000'},
  {value:'2001', label:'2001'},
  {value:'2002', label:'2002'},
  {value:'2003', label:'2003'},
  {value:'2004', label:'2004'},
  {value:'2005', label:'2005'},
  {value:'2006', label:'2006'},
  {value:'2007', label:'2007'},
  {value:'2008', label:'2008'},
  {value:'2009', label:'2009'},
  {value:'2010', label:'2010'},
  {value:'2011', label:'2011'},
  {value:'2012', label:'2012'},
  {value:'2013', label:'2013'},
  {value:'2014', label:'2014'},
  {value:'2015', label:'2015'},
  {value:'2016', label:'2016'},
  {value:'2017', label:'2017'},
  {value:'2018', label:'2018'},
  {value:'2019', label:'2019'},
  {value:'2020', label:'2020'},
  {value:'2021', label:'2021'},
  {value:'2022', label:'2022'},
  {value:'2023', label:'2023'},
]

  const formik=useFormik({
    initialValues:{
      companyName:"",
      companyRegion:"",
      companyCity:"",
      companyEmail:"",
      companyTelephone:"",
      companyYearEstablished:"",
      companySector:"",
      numberOfMaleEmployees:"",
      numberOfFemaleEmployees:"",
      companyBusinessLicense:null
    },

    validationSchema:YUP.object({
      companyName:YUP.string().required("This field is required. Please enter the company name."),
      companyRegion:YUP.string().required("This field is required. Please enter region name."),
      companyCity:YUP.string().required("This field is required. Please enter city name name."),
      companyEmail:YUP.string().email("Invalid email. Please enter a correct email address.")
                      .required("This field is required. Please enter email address."),
      companyTelephone:YUP.string().required("This field is required. Please enter telephone number."),
      companyYearEstablished:YUP.string().required("This field is required. Please select value."),
      // companySector:YUP.string().required("This field is required. Please enter economic sector of the company."),
      numberOfMaleEmployees:YUP.string().required("This field is required. Please enter number of male employees of the company."),
      numberOfFemaleEmployees:YUP.string().required("This field is required. Please enter number of female employees of the company."),
      companySector:YUP.string().required("This field is required. Please select an item."),
      companyBusinessLicense:YUP.mixed().required("This field is required. Please select an item.")
    }),

    onSubmit:(values)=>{
      const {companyBusinessLicense}=values;
      const companyData={
        company_name:values.companyName,
        company_region:values.companyRegion,
        company_city:values.companyCity,
        company_email:values.companyEmail,
        company_telephone:values.companyTelephone,
        company_year_established:values.companyYearEstablished,
        company_sector:values.companySector,
        company_number_of_male_employees:values.numberOfMaleEmployees,
        company_number_of_female_employees:values.numberOfFemaleEmployees,
        company_business_license:companyBusinessLicense,
      };

      registerCompany(companyData);
    }
 }); 

 const registerCompany=async (companyData) => {
  //  console.log(companyData)
  return await axios.post('companies', companyData)
      .then(res => {
        setServerSuccessMsg(res.data.success);
        setServerErrorMsg(null)
      })
      .catch(errors =>{
        console.log(errors);
         setServerErrorMsg(errors.response.data.message);
        setServerSuccessMsg(null) 
      }) 
 }
  
  return (
    <Box sx={{ marginTop:"40px"}}>
      <Stack
        sx={{ padding:"15px", margin:"20px auto", width:"50%" }}
      >
        <Grid align="center" sx={{ backgroundColor:'#eceff1', padding:'15px', borderRadius:'5px 5px 0 0' }}>
          <Avatar sx={{ backgroundColor:'#c2185b', width:"150px", height:"150px", marginBottom:"5px" }}>
            <ShoppingCartCheckoutIcon sx={{ width:"100px", height:"100px" }} />
          </Avatar>
          <Typography variant='h5' sx={{ fontWeight:500, paddingBottom:'20px', paddingTop:'20px' }} >
            Ethiopian E-Commerce Expo Application Form
          </Typography>
        {/*   <Typography variant='body1' sx={{textAlign:'justify', paddingBottom:'20px', paddingTop:'20px', paddingRight:'20px', paddingLeft:'20px' }} >
            This form is designed to collect information of E-Commerce startups operating in Ethiopia. 
            Please kindly provide all the requested information in the spaces provided below. 
          </Typography>
          <Typography variant='body1' sx={{textAlign:'justify', paddingBottom:'20px', paddingTop:'20px', paddingRight:'20px', paddingLeft:'20px' }}>
            <strong>Note</strong> that the informations we are collecting will be used only for the internal purposes, do not panic, we will only use it for internal purposes.
            We thank you in advance for providing the information
          </Typography> */}
        </Grid>

        <form onSubmit={formik.handleSubmit}>
            <Grid> 
            <Typography variant='h5' sx={{ paddingBottom:"20px", paddingTop:'60px', color:'#1DA1F2' }}
            >Basic Information</Typography>

            <TextField 
              label="Name of the company" 
              variant='outlined' 
              // placeholder='Enter company name'
              fullWidth
              sx={{ paddingBottom:"30px" }}
              color="info"

              name='companyName'
              value={formik.values.companyName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              helperText={formik.touched.companyName && formik.errors.companyName ? <span style={helperTextStyle}>{formik.errors.companyName}</span>:null}
            />

      <FormControl sx={{minWidth: '100%', paddingBottom:'30px' }}>
        <InputLabel id="company_business_sector">What is the main business sector of the company</InputLabel>
        <Select
          labelId="company_business_sector"
          id="company_business_sector"            
          name='companySector'
          value={formik.values.companySector.value}
          label="Business Sector of the company"
          placeholder='Business Sector of the company'
          onChange={formik.handleChange}
          // helperText={formik.touched.companySector && formik.errors.companySector ? <span style={helperTextStyle}>{formik.errors.companySector}</span>:null}
        >
            {
              options.map((option)=>(
                <MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>
              ))
            }
        </Select>
        <FormHelperText>{formik.touched.companySector && formik.errors.companySector ? <span style={helperTextStyle}>{formik.errors.companySector}</span>:null}</FormHelperText>
      </FormControl>

      <Typography variant='body1' sx={{ paddingBottom:'10px' }}>Number of Employees</Typography>
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField 
              label="Male" 
              type="text"
              variant='outlined' 
              // placeholder='Enter the number of employees your company has' 
              fullWidth 
              sx={{ paddingBottom:'30px' }}
              color="info"

              name='numberOfMaleEmployees'
              value={formik.values.numberOfMaleEmployees}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              helperText={formik.touched.numberOfMaleEmployees && formik.errors.numberOfMaleEmployees ? <span style={helperTextStyle}>{formik.errors.numberOfMaleEmployees}</span>:null}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField 
              label="Female" 
              type="text"
              variant='outlined' 
              // placeholder='Enter the number of employees your company has' 
              fullWidth 
              sx={{ paddingBottom:'30px' }}
              color="info"

              name='numberOfFemaleEmployees'
              value={formik.values.numberOfFemaleEmployees}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              helperText={formik.touched.numberOfFemaleEmployees && formik.errors.numberOfFemaleEmployees ? <span style={helperTextStyle}>{formik.errors.numberOfFemaleEmployees}</span>:null}
            />
            </Grid>
       </Grid>

    <FormControl sx={{minWidth: '50%', paddingBottom:'30px' }}>
        <InputLabel id="year_company_established">When is the company established? (E.C)</InputLabel>
        <Select
          labelId="year_company_established"
          id="year_company_established"
          name='companyYearEstablished'
          value={formik.values.companyYearEstablished.value}
          label="Business Sector of the company"
          placeholder='Business Sector of the company'
          onChange={formik.handleChange}
          // helperText={formik.touched.companySector && formik.errors.companySector ? <span style={helperTextStyle}>{formik.errors.companySector}</span>:null}
        >
            {
              years.map((years)=>(
                <MenuItem value={years.value} key={years.value}>{years.label}</MenuItem>
              ))
            }
        </Select>
        <FormHelperText>{formik.touched.companyYearEstablished && formik.errors.companyYearEstablished ? <span style={helperTextStyle}>{formik.errors.companyYearEstablished}</span>:null}</FormHelperText>
      </FormControl>

            </Grid>

            <Typography variant='h5' sx={{ paddingBottom:"20px", paddingTop:'20px', color:'#1DA1F2' }}
            >Company Location</Typography>

            <TextField 
              label="Region / Administrative City" 
              variant='outlined' 
              // placeholder='Enter company region where the company is operating in'
              fullWidth
              sx={{ paddingBottom:"30px" }}
              color="info"

              name='companyRegion'
              value={formik.values.companyRegion}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              helperText={formik.touched.companyRegion && formik.errors.companyRegion ? <span style={helperTextStyle}>{formik.errors.companyRegion}</span>:null}
          />

            <TextField 
              label="City" 
              variant='outlined' 
              // placeholder='Enter administrative city where the company is operating in'
              fullWidth
              sx={{ paddingBottom:"30px" }}
              color="info"

              name='companyCity'
              value={formik.values.companyCity}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              helperText={formik.touched.companyCity && formik.errors.companyCity ? <span style={helperTextStyle}>{formik.errors.companyCity}</span>:null}
            />

    <Typography variant='h5' sx={{ paddingBottom:"20px", paddingTop:'20px', color:'#1DA1F2' }}
    >Contact Address</Typography>

            <TextField 
              label="Email" 
              variant='outlined' 
              // placeholder='Enter company email address'
              fullWidth
              sx={{ paddingBottom:"30px" }}
              color="info"

              name='companyEmail'
              value={formik.values.companyEmail}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              helperText={formik.touched.companyEmail && formik.errors.companyEmail ? <span style={helperTextStyle}>{formik.errors.companyEmail}</span>:null}
            />

            <TextField 
              label="Telephone Number" 
              variant='outlined' 
              // placeholder="Enter the company's mobile or telephone number"
              fullWidth 
              sx={{ paddingBottom:'20px' }}
              color="info"

              name='companyTelephone'
              value={formik.values.companyTelephone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              helperText={formik.touched.companyTelephone && formik.errors.companyTelephone ? <span style={helperTextStyle}>{formik.errors.companyTelephone}</span>:null}
            />

      <Typography variant='body1' sx={{ paddingBottom:'10px' }}> <strong>Attachement:</strong> Please attach the scanned copy of the business license of the company.</Typography>
          <TextField 
              // label="Telephone Number" 
              variant='outlined' 
              // placeholder="Enter the company's mobile or telephone number"
              fullWidth 
              sx={{ paddingBottom:'20px' }}
              color="info"

              type='file'
              name='companyBusinessLicense'
              // value={formik.values.companyBusinessLicense}
              onBlur={formik.handleBlur}
              onChange={(e)=>{formik.setFieldValue("companyBusinessLicense",e.target.files[0])}}
              helperText={formik.touched.companyTelephone && formik.errors.companyTelephone ? <span style={helperTextStyle}>{formik.errors.companyTelephone}</span>:null}
            />

          
 

        <Grid align='center' sx={{ paddingBottom:"15px", paddingTop:'15px' }}>
        <motion.span
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.3 }}
          > 
            <Typography variant='h1'>
              {serverSuccessMsg ? <Alert severity='success' style={successStyle}>{serverSuccessMsg}</Alert>:null}
            </Typography>
            
            <Typography variant='h1'>
            {serverErrorMsg ? <Alert severity='error' style={errorStyle}>{serverErrorMsg}</Alert>:null}
            </Typography> 

            </motion.span>
        </Grid>

        <Grid 
              sx={{ paddingBottom:"20px" }}
              align='right'
            >
          
            <Button type='submit' variant='contained'
              sx={{ align:'right',backgroundColor:'#1DA1F2', textTransform:'none', boxShadow:0 }}
              color='primary' size='large' elevation={0}
            >
              Apply </Button>
            </Grid>
        </form>
      </Stack>
    </Box>
  )
}

export default CompanyRegistration