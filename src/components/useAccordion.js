import React, { useState } from "react";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import { ReactComponent as IconChevronRight } from "../assets/icons/ic_chevron_right.svg";
import { ReactComponent as IconCircleChecklist } from "../assets/icons/ic_circle_checklist.svg";
import styles from "../styles/dashboard/index.module.scss";

function useAccordion() {
  const AcdContainer = (props) => {
    return <Accordion>{props.children}</Accordion>;
  };

  const AcdSummary = (props) => {
    const { isCompleted } = props;

    const handleAclValidation = () => {
      if (isCompleted === 1) {
        return styles.Accordion_Summary_Success;
      }
      if (isCompleted === 2) {
        return styles.Accordion_Summary_Error;
      }
      if (isCompleted === 0) {
        return;
      }
    };

    return (
      <AccordionSummary className={handleAclValidation()}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          style={{ width: "100%" }}
        >
          <Typography>{props.children}</Typography>
          {isCompleted === 1 && <IconCircleChecklist />}
        </Stack>
      </AccordionSummary>
    );
  };

  AcdSummary.defaultProps = {
    isCompleted: 0,
  };

  const AcdDetails = (props) => {
    return <AccordionDetails>{props.children}</AccordionDetails>;
  };

  return {
    AcdContainer,
    AcdSummary,
    AcdDetails,
  };
}

export default useAccordion;

const Accordion = styled((props) => (
  <MuiAccordion elevation={0} square {...props} />
))(({ theme }) => ({
  marginBottom: "10px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<IconChevronRight />} {...props} />
))(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: "#F7F8FD",
  border: "1px solid #D8DCF2",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content, & .MuiAccordionSummary-content.Mui-expanded":
    {
      marginLeft: theme.spacing(1),
    },
  ".css-1jv2z0n-MuiStack-root": {
    svg: {
      width: "32px",
      height: "32px",
    },
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));
