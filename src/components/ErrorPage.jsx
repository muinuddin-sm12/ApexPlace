import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative">
      <section className="flex absolute top-0 left-0 w-full items-center h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn&apos;t find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link className="btn text-base border-2 border-gray-200" to="/">Back to HomePage</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
