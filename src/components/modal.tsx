import React, { useEffect, useState } from "react";
import { Box, Button, Skeleton, Alert } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { countryCodeMapper } from "@/constants/countryCodeMapper";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 6,
  borderRadius: 5,
};

interface Props {
  open: boolean;
  handleClose: any;
}

export const DetailsModal = (props: Props) => {
  const { open, handleClose } = props;

  const { name, age, gender, country, error } = useSelector(
    (state: RootState) => state
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          >
          {error ? (
            <Alert severity="error" style={{fontSize:"20px"}}>
              {error?.message}
            </Alert>
          ):
          <>
            <Typography
              className="ModalHeader"
              variant="h5"
              component="h3"
              textAlign="center"
              mb={2}
              fontSize={"40px"}
            >
            <strong>{name ? name : "No Details Found"}</strong>
            </Typography>


            <Typography
              fontSize={"30px"}
              variant="body1"
              id="modal-modal-description"
              textAlign="left"
              mb={2}
              className="ModalDetail"
            >
              <div className="ModalDetailField">
                <div className="SvgContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    width="30"
                    className="label-icon"
                  >
                    <path fill="rgb(62, 61, 61)" d="M480-240q-56 0-107 17.5T280-170v10h400v-10q-42-35-93-52.5T480-240Zm-280 34q54-53 125.5-83.5T480-320q83 0 154.5 30.5T760-206v-514H200v514Zm280-194q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T540-540q0-25-17.5-42.5T480-600q-25 0-42.5 17.5T420-540q0 25 17.5 42.5T480-480ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm280-460Zm0 380h200-400 200Z" />
                  </svg>
                </div>
                <strong>
                  <span className="LabelText">Age: </span>
                </strong>{" "}
                {age ? `${age} Years` : "N/A"}
                <br />
              </div>

              <div className="ModalDetailField">
                <div className="SvgContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    width="30"
                    className="label-icon"
                  >
                    <path fill="rgb(62, 61, 61)" d="M220-80v-300h-60v-220q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v220h-60v300H220Zm80-640q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720ZM600-80v-240H480l102-306q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l102 306H720v240H600Zm60-640q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z" />
                  </svg>
                </div>
                <strong>
                  <span className="LabelText">Gender: </span>
                </strong>{" "}
                {gender ? gender : "N/A"}
                <br />
              </div>

              <div className="ModalDetailField">
                <div className="SvgContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    width="30"
                    className="label-icon"
                  >
                    <path fill="rgb(62, 61, 61)" d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" />
                  </svg>
                </div>
                <strong>
                  <span className="LabelText">Country: </span>
                </strong>{" "}
                {country ? countryCodeMapper[country] : "N/A"}
              </div>
            </Typography>
          </>}
        </Box>
      </Modal>
    </div>
  );
};
