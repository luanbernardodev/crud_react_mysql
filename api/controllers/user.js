import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};


export const addUser = (req, res) => {
    const q =
        "INSERT INTO usuarios (`mome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

    const values = [
        req.body.mome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [values], (err) => {

        if (err) return res.json(err);
        return res.status(200).json("Usuário criado com sucesso!");
    });

};


export const updateUser = (req, res) => {
    const q =
        "UPDATE usuarios SET `mome` = ?, `email` = ?, `fone` = ?, `data_nascimento` =? WHERE `id` = ?";

    const values = [
        req.body.mome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return re.json(err);

        return res.status(200).json("Usuário atualizado com sucesso!");
    });
};


export const deleteUser = (req, res) => {
    const q = 
    "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário Deletado!")
    });

};