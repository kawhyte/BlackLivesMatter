import React from "react"
import StartHere from "./HomePageComponents/StartHere"

function NewUsers() {
  return (
    <div>
      <section className="bg-gradient-home-page py-8">
        <div className="flex flex-col justify-center ">
          <div>
            <StartHere />
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewUsers
