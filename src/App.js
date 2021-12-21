import React from 'react';
import './App.css';
// import ParentComponent from './Callback/ParentComponent';
import ClassCounterOne from './components/ClassCounterOne';
import ComA from './components/ComA';
import CounterOne from './components/Custom Hook/CounterOne';
import CountTwo from './components/Custom Hook/CountTwo';
import HookCounterone from './components/HookCounterone';
import MemoHook from './components/MemoHook';
import ReducerHook from './components/ReducerHook';
import ReducerHookTwo from './components/ReducerHookTwo';
import RefHook from './components/RefHook';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className='App'>
      {/* <ClassCounterOne></ClassCounterOne> */}

      {/* <HookCounterone></HookCounterone> */}

      {/* <UserContext.Provider value={'UserName'}> */}

        {/* <ChannelContext value="new">
          <ComA />
        </ChannelContext>
      </UserContext.Provider> */}

      {/* <ReducerHook /> */}

      {/* <ReducerHookTwo /> */}

      {/* <ParentComponent /> */}

      {/* <MemoHook /> */}

      {/* <RefHook /> */}

      {/* <CounterOne /> */}

      {/* <CountTwo /> */}



    </div>
  );
}

export default App;
