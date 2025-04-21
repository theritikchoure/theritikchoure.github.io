document.addEventListener("DOMContentLoaded", function () {
  // Get the target element by its ID
  let navbarElement = document.getElementById("navbar");
  let footerElement = document.getElementById("footer");
  let backToTopBtnElement = document.getElementById("backToTopBtn");
  let contactSectionElement = document.getElementById("contact");

  // Define the HTML code snippet

  let navbarCode = `<nav class="fixed z-10 w-full bg-gray-900 md:absolute ${
    navbarElement.getAttribute("data-page") === "home"
      ? "md:bg-transparent"
      : ""
  }">
  <div class="container m-auto px-2 md:px-12 lg:px-28">
    <div
      class="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0"
    >
      <div class="w-full px-6 flex justify-between lg:w-max md:px-0">
        <a href="/" aria-label="logo" class="flex space-x-2 items-center">
          <span class="text-2xl font-bold text-white"
            >Ritik <span class="text-white">Chourasiya</span></span
          >
        </a>

        <button
          aria-label="humburger"
          id="hamburger"
          class="relative w-10 h-10 -mr-2 lg:hidden"
          onclick="onClickMenu()"
        >
          <div
            aria-hidden="true"
            id="line"
            class="inset-0 w-6 h-0.5 m-auto rounded bg-purple-700 transtion duration-300"
          ></div>
          <div
            aria-hidden="true"
            id="line2"
            class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-purple-700 transtion duration-300"
          ></div>
        </button>
      </div>

      <div
        id="menus"
        class="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-gray-700 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12"
      >
        <div class="text-white lg:pr-4">
          <ul
            class="space-y-6 tracking-wide font-muli text-[16px] md:flex md:space-y-0"
          >
            <li>
              <a
                href="/#about"
                class="block md:px-4 transition hover:text-purple-700"
              >
                <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="/#experiences"
                class="block md:px-4 transition hover:text-purple-700"
              >
                <span>Experiences</span>
              </a>
            </li>
            <li>
              <a
                href="/#blogs"
                class="block md:px-4 transition hover:text-purple-700"
              >
                <span>Blogs</span>
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                class="block md:px-4 transition hover:text-purple-700"
              >
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a
                href="/resume.html"
                class="block md:px-4 transition hover:text-purple-700"
              >
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                class="block md:px-4 transition hover:text-purple-700"
              >
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>`;

  let footerCode = `
    <footer class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4"
      >
        <div class="sm:col-span-2">
          <a
            href="/"
            class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white"
          >
            Ritik Chourasiya
          </a>

          <div
            class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row"
          >
            <span class="text-white">© 2025, Built by Ritik Chourasiya</span>
          </div>
        </div>

        <div>
          <p class="font-semibold text-gray-800 dark:text-white text-xl">
            Links
          </p>

          <div class="flex flex-col items-start mt-5 space-y-2 text-1xl">
            <a
              href="/about.html"
              class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700"
              >About</a
            >
            <a
              href="/blogs.html"
              class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700"
              >Blogs</a
            >
            <a
              href="/#projects"
              class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700"
              >Projects</a
            >
            <a
              href="/resume.pdf"
              class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700"
              >Resume</a
            >
            <a
              href="/#contact"
              class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700"
              >Contact</a
            >
            <a
              href="/learnings/index.html"
              class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700"
              >Learnings</a
            >
          </div>
        </div>

        <div>
          <p class="font-semibold text-gray-800 dark:text-white text-xl">
            Get in touch
          </p>

          <div class="flex flex-col items-start mt-5 space-y-2">
            <div class="flex items-center space-x-4">
              <a href="https://github.com/theritikchoure" target="_blank" class="hover:scale-110">
                <svg
                  class="h-8 w-8 text-purple-500 hover:text-purple-700"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/ritikchourasiya"
                target="_blank" class="hover:scale-110"
              >
                <svg
                  class="h-8 w-8 text-purple-500 hover:text-purple-700"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  ></path>
                </svg>
              </a>

              <a href="mailto:softwareeng.ritik@gmail.com" target="_blank" class="hover:scale-110">
                <svg
                  class="h-9 w-9 text-purple-500 hover:text-purple-700"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    `;

  let backToTopBtnCode = `<button
  type="button"
  data-mdb-ripple="true"
  data-mdb-ripple-color="light"
  class="inline-block fixed p-3 bg-purple-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-500 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
  id="btn-back-to-top"
  style="display: none"
  onclick="backToTop()"
>
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    class="w-4 h-4"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
    ></path>
  </svg>
</button>`;

  let contactSectionCode = `<div class="px-12 py-16 md:px-56">
  <div class="mb-12">
    <h2 class="text-5xl text-center font-semibold text-gray-800">
      Get in touch with me
    </h2>
  </div>
  <div class="flex justify-center">
    <a
      class="bg-purple-500 text-white px-7 py-4 cursor-pointer hover:bg-purple-700 hover:scale-105"
      href="mailto:contact@ritikchourasiya.com"
    >
      Contact me
    </a>
  </div>
</div>`;

  // Insert the HTML code into the target element
  if (navbarElement) navbarElement.innerHTML = navbarCode;
  if (footerElement) footerElement.innerHTML = footerCode;
  if (backToTopBtnElement) backToTopBtnElement.innerHTML = backToTopBtnCode;

  if (contactSectionElement)
    contactSectionElement.innerHTML = contactSectionCode;

  let backToTopBtn = document.getElementById("btn-back-to-top");

  window.onscroll = function () {
    scrollFunction(backToTopBtn);
  };
});

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction(mybutton) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Add onclick event
function onClickMenu() {
  const menus = document.getElementById("menus");

  menus.classList.toggle("hidden");
}
