import React from 'react';


export default ({ openJoinModal, openCreateServerModal }) => {
  return (
    <div onClick={(e)=>e.stopPropagation()} className="default-server-modal server-modal">

          <h1>OH, ANOTHER SERVER HUH?</h1>
        
        <div className="server-actions">
        <span onClick={openCreateServerModal} className='server-action server-create' >

            <h2>CREATE</h2>
            <p>Create a new server and invite your friends. It's free!</p>
            <div className="action-create icon"> </div>       
            <button>Create a server</button>

          </span>


          <span className='server-action server-join' onClick={openJoinModal}>

            <h2>JOIN</h2>
            <p>Enter an instant invite and join your friend's server.</p>
            <div className="action-join icon">  </div>
            <button>Join a server</button>

          </span>

        <div className="divide">or</div>
        </div>    
    </div>
  )
}