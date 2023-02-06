import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getToken } from "../services/auth";

function JobForm() {
    const { jobId } = useParams();
    const [ token, setToken ] = useState("");
    const [formData, setFormData] = useState({
        jobId: "",
        title: "",
        description: "",
        companyName: "",
        companyEmail: "",
        companyLocation: ""
    });

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("api/jobs", {
            method: jobId === "" ? "POST" : "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`          
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Vaga anunciada com sucesso")
            navigate("/");
        }
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    useEffect(() => {
        const token = getToken();
        setToken(token);

        if (jobId) {
            fetch(`api/jobs/${jobId}`)
                .then((response) => response.json())
                .then((data) => {
                    setFormData((prev) => ({ ...prev, ...data, jobId: jobId }))
                });
        }
    }, []);

    return (
        <div className="content-sm">
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
                    <input id="title" type="text" name="title" value={formData.title} onChange={onChange} required />
                </div>
                <div className="form-field">
                    <label id="description">Descrição da vaga</label>
                    <textarea id="description" rows="10" name="description" value={formData.description} onChange={onChange} required />
                </div>
                <div className="form-field">
                    <button className="button button-primary" type="submit">Publicar Vaga</button>
                </div>
            </form>
        </div>
    );
}

export default JobForm;