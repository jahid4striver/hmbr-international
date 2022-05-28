import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-8'>
            <article class="overflow-hidden rounded-lg shadow-lg p-5 w-11/12 lg:w-full md:w-full mx-auto">
                <h1 className='text-xl font-bold'>Ways to improve the performance of React application</h1>
                <div className='text-left'>
                    <p>
                        * Make sure that components receive only necessary props

                    </p>
                    <p> * Use optimized Images</p>
                    <p>* Keeping component state local where necessary.</p>
                    <p>* Memoizing React components to prevent unnecessary re-renders.</p>
                </div>
            </article>
            <article class="overflow-hidden rounded-lg shadow-lg p-5 w-11/12 lg:w-full md:w-full mx-auto">
                <h1 className='text-xl font-bold'>Different ways to manage a state in a React Application</h1>
                <div className='text-left'>
                    <p>
                        <ol>
                            <li>Using React Hooks</li>
                            <li>Using React Context API</li>
                            <li>Using Redux</li>
                            <li>Using React Query</li>
                            <li>Using Apollo Link State.</li>
                        </ol>

                    </p>
                </div>
            </article>
            <article class="overflow-hidden rounded-lg shadow-lg p-5 w-11/12 lg:w-full md:w-full mx-auto">
                <h1 className='text-xl font-bold'>How does prototypical inheritance work?</h1>
                <div className='text-left'>
                    <p>
                        Everything in Javascript is an object.The  core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
                    </p>
                </div>
            </article>
            <article class="overflow-hidden rounded-lg shadow-lg p-5 w-11/12 lg:w-full md:w-full mx-auto">
                <h1 className='text-xl font-bold'>What is Unit test? why should write unit tests?</h1>
                <div className='text-left'>
                    <p>
                        Unit testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                    </p>
                </div>
            </article>
            <article class="overflow-hidden rounded-lg shadow-lg p-5 w-11/12 lg:w-full md:w-full mx-auto">
                <h1 className='text-xl font-bold'>How Search Product By Name?</h1>
                <div className='text-left'>
                    <p>
                        To find search product by name is easy. When fetching the data from a link at the last of link have to give query parameter of the product any key that match with product. First create a searchbox with input tag and value of that input give as a parameter with link of fetch which will return a new array with only the search items.
                    </p>
                </div>
            </article>
        </div>
        </div>
    );
};

export default Blogs;