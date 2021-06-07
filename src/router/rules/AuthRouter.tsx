import React from 'react'
import {
    Route,
  } from "react-router-dom";
  interface Props {
    path:string,
    children: JSX.Element,
    requireRules:Array<String>
}

export const AuthRouter = (props: Props) => {
    return (
        <Route path={props.path}>
            {props.children}
        </Route>
    )
}
