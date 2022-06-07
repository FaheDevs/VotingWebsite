import React from 'react'
import "./org.css"

const organiser = () => {
  return (
    <div class="form-style-10">
<h1>Ivoting registration <span>Sign up and tell us what you think of the site!</span></h1>
<form>
    <div class="section"><span>1</span>First Name & Address</div>
    <div class="inner-wrap">
        <label>Your Full Name <input type="text" name="field1" required/></label>
        <label>Address <textarea name="field2" required></textarea></label>
    </div>

    <div class="section"><span>2</span>Email & Phone</div>
    <div class="inner-wrap">
        <label>Email Address <input type="email" name="field3" required /></label>
        <label>Phone Number <input type="text" name="field4" /></label>
    </div>

    <div class="section"><span>3</span>Passwords</div>
        <div class="inner-wrap">
        <label>Password <input type="password" name="field5" /></label>
        <label>Confirm Password <input type="password" name="field6" /></label>
    </div>
    <div class="button-section">
     <input type="submit" name="Sign Up" />
     
    </div>
</form>
</div>
  )
}

export default organiser