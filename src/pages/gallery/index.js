import React, { useEffect, useState } from "react";
import { Navbar, GalleryCard, ClassComCard } from "../../components";
import { AiFillCamera ,AiFillCaretDown} from "react-icons/ai";
import { FaAppStoreIos } from "react-icons/fa6";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
  function valuetext(value) {
    return `${value}°C`;
  }
const Gallery = () => {
  const [show, setShow] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setShow(false);
//     }, 5000);
//   }, []);
  return (
    <div>
      <Navbar isProfileShow={true} />
      <h1>Gallery</h1>
      <AiFillCamera color="red" size={50}/>
      <AiFillCaretDown color="green" size={10}/>
      <FaAppStoreIos color="blue" size={250} />
      <AccessibilityIcon />
      <GalleryCard title="Card 01" color="blue" />

    {show &&  <ClassComCard color="yellow" />}
    <button onClick={()=> setShow(!show)}>Show</button>
    <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={0.00000005}
        getAriaValueText={valuetext}
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
    </Box>
    </div>
  );
};
export default Gallery;
