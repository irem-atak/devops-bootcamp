import Header from "../common/Header"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Featured from "../home/featured/Featured"
import Properties from "./properties/Properties"





const Home = () => { 

    return (
        <>
        <Router>
        <Header />
        <Featured />
        <Properties />   
        </Router>    
        </> 
    )

}
export default Home