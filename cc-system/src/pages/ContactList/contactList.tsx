import { useState, useEffect } from "react";
import ContactForm from "../../components/ContactForm";
import { Contact } from "../../types/contact";
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container } from "@mui/material";

interface Props { }

const Private: React.FC<Props> = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [editingContact, setEditingContact] = useState<Contact | null>(null);

    const handleAddContact = (contact: Contact) => {
        setContacts([...contacts, contact]);
        console.log("contacts", contacts)
        console.log("contact", contact)
    };

    useEffect(() => {
        if (contacts.length > 0) {
            localStorage.setItem("contact", JSON.stringify(contacts))
        }
    }, [contacts])

    useEffect(() => {
        const storedContacts = localStorage.getItem("contact")
        if (storedContacts != null) {
            try {
                const parsedContacts = JSON.parse(storedContacts)
                setContacts(parsedContacts)
            } catch (error) {
                console.error(error)
            }
        }
    }, [])

    const handleEditContact = (contact: Contact) => {
        const index = contacts.findIndex((c) => c.id === contact.id);
        const newContacts = [...contacts];
        newContacts[index] = contact;
        setContacts(newContacts);
        setEditingContact(null);
    };

    const handleRemoveContact = (id: number) => {
        setContacts(contacts.filter((c) => c.id !== id));
        const storedContacts = localStorage.getItem("contact");
        if (storedContacts && typeof storedContacts === "string") {
            // Obter a matriz de contatos armazenados no localStorage
            const contacts = JSON.parse(storedContacts);
            // Remover o contato específico da matriz de contatos
            const updatedContacts = contacts.filter((c: any) => c.id !== id);
            // Atualizar o localStorage com a matriz de contatos atualizada
            localStorage.setItem("contact", JSON.stringify(updatedContacts));
        }

    };

    const handleEditButtonClick = (contact: Contact) => {
        setEditingContact(contact);
    };

    return (
        <Container>

            <Grid container spacing={2} sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{ color: "#fff", margin: "50px 0 20px 0", fontWeight: "bold" }}>Contact List</Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>CPF</TableCell>
                                    <TableCell>Date of Birth</TableCell>
                                    <TableCell>Numbers</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {contacts.map((contact) => (
                                    <TableRow key={contact.id}>
                                        <TableCell>{contact.name}</TableCell>
                                        <TableCell>{contact.email}</TableCell>
                                        <TableCell>{contact.cpf}</TableCell>
                                        <TableCell>{contact.date_born}</TableCell>
                                        <TableCell>{contact.numbers.join(", ")}</TableCell>
                                        <TableCell>
                                            <Button onClick={() => handleEditButtonClick(contact)} sx={{ backgroundColor: "#620cca", marginRight: "5px", color: "#fff", fontWeight: "bold" }}>Edit</Button>
                                            <Button onClick={() => handleRemoveContact(contact.id)} sx={{ backgroundColor: "#620cca", color: "#fff", fontWeight: "bold" }}>Remove</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12}>
                    <ContactForm
                        onAddContact={handleAddContact}
                        onEditContact={handleEditContact}
                        editingContact={editingContact}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Private;
