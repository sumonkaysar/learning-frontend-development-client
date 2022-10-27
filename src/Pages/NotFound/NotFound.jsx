import { getFromLocalStorage } from "../../utilities/utilities";

const NotFound = () => {
  const theme = getFromLocalStorage('theme') || 'dark';

  return (
    <div className="flex items-center justify-center h-[100vh] bg-base-100" data-theme={theme}>
      <div className="text-center">
        <h1 className="text-8xl">404</h1>
        <h3 className="text-4xl mb-4">Page Not Found</h3>
        <p className="w-72">The page you're looking for might be broken or does not exist</p>
      </div>
    </div>
  );
}

export default NotFound;
