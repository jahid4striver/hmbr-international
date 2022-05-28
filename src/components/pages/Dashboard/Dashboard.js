import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../../hooks/CustomLink';


const Dashboard = () => {
const [user]= useAuthState(auth);
const [admin, setAdmin]=useState();
const [dashboard, setDashboard]= useState(false)

console.log(admin);
const email=user?.email;

    
fetch(`http://localhost:5000/users?email=${email}`)
.then(res=> res.json())
.then(data=>{
    setAdmin(data?.role)
})



    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content bg-base-200 ">
                   {!dashboard && <h2 className='text-3xl mt-16 text-center text-success'>Welcom to Your Dashboard <br />
                   Select a Option
                   </h2>}
                    <Outlet/>
                </div>
                <div class="drawer-side mt-px">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {!admin && <li><CustomLink onClick={()=>setDashboard(true)}   to='/dashboard/myorders'>My Orders</CustomLink></li>}
                        {!admin && <li><CustomLink onClick={()=>setDashboard(true)} to='/dashboard/addreview'>Add A Review</CustomLink></li>}
                        <li><CustomLink onClick={()=>setDashboard(true)}  to='/dashboard/myprofile'>My Profile</CustomLink></li>
                        {admin && <li><CustomLink onClick={()=>setDashboard(true)}  to='/dashboard/addproduct'>Add Product</CustomLink></li>}
                        {admin && <li><CustomLink onClick={()=>setDashboard(true)}  to='/dashboard/manageproducts'>Manage Products</CustomLink></li>}
                        {admin && <li><CustomLink onClick={()=>setDashboard(true)}  to='/dashboard/manageorders'>Manage Orders</CustomLink></li>}
                        {admin && <li><CustomLink onClick={()=>setDashboard(true)}  to='/dashboard/manageusers'>Manage Users</CustomLink></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;