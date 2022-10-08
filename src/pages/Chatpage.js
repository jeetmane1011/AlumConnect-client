import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Login-Comp/Chatbox";
import MyChats from "../components/Login-Comp/MyChats";
import SideDrawer from "../components/Login-Comp/miscellaneous/SideDrawer";
import { ChatState } from "../components/Login-Comp/Context/ChatProvider";

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
    // <h1>Chat</h1>
  );
};

export default Chatpage;
