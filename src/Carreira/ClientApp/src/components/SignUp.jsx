import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isEmployer: false
    });

    const navigate = useNavigate();

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData((values) => ({ ...values, [name]: value }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("api/account/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message);
            navigate("/account/signin")
        } else if (response.status === 409) {
            const data = await response.json();
            alert(data.error);
        }
    };

    return (
        <div className="wrapper">
            <div className="form-container max-w-sm card">
                <form onSubmit={onSubmit} method="POST">
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
                    <div className="form-field use-flex align-middle">
                        <label htmlFor="role" className="inline">Sou empregador</label>
                        <input id="role" type="checkbox" name="isEmployer" checked={formData.isEmployer} onChange={(event) => onChange({
                            target: {
                                name: event.target.name,
                                value: event.target.checked,
                            }
                        })} />
                    </div>
                    <div className="form-field">
                        <button className="button" type="submit">Cadastrar</button>
                    </div>
                </form>
                <div className="">
                    Já possui uma conta?&nbsp;
                    <a href="/account/signin">Entre</a>
                </div>
            </div>
        </div>
    );
}

export default SignUp;