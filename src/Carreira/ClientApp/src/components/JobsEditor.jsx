import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, getToken } from "../services/auth";

function JobsEditor() {
    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [token, setToken] = useState(null);

    const onEdit = (id) => {
        navigate(`/publish/${id}`);    
    }

    const onDelete = async (id) => {
        const message = "Excluir este anúncio permanentemente?";
        if (window.confirm(message)) {
            const response = await fetch(`api/jobs/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                alert("Anúncio deletado!");
                window.location.reload(true);
            }
        }
    }

    useEffect(() => {
        const user = getCurrentUser();
        const token = getToken();

        fetch(`api/jobs/user/${user.id}`)
            .then((response) => response.json())
            .then(setItems);

        setToken(token);
    }, []);

    return (
        <div className="content overflow-x-auto">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.description.substring(0, 255)}</td>
                            <td>
                                <div className="align-center justify-between">
                                    <button className="padding-x-sm" onClick={() => onEdit(item.id)}>Editar</button>
                                    <button className="padding-x-sm" onClick={() => onDelete(item.id)}>Excluir</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default JobsEditor;