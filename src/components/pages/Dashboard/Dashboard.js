import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../../hooks/CustomLink';


const Dashboard = () => {
const [user]= useAuthState(auth);

console.log(user);
    
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content bg-base-200 ">
                    <Outlet/>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div class="drawer-side mt-px">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><CustomLink to='/dashboard'>My Orders</CustomLink></li>
                        <li><CustomLink to='/dashboard/addreview'>Add A Review</CustomLink></li>
                        <li><CustomLink  to='/dashboard/myprofile'>My Profile</CustomLink></li>
                        <li><CustomLink  to='/dashboard/addproduct'>Add Product</CustomLink></li>
                        <li><CustomLink  to='/dashboard/manageproducts'>Manage Products</CustomLink></li>
                        <li><CustomLink  to='/dashboard/manageorders'>Manage Orders</CustomLink></li>
                        <li><CustomLink  to='/dashboard/manageusers'>Manage Users</CustomLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;