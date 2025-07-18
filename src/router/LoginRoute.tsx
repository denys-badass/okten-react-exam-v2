import React, {type FC} from "react";
import {useLoginStore} from "../store/useLoginStore.ts";
import {Navigate} from "react-router-dom";

type LoginRouteProps = {
    children: React.ReactNode;
}

export const LoginRoute: FC<LoginRouteProps> = ({children}) => {
    const loginType = useLoginStore(state => state.loginType);

    if (!loginType) {
        return <Navigate to="/login" replace={true} />;
    }

    return children;
};