import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';
import axios from 'axios';
import "./EditProfile.css";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Center,
  useToast,
  Divider,
  RadioGroup,
  Radio,
  VStack,
} from '@chakra-ui/react';

import {  PhoneIcon } from '@chakra-ui/icons'


function EditProfile() {
  const { user, setUser , fetchUserDetails, updateUserDetails} = useAuth();
  // const [user, setUser] = useState();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [desc, setDesc] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [job, setJob] = useState();
  const [facebook, setFacebook] = useState(); 
  const [instagrm, setInstagram] = useState();
  const [linkedin, setLinkedin] = useState();
  const [github, setGithub] = useState();

  const [pic, setPic] = useState(user.pic);
  const [institute, setInstitute] = useState();

  const {userid} = useParams();
  const [details, setDetails] = useState("");
  const toast= useToast();
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(()=>{
    if(user){
      fetchUserDetails(userid, config).then((res)=>{
        setDetails(res[0]);
      }).catch(err=>{
        toast({
            title: err.message,
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
        });
      })
    }else{
      setUser(localStorage.getItem("userInfo"));
      navigate('/')
    }
    // eslint-disable-next-line
  }, []);

  async function editChanges(e){
    e.preventDefault();
    console.log(name, email, password, confirmpassword, pic, desc, gender, age);
    const data ={ name, email, password, pic, desc, gender, age};

    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if(age < 0 || typeof(age)!=='string'){
      toast({
        title: "Enter a valid age !!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    axios.post(`/community/user/${userid}`,
    {name, email, password, pic},
    config
    ).then((res)=>{
      toast({
        title: "Saved Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(res.data))
      console.log(res.data);
      navigate(`/profile/${userid}`);
    }).catch((error)=>{
      toast({
        title: "Error Occured!",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    });
  }
  


  return (
    <div className="gallery-body p-5">
        <div className='edit-card rounded m-5 shadow'>
      <Stack
        spacing={8}
        // bg='transparent'
        rounded={'lg'}
        boxShadow={'lg'}
        p={20}
        >
        <Stack usecolormodevalue='dark' color='white' direction={['column', 'row']} spacing={6}>
        <Stack spacing={6} direction={['column']} w={'full'}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }} zIndex={2}>
            Edit Profile
          </Heading>
          <FormControl id="userName">
            <FormLabel>User name:</FormLabel>
            <Input
              placeholder="UserName"
              variant='flushed'
              _placeholder={{ color: 'gray.500' }}
              type="text"
              defaultValue={details.name}
              onChange={(e) => setName(e.target.value)}
              />
          </FormControl>
          <FormControl id="email" >
            <FormLabel>Email address:</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              variant='flushed'

              type="email"
              defaultValue={details.email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </FormControl>
        </Stack>
        <FormControl  id="image">
          <Stack height='full' pb={10} spacing={6}>
            <Center>
              <img className='profile--image' src="https://bit.ly/sage-adebayo" />
            </Center>
            <Center>
              <Button mx={2} bg={'red.400'}
                color={'white'}
                onClick={()=>setPic("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")}
                _hover={{
                  bg: 'red.500',
                }}>Remove</Button>
              <Button mx={2}
              color='white'
              bg='blue.400'
                onClick={(e) => setPic(e.target.value)}
              >Change</Button>
            </Center>
            </Stack>
        </FormControl>
        </Stack>
        <Stack spacing={6} direction={['column', 'row']}>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              />
          </FormControl>
          <FormControl id="confirm-pass" >
            <FormLabel>Confirm Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
              onChange={(e) => setConfirmpassword(e.target.value)}
              />
          </FormControl>
        </Stack>
        <FormControl id="description" >
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder='Your Introduction that others can see !!'
            size='sm'
            type="text"
            // defaultValue={" "}
            onChange={(e) => setDesc(e.target.value)}
          />
        </FormControl>
        <Divider/>

        {/*       personal details         */}
        <Heading lineHeight={1} fontSize={{ base: 'xl', sm: '2xl' }}>Personal Details</Heading>
        <Stack spacing={6} direction={['column', 'row']}>
          <FormControl id="age" >
            <FormLabel>Age</FormLabel>
            <Input  
              placeholder='Age'
              type="number"
              min="0"
              onChange={(e) => setAge(e.target.value)}
            />
          </FormControl>  
          <FormControl id="age" >
            <FormLabel>Gender</FormLabel>
            <RadioGroup onChange={setGender} value={gender}>
              <Stack spacing={5} direction='row'>
                <Radio value='male'>
                  Male
                </Radio>
                <Radio value='female'>
                  Female
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl> 
        </Stack>
        <Stack spacing={6} direction={['column', 'row']}>
          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input
              placeholder="city"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              onChange={(e) => setCity(e.target.value)}
              />
          </FormControl>
          <FormControl id="confirm-pass" >
            <FormLabel>Country</FormLabel>
            <Input
              placeholder="country"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              />
          </FormControl>
        </Stack>
        <Divider/>
        {/*       professional details         */}
        <Heading lineHeight={1} fontSize={{ base: 'xl', sm: '2xl' }}>Professional Details</Heading>
        <Stack spacing={6} direction={['column', 'row']}>
          <FormControl id="worksas" >
              <FormLabel>Job Title</FormLabel>
              <Input
                placeholder="eg. Student/Assistant Developer"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                onChange={(e) => setJob(e.target.value)}
                />
            </FormControl>
            <FormControl id="worksat" >
              <FormLabel>Current Institute/Company</FormLabel>
              <Input
                placeholder="Where you work or study"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                onChange={(e) => setInstitute(e.target.value)}
                />
            </FormControl>
        </Stack>
        <Divider/>

        {/*       Socials details         */}
        <Heading lineHeight={1} fontSize={{ base: 'xl', sm: '2xl' }}>Socials</Heading>
        <Stack spacing={6} direction={['column', 'row']}>
            <VStack spacing={6} w='full'>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children={<i className="fa-brands fa-lg fa-instagram"></i>}/>
                <Input
                  placeholder="www.example.com"
                  _placeholder={{ color: 'gray.500' }}
                  variant="flushed"
                  type="text"
                  onChange={(e) => setLinkedin(e.target.value)}
                  />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children={<i className='fa-brands fa-lg fa-linkedin-in'></i>}/>
                <Input
                  placeholder="www.example.com"
                  _placeholder={{ color: 'gray.500' }}
                  variant="flushed"
                  type="text"
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </InputGroup>
            </VStack>
            <VStack spacing={6} w='full'>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children={<i className='fa-brands fa-lg fa-github'></i>}/>
                <Input
                  placeholder="www.example.com"
                  _placeholder={{ color: 'gray.500' }}
                  variant="flushed"
                  type="text"
                  onChange={(e) => setGithub(e.target.value)}
                  />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children={<i className='fa-brands fa-lg fa-facebook-f'></i>}/>
                <Input
                  placeholder="www.example.com"
                  _placeholder={{ color: 'gray.500' }}
                  variant="flushed"
                  type="text"
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </InputGroup>
            </VStack>
        </Stack>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w='100px'
            _hover={{
              bg: 'red.500',
            }}
            onClick={()=>navigate(-1)}>
            Discard
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="100px"
            _hover={{
              bg: 'blue.500',
            }}
            onClick={editChanges}>
            Save
          </Button>
        </Stack>
      </Stack>
      </div>
    </div>
  )
}

export default EditProfile;