import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import {signOut} from 'firebase/auth'
import CustomLink from '../../hooks/CustomLink';

const Navbar = () => {
    const [user]= useAuthState(auth);

    const handleSignOut=()=>{
        signOut(auth)
        localStorage.removeItem('accessToken')
    }

    const Links = <>
        <li><CustomLink className='mt-2' to='/'>Home</CustomLink></li>
        {
         user &&   <li><CustomLink className='mt-2' to='/dashboard'>Dashboard</CustomLink></li>
        }

        <li><CustomLink className='mt-2' to='/tools'>Tools</CustomLink></li>
        <li><CustomLink className='mt-2' to='/blogs'>Blogs</CustomLink></li>
        <li><CustomLink className='mt-2' to='/portfolio'>My Portfolio</CustomLink></li>
        {
            user && <li><Link to='/dashboard/myprofile' className='mt-2 font-bold'>{user?.displayName}</Link></li>
        }
       {
          user? <li><button onClick={handleSignOut} className='mt-2'>Logout</button></li>  :  <li><CustomLink className='mt-2' to='/login'>Login</CustomLink></li>
       }

    </>
    return (

        <div class="navbar  h-20 shadow-md">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {Links}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">HMBR International</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                   {Links}
                </ul>
            </div>
        </div>

    );
};

export default Navbar;