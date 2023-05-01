import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const faq =[
    {
      title:'An Important Question',
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse "
    },

    {
      title:" Another Important Question",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse "
    }
    ,
    {
      title:" Your Favorite Question",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse "
    }
    ,
    {
      title:'  Some Random Question',
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse "
    }
    ,{
      title:' The Final Question',
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse " 
    }
]
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {
        faq?.map((item)=>(
          <Accordion 
           key={item?.title}
          defaultExpanded>

        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
           {item?.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {item?.question}
          </Typography>
        </AccordionDetails>

      </Accordion>
        ))
      }
      
    </Box>
  );
};

export default FAQ;