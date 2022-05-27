import React, { useState } from 'react';
import { useQuery } from 'react-query';
import HomeTool from './HomeTool';

const HomeTools = () => {
    // const [tools, setTools]= useState([])
const { data: tools, isLoading } = useQuery(['tools'], () => fetch('http://localhost:5000/tools',).then(res => res.json()));

    if (isLoading) {
        return <progress class="progress w-56"></progress>
    }
    return (
        <div className='container mx-auto my-16 bg-base-200 p-2 rounded-lg'>
            <h1 className='text-3xl text-center text-accent'>Our Products {tools.length}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 my-4'>
                {
                    tools.map(tool=><HomeTool
                    key={tool._id}
                    tool={tool}
                    ></HomeTool>)
                }
            </div>
        </div>
    );
};

export default HomeTools;