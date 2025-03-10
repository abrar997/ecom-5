import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";

const Dropdown = ({
  button,
  data,
  className,
  itemClassName,
  ClassBtn,
  anchor,
}) => {
  return (
    <Menu>
      <MenuButton className={ClassBtn ? ClassBtn : ""}>{button}</MenuButton>
      <MenuItems transition anchor={anchor} className={`${className}`}>
        {data.map((item, index) => (
          <MenuItem key={index}>
            <Link className={itemClassName} to={item.to} accordion-item>
              <span>{item.icon}</span>
              <span> {item.title}</span>
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
