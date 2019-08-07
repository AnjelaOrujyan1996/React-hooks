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
import RefsDemo from "./components/RefsExamples/RefsDemo";
import FocusInput from "./components/RefsExamples/RefsWithClassExample/FocusInput";
import FRParentInput from "./components/RefsExamples/ForwardingInput/FRParentInput";
import PortalDemo from "./components/PortalExample/PortalDemo";
import FocusInputWithHooks from "./components/UseRefExample/FocusInput";


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false}
        this.handleShowMessageClick = () => this.setState({showModal: true})
        this.handleCloseModal = () => this.setState({showModal: false})
    }

    changeTitle = () => {
        document.title = Math.floor(Math.random() * 10) + 1
    }

    render() {
        return (
            <div className="App">
                <ClassCounter changeTitle={this.changeTitle}/>
                <HookCounter changeTitle={this.changeTitle}/>
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
                <RefsDemo/>
                <FocusInput/>
                <FRParentInput/>
                <div className='content'>
                    <button className='btn-style' onClick={this.handleShowMessageClick}>
                        Show Secret Modal
                    </button>
                </div>

                {this.state.showModal ? (
                    <PortalDemo onClose={this.handleCloseModal}>
                        This is the secret modal message!
                    </PortalDemo>
                ) : null}

                <FocusInputWithHooks/>

            </div>
        );
    }
}

export default App;
