
import { useState } from "react";

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
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
                        <label id="name">Nome completo</label>
                        <input id="name" type="text" name="name" value={formData.name} onChange={onChange} required />
                    </div>
                    <div className="form-field">
                        <label id="email">Email</label>
                        <input id="email" type="email" name="email" value={formData.email} onChange={onChange} required />
                    </div>
                    <div className="form-field">
                        <label id="password">Senha</label>
                        <input id="password" type="password" name="password" value={formData.password} onChange={onChange} required />
                    </div>
                    <div className="form-field">
                        <label id="confirm-password">Confirmar senha</label>
                        <input id="confirm-password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={onChange} required />
                    </div>
                    <div className="form-field">
                        <button className="button" type="submit">Cadastrar</button>
                    </div>
                </form>
                <div className="">
                    Já possui uma conta?&nbsp;
                    <a href="/account/sign_in">Entre</a>
                </div>
            </div>
        </div>
    );
}

export default SignUp;