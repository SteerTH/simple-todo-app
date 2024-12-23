import { TodoList } from "../components/TodoList";
import { Banner } from "../components/Banner";

export const Home = () => {
  return (
    <>
      <Banner />
      <main className="py-16 container mx-auto px-6 md:px-0 min-h-screen">
        <section>
          <h1 className="text-3xl font-bold text-gray-600 mb-10">
            Explore your own Todos
          </h1>
          <TodoList />
          <hr className="w-40 my-14 border-4 rounded-md sm:mx-0 mx-auto" />
        </section>
      </main>
    </>
  );
};
