import { createContext, useEffect, useState } from "react"

export const VolumeContext = createContext()

const VolumeProvider = ({ children }) => {
  const [volume, setVolume] = useState(0)

  useEffect(() => setVolume(Math.floor(Math.random() * 99 + 1)), [])

  return (
    <VolumeContext.Provider value={volume}>{children}</VolumeContext.Provider>
  )
}

export default VolumeProvider
