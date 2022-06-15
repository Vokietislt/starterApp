import React, { useState, createContext, } from "react";

export const TaskContext = createContext();
const TaskContextProvider = (props) => {
    // const [user, setUser] = useState({});
    const [user, setUser] = useState({
        name: 'Laimonas',
        password: 'Adminas'
    });
    return (
        <TaskContext.Provider value={{
            user, setUser
        }}>
            {props.children}
        </TaskContext.Provider>
    );
};
export default TaskContextProvider