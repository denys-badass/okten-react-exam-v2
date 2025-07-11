import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginValidator} from "../../validators/login-validator.ts";
import {useLogin} from "../../hooks/useLogin.ts";

type LoginFormProps = {
    login: string;
    password: string;
}

export const LoginForm = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<LoginFormProps>({mode: 'onChange', resolver: joiResolver(loginValidator)});
    const {loginHandler, loginError} = useLogin();

    return (
        <div className='p-10 border-2 border-gray-300 dark:border-gray-600 rounded-xl min-h-[400px] min-w-[400px]'>
            <h1 className='text-3xl text-center mb-6'>Log In</h1>
            {loginError && <p className='text-red-500 text-center mb-6'>{loginError}</p>}
            <form onSubmit={handleSubmit(loginHandler)} className='flex flex-col items-center justify-center gap-6'>
                <label className='flex flex-col items-start justify-center text-xs'>
                    {errors.login ? <span className='text-red-500 pl-4'>{errors.login.message}</span> : <span className='pl-4'>Username: </span>}
                    <input type="text" {...register('login')} className='h-[40px] min-w-[300px] text-base'/>
                </label>
                <label className='flex flex-col items-start justify-center text-xs'>
                    {errors.password ? <span className='text-red-500 pl-4'>{errors.password.message}</span> : <span className='pl-4'>Password: </span>}
                    <input type="password" {...register('password')} className='h-[40px] min-w-[300px] text-base'/>
                </label>
                <button type="submit" disabled={!isValid} className=' text-gray-50 disabled:bg-gray-50 dark:disabled:bg-gray-900 disabled:border-2 disabled:border-gray-300 dark:disabled:border-gray-600 disabled:text-gray-300 dark:disabled:text-gray-600  rounded-2xl min-w-[300px] min-h-[40px] text-lg mt-4 enabled:cursor-pointer bg-indigo-600/90 enabled:hover:bg-indigo-600 enabled:hover:shadow-md enabled:hover:shadow-indigo-600/50'>LogIn</button>
            </form>
        </div>
    );
};