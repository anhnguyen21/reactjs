import React, { Component } from "react";
import Home from './Home';
import Cart from './Cart';
import About from './About';
import Add from './Add';
import Detail from './Detail';
import Login from './login';

const routes=[
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },{
        path : '/cart',
        exact : false,
        main : () => <Cart />
    },{
        path : '/about',
        exact : false,
        main : () => <About/>
    },{
        path : '/add',
        exact : false,
        main : () => <Add />
    },{
        path: `/detail/:id`,
        exact : false,
        main : ({match}) => <Detail  match={ match }/>
    },{
        path: `/login`,
        exact : false,
        main : ({history}) => <Login  history={history} />
    }
];

// {
//     path : '/',
//     exact : true,
//     main : ()=> <AllProduct />
// },
// {
//     path : '/contacts/:id/contactdetail',
//     exact : true,
//     main : ({match})=> <ContactDetail match ={match}/>
// },
// {
//     path : '/add',
//     exact : true,
//     main : ({history})=> <Add history={history} />
// },
// {
//     path : '/products/:id/edit',
//     exact : true,
//     main : ({match , history})=> <Add  match ={match} history={history}/>
// },
// {
//     path : '/contacts/:id/confirm',
//     exact : true,
//     main : ({match , history})=> <Confirm  match ={match} history={history}/>
// },
// {
//     path : '/products/:id/prodetailadmin',
//     exact : true,
//     main : ({match})=> <ProDetailAdmin match ={match}/>
// }


export default routes;