import React from "react"
import IdentityModal, {
  useIdentityContext,
  useNetlifyIdentity,
} from "react-netlify-identity-widget"

const NotFoundPage = () => {
  
  const identity = useIdentityContext()

    return (    
       <div>
      <div class="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
        <p class="font-sans text-white error-text">404</p>
      </div>
      <div class="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <span class="opacity-50">Take me back to</span>
        <a class="border-b" href="/">
          Home
        </a>
      </div>
    </div>
  )
  
  
}

export default NotFoundPage
