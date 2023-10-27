import { render, screen,fireEvent } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"
//unit testing done here
test('it should load header componenet with login button', () => { 
    render(
        <BrowserRouter>
     <Provider store={appStore}>
     <Header/>
    </Provider>
    </BrowserRouter>
    )
    //testing library does not understand about redux and react router do we need to import them here
    const loginButton=screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeInTheDocument();
 });

 test('should render header component with cart item zero', () => { 
    render(
        <BrowserRouter>
     <Provider store={appStore}>
     <Header/>
    </Provider>
    </BrowserRouter>
    )
    //testing library does not understand about redux and react router do we need to import them here
    const cartItems=screen.getByText("Cart-(0 items)")
    expect(cartItems).toBeInTheDocument();
 });

 test('should render header component with a Cart item', () => { 
    render(
        <BrowserRouter>
     <Provider store={appStore}>
     <Header/>
    </Provider>
    </BrowserRouter>
    )
    //testing library does not understand about redux and react router do we need to import them here
    const cartItems=screen.getByText(/Cart/)
    //we have used regex here
    expect(cartItems).toBeInTheDocument();
 });

 test('should change login button to logout on click', () => { 
    render(
        <BrowserRouter>
     <Provider store={appStore}>
     <Header/>
    </Provider>
    </BrowserRouter>
    )
    const loginButton=screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton);// this is for click the button
    const logoutButton=screen.getByRole("button",{name:"Logout"});
   expect(logoutButton).toBeInTheDocument();
 });