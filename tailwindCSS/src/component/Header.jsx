import Container from "./Container";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header>
      <nav className="z-10 w-full absolute ">
        <Container>
          <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <a href="/" aria-label="logo">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Astrolus
              </span>
            </a>
            <div
              className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            dark:shadow-none  "
            >
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                  <li>
                    <a
                      href="#features"
                      className="block md:px-4 transition hover:text-primary dark:hover:text-white"
                    >
                      <span>Features</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#solution"
                      className="block md:px-4 transition hover:text-primary dark:hover:text-white"
                    >
                      <span>Solution</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#testimonials"
                      className="block md:px-4 transition hover:text-primary dark:hover:text-white"
                    >
                      <span>Testimonials</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#blog"
                      className="block md:px-4 transition hover:text-primary dark:hover:text-white"
                    >
                      <span>Blog</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <Button>Get started</Button>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
