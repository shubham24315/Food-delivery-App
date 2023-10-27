import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/mockRestLisData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
//test connot make a api call ,we need internet to run test cases,that is why we use mock fetch function and mock data
global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json:(()=>{
            return Promise.resolve(MOCK_DATA);
        })
    });
})



// beforeAll(()=>{
//     console.log("before all")
// })
// //run beore everything
// beforeEach(()=>{
//     console.log("before each")
// })
// afterAll(()=>{
//     console.log("after all")
// })
// afterEach(()=>{
//     console.log("after each")
// })
//we will do integration testing in this
test('it should search res list for burger input', async() => { 
    await act(async()=>render(
    <BrowserRouter>
    {/* to resolve the Linnk issue wrap it around browser router */}
    <Body/>
    </BrowserRouter>
    ))
    //whenever we use fetch and asynnc function we need to use act.Act function returns a promise
    const cardsBeforSearch=screen.getAllByTestId("resCard");
    // expect(cardsBeforSearch.length).toBe(9);
    const searchBtn=screen.getByRole("button",{name:"Search"});
    // console.log(searchBtn,"searchBtn")
const searchInput=screen.getByTestId("searchInput");
//jest give us access to test id
   fireEvent.change(searchInput,{target:{value:"burger"}})
    fireEvent.click(searchBtn);
    //screen should laod 1 restaurant card
    const cards=screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);
 
 })

