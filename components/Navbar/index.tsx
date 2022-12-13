import { Container, List, ListItem, Underline } from "./styles";

interface INavbar {
  activeItem: string;
  handleItemClick: (item: string) => void;
  items: string[];
}

const Navbar = ({ activeItem, handleItemClick, items }: INavbar) => {
  return (
    <Container>
      <List>
        {items?.map((item) => (
          <ListItem
            key={item}
            onClick={() => handleItemClick(item)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}

            {activeItem === item && (
              <Underline
                animate={{ width: "100%" }}
                initial={{ width: "0%" }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Navbar;
