import type {IUser} from "../models/IUser.ts";
import {createJSONStorage, persist} from "zustand/middleware";
import {create} from "zustand/react";

interface LoginState {
    loginType: 'user' | 'guest' | null;
    user: IUser | null;

    setUserLogin: (user: IUser) => void;
    setGuestLogin: () => void;
    setLogout: () => void;
}

export const useLoginStore = create<LoginState>()(
    persist(
        (set) => ({
            loginType: null,
            user: null,

            setUserLogin: (user: IUser) => set(() => ({
                loginType: 'user',
                user
            })),
            setGuestLogin: () => set(() => ({
                loginType: 'guest',
                user: null
            })),
            setLogout: () => set(() => ({
                loginType: null,
                user: null
            }))
        }),
        {
            name: 'login-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
)