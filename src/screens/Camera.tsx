import {StyleSheet} from 'react-native'
import { useCameraDevices } from 'react-native-vision-camera'
import Loading from './Loading'

const Camera = () => {
    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back
  
    if (device == null) return <Loading />
    return (
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    )
}

// const styles=StyleSheet.create({
//     absoluteFill: {

//     }
// })

export default Camera