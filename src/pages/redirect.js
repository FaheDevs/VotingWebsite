import React from 'react'
import { Button } from 'react-scroll'

export const redirect = () => {
  return (
      

    <form onsubmit="event.preventDefault()" class="box"> 
    <h1 id='vote'>? </h1> 
    <Button type="button" name="" value="Vote" href="#"/> 
    <Button type="button" name="" value="Sondage" href="#"/> 

  </form> 
  )
}
export default redirect