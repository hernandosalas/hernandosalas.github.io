import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Nav from "react-bootstrap/Nav";
import { FaTools } from "react-icons/fa";
import { ImHappy2, ImAirplane, ImBookmarks } from "react-icons/im";
import { SiVisualstudio } from "react-icons/si";
import { GrDocumentNotes } from "react-icons/gr";

function NavBar() {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem icon={<FaTools />}>
          <Nav.Link href="/tools">Tools</Nav.Link>
        </MenuItem>
        <MenuItem icon={<ImHappy2 />}>
          <Nav.Link href="/entertainment">Entertainment</Nav.Link>
        </MenuItem>
        <MenuItem icon={<SiVisualstudio />}>
          <Nav.Link href="/programming">Programming</Nav.Link>
        </MenuItem>
        <MenuItem icon={<ImAirplane />}>
          <Nav.Link href="/travel">Travel</Nav.Link>
        </MenuItem>
        <MenuItem icon={<ImBookmarks />}>
          <Nav.Link href="/bookmarks">Bookmarks</Nav.Link>
        </MenuItem>
        <MenuItem icon={<GrDocumentNotes />}>
          <Nav.Link href="https://github.com/hernandosalas/Bookmarks/tree/main/Notes">
            Notes
          </Nav.Link>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default NavBar;
