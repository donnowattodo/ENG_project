import React, { Component } from 'react';
import styled from 'styled-components'
import OpenViduVideoComponent from '../scriptChat/OvVideo';
import mute from "../../img/mute.png";
import videooff from "../../img/videooff.png";


export default class CSCam extends Component {

  getNicknameTag() {
    // Gets the nickName of the user
    return JSON.parse(this.props.streamManager.stream.connection.data).clientData;
}


render() {   
  return (
    <>
        {this.props.streamManager !== undefined ? (
          <>
          <Cam>
            <OpenViduVideoComponent streamManager={this.props.streamManager}/>
            <Nick>
              <p>{this.getNicknameTag()}</p>
              <Iconbox>
                <Mute src={mute} onClick={()=>console.log("클릭")}></Mute>
                <Videooff  src={videooff}></Videooff>
              </Iconbox>
            </Nick>
          </Cam>
          
          </>
        ) : null}
    </>
  )
}
}

const Cam = styled.div`
border: solid 1px green;
background: #D9D9D9;
border-radius: 20px;
width: 200px;
height: auto;
box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
margin: 7px auto 7px auto;
`;

const Nick = styled.div`
background-color: #dcf2d2;
border-radius: 20px;
justify-content: center;
p{
  text-align: center;
  font-size: 14px;
  font-weight: 600;
}
margin-top: -12px;
`

const Mute = styled.img`
width: 25px;
height: 15px;
margin-right: 7px;
cursor:pointer;
`

const Videooff = styled.img`
width: 15px;
height: 15px;
cursor:pointer;
`
const Iconbox = styled.div`
  margin-top: -30px;
  margin-left: 10px;
`