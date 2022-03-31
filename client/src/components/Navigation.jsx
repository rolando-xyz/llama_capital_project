import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div>
      <div id="myMenu" class="dropdown">
	    		{/* <div class="menu-button" tabindex="1">
					  <div class="menu-button-burger"></div>
			    </div> */}
			    <a href="javascript: void(0)" class="buttonX"
			    onclick="closeMenu()">&times;</a>
		    <div class="dropdown-items">
		    	<a href="/logout" class="menu-item">My Account</a>
		    	<a href="/logout" class="menu-item">Trade</a>
		    	<a href="/logout" class="menu-item">Farm</a>
		    	<a href="/logout" class="menu-item">Stake</a>
		    	<a href="/logout" class="menu-item">NTF's</a>
		    	<a href="/logout" class="menu-item">Support</a>
		    	<a href="/logout" class="menu-item">Blog</a>
		    </div>
	    	</div>
	    	<span class="hamburger text-white" onclick="openMenu()">&#9776;</span>
		    <div>
		    </div>
	        <div class="d-flex text-center justify-content-between align-items-center">
		        <a href="/logout" class="contact-btn">Connect</a>
		    </div>
      </div>
    </div>
  )
}

export default Navigation