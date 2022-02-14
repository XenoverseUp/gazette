import { useContext } from "react"
import { VolumeContext } from "../context/VolumeProvider"

const useVolume = () => {
  const volume = useContext(VolumeContext)

  return volume
}

export default useVolume
