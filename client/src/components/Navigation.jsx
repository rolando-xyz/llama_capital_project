import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css';
import './NavigationScript'
import './MenuScript'

const Navigation = () => {
  return (
    <div>
      <div class="nav">
        <div id="myMenu" class="dropdown">
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
          <img src="" alt='llogo'/>
		    </div>
        <div class="d-flex text-center justify-content-between align-items-center">
		    </div>
      </div>
      <div>
      <div class="d-flex justify-content-around">
	    	<hr/>
	    	<div class="slide hi-slide">
	    		<div class="hi-prev"></div>
	    		<div class="hi-next"></div>
	    		<ul>
	    			<li>
	    				<div class="block"></div>
	    			</li>
	    			<li>
	    				<div class="block"></div>
	    			</li>
	    			<li>
	    				<div class="block"></div>
	    			</li>
	    			<li>
	    				<div class="block"></div>
	    			</li>
	    			<li>
	    				<div class="block"></div>
	    			</li>
	    			<li>
	    				<div class="block"></div>
	    			</li>
	    			<li>
	    				<div class="block"></div>
	    			</li>
	    		</ul>
	    	</div>
	    </div>
      </div>
    </div>
  )
}

export default Navigation