import React from 'react';
import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import ComA from './components/ComA';
import HookCounterone from './components/HookCounterone';
import ReducerHook from './components/ReducerHook';
import ReducerHookTwo from './components/ReducerHookTwo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <>
      {/* <ClassCounterOne></ClassCounterOne> */}
      {/* <HookCounterone></HookCounterone> */}
      {/* <UserContext.Provider value={'UserName'}> */}
        {/* <ChannelContext value="new">
          <ComA />
        </ChannelContext>
      </UserContext.Provider> */}

      {/* <ReducerHook /> */}

      <ReducerHookTwo />

      

    </>
  );
}

export default App;
