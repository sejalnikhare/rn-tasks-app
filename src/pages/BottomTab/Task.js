import React from 'react';
import {View,Text} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import Home from '../DrawerTabs/Home';

const Task = () => {
    return ( <>
    <Home status={true} />
    </> );
}
 
export default Task;


