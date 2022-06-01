import React from 'react'

const organiser = () => {
  return (
    <div class="page-wrapper bg-gra-03 p-t-45 p-b-50" >
    <div class="wrapper wrapper--w790">
        <div class="card card-5">
            <div class="card-heading">
                <h2 class="title"> Ivoting Organisation Registration Form</h2>
            </div>
            <div class="card-body">
                <form method="POST">
                <div class="form-row p-t-20">
                        <label class="label label--block">what are you organizing?</label>
                        <div class="p-t-15">
                            <label class="radio-container m-r-55">Vote 
                                <input type="radio" checked="checked" name="exist"/>
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-container"> Sondage 
                                <input type="radio" name="exist"/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-row p-t-20">
                        <label class="label label--block">choose privacy</label>
                        <div class="p-t-15">
                            <label class="radio-container m-r-55">Public 
                                <input type="radio" checked="checked" name="exist"/>
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-container"> Private
                                <input type="radio" name="exist"/>
                                <span class="checkmark"></span>
                            </label>
                            
                        </div>
                        
                    </div>
                    <div class="form-row m-b-55">
                        <div class="name">Organiser</div>
                        <div class="value">
                            <div class="row row-space">
                                <div class="col-2">
                                    <div class="input-group-desc">
                                        <input class="input--style-5" type="text" name="first_name" required/>
                                        <label class="label--desc">Name</label>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="input-group-desc">
                                        <input class="input--style-5" type="text" name="last_name" required/>
                                        <label class="label--desc">Organisation</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="name">Adresse</div>
                        <div class="value">
                            <div class="input-group">
                                <input class="input--style-5" type="text" name="company" required/>
                            </div>
                        </div>
                    </div>
                    <div class="form-row" >
                        <div class="mail" id='mail'>Email<span id='star'>*</span></div>
                        <div class="value">
                            <div class="input-group">
                                <input class="input--style-5" type="email" name="email"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="name">username<span id='star'>*</span></div>
                        <div class="value">
                            <div class="input-group">
                                <input class="input--style-5" type="text" name="username"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-row" id='passW'>
                        <div class="name">password<span id='star'>*</span></div>
                        <div class="value">
                            <div class="input-group">
                                <input class="input--style-5" type="password" name="pass"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-row m-b-55">
                        <div class="name">Phone<span id='star'>*</span></div>
                        <div class="value">
                            <div class="row row-refine">
                                <div class="col-3">
                                    <div class="input-group-desc">
                                        <input class="input--style-5" type="text" name="area_code"/>
                                        <label class="label--desc">Area Code</label>
                                    </div>
                                </div>
                                <div class="col-9">
                                    <div class="input-group-desc">
                                        <input class="input--style-5" type="text" name="phone"/>
                                        <label class="label--desc">Phone Number</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="form-row">
                        <div class="name">Subject</div>
                        <div class="value">
                            <div class="input-group">
                                <div class="rs-select2 js-select-simple select--no-search">
                                    <select name="subject">
                                        <option disabled="disabled" selected="selected">Choose option</option>
                                        <option>Subject 1</option>
                                        <option>Subject 2</option>
                                        <option>Subject 3</option>
                                    </select>
                                    <div class="select-dropdown"></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    
                    <div>
                        <button class="btn btn--radius-2 btn--red" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default organiser