import React, { useEffect, useState } from "react";
import { useHistory, useLocation, controlRenderer } from "react-router-dom";

import { Room, VideoPresets } from "livekit-client";
import { DisplayContext, LiveKitRoom } from "livekit-react";
import "livekit-react/dist/index.css";
// import "react-aspect-ratio/aspect-ratio.css";
import "../pages/style.css";

function RoomPage() {
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");
  const numberMen = useState(4)

  function onLeave() {
    history.push({
      pathname: "/"
    });
  }

  async function onConnected(room) {
    await room.localParticipant.setCameraEnabled(true);
  }

  let displayOptions = {
    stageLayout: "flex",
    showStats: false,
  };

  // let a = document.getElementsByClassName('_34YL4');
  // console.log("aaaaaa")
  // console.log(document.getElementsByClassName('_34YL4').length)
  // useEffect(() => {
  //   if((numberMen % 2) !== 0){
  //     const boxArray = [...document.getElementsByClassName('_34YL4')];
  //     let arrayOfElements = Array.from(a);
  //     let widthOwlTest = document.getElementsByClassName('glo-test');
  //     console.log("333333333333333333333333333333333")
  //     console.log(a)
  //     console.log(document.getElementsByClassName('_34YL4').length)
  //     console.log("4444444444444444444444444444444")
  //     console.log(arrayOfElements )
  //     console.log(arrayOfElements.length)
  //     console.log("555555555555555555555555555555")
  //     console.log(widthOwlTest)
  //     console.log(widthOwlTest.length)
  //     console.log("6666666666666666666666666666666")
  //     console.log(boxArray)
  //     console.log(boxArray.length)
  //     document.getElementsByClassName('glo-test')[0].style["background-color"]="red"
  //     // for (let index = 0; index <= widthOwl.length; index++){
  //     //   document.getElementsByClassName('glo-test')[index].style["grid-column"]= "red";
  //     //   // widthOwl[widthOwl.length].style["width"]= "100% !important";
  //     // }
  //   }
  // },[a]);

  return (
    <div className="glo-test">
      <DisplayContext.Provider value={displayOptions}>
        <LiveKitRoom
          url="ws://localhost:7880"
          token={token}
          onConnected={(room) => {
            //console.log(room.localParticipant.getMaxListeners())
            onConnected(room);
            // console.log(room);
          }}
          connectOptions={{
            adaptiveStream: true,
            dynacast: true,
            videoCaptureDefaults: {
              resolution: VideoPresets.hd.resolution
            },
            publishDefaults: {
              videoEncoding: VideoPresets.hd.encoding,
              simulcast: true
            },
            logLevel: "debug"
          }}
          controlRenderer={(props) => {
            // console.log(props);
            return (
              <div>
                <button onClick={props.onLeave}> leave</button>
              </div>
            );
          }}
          onLeave={onLeave}
        />
      </DisplayContext.Provider>
    </div>
  );
}

export default RoomPage;
