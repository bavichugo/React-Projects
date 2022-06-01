import Layout from "./components/UI/Layout";
import UserCard from "./components/project/UserCard";
import UserForm from "./components/project/UserForm";

function App() {
  return (
    <Layout>
      <UserForm />
      <UserCard />
    </Layout>
  );
}

export default App;
