import { useState, useEffect } from "react";
import { Contact } from "../types/contact";

import { Button, TextField, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Form = styled("form")({
    borderRadius: "0.5rem",
    padding: "1rem",
    "& input": {
        backgroundColor: "#fff"
    },
    "& button": {
        backgroundColor: "#620cca",
        ":hover": {
            backgroundColor: "#f8de64"
        }
    }
});

interface Props {
    onAddContact: (contact: Contact) => void;
    onEditContact: (contact: Contact) => void;
    editingContact: Contact | null;
}

const ContactForm: React.FC<Props> = ({ onAddContact, onEditContact, editingContact }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [date_born, setDateBorn] = useState("");
    const [numbers, setNumbers] = useState<string[]>([]);
    const [numberInput, setNumberInput] = useState("");

    useEffect(() => {
        if (editingContact) {
            setName(editingContact.name);
            setEmail(editingContact.email);
            setCpf(editingContact.cpf);
            setDateBorn(editingContact.date_born);
            setNumbers([...editingContact.numbers]);
        }
    }, [editingContact]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "cpf":
                setCpf(value);
                break;
            case "date_born":
                setDateBorn(value);
                break;
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (editingContact) {
            const editedContact: Contact = {
                id: editingContact.id,
                name,
                email,
                cpf,
                date_born,
                numbers,
            };
            onEditContact(editedContact);
        } else {
            const newContact: Contact = {
                id: Math.random(),
                name,
                email,
                cpf,
                date_born,
                numbers,
            };
            onAddContact(newContact);
        }

        setName("");
        setEmail("");
        setCpf("");
        setDateBorn("");
        setNumbers([]);
    };

    const handleRemoveNumber = (numberToRemove: string) => {
        setNumbers(numbers.filter((number) => number !== numberToRemove));
    };

    const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setNumberInput(value);
    };

    const handleAddNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setNumbers([...numbers, numberInput]);
        setNumberInput('');
    };

    return (
        <Form onSubmit={handleSubmit} sx={{
            display: 'flex',
            height: '70vh',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <TextField
                        label="Name"
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="CPF"
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={cpf}
                        onChange={handleInputChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        type="date"
                        id="date_born"
                        name="date_born"
                        value={date_born}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                label="Numbers"
                                type="text"
                                id="number-input"
                                name="number-input"
                                value={numberInput}
                                onChange={handleNumberInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button variant="contained" onClick={handleAddNumber} fullWidth sx={{ backgroundColor: "#f8de64" }}>
                                Add Number
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <ul>
                        {numbers.map((number) => (
                            <li key={number} style={{ display: "flex", justifyContent: "center" }}>
                                <Typography sx={{ color: "#fff", margin: "5px 20px 0 0" }}>
                                    {number}
                                </Typography>
                                <Button type="button" variant="contained" onClick={() => handleRemoveNumber(number)}>
                                    Remove
                                </Button>
                            </li>
                        ))}
                    </ul>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: "#f8de64", fontWeight: "bold" }}>
                        {editingContact ? "Save" : "Add Contact"}
                    </Button>
                </Grid>
            </Grid>
        </Form>
    );
}
export default ContactForm
