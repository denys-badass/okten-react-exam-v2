import {useForm} from "react-hook-form";
import {userService} from "../../api/user.service.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginValidator} from "../../validators/login-validator.ts";
import {useNavigate} from "react-router-dom";

type LoginFormProps = {
    login: string;
    password: string;
}

export const LoginForm = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<LoginFormProps>({mode: 'onBlur', resolver: joiResolver(loginValidator)});
    const navigate = useNavigate();

    const loginHandler = async (data: LoginFormProps) => {
        const {login, password} = data;
        const user = await userService.userLogin(login, password)

        if (user) {
            localStorage.setItem('loginType', 'user');
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/movies');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(loginHandler)}>
                <label>
                    {errors.login ? <span className='text-red-500'>{errors.login.message}</span> : <span>Username: </span>}
                    <input type="text" {...register('login')}/>
                </label>
                <label>
                    {errors.password ? <span className='text-red-500'>{errors.password.message}</span> : <span>Password: </span>}
                    <input type="password" {...register('password')}/>
                </label>
                <button type="submit" disabled={!isValid}>Login</button>
            </form>
        </div>
    );
};