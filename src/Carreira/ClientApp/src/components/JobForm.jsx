import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobForm() {
    const [ formData, setFormData ] = useState({
        title: "",
        description: "",
        companyName: "",
        companyEmail: "",
        companyLocation: ""
    });

    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        fetch("api/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then(console.log);

        navigate("/");
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <div className="content">
            <form onSubmit={onSubmit} method="POST">
                <div className="form-field">
                    <label id="company-name">Nome da empresa</label>
                    <input id="company-name" type="text" name="companyName" value={formData.companyName} onChange={onChange} required/>
                </div>
                <div className="form-field">
                    <label id="company-email">E-mail da empresa</label>
                    <input id="company-email" type="email" name="companyEmail" value={formData.companyEmail} onChange={onChange} required />
                </div>
                <div className="form-field">
                    <label id="company-location">Endereço da empresa</label>
                    <input id="company-location" type="text" name="companyLocation" value={formData.companyLocation} onChange={onChange} required />
                </div>
                <div className="form-field">
                    <label id="title">Título da vaga</label>
                    <input id="title" type="text" name="title" value={formData.titulo} onChange={onChange} required />
                </div>
                <div className="form-field">
                    <label id="description">Descrição da vaga</label>
                    <textarea id="description" rows="10" name="description" value={formData.description} onChange={onChange} required />
                </div>
                <div className="form-field">
                    <button className="button" type="submit">Publicar Vaga</button>
                </div>
            </form>
        </div>
    );
}

export default JobForm;