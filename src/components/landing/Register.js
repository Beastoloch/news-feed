import React, {useEffect, useRef, useState} from "react";

function Register(props) {

    const loginRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");
    const [loginDirty, setLoginDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [loginError, setLoginError] = useState('Логин не должен быть пустым');
    const [emailError, setEmailError] = useState('Email не должен быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не должен быть пустым');
    const [formValid, setFormValid] = useState(false);


    useEffect(() => {
        if (emailError || loginError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError, loginError]);

    function handleSubmit (e){
        e.preventDefault();
        alert(`Логин: ${login}\nEmail: ${email}\nПароль: ${password}`);
        setLogin('');
        setEmail('');
        setPassword('');
    }

    const loginHandler = (e) => {
        setLogin(e.target.value);
        if(e.target.value.length < 3 || e.target.value.length > 20) {
            setLoginError('Логин не должен быть меньше 3 и больше 20 символов')
            if(!e.target.value){
                setLoginError('Логин не должен быть пустым');
            }
        } else {
            setLoginError('');
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(email).toLowerCase())){
            setEmailError('Некорректный email')
            if(!e.target.value){
                setEmailError('Email не должен быть пустым');
            }
        }
            else {
            setEmailError('');
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError('Длина пароля должна быть не менее 8 символов')
            if(!e.target.value){
                setPasswordError('Пароль не должен быть пустым');
            }
        } else {
            setPasswordError('');
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return(
        <div className='auth'>
            <p className='auth__title'>Регистрация</p>
            <form className='form' onSubmit={handleSubmit}>
                <p className='form__title'>Для того, чтобы просматривать профиль, необходимо зарегистрироваться!</p>
                <div className='columns'>
                    <div className='input-column'>
                        <div className='input-body'>
                            <label className='form__label'>Логин</label>
                            <div className={`form__input ${(loginDirty && loginError) && 'form__input-error'}`}>
                                <input className='form__input-text text-input' type='text' placeholder='Придумайте логин'
                                       id='login-signup-input' name='login' value={login}
                                       onChange={e => loginHandler(e)}
                                       onBlur={e => blurHandler(e)} />
                            </div>
                            {(loginDirty && loginError) && <span className='form__input-error-message'>{loginError}</span>}
                        </div>
                        <div className='input-body'>
                            <label className='form__label'>Адрес электронной почты</label>
                            <div className={`form__input ${(emailDirty && emailError) && 'form__input-error'}`}>
                                <input className='form__input-text text-input' type='email' placeholder='Введите адрес электронной почты'
                                       value={email} onChange={e => emailHandler(e)}
                                       id='email-signup-input' name='email' onBlur={e => blurHandler(e)}/>
                            </div>
                            {(emailDirty && emailError) && <span className='form__input-error-message'>{emailError}</span>}
                        </div>
                        <div className='input-body'>
                            <label className='form__label'>Пароль</label>
                            <div className={`form__input ${(passwordDirty && passwordError) && 'form__input-error'}`}>
                                <input className='form__input-text text-input' type='password'
                                       placeholder='Придумайте пароль' id='password-input' name='password'
                                       value={password} onChange={e => passwordHandler(e)}
                                       onBlur={e => blurHandler(e)}/>
                            </div>
                            {(passwordDirty && passwordError) && <span className='form__input-error-message'>{passwordError}</span>}
                        </div>
                    </div>
                    <div className='button-column'>
                        <button disabled={!formValid} type='submit' className='form__button'>Зарегистрироваться</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register