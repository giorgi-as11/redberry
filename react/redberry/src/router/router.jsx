import React from "react";
import PersonalInfo from "../personalInfoPage/personalInfo";
import { Route, Routes } from 'react-router-dom'

let Router = (props) => {
    <Routes>
        <Route path='/personalInfo' element={<PersonalInfo />}/>

        <Route path='/welcomePage' element={<welcomePage/>}/>
    </Routes>
}

export default Router