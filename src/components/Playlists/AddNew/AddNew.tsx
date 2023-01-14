import React, { useState, useEffect } from "react";
import Add from "../../../utils/svg/Add";
import "./AddNew.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddNewTracks from "./AddNewTracks/AddNewTracks";
import getData from "../../../data/getData";
import Loader from "../../Loader/Loader";

function AddNew() {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    getData(0)
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="add-new" onClick={handleOpen}>
        <Add />
        <div className="add-new-title">
          <span className="add-new-title-text">Create New PlayList</span>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {data.length > 0 ? (
            <AddNewTracks close={handleClose} data={data} />
          ) : (
            <Loader />
          )}
        </Box>
      </Modal>
    </>
  );
}

export default AddNew;
