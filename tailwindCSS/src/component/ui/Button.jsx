export default function Button({
  children,
  color = "text-white",
  bgColor = "before:bg-primary",
  dark = false,
}) {
  return (
    <a
      href="/"
      className={`relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full ${bgColor} before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max ${
        dark ? "dark:before:border-gray-700 dark:before:bg-gray-800" : ""
      }`}
    >
      <span
        className={`relative text-base font-semibold ${color} ${
          dark ? "dark:text-white" : ""
        }`}
      >
        {children}
      </span>
    </a>
  );
}
