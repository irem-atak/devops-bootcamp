import React from "react"
import Heading from "../../common/Heading"
import "./properties.css"
import PropertiesCard from "./PropertiesCard"

const Properties = () => {
    return (
        <>
          <section className='recent padding'>
            <div className='container'>
              <Heading title='Property List'  />
              <PropertiesCard /> 
            </div>
          </section>
        </>
      )
    
}

export default Properties