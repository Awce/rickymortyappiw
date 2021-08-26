import { Menu } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <Menu>
      <Menu.Item key="add" icon={<UserAddOutlined />}>
        Agregar nuevo personaje
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
