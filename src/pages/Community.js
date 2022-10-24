import { Box } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import Chatbox from "../components/Login-Comp/Chatbox";
import MyChats from "../components/Login-Comp/MyChats";
import SideDrawer from "../components/Login-Comp/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
// import { useNavigate } from "react-router-dom";
import "../Login.css"

function Community() {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  // const navigate = useNavigate();

  // useEffect(()=>{
  //   if (!user){
  //     navigate("/signup");
  //   }
  // }, [navigate]);

  return (
      <div style={{ width: "100%" , margin: "80px 0 0 0" ,height: "auto"}}>
        {user && <SideDrawer />}
        <Box display="flex" justifyContent="space-between" w="100%" h="80vh" p="10px">
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
        </Box>
      </div>
  );
};

export default Community;
