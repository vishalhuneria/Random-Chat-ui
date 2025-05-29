import "./App.css";
import { io } from "socket.io-client";
import React, { useEffect, useState } from "react";
// import { showIncomingCallDialog } from "./utils";

function App() {
  const [connectedUserDetails, setConnectedUserDetails] = useState({});
  const [showIncomingCallDialog, setShowIncomingCallDialog] = useState(false);
  const [callTypeDialog, setCallTypeDialog] = useState("");

  const [socket, setSocket] = useState(null);
  const [socketId, setSocketId] = useState("");
  const [userSocketId, setUserSocketId] = useState("");
  // const [localStream, setLocalStream] = useState(null);
  // const [remoteStream, setRemoteStream] = useState(null);
  // const [screenSharingStream, setScreenSharingSream] = useState(null);
  // const [allowConnectionFromStrangers, setAllowConnectionFromStrangers] =
  //   useState(false);
  // const [screenSharingActive, setScreenSharingActive] = useState(false);

  const acceptCallHnadler = () => {};
  const rejectCallHnadler = () => {};

  const handleCopyPersonalCode = () => {
    if (socketId) {
      navigator.clipboard.writeText(socketId);
    } else {
      alert("No code to copy yet!");
    }
  };
  const handlePersonalCodeChatButton = () => {
    if (!userSocketId) {
      alert("Please enter a valid socket ID.");
      return;
    }
    if (userSocketId === socketId) {
      alert("You cannot connect to yourself!");
      return;
    }
    if (!socket) {
      alert("Socket connection not established.");
      return;
    }
    const data = {
      callType: "Chat",
      calleePersonalCode: userSocketId,
    };
    // Emit an event to initiate a chat with the userSocketId
    socket.emit("pre-offer", data);
    console.log("emitting to server for chat conncetion");
  };
  const handlePersonalCodeVideoButton = () => {
    alert(socketId);
  };

  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("connect", () => {
      setSocket(socket);
      console.log("successfully connected to wss server");
      console.log(socket.id);
      setSocketId(socket.id);
    });
    socket.on("pre-offer", (data) => {
      console.log("Received pre-offer:", data);
      const { callType, callerSocketId } = data;
      console.log({ callType, callerSocketId });
      setConnectedUserDetails({ callType, callerSocketId });

      if (callType === "Chat" || callType === "Video") {
        console.log(`Received ${callType} request from ${callerSocketId}`);
        setCallTypeDialog(callType);
        setShowIncomingCallDialog(true);
        // showIncomingCallDialog(callType, acceptCallHnadler, rejectCallHnadler);
      }
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="main-container flex min-h-screen">
      {/* Left Panel */}
      <div className="dashboard-container flex flex-col justify-between w-full md:w-1/3 h-[100dvh] p-4 bg-[#fafafa] border-r">
        {/* Top Section */}
        <div className="logo-container flex items-center justify-center gap-4">
          <img src="/logo.png" alt="logo" className="h-20" />
          <p className="text-[#73827d] text-2xl">Talk With a stranger!</p>
        </div>

        {/* Middle Section */}
        <div>
          <p className="text-[#73827d]">
            Talk with other user by passing their code!
          </p>
          <div className="space-y-4 bg-[#FAFAFA] border border-[1px] border-gray-300 shadow-md p-4 rounded-md">
            <div className="text-gray-800 text-center font-semibold">
              Your Personal Code
            </div>
            <div className="flex items-center justify-between bg-white p-2 rounded-md">
              <p id="personal-code-paragragph" className="text-black">
                {socketId || "Generating code..."}
              </p>
              <button
                id="personal-code-copy-button"
                onClick={handleCopyPersonalCode}
              >
                <img src="/copy.jpg" alt="copy" className="h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-2">
          <p className="text-[#73827d] font-medium">Personal Code</p>
          <input
            type="text"
            id="personal-code-input"
            onChange={(e) => setUserSocketId(e.target.value)}
            placeholder="Enter code"
            className="border border-[#73827d] p-2 rounded-md"
          />
          <div className="flex items-center justify-between rounded-md">
            <butto
              onClick={handlePersonalCodeChatButton}
              className="bg-[#3E3E41] bg-gradient-to-r from-[#3E3E41] to-[#4B4B4E] border border-[1px] border-gray-600 shadow-md text-white p-2 rounded-md w-[30%]"
            >
              Chat
            </butto>
            <button
              onClick={handlePersonalCodeVideoButton}
              className="bg-[#3E3E41] bg-gradient-to-r from-[#3E3E41] to-[#4B4B4E] border border-[1px] border-gray-600 shadow-md text-white p-2 rounded-md w-[30%]"
            >
              Video
            </button>
          </div>

          <p className="text-[#73827d]">Stranger</p>
          <div className="flex items-center justify-between rounded-md">
            <button className="bg-[#3E3E41] bg-gradient-to-r from-[#3E3E41] to-[#4B4B4E] border border-[1px] border-gray-600 shadow-md text-white p-2 rounded-md w-[30%]">
              Chat
            </button>
            <button className="bg-[#3E3E41] bg-gradient-to-r from-[#3E3E41] to-[#4B4B4E] border border-[1px] border-gray-600 shadow-md text-white p-2 rounded-md w-[30%]">
              Video
            </button>
          </div>

          <div className="checkbox-container flex flex-row">
            <input
              type="checkbox"
              id="allow-stranger-checkbox"
              className="mr-2"
            />
            <label htmlFor="allow-stranger-checkbox" className="text-[#73827d]">
              Allow connections from strangers
            </label>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="call-container hidden md:flex md:flex-col w-2/4 h-[100dvh] ">
        <div className="videos-container flex-grow  flex flex-col items-between justify-center bg-[#fafafa] border-r p-4">
          {/* <div className="video-placeholder flex items-center justify-center">
            <img src="/logo.png" alt="video-placeholder" />
          </div> */}
          <video className="remote-video" autoPlay id="remote-video"></video>
          <div>
            <video
              className="local-video"
              autoPlay
              muted
              id="local-video"
            ></video>
          </div>
          <div
            id="call-buttons"
            className="call-buttons flex flex-row justify-around  "
          >
            <button id="mic-button">mic</button>
            <button id="camera-button">camera</button>
            <button id="hang-upic-button">hang up</button>
            <button id="miscreenc-button">screen</button>
            <button id="rec-button">rec</button>
          </div>
        </div>

        <div className="fixed top-0 space-x-3 p-2">
          <button id="stop-rec">stop</button>
          <button id="resume-rec">resume</button>
        </div>
      </div>
      <div className="messenger-container md:flex md:flex-col hidden w-1/4 bg-[#fafafa] h-[100dvh] p-4 border-l justify-between">
        {/* Messenger content goes here */}
        <div className="flex">messages </div>

        <div id=" w-full p-2 border border-gray-300 rounded-md  flex flex-row item-center justify-between">
          <input
            type="text"
            id="mew-message-input"
            placeholder="Type your message here..."
            className="flex flex-row"
          ></input>
          <button className="flex flex-row" id="send-message-button">
            send
          </button>
        </div>
      </div>
      {showIncomingCallDialog && (
        <div id="dialog">
          <div className="dialog-wrapper">
            <div className="dialog-content  p-0 m-0 flex flex-col items-center justify-center">
              <h1 className="flex text-2xl font-bold mb-4">
                Incoming {callTypeDialog} Call{" "}
              </h1>
              <img className="flex p-0 m-0" src="/person.png"></img>
              <div className="flex flex-row space-x-10 rounded-md ">
                <button className="bg-[#3E3E41 ]  w-20 bg-gradient-to-r from-[#3E3E41] to-[#4B4B4E] border border-[1px] border-gray-600 shadow-md text-white p-2 rounded-md ">
                  Accept
                </button>
                <button className="bg-[#3E3E41] w-20 bg-gradient-to-r from-[#3E3E41] to-[#4B4B4E] border border-[1px] border-gray-600 shadow-md text-white p-2 rounded-md">
                  reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
