import Form from "./components/Form";
import List from "./components/List";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen py-3">
      <h1 className="text-4xl font-bold">Tasks App</h1>
      <div className="flex gap-x-20 mt-10">
        <Form />
        <List />
      </div>
    </div>
  )
}

export default Home;