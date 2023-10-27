import RestaurantCard from '../RestaurantCard';
import { render,screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardMock.json"
test('should render Restarurant component with props Data', () => { 

   render(
    <RestaurantCard resData={MOCK_DATA}/>
   )
   //I have learnt about MOCK_DATA whether our restuarnt card is receiving the props or not
   //we succesfully render Resutaurant card in jsdom using mock_data
   const name=screen.getByText("Meghana Foods")
    expect(name).toBeInTheDocument();
})

//to write a test case it should render resuutarant card component open label 

