
import{P} from './Menu.styled';
const Menu = ({children}) => {
  return (
    <>
      <a href="#">
       <P>{children}</P> 
      </a>
    </>
  );
};

export default Menu;
