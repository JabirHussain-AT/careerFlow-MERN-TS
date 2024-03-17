import React from 'react' 
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const InterviewMeet : React.FC = () => {
    const { roomId } = useParams()
    const meeting = async ( element ) => {
        const appID = 1916087609 ;
        const serverSecret = "9452af6a726e6150cd728db8129dc18d" ;
        const kitToken  = ZegoUIKitPrebuilt.generateKitTokenForTest(appID , serverSecret , roomId! , Date.now().toString(),'CareerFlow')
        const zc = ZegoUIKitPrebuilt.create( kitToken )
        zc.joinRoom({
            container : element ,
            scenario : {
                mode : ZegoUIKitPrebuilt.GroupCall ,
          }}
        )
    }
        return <div>
            <div ref={meeting} />
        </div>

}

export default InterviewMeet ;