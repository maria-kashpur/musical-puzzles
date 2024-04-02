import React, { useContext } from 'react'
import { VolumeContext } from '../providers/VolumeProvider'

export default function VolumeSwitch() {
  const {volume, setVolume} = useContext(VolumeContext)

  

  return (
    <div>VolumeSwitch</div>
  )
}
