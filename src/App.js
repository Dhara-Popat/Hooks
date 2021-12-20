import React from 'react';
import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import ComA from './components/ComA';
import HookCounterone from './components/HookCounterone';
import HookCounterTwo from './components/HookCounterTwo';
import ReducerHook from './components/ReducerHook';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <>
      {/* <ClassCounterOne></ClassCounterOne> */}
      {/* <HookCounterone></HookCounterone> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <UserContext.Provider value={'UserName'}> */}
        {/* <ChannelContext value="new">
          <ComA />
        </ChannelContext>
      </UserContext.Provider> */}

      <ReducerHook />

      

    </>
  );
}

export default App;
