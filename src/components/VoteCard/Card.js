import React from 'react'

export  const  Card = (name , description) => {
  return (
    <div class="card shadow">
    <div class="card-body">
      <div class="d-flex justify-content-center">
        <a href="#" class="avatar avatar-xl rounded-circle">
          <img alt="..." src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"/>
        </a>
      </div>
      <div class="text-center my-6">
        {/* <!-- Title --> */}
        <a href="#" class="d-block h5 mb-0">{name}</a>
        {/* <!-- Subtitle --> */}
        <span class="d-block text-sm text-muted">{description}</span>
      </div>
      {/* <!-- Stats --> */}
      <div class="d-flex">
        <div class="col-4 text-center">
          <a href="#" class="h4 font-bolder mb-0"></a>
          <span class="d-block text-sm"></span>
        </div>
        <div class="col-4 text-center">
        <button class="button button4">VOTE</button>
          <span class="d-block text-sm"></span>
        </div>
        <div class="col-4 text-center">
          <a href="#" class="h4 font-bolder mb-0"></a>
          <span class="d-block text-sm"></span>
        </div>
      </div>
    </div>
  </div>  )
}
