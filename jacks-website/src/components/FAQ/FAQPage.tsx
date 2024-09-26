import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQPage.css';

interface LandingPageProps {
  isNavbarOpen: boolean;
}

const FAQAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: 'none',
  borderBottom: '1px solid #014421',
  borderTop: '1px solid #014421',
  marginBottom: theme.spacing(1),
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: 'auto',
  },
}));

const FAQExpand = styled(ExpandMoreIcon)(({ theme }) => ({

  color: '#014421',
  marginBottom: theme.spacing(1),

}))

const FAQPage: React.FC<LandingPageProps> = ({ isNavbarOpen}) => {

  const [selected, setSelected] = useState<number | null>(null);

  const handleAccordionChange = (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setSelected(isExpanded ? panel : null);
  };

  return (
    <Container className={`text-center min-h-[72vh] bg-white w-screen`} sx={{ padding: 10 }} maxWidth={false}>
      <Typography
        className={`${isNavbarOpen ? 'visible' : 'visible'}`}
        variant="h1"
        component="h1"
        sx={{
          fontWeight: 'bold',
          marginBottom: 4,
          minHeight: '64px',
        }}
      >
        FAQ
      </Typography>

      <Container className={`${isNavbarOpen ? 'visible' : 'visible'}`}>

      <FAQAccordion expanded={selected === 0} onChange={handleAccordionChange(0)}>
        <AccordionSummary expandIcon={<FAQExpand />}>
          <Typography
            sx={{
              fontWeight: selected === 0 ? 'bold' : 'normal',
            }}
          >
            How far in advance do I need to schedule junk removal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We aim to provide prompt service. Most jobs can be scheduled within a week. Give us a call and you might be surprised how quickly we can help you remove your junk and declutter your space!
          </Typography>
        </AccordionDetails>
      </FAQAccordion>
      <FAQAccordion expanded={selected === 1} onChange={handleAccordionChange(1)}>
        <AccordionSummary expandIcon={<FAQExpand />}>
          <Typography
            sx={{
              fontWeight: selected === 1 ? 'bold' : 'normal',
            }}
          >Do I need to make a pile of junk for removal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Not at all! At Jack's Junk Removal, we prioritize your convenience. You can leave the items right where they are. We'll remove your heavy items from any location on your property, no need to lift a finger.
          </Typography>
        </AccordionDetails>
      </FAQAccordion>
      <FAQAccordion expanded={selected === 2} onChange={handleAccordionChange(2)}>
        <AccordionSummary expandIcon={<FAQExpand />}>
          <Typography
            sx={{
              fontWeight: selected === 2 ? 'bold' : 'normal',
            }}
          >What types of items can you remove?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We offer a wide range of removal services. From large items such as hot tubs, couches, appliances, fridges, mattresses, old TVs to smaller household waste, we're equipped to handle it all.
          </Typography>
        </AccordionDetails>
      </FAQAccordion>
      <FAQAccordion expanded={selected === 3} onChange={handleAccordionChange(3)}>
        <AccordionSummary expandIcon={<FAQExpand />}>
          <Typography
            sx={{
              fontWeight: selected === 3 ? 'bold' : 'normal',
            }}
          >Do you offer any specific services for Multnomah county?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In Multnomah county, where garbage bins are picked up every two weeks, we offer an 'overflowing garbage can service' or 'excess garbage service'. Whether it's because your fridge broke unexpectedly or your power got shut off, we can help you manage your excess waste efficiently.
          </Typography>
        </AccordionDetails>
      </FAQAccordion>
      <FAQAccordion expanded={selected === 4} onChange={handleAccordionChange(4)}>
        <AccordionSummary expandIcon={<FAQExpand />}>
          <Typography
            sx={{
              fontWeight: selected === 4 ? 'bold' : 'normal',
            }}
          >Can you help if my garbage bin is overflowing before the scheduled pickup?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! We understand that unexpected events can lead to an excess of waste. We can empty your overflowing garbage bin and provide the assistance you need to keep your space clean.
          </Typography>
        </AccordionDetails>
      </FAQAccordion>
      <FAQAccordion expanded={selected === 5} onChange={handleAccordionChange(5)}>
        <AccordionSummary expandIcon={<FAQExpand />}>
          <Typography
            sx={{
              fontWeight: selected === 5 ? 'bold' : 'normal',
            }}
          >Do you recycle or donate items?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we prioritize sustainable junk removal. Whenever possible, we strive to recycle, donate, or repurpose items to reduce waste and benefit the community. Our goal is to minimize the environmental impact of junk removal.
          </Typography>
        </AccordionDetails>
      </FAQAccordion>
      <FAQAccordion expanded={selected === 6} onChange={handleAccordionChange(6)}>
        <AccordionSummary expandIcon={<FAQExpand />}>
          <Typography
            sx={{
              fontWeight: selected === 6 ? 'bold' : 'normal',
            }}
          >Are you licensed and insured?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we are fully licensed and insured. Our team is trained to handle junk removal safely and efficiently, and our insurance coverage provides peace of mind for both our clients and our team members.
          </Typography>
        </AccordionDetails>
      </FAQAccordion>
      <FAQAccordion expanded={selected === 7} onChange={handleAccordionChange(7)}>
        <AccordionSummary expandIcon={<FAQExpand />}>
          <Typography
            sx={{
              fontWeight: selected === 7 ? 'bold' : 'normal',
            }}
          >Do I need to be present during the junk removal process?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It's not necessary for you to be present while we remove the junk. As long as we have clear instructions and access to the items, we can efficiently complete the job. If you prefer to be present, we're more than happy to accommodate your request.
          </Typography>
        </AccordionDetails>
      </FAQAccordion>
      <FAQAccordion expanded={selected === 8} onChange={handleAccordionChange(8)}>
        <AccordionSummary expandIcon={<FAQExpand />}>
          <Typography
            sx={{
              fontWeight: selected === 8 ? 'bold' : 'normal',
            }}
          >What areas do you serve?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We provide junk removal services in Clackamas, Multnomah, and Washington counties within the Portland metro area. Please note that Washington county mentioned here refers to the county located in Oregon, not the state of Washington.
          </Typography>
        </AccordionDetails>
      </FAQAccordion>
      <FAQAccordion expanded={selected === 9} onChange={handleAccordionChange(9)}>
        <AccordionSummary expandIcon={<FAQExpand />}>
          <Typography
            sx={{
              fontWeight: selected === 9 ? 'bold' : 'normal',
            }}
          >How do you determine the pricing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our pricing is based on the volume of items being removed. For singular appliances or small amounts of items, there is a minimum charge. Beyond that, the price is determined by how much space your items fill up in our dump truck, such as 1/4 load, 1/2 load, 3/4 load, or a full truck load. If you have a large quantity of dirt or rock, the pricing may vary based on the amount. We strive to provide transparent pricing based on your specific needs.
          </Typography>
        </AccordionDetails>
      </FAQAccordion>


      </Container>

    </Container>
  );
};

export default FAQPage;