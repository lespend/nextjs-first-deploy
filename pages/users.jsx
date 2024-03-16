import Link from "next/link";
import Container from "../components/Container/Container";

const Users = ({ users }) => {
  return (
    <Container>
      <h1>Список пользователей</h1>
      {users.map((user) => (
        <li>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </Container>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users },
  };
}
