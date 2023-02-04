
import { useState } from "react";

function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData((values) => ({ ...values, [name]: value }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        fetch("api/account/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then(console.log);
    };

    return (
        <div className="wrapper">
            <div className="form-container max-w-sm card">
                <form onSubmit={onSubmit} method="POST">
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
                    <a href="/account/signup">Cadastre-se</a>
                </div>
            </div>
        </div>
    );
}

export default SignIn;