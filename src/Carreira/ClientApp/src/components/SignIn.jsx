
import { useState } from "react";

function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const onChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData((values) => ({ ...values, [name]: value }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <div className="wrapper">
            <div className="form-container max-w-sm card">
                <form onSubmit={onSubmit}>
                    <div className="form-field">
                        <label id="email">Email</label>
                        <input id="email" type="email" name="email" value={formData.email} onChange={onChange} required />
                    </div>
                    <div className="form-field">
                        <label id="password">Senha</label>
                        <input id="password" type="password" name="password" value={formData.password} onChange={onChange} required />
                    </div>
                    <div className="form-field">
                        <button className="button" type="submit">Entrar</button>
                    </div>
                </form>
                <div className="">
                    Ainda não possui uma conta?&nbsp;
                    <a href="/account/sign_up">Cadastre-se</a>
                </div>
            </div>
        </div>
    );
}

export default SignIn;