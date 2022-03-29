import React, { useEffect } from "react";
import {LocalParticipant, Room} from "livekit-client"
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  function connectToRoom(token) {
    const params = {
      token,
    };

    history.push({
      pathname: "/room",
      search: "?" + new URLSearchParams(params).toString(),
    });
  }
  
  return (
    <div className="prejoin">
      <main>
        <h2>LiveKit Video</h2>
        <hr />
        <button
          onClick={connectToRoom.bind(this,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTExMDk4NDIsImlzcyI6IkFQSWVTTkpuamFQRHdGTCIsImp0aSI6IlJpc2EiLCJuYmYiOjE2NDg1MTc4NDIsInN1YiI6IlJpc2EiLCJ2aWRlbyI6eyJyb29tIjoicGhvbmdjdWFiZSIsInJvb21Kb2luIjp0cnVlfX0.k466BOAH_XgjNIhTKbiWvBZ18lJjrnIvnR7MlC-KK3E")}
        >
          Risa
        </button>
        <button
          onClick={connectToRoom.bind(this,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTExMTAwMjIsImlzcyI6IkFQSWVTTkpuamFQRHdGTCIsImp0aSI6Ik1vbnN0ZXIiLCJuYmYiOjE2NDg1MTgwMjIsInN1YiI6Ik1vbnN0ZXIiLCJ2aWRlbyI6eyJyb29tIjoicGhvbmdjdWFiZSIsInJvb21Kb2luIjp0cnVlfX0.ubUp2f0ZIOsD6GTJ5B4l4A0KeKx3tSzhtVkvyjB9KMo")}
        >
          Monster
        </button>
        <button
          onClick={connectToRoom.bind(this,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTExMTAwNTUsImlzcyI6IkFQSWVTTkpuamFQRHdGTCIsImp0aSI6IkNvcmQiLCJuYmYiOjE2NDg1MTgwNTUsInN1YiI6IkNvcmQiLCJ2aWRlbyI6eyJyb29tIjoicGhvbmdjdWFiZSIsInJvb21Kb2luIjp0cnVlfX0.cAex1UFUuVRsGtAdbhHSAgAKX4ytPPLoUpisgAwjFQU")}
        >
          Corn
        </button>
        <button
          onClick={connectToRoom.bind(this,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTExMTA2MjQsImlzcyI6IkFQSWVTTkpuamFQRHdGTCIsImp0aSI6IkxhTGFMYSIsIm5iZiI6MTY0ODUxODYyNCwic3ViIjoiTGFMYUxhIiwidmlkZW8iOnsicm9vbSI6InBob25nY3VhYmUiLCJyb29tSm9pbiI6dHJ1ZX19.WhBAOz1wkcscpX14HATKLDvDrg23phJ49EjQQHhozDQ")}
        >
          LaLaLa
        </button>

        
      </main>
    </div>
  );
}

export default HomePage;