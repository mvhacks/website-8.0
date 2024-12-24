import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Button from "@mui/joy/Button";
import blank from "../images/Team/blank.jpeg";
import e from "../images/email.png";
import g from "../images/github.png";

import alex from "../images/Team/alex.jpeg"; 
import saahiti from "../images/Team/saahiti.png";
import emily from "../images/Team/emily.jpg";
import noam from "../images/Team/noam.png";
import milo from "../images/Team/milo.jpeg";
import evelyn from "../images/Team/evelyn.png";
import jeremy from "../images/Team/jeremy.png";
import nikita from "../images/Team/nikita.jpeg";
import ada from "../images/Team/ada.jpg";

function addPerson(name: string, image: string, role: string, link: string, type: string) {

    let typeImage = type === "Github" ? g : e;

    return { name, image, role, link, type, typeImage};
}

const directors = [
    addPerson('Alexandra Markova', alex, 'Director', 'https://github.com/kitkatmia','Github'),
    addPerson('Saahiti Bondalapati', saahiti, 'Outreach Director', 'saahiti@mvhacks.io','Email'),
    addPerson('Arthur Cheong', blank, 'Emcee', 'arthurc@mvhacks.io','Email'),
    addPerson('Emily Markova', emily, 'Tech Director', 'https://github.com/emilymarkova','Github'),
    addPerson('Yhali Matot', blank, 'Sponsorship Director', 'alexm@mvhacks.io','Email')
];

const tech = [
    addPerson('Noam Kassoff', noam, 'Member', 'https://github.com/noamkassoff','Github'),
    addPerson('Milo Lin', milo, 'Member', 'milo@mvhacks.io','Email'),
    addPerson('Emily Markova', emily, 'Director', 'emily@mvhacks.io','Email'),
    addPerson('Mia Ravishankar', blank, 'Member', 'miar@mvhacks.io','Email'),
    addPerson('Evelyn Yang', evelyn, 'Member', 'evelyny@mvhacks.io','Email'),
    addPerson('Jeremy Yu', jeremy, 'Member', 'https://github.com/jt31415','Github')
];

const outreach = [
    addPerson('Saahiti Bondalapati', saahiti, 'Director', 'saahiti@mvhacks.io', 'Email'),
    addPerson('Rohin Gupta', blank, 'Member', 'alexm@mvhacks.io','Email'),
    addPerson('Nikita Narrang', nikita, 'Member', 'nikita@mvhacks.io','Email'),
    addPerson('Ishaan Sharma', blank, 'Member', 'alexm@mvhacks.io','Email'),
    addPerson('Mirabel Wang', blank, 'Member', 'mirabelw@mvhacks.io','Email')
];

const sponsorship = [
    addPerson('Kirati Bollineni', blank, 'Member', 'alexm@mvhacks.io','Email'),
    addPerson('Ethan Chen', blank, 'Member', 'alexm@mvhacks.io','Email'),
    addPerson('Owen Kim', blank, 'Member', 'alexm@mvhacks.io','Email'),
    addPerson('Yhali Matot', blank, 'Director', 'alexm@mvhacks.io','Email'),
    addPerson('Henry Shih', blank, 'Member', 'henry@mvhacks.io','Email'),
    addPerson('Shankaran Srivatsa', blank, 'Member', 'alexm@mvhacks.io','Email'),
    addPerson('Kevin Thompson', blank, 'Member', 'alexm@mvhacks.io','Email'),
    addPerson('Ada Tulac', ada, 'Member', 'adat@mvhacks.io','Email')
];

const teams = [
    { name: "Directors", members: directors },
    { name: "Tech", members: tech },
    { name: "Outreach", members: outreach },
    { name: "Sponsorship", members: sponsorship }
];

export default function Team() {
    return (
        <div style={{ padding: '5%' }}>
            <Typography
                level="h2"
                sx={{
                    color: '#ffffff',
                    marginBottom: '2%',
                    textAlign: "center"
                }}
            >
                TEAM
            </Typography>

            {teams.map((team) => (
                <Table
                    sx={{
                        backgroundColor: '#221a46',
                        marginTop: '2%',
                        color: 'white',
                        border: '6px solid #c6add4',
                        overflow: 'hidden',
                        '& td, & th': {
                            padding: '12px 16px',
                            fontSize: '1.1rem',
                            wordWrap: 'break-word',
                            whiteSpace: 'normal',
                        }
                    }}
                >
                    <tbody key={team.name}> 
                        <tr>
                            <td style={{ fontSize: '20px', textTransform: 'uppercase', padding: '12px 16px' }}>
                                {team.name}
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', gap: '16px' }}>

                                {team.members.map((member, i) => (
                                    <div key={i} style={{ width: '180px', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src={member.image} height="170px" width="170px" id="member" alt="member-image" style={{ objectFit: "cover"}} />
                                        <div style={{ fontSize: '17px', fontWeight: 'bold', color: 'white'}}>
                                            {member.name}
                                        </div>
                                        <div style={{ fontSize: '15px', color: 'grey'}}>
                                            {member.role}
                                        </div>
                                        <div>
                                            <Button
                                                sx={{ borderRadius: "10px", marginTop: "3%", backgroundColor: '#c6add4', height: "30px", width:"170px",
                                                    '&:hover': {backgroundColor: '#bb97cf'}
                                                }}
                                                id="link"
                                                component="a"
                                                href={member.link}
                                            >
                                                <img src={member.typeImage} height="25" width="25" id="member" alt="member-link" style={{paddingRight: "10px"}}/>
                                                {member.type}
                                            </Button>
                                        </div>
                                    </div>
                                ))}

                                </div>
                            </td>
                        </tr>
                    </tbody>
            </Table>
            ))}
            
        </div>
    );
}