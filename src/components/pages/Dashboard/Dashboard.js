import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col bg-yellow-100 items-center justify-center">
                    <h2>Dashboard</h2>
                    <Outlet/>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div class="drawer-side mt-px">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/addreview'>Add A Review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;