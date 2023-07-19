import { Menu } from "./UserMenuStyle";

export default function UserMenu({ userData, activeUser, setActiveUser }) {
  
  function changeUser() {
    if (activeUser + 1 >= userData.length) {
      setActiveUser(0);
    } else setActiveUser(activeUser + 1);
  }

  return (
    <Menu>
      <h1>Olá, {userData[activeUser].username}!</h1>
      <button onClick={() => changeUser()}>Trocar de usuário</button>
    </Menu>
  );
}
