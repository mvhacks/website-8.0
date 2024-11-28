import React from "react";
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';

function addPerson(name: string, image: string) {
    return { name, image };
}

const blank = "https://th.bing.com/th/id/OIP.ybB2a0HimX1I-ybBY4pOPwHaHa?rs=1&pid=ImgDetMain";
const directors = [
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
];

const tech = [
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
];

const event = [
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
];

const outreach = [
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
];

const sponsorship = [
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
    addPerson('Person', blank),
];

const teams = [
    { name: "Directors", members: directors },
    { name: "Tech", members: tech },
    { name: "Event", members: event },
    { name: "Outreach", members: outreach },
    { name: "Sponsorship", members: sponsorship },
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
            <Table
                sx={{
                    backgroundColor: '#221a46',
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
                {teams.map((team) => (
                <tbody key={team.name}> 
                    <tr>
                        <td
                            style={{
                                fontSize: '20px',
                                textTransform: 'uppercase',
                                padding: '12px 16px'
                            }}
                        >
                            {team.name}
                        </td>
                    </tr>
                    <tr>
                        <td> 
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'left',
                                    gap: '16px'
                                }}
                            >
                            {team.members.map((member, i) => (
                                <div
                                    key={i}
                                    style={{
                                        width: '180px',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <img
                                        src={member.image}
                                        style={{
                                            width: '170px',
                                            height: 'auto',
                                        }}
                                    />
                                    <div
                                        style={{
                                            fontSize: '16px'
                                        }}
                                    >
                                        {member.name}
                                    </div>
                                </div>
                            ))}
                            </div>
                        </td>
                    </tr>
                </tbody>
                ))}
            </Table>
        </div>
    );
}