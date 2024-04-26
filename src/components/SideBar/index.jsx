import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import './styles.sideBar.scss'

export const SideBar = ({ setPage, page }) => {
  return (
    <nav className="side_bar_container">
      <ul className="side_bar_list">
        <li className="side_bar_item"><button title="Home" className={page === 'home' ? 'side_bar_button_highlight' : 'side_bar_button'} onClick={() => { setPage("home"); }}><HomeRoundedIcon fontSize="medium" /></button></li>
        <li className="side_bar_item"><button title="Sobre" className={page === 'about' ? 'side_bar_button_highlight' : 'side_bar_button'} onClick={() => { setPage("about"); }}><AccountCircleRoundedIcon fontSize="medium" /></button></li>
        <li className="side_bar_item"><button title="Serviços" className={page === 'services' ? 'side_bar_button_highlight' : 'side_bar_button'} onClick={() => { setPage("services"); }}><WebOutlinedIcon fontSize="medium" /></button></li>
        <li className="side_bar_item"><button title="Projetos" className={page === 'projects' ? 'side_bar_button_highlight' : 'side_bar_button'} onClick={() => { setPage("projects"); }}><DashboardRoundedIcon fontSize="medium" /></button></li>
      </ul>
    </nav>
  );
};
