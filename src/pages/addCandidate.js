import React from 'react'
import './addCandidate.css'

const addCandidate = () => {
  return (
    <div class="container">
  <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">                        
        <h2>ADD CANDIDATE</h2>
      </div>
  </div>
  <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
          <form id="contact-form" class="form" action="#" method="POST" role="form">
              <div class="form-group">
                  <label class="form-label" for="name">Nom</label>
                  <input type="text" class="form-control" id="name" name="name" placeholder="Nom" tabindex="1" required/>
              </div>                            
              <div class="form-group">
                  <label class="form-label" for="email">Prenom</label>
                  <input type="email" class="form-control" id="email" name="email" placeholder="Prenom" tabindex="2" required/>
              </div>                            
              <div class="form-group">
                  <label class="form-label" for="subject">Projet</label>
                  <input type="text" class="form-control" id="subject" name="subject" placeholder="projet" tabindex="3"/>
              </div>                            
              <div class="form-group">
                  <label class="form-label" for="message">Description projet</label>
                  <textarea rows="5" cols="50" name="message" class="form-control" id="message" placeholder="description.... " tabindex="4" required></textarea>                                 
              </div>
              <div class="form-group">
              <input
                type="file"
                name="file"
                id="input-files"
                class="form-control-file border"
              />
            </div>
              <div class="text-center">
                  <button type="submit" class="btn btn-start-order">Add candidate</button>
                  <button type="submit" class="btn btn-start-order">Validate Candidates </button>

              </div>
              
          </form>
      </div>
  </div>
</div>
  )
}

export default addCandidate;