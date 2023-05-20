import React from 'react';

const Blogs = () => {
    return (
        <div className='w-[90%] mx-auto my-4 flex flex-col gap-4'>
            <div className='border py-6 px-5'>
                <h1 className='text-xl font-bold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side</h1>
                <p className='mt-3'>
                    <span className='font-medium'>Refresh Token:</span> A refresh token is a long-lived credential used in the context of authentication and authorization. When a user provide required information, and if it matched then create a refresh token. <br /> <br />
                    <span className='font-medium'>Access Token:</span> An access token is a credential that is issued to a client after successful authentication. It represents the user's authorization for access correct data.
                </p>
                <ul className='space-y-3 mt-5'>
                    <h3 className='text-lg font-bold'>Working Process: </h3>
                    <li> ~
                        User Authentication: When a user logs in to an application or service, their credentials are verified by the server. Upon successful authentication, the server generates an access token and a refresh token.
                    </li>

                    <li> ~
                        Access Token Expiration: Access tokens have a limited lifespan, typically ranging from a few minutes to several hours.
                    </li>

                    <li> ~
                        Token Refresh Process: When an access token expires, the client can use the refresh token to request a new access token. The refresh token is securely sent to the server along with the request for a new access token. The server verifies the refresh token's validity, checks if it's expired, and if everything is in order, issues a new access token.
                    </li>

                    <li> ~
                        Refresh Token Security: Refresh tokens are typically long-lived and securely stored on the client-side, often in a secure cookie or local storage.
                    </li>
                </ul>

                <h3 className='text-lg font-bold mt-5'>We should store them </h3>
                <p> Common practices include storing them in secure HTTP-only cookies or in client-side storage mechanisms such as local storage or session storage.</p>
            </div>

            <div className='border py-6 px-5'>
                <h1 className='text-xl font-bold'>2. Compare SQL and NoSQL databases?</h1>
                <ul className='mt-3 flex justify-between gap-8'>
                    <div className='w-1/2 space-y-5'>
                        <span className='font-medium underline'>SQL DATABASE:</span>
                        <li>
                            1) SQL databases use a structured data model based on tables.
                        </li>
                        <li>
                            2) SQL databases use SQL as the standard query language to manipulate and retrieve data.
                        </li>
                        <li>
                            3) SQL databases traditionally scale vertically, meaning they handle increased load by upgrading hardware resources on a single server
                        </li>
                    </div>
                    
                    <div className='w-1/2 space-y-5'>
                        <span className='font-medium underline'>NoSQL:</span>
                        <li>
                            1) NoSQL databases use a flexible and schema-less data model, which can include documents, key-value pairs, wide-column stores, or graph structures.
                        </li>
                        <li>
                            2) NoSQL databases use various query languages depending on the database type
                        </li>
                        <li>
                            3) NoSQL databases are designed for horizontal scalability, allowing them to distribute data across multiple servers, making them suitable for handling large amounts of data and high traffic.
                        </li>
                    </div>
                </ul>
            </div>

            <div className='border py-6 px-5'>
                <h1 className='text-xl font-bold'>3. What is express js? What is Nest JS ?</h1>
                <p className='mt-3'>
                    <span className='font-medium'>Express JS:</span> Express.js is a minimalist web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. It focuses on providing a thin layer of fundamental web application functionality, such as routing, handling HTTP requests and responses, middleware support and more. <br /> <br />
                    <span className='font-medium'>Nest JS:</span> Nest.js is a progressive, TypeScript-based framework for building scalable and maintainable server-side applications. It is inspired by Angular's architecture and takes advantage of TypeScript's features. It deal with larger and more complex projects. 
                </p>                
            </div>

            <div className='border py-6 px-5'>
                <h1 className='text-xl font-bold'>4. What is MongoDB aggregate and how does it work?</h1>
                <p className='mt-3'>
                    <span className='font-medium'> MongoDB Aggregate:</span> The MongoDB aggregation framework is a powerful feature that allows you to perform complex data processing and analysis operations on MongoDB collections. The aggregation framework provides a rich set of operators, functions, and expressions that you can use to perform a wide range of computations and transformations on your data. It supports various data aggregation operations like grouping, summing, averaging, counting, joining, and more. It can handle complex queries, data analysis, and reporting tasks efficiently.
                    
                </p>
                
            </div>
        </div>
    );
};

export default Blogs;