import React, { useState, createContext, } from "react";

export const TaskContext = createContext();
const TaskContextProvider = (props) => {
    const [user, setUser] = useState('');
    return (
        <TaskContext.Provider value={{
            user, setUser,
        }}>
            {props.children}
        </TaskContext.Provider>
    );
};
export default TaskContextProvider