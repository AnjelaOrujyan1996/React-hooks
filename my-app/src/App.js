import React from 'react';
import './App.css';
import {ClassCounter} from "./components/UseStateExamples/ClassCounter";
import HookCounter from './components/UseStateExamples/HookCounter';
import HookCounter2 from './components/UseStateExamples/HookCounter2';
import HookCounter3 from './components/UseStateExamples/HookCounter3'
// import HookMouse from "./components/UseStateExamples/HookMouse";
import MouseContainer from "./components/UseStateExamples/MouseContainer";
import {ComponentC} from "./components/useContextExamples/ComponentC";
import ClickCounter from "./components/HigherOrderComponentExample/ClickCounter";
import HoverCounter from "./components/HigherOrderComponentExample/HoverCounter";
import Table from "./components/FragmentsExample/Table";
import PureComp, {PureComponent} from "./components/PureComponentExample/PureComponent";
import ParentComp from "./components/PureComponentExample/ParentComponent";


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
    let changeTitle = () => {
        document.title = Math.floor(Math.random() * 10) + 1
    }

    return (
        <div className="App">
            <ClassCounter changeTitle={changeTitle}/>
            <HookCounter changeTitle={changeTitle}/>
            <HookCounter2/>
            <HookCounter3/>
            {/*<HookMouse/>*/}
            <MouseContainer/>
            <UserContext.Provider value={'Vishwas'}>
                <ChannelContext.Provider value={'Codevolution'}>
                    <ComponentC/>
                </ChannelContext.Provider>
            </UserContext.Provider>
            <ClickCounter/>
            <HoverCounter/>
            <Table/>
            <ParentComp/>
        </div>
    );
}

export default App;
