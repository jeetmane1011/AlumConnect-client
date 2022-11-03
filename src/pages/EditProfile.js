import React, { useEffect, useState, useRef } from 'react'
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


function EditProfile() {
  const { user, setUser , fetchUserDetails} = useAuth();
  const [email, setEmail] = useState(user.email);
  const [oldDetails, setOldDetails] = useState("");
  const [updates, setUpdates] = useState({});
  const [ gender, setGender] = useState("");
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState("");
  const [showRemove, setShowRemove] = useState(user.pic.public_id?true:false);
  const [preview, setPreview] = useState(user.pic.url);

  const {userid} = useParams();
  const toast= useToast();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(()=>{
    if(user){
      fetchUserDetails(userid, config).then((res)=>{
        setOldDetails(res[0]);
        setGender(oldDetails.gender);
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

  function addUpdates(e){
    const { name, value } = e.target;
    setUpdates(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  async function editChanges(e){
    e.preventDefault();
    console.log(preview, image, updates);
    // const data ={ name, email, password, pic, desc, gender, age, city, country, job, institute, facebook, linkedin, instagrm, github};

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

    // if(age < 0 || typeof(age)!=='string'){
    //   toast({
    //     title: "Enter a valid age !!",
    //     status: "warning",
    //     duration: 5000,
    //     isClosable: true,
    //     position: "bottom",
    //   });
    //   return;
    // }


    axios.post(`/api/user/${userid}`,
    updates,
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
      navigate(`/profile/${userid}`);
    }).catch((error)=>{
      console.log(error);
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
  
  function handleFileChange(e){
    const file = e.target.files[0];
    if(!file){
      return;
    }
    setShowRemove(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
      setPreview(reader.result);
      setImage(reader.result);
      setUpdates(prev=>({
        ...prev,
        pic:{
          url: reader.result
        }
      }));
    }
  }

  const updateImage = (e) => {
    inputRef.current.click();
  };

  function removeImage(){
    setShowRemove(false);
    setImage(false);
    //when image is already uploaded do this
    if(user.pic.public_id){
      setPreview("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
      setUpdates(prev=>({
        ...prev, 
        pic:{
          public_id: user.pic.public_id
        }
      }));
    }else{
      setPreview(user.pic.url);
      // setUpdates(prev=>({
      //   ...prev, 
      //   pic:{}
      // }));
      delete updates.pic;
    }
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
              name="name"
              defaultValue={oldDetails.name}
              // onChange={(e) => setName(e.target.value)}
              onChange={addUpdates}
              />
          </FormControl>
          <FormControl id="email" >
            <FormLabel>Email address:</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              variant='flushed'
              name="email"
              type="email"
              defaultValue={oldDetails.email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </FormControl>
        </Stack>
        <FormControl  id="image">
          <Stack height='full' pb={10} spacing={6}>
            <Center>
              <img className='profile--image' src={preview} />
              {/* {oldDetails.pic.url} */}
            </Center>
            <Center>{showRemove &&
              <Button mx={2} bg={'red.400'}
                color={'white'}
                onClick={removeImage}
                _hover={{
                  bg: 'red.500',
                }}>Remove</Button>}
              <Button mx={2}
              // type='button'
                color='white'
                bg='blue.400'
                onClick={updateImage}
              >Change</Button>
            </Center>
            <input style={{display: 'none'}} accept="image/*" ref={inputRef} type="file" onChange={handleFileChange}/>
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
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              />
          </FormControl>
          <FormControl id="confirm-pass" >
            <FormLabel>Confirm Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
              onChange={(e) => {setConfirmpassword(e.target.value)}}
              />
          </FormControl>
        </Stack>
        <FormControl id="description" >
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder='Your Introduction that others can see !!'
            size='sm'
            type="text"
            name="description"
            wrap='Soft'
            defaultValue={oldDetails.description}
            // onChange={(e) => setDesc(e.target.value)}
            onChange={addUpdates}
          />
        </FormControl>
        <Divider/>

        {/*       personal oldDetails         */}
        <Heading lineHeight={1} fontSize={{ base: 'xl', sm: '2xl' }}>Personal Details</Heading>
        <Stack spacing={6} direction={['column', 'row']}>
          <FormControl id="age" >
            <FormLabel>Age</FormLabel>
            <Input  
              placeholder='Age'
              type="number"
              min="0"
              name="age"
              defaultValue={oldDetails.age}
              onChange={addUpdates}
            />
          </FormControl>  
          <FormControl id="age" >
            <FormLabel>Gender</FormLabel>
            <RadioGroup defaultValue={gender}>
              <Stack spacing={5} direction='row'>
                <Radio onChange={addUpdates} name="gender" value="Male">
                  Male
                </Radio>
                <Radio onChange={addUpdates} name="gender" value="Female">
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
              name="city"
              defaultValue={oldDetails.city}
              onChange={addUpdates}
              />
          </FormControl>
          <FormControl id="confirm-pass" >
            <FormLabel>Country</FormLabel>
            <Input
              placeholder="country"
              name="country"
              defaultValue={oldDetails.country}
              _placeholder={{ color: 'gray.500' }}
              type="text"
              onChange={addUpdates}
              />
          </FormControl>
        </Stack>
        <Divider/>
        {/*       professional oldDetails         */}
        <Heading lineHeight={1} fontSize={{ base: 'xl', sm: '2xl' }}>Professional Details</Heading>
        <Stack spacing={6} direction={['column', 'row']}>
          <FormControl id="worksas" >
              <FormLabel>Job Title</FormLabel>
              <Input
                placeholder="eg. Student/Assistant Developer"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                name="worksAs"
                defaultValue={oldDetails.worksAs}
                onChange={addUpdates}
                />
            </FormControl>
            <FormControl id="worksat" >
              <FormLabel>Current Institute/Company</FormLabel>
              <Input
                placeholder="Where you work or study"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                name="worksAt"
                defaultValue={oldDetails.worksAt}
                onChange={addUpdates}
                />
            </FormControl>
        </Stack>
        <Divider/>

        {/*       Socials oldDetails         */}
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
                  name="instagram"
                  defaultValue={oldDetails.instagram}
                  onChange={addUpdates}
                  />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children={<i className='fa-brands fa-lg fa-linkedin-in'></i>}/>
                <Input
                  placeholder="www.example.com"
                  _placeholder={{ color: 'gray.500' }}
                  variant="flushed"
                  type="text"
                  name="linkedin"
                  defaultValue={oldDetails.linkedin}
                  onChange={addUpdates}
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
                  name="github"
                  defaultValue={oldDetails.github}
                  onChange={addUpdates}
                  />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children={<i className='fa-brands fa-lg fa-facebook-f'></i>}/>
                <Input
                  placeholder="www.example.com"
                  _placeholder={{ color: 'gray.500' }}
                  variant="flushed"
                  type="text"
                  name="facebook"
                  defaultValue={oldDetails.facebook}
                  onChange={addUpdates}
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