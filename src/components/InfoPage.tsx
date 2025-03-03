import "../App.css";
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

export default function InfoPage() {
  const [isMobile, setIsMobile] = useState<Boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 830); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      {!isMobile && (<div style={{marginTop: "50px"}}>
        <motion.div
          initial={{ opacity: 0, y: 50}}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7}}}
          viewport={{ once: true, amount: 1 }}
        >
          <Card
            orientation="horizontal"
            size="md"
            variant="outlined"
            sx={{
              "--Card-padding": "16px",
              "--Card-radius": "26px",
              display: "flex",
              flexDirection: "column",
              width: "40%",
              marginLeft: "10%",
              backgroundColor: "black"
            }}>
              <CardContent sx={{alignItems: "center"}}>
                <Typography textColor={"#c8acd4"} level="h2">Where Boundaries Fade and Ideas Flourish</Typography>
                <Typography textColor={"common.white"}>MVHacks is proud to give a platform for aspiring tech enthusiasts to grow and learn by making unique projects that progress society.</Typography>
              </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50}}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7}}}
          viewport={{ once: true, amount: 1 }}
        >
          <Card
            orientation="horizontal"
            size="md"
            variant="outlined"
            sx={{
              "--Card-padding": "16px",
              "--Card-radius": "26px",
              display: "flex",
              flexDirection: "column",
              marginLeft: "48%",
              marginRight: "10%",
              marginTop: "100px",
              backgroundColor: "black"
            }}>
              <CardContent sx={{alignItems: "center"}}>
                <Typography textColor={"#c8acd4"} level="h2">Workshops and advice to help you grow</Typography>
                <Typography textColor={"common.white"}>With specialized judges that are currently in the tech industry, at MVHacks you'll receive the best feedback to help you improve.</Typography>
              </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50}}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7}}}
          viewport={{ once: true, amount: 1 }}
        >
          <Card
            orientation="horizontal"
            size="md"
            variant="outlined"
            sx={{
              "--Card-padding": "16px",
              "--Card-radius": "26px",
              display: "flex",
              flexDirection: "column",
              marginTop: "100px",
              marginLeft: "10%",
              marginBottom: "5%",
              width: "40%",
              backgroundColor: "black"
            }}
          >
              <CardContent sx={{alignItems: "center"}}>
                <Typography textColor={"#c8acd4"} level="h2">Real world collaboration and innovation</Typography>
                <Typography textColor={"common.white"}>The MVHacks schedule is currently in development, but expect team-building exercises, workshops, and challenges!</Typography>
              </CardContent>
          </Card>
        </motion.div>
      </div>)}
      {isMobile && (<div style={{marginTop: "50px"}}>
        <motion.div
          initial={{ opacity: 0, y: 50}}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7}}}
          viewport={{ once: true, amount: 1 }}
        >
          <Card
            orientation="horizontal"
            size="md"
            variant="outlined"
            sx={{
              "--Card-padding": "16px",
              "--Card-radius": "26px",
              display: "flex",
              margin: "0 10%",
              flexDirection: "column",
              backgroundColor: "black",
              padding: "5%"
            }}>
              <CardContent sx={{alignItems: "center"}}>
                <Typography textColor={"#c8acd4"} level="h2">Where Boundaries Fade and Ideas Flourish</Typography>
                <Typography textColor={"common.white"} level="body-md">MVHacks is proud to give a platform for aspiring tech enthusiasts to grow and learn by making unique projects that progress society.</Typography>
              </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50}}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7}}}
          viewport={{ once: true, amount: 1 }}
        >
          <Card
            orientation="horizontal"
            size="md"
            variant="outlined"
            sx={{
              "--Card-padding": "16px",
              "--Card-radius": "26px",
              display: "flex",
              flexDirection: "column",
              margin: "10% 10%" ,
              backgroundColor: "black",
              padding: "5%"
            }}>
              <CardContent sx={{alignItems: "center"}}>
                <Typography textColor={"#c8acd4"} level="h2">Workshops and advice to help you grow</Typography>
                <Typography textColor={"common.white"} level="body-md">With specialized judges that are currently in the tech industry, at MVHacks you'll receive the best feedback to help you improve.</Typography>
              </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50}}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7}}}
          viewport={{ once: true, amount: 1 }}
        >
          <Card
            orientation="horizontal"
            size="md"
            variant="outlined"
            sx={{
              "--Card-padding": "16px",
              "--Card-radius": "26px",
              display: "flex",
              flexDirection: "column",
              margin: "10% 10%" ,
              backgroundColor: "black",
              padding: "5%"
            }}
          >
              <CardContent sx={{alignItems: "center"}}>
                <Typography textColor={"#c8acd4"} level="h2">Real world collaboration and innovation</Typography>
                <Typography textColor={"common.white"} level="body-md">The MVHacks schedule is currently in development, but expect team-building exercises, workshops, and challenges!</Typography>
              </CardContent>
          </Card>
        </motion.div>
      </div>)}
    </div>
  );
}