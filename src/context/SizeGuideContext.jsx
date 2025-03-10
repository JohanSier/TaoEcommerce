import { createContext, useContext, useState } from "react"

export const SizeGuideContext = createContext()

const SizeGuideProvider = ({children}) => {
  const [isSizeGuideVisible, setIsSizeGuideVisible] = useState(false);

  return (
    <SizeGuideContext.Provider value={{isSizeGuideVisible, setIsSizeGuideVisible}}>
      {children}
    </SizeGuideContext.Provider>
  )
}

export function useSizeGuide(){
  return useContext(SizeGuideContext);
}

export default SizeGuideProvider
