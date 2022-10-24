import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Login-Comp/Chatbox";
import MyChats from "../components/Login-Comp/MyChats";
import SideDrawer from "../components/Login-Comp/miscellaneous/SideDrawer";
import ChatProvider, { ChatState }  from "../Context/ChatProvider.js"

function Chatpage(){
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
        </Box>
      </div>

  );
};

export default Chatpage;
