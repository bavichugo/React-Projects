import Layout from "./components/UI/Layout";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";

function App() {
  return (
    <Layout>
      <UserForm />
      <UserCard />
    </Layout>
  );
}

export default App;
