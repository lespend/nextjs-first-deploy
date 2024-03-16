const User = ({ user }) => {
  return <div>Пользователь {user.name}</div>;
};

export default User;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user = await response.json();

  return {
    props: {
      user,
    },
  };
}
