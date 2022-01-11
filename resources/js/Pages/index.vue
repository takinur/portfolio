<template>
    <Head title="Hi there" />

    <div class="wrapper pb-40">
        <!--Remove padding Later-->

        <!-- header -->
        <header
            class="header py-8 h-16 top-0 z-50 bg-gray-200 opacity-100 dark:bg-slate-800"
        >
            <!-- container -->
            <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                <!-- header wrapper -->
                <div class="header-wrapper flex items-center justify-between">
                    <!-- header logo -->
                    <div class="header-logo">
                        <h1
                            class="font-semibold text-black leading-relaxed dark:text-white"
                        >
                            <a href="">TAKINUR</a>
                        </h1>
                    </div>

                    <!-- mobile toggle -->
                    <div class="toggle md:hidden">
                        <button @click="toggleNav">
                            <svg
                                class="h-6 w-6 fill-current text-black"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Navbar -->
                    <nav class="navbar hidden md:block">
                        <ul class="flex space-x-8 text-sm font-semibold">
                            <li>
                                <!-- Toggle Dark -->
                                <div
                                    class="flex items-center justify-center w-full"
                                >
                                    <span class="mr-2">
                                        <svg
                                            class="h-6 w-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    </span>
                                    <label
                                        for="toggleDark"
                                        class="flex items-center cursor-pointer"
                                    >
                                        <!-- toggle -->
                                        <div class="relative">
                                            <!-- input -->
                                            <input
                                                type="checkbox"
                                                id="toggleDark"
                                                class="sr-only"
                                            />
                                            <!-- line -->
                                            <div
                                                class="block bg-gray-700 w-16 h-7 rounded-full"
                                            ></div>
                                            <!-- dot -->
                                            <div
                                                class="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"
                                            ></div>
                                        </div>
                                        <!-- label -->

                                        <span class="ml-2">
                                            <svg
                                                class="h-6 w-6 text-gray-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                />
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <a href="#" class="hover:text-orange-500"
                                    >Pricing</a
                                >
                            </li>

                            <li>
                                <a
                                    href="#"
                                    class="cta bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded text-white font-normal"
                                    >Get the App</a
                                >
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <!-- end header -->
        <!-- hero -->
        <div class="hero bg-gray-200 pb-24 pt-28 h-screen dark:bg-slate-800">
            <!-- container -->
            <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                <!-- hero wrapper -->
                <div
                    class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                    <!-- hero text -->
                    <div class="hero-text col-span-6">
                        <h1
                            class="font-bold uppercase text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight dark:text-gray-300"
                        >
                            Full-Stack PHP Web Developer
                        </h1>
                        <hr class="w-12 h-1 bg-gray-500 rounded-full mt-8" />
                        <p
                            class="text-gray-800 text-base leading-relaxed mt-8 font-semibold"
                        >
                            I develop Modern, Responsive and SEO Friendly
                            Websites with clean code, and I love what I do.
                        </p>
                        <!-- <div
                            class="get-app flex space-x-5 mt-10 justify-center md:justify-start"
                        >
                            <button
                                class="apple bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4"
                            >
                                <div class="logo">
                                    <svg
                                        class="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="419.955"
                                        height="512"
                                        viewBox="0 0 419.955 512"
                                    >
                                        <g transform="translate(-46.022)">
                                            <path
                                                d="M185.255,512c-76.2-.439-139.233-155.991-139.233-235.21,0-129.4,97.075-157.734,134.487-157.734,16.86,0,34.863,6.621,50.742,12.48,11.1,4.087,22.588,8.306,28.975,8.306,3.823,0,12.832-3.589,20.786-6.738,16.963-6.753,38.071-15.146,62.651-15.146h.146c18.354,0,74,4.028,107.461,54.272l7.837,11.777-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267,0,52.031,33.3,72.041,49.292,81.665,7.061,4.248,14.37,8.628,14.37,18.208,0,6.255-49.922,140.566-122.417,140.566-17.739,0-30.278-5.332-41.338-10.034-11.191-4.761-20.845-8.862-36.8-8.862-8.086,0-18.311,3.823-29.136,7.881C221.5,505.73,204.752,512,185.753,512Z"
                                            />
                                            <path
                                                d="M351.343,0c1.888,68.076-46.8,115.3-95.425,112.342C247.9,58.015,304.54,0,351.343,0Z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div class="text">
                                    <p
                                        class="text-xs text-gray-600"
                                        style="font-size: 0.5rem"
                                    >
                                        Download on the
                                    </p>
                                    <p
                                        class="text-xs font-semibold text-gray-900"
                                    >
                                        Apple Store
                                    </p>
                                </div>
                            </button>
                            <button
                                class="google bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4"
                            >
                                <div class="image">
                                    <svg
                                        class="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="436.057"
                                        height="469.847"
                                        viewBox="0 0 436.057 469.847"
                                    >
                                        <g transform="translate(-16.896)">
                                            <path
                                                d="M270.336,234.965,34.39,462.165A40.146,40.146,0,0,1,16.9,428.672V41.258A40.146,40.146,0,0,1,34.39,7.765Z"
                                                fill="#2196f3"
                                            />
                                            <path
                                                d="M352.9,155.6l-82.56,79.36L34.39,7.765a31.446,31.446,0,0,1,2.773-1.92A40.363,40.363,0,0,1,77.91,5.2Z"
                                                fill="#4caf50"
                                            />
                                            <path
                                                d="M452.95,234.965a40.791,40.791,0,0,1-21.333,36.267L352.9,314.325l-82.56-79.36L352.9,155.6l78.72,43.093A40.791,40.791,0,0,1,452.95,234.965Z"
                                                fill="#ffc107"
                                            />
                                            <path
                                                d="M352.9,314.325,77.91,464.725a40.9,40.9,0,0,1-40.747-.64,31.44,31.44,0,0,1-2.773-1.92l235.947-227.2Z"
                                                fill="#f44336"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div class="text">
                                    <p
                                        class="text-xs text-gray-600"
                                        style="font-size: 0.5rem"
                                    >
                                        Download it from
                                    </p>
                                    <p
                                        class="text-xs font-semibold text-gray-900"
                                    >
                                        Google play
                                    </p>
                                </div>
                            </button>
                        </div> -->
                    </div>

                    <!-- hero image -->
                    <div class="hero-image col-span-6">
                        <img
                            v-bind:src="'/images/' + 'hero.svg'"
                            alt=""
                            class="bg-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- end hero -->
        <!-- mobile navbar -->
        <div class="mobile-navbar">
            <transition name="slide-fade">
                <!-- navbar wrapper -->
                <div
                    class="navbar-wrapper fixed md:hidden top-0 left-0 h-full bg-white z-30 w-64 shadow-lg p-5"
                    v-show="showNav"
                >
                    <div class="close">
                        <button
                            class="absolute top-0 right-0 mt-4 mr-4"
                            @click="toggleNav"
                        >
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <ul class="divide-y">
                        <li>
                            <a
                                href="#"
                                class="my-4 inline-block active font-bold"
                                >Reviews</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="my-4 inline-block hover:text-orange-500"
                                >People</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="my-4 inline-block hover:text-orange-500"
                                >Partners</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="my-4 inline-block hover:text-orange-500"
                                >Feedback</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="my-4 inline-block hover:text-orange-500"
                                >Pricing</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="my-8 w-full text-center font-semibold cta inline-block bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded text-white"
                                >Get the App</a
                            >
                        </li>
                    </ul>

                    <!-- follow us -->
                    <div class="follow">
                        <p class="italic font-semibold">follow us:</p>
                        <div class="social flex space-x-5 mt-4">
                            <a href="#">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="twitter"
                                    class="h-5 w-5 fill-current text-gray-600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="facebook-f"
                                    class="h-5 w-5 fill-current text-gray-600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="instagram"
                                    class="h-5 w-5 fill-current text-gray-600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="youtube"
                                    class="h-5 w-5 fill-current text-gray-600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <section id="intro">
            <!-- hero -->
            <div class="hero bg-[#7510F7] py-16 h-[700px] md:h-[500px]">
                <!-- container -->
                <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                    <!-- hero wrapper -->
                    <div
                        class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-items-center"
                    >
                        <!-- hero text -->
                        <div
                            class="hero-text text-center col-span-12 items-center content-center md:w-2/3"
                        >
                            <h1
                                class="font-bold text-4xl md:text-3xl text-white leading-tight"
                            >
                                Hi, I’m Takinur. Nice to meet you.
                            </h1>
                            <p
                                class="text-white text-lg text-center leading-relaxed mt-8 font-semibold"
                            >
                                Since beginning my journey as a freelance
                                webdeveloper nearly 3 years ago, I've done
                                remote work for agencies, consulted for
                                startups, and collaborated with talented people
                                to create digital products for both business and
                                consumer use. I'm quietly confident, naturally
                                curious, and perpetually working on improving my
                                chops one design problem at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end hero -->
        </section>
        <!--Skills Section-->
        <section class="md:-mt-56 -mt-48">
            <div
                class="container px-6 py-10 mx-auto md:mt-11 bg-gray-50 rounded-2xl w-4/5 pb-9"
            >
                <h1 class="text-dark text-3xl text-center">
                    PROFEESIONAL SKILLS
                </h1>
                <!-- CARD BODY-->
                <div
                    class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 content-center"
                >
                    <!--Card Item-->
                    <div class="p-8 space-y-3 rounded-xl">
                        <div class="bg-cover h-18 w-11 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'php.svg'"
                                alt=""
                            />
                        </div>

                        <h1
                            class="text-2xl text-center font-semibold text-gray-900 uppercase dark:text-white"
                        >
                            PHP
                        </h1>

                        <p class="text-gray-500 dark:text-gray-300 text-center">
                            I use PHP 7 language to develop web applications
                        </p>
                    </div>
                    <!--end Card Item -->
                    <!--Card Item-->
                    <div class="p-8 space-y-3 rounded-xl">
                        <div class="bg-cover h-18 w-11 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'html.svg'"
                                alt=""
                            />
                        </div>

                        <h1
                            class="text-2xl text-center font-semibold text-gray-900 uppercase dark:text-white"
                        >
                            html
                        </h1>

                        <p class="text-gray-500 dark:text-gray-300 text-center">
                            I use HTML 5 markup language to show data in the
                            browser
                        </p>
                    </div>
                    <!--end Card Item -->
                    <!--Card Item-->
                    <div class="p-8 space-y-3 rounded-xl">
                        <div class="bg-cover h-18 w-11 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'css.svg'"
                                alt=""
                            />
                        </div>

                        <h1
                            class="text-2xl text-center font-semibold text-gray-900 uppercase dark:text-white"
                        >
                            css
                        </h1>

                        <p class="text-gray-500 dark:text-gray-300 text-center">
                            I use CSS to make look and feel better
                        </p>
                    </div>
                    <!--end Card Item -->
                    <!--Card Item-->
                    <div class="p-8 space-y-3 rounded-xl">
                        <div class="bg-cover h-18 w-11 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'javascript.svg'"
                                alt=""
                            />
                        </div>

                        <h1
                            class="text-2xl text-center font-semibold text-gray-900 dark:text-white"
                        >
                            JavaScript
                        </h1>

                        <p class="text-gray-500 dark:text-gray-300 text-center">
                            I use JavaScript to make user experience better
                        </p>
                    </div>
                    <!--end Card Item -->
                    <!--Card Item-->
                    <div class="p-8 space-y-3 rounded-xl">
                        <div class="bg-cover h-18 w-11 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'database.svg'"
                                alt=""
                            />
                        </div>

                        <h1
                            class="text-2xl text-center font-semibold text-gray-900 dark:text-white"
                        >
                            Database
                        </h1>

                        <p class="text-gray-500 dark:text-gray-300 text-center">
                            I use relational databases MySQL and MariaDB to
                            store data
                        </p>
                    </div>
                    <!--end Card Item -->
                    <!--Card Item-->
                    <div class="p-8 space-y-3 rounded-xl">
                        <div class="bg-cover h-18 w-11 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'apache.svg'"
                                alt=""
                            />
                        </div>

                        <h1
                            class="text-2xl text-center font-semibold text-gray-900 uppercase dark:text-white"
                        >
                            Apache Server
                        </h1>

                        <p class="text-gray-500 dark:text-gray-300 text-center">
                            I use Apache server to serve sites
                        </p>
                    </div>
                    <!--end Card Item -->
                </div>
                <!--End Card Body -->
            </div>
        </section>
        <!--Project Section-->
        <section id="projects" class="py-24 bg-gray-200">
            <div
                class="container px-2 py-10 mx-auto md:mt-11 bg-gray-200 rounded-2xl w-4/5 pb-9"
            >
                <h1 class="text-dark text-3xl text-center mb-7">
                    MY RECENT WORKS
                </h1>

                <div
                    class="bg-white rounded-lg shadow-2xl transform transition hover:translate-x-3 md:flex cursor-pointer"
                >
                    <img
                        src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
                        alt="Laptop on Desk"
                        class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                    <div class="p-6">
                        <h2
                            class="font-bold text-xl md:text-3xl mb-2 text-gray-700"
                        >
                            E-Courier Web Application
                        </h2>
                        <p class="text-gray-700">
                            Developed an Courier application with advanced
                            functionality !
                        </p>
                    </div>
                    <div
                        class="p-8 pr-2 pl-2 relative overflow-hidden rounded-b-lg md:rounded-t-lg"
                    >
                        <div
                            width="80"
                            height="77"
                            class="absolute md:-top-10 md:-right-10 top-24 right-60 text-green-500"
                        >
                            <svg
                                width="120"
                                height="119"
                                viewBox="0 0 120 119"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.3"
                                    d="M6.38128 49.1539C3.20326 32.893 13.809 17.1346 30.0699 13.9566L70.3846 6.07751C86.6455 2.89948 102.404 13.5052 105.582 29.7661L113.461 70.0808C116.639 86.3417 106.033 102.1 89.7724 105.278L49.4577 113.157C33.1968 116.335 17.4384 105.729 14.2604 89.4686L6.38128 49.1539Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div
                            class="grid grid-cols-1 gap-4 w-full bg-white p-6 rounded-sm z-10"
                        >
                            <div class="text-left">
                                <span
                                    class="inline-block rounded-full text-gray-600 bg-gray-100 px-2 py-1 text-xs font-bold mr-3"
                                    >Default</span
                                >
                                <span
                                    class="inline-block rounded-full text-white bg-purple-500 px-2 py-1 text-xs font-bold mr-3"
                                    >Primary</span
                                >

                                <span
                                    class="inline-block rounded-full text-white bg-blue-500 px-2 py-1 text-xs font-bold mr-3"
                                    >Info</span
                                >
                                <span
                                    class="inline-block rounded-full text-white bg-yellow-500 px-2 py-1 text-xs font-bold mr-3"
                                    >Warning</span
                                >
                                <span
                                    class="inline-block rounded-full text-white bg-red-500 px-2 py-2 text-xs font-bold mr-3"
                                    >Danger</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Frameworks Section-->
        <section id="frameworks" class="pb-24 bg-gray-100">
            <div
                class="container px-6 py-10 mx-auto md:mt-11 bg-gray-100 rounded-2xl w-4/5 pb-9"
            >
                <h1 class="text-dark text-3xl text-center">FRAMEWORKS</h1>
                <h4 class="text-gray-600 text-center">
                    On the shoulders of giants
                </h4>
                <!-- CARD BODY-->
                <div
                    class="grid grid-cols-2 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-4 xl:grid-cols-6 content-center"
                >
                    <!--Card Item-->
                    <div class="py-2 rounded-xl bg-white shadow-2xl">
                        <div
                            class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto md:grayscale hover:grayscale-0"
                        >
                            <img
                                v-bind:src="'/images/icons/' + 'laravel.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            Laravel
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            PHP Framework
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2 rounded-xl bg-white shadow-2xl">
                        <div
                            class="bg-cover h-18 w-28 mx-auto md:mt-3 md:grayscale hover:grayscale-0"
                        >
                            <img
                                v-bind:src="
                                    '/images/icons/' + 'tailwindcss.svg'
                                "
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            Tailwind CSS
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            CSS Framework
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2 rounded-xl bg-white shadow-2xl">
                        <div
                            class="bg-cover h-18 w-20 md:w-20 mx-auto md:mt-2 md:grayscale hover:grayscale-0"
                        >
                            <img
                                v-bind:src="
                                    '/images/icons/' + 'bootstrap-icon.svg'
                                "
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            Bootstrap
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            HTML, CSS and JS library
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2 rounded-xl bg-white shadow-2xl">
                        <div
                            class="bg-cover mt-2 h-18 w-20 md:w-16 mx-auto md:grayscale hover:grayscale-0"
                        >
                            <img
                                v-bind:src="'/images/icons/' + 'jquery.png'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-7 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            JQuery
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            JavaScript library
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2 rounded-xl bg-white shadow-2xl">
                        <div
                            class="bg-cover h-18 w-20 md:mt-4 mx-auto md:grayscale hover:grayscale-0"
                        >
                            <img
                                v-bind:src="'/images/icons/' + 'vue-js-1.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            VUE JS
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            JavaScript Framework
                        </p>
                    </div>
                    <!-- END card ITEM -->

                    <!--Card Item-->
                    <div class="py-2 rounded-xl bg-white shadow-2xl">
                        <div
                            class="bg-cover mt-5 h-18 w-28 md:w-32 mx-auto md:grayscale hover:grayscale-0"
                        >
                            <img
                                v-bind:src="
                                    '/images/icons/' + 'laravel-livewire.png'
                                "
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-7 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            Livewire
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Laravel library
                        </p>
                    </div>
                    <!-- END card ITEM -->
                </div>
                <!--End Card Body -->
            </div>
        </section>
        <!-- TOOls Section-->
        <section id="tools" class="pb-24 bg-gray-200">
            <div class="container px-6 py-10 mx-auto md:mt-1 w-4/5 pb-9">
                <h1 class="text-dark text-3xl text-center">
                    TOOLS AND PRINCIPLES
                </h1>
                <h4 class="text-gray-600 text-center">I use daily</h4>
                <!-- CARD BODY-->
                <div
                    class="grid grid-cols-3 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-4 xl:grid-cols-6 content-center"
                >
                    <!--Card Item-->
                    <div class="py-2">
                        <div
                            class="bg-cover grayscale h-18 w-16 md:w-16 md:mt-3 mx-auto"
                        >
                            <img
                                v-bind:src="'/images/icons/' + 'vscode.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            VScode IDE
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Development Environment
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'terminal.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            Terminal
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Command Line Interface
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'chrome.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            Chrome
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Web Browser and Devtools
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'oop.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            OOP
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Think in objects
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div
                            class="bg-cover grayscale h-18 w-16 md:w-16 md:mt-3 mx-auto"
                        >
                            <img
                                v-bind:src="'/images/icons/' + 'mvc.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            MVC
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Design Pattern
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'composer.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            Composer
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Dependency Manager for PHP
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'npm.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            NPM
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Dependency Manager for JavaScript
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div
                            class="bg-cover grayscale h-18 w-16 md:w-16 md:mt-3 mx-auto"
                        >
                            <img
                                v-bind:src="'/images/icons/' + 'xampp.png'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            XAMPP
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Virtual APACHE server with MYSQL
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'git.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            GIT
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Version control system
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'phpunit.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            PHP Unit
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Unit tests
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div
                            class="bg-cover grayscale h-18 w-16 md:w-16 md:mt-3 mx-auto"
                        >
                            <img
                                v-bind:src="'/images/icons/' + 'mailtrap.png'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            MAIL TRAP
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Test mailing Platform
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'dry.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            DRY
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Don't repeat yourself
                        </p>
                    </div>
                    <!-- END card ITEM -->
                </div>
                <!--End Card Body -->
            </div>
        </section>
        <!-- other Section-->
        <section id="other" class="pb-24 bg-gray-200">
            <div class="container px-6 py-10 mx-auto md:mt-1 w-4/5 pb-9">
                <h1 class="text-dark text-3xl text-center">
                    TOOLS AND PRINCIPLES
                </h1>
                <h4 class="text-gray-600 text-center">I use daily</h4>
                <!-- CARD BODY-->
                <div
                    class="grid grid-cols-3 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-4 xl:grid-cols-6 content-center"
                >
                    <!--Card Item-->
                    <div class="py-2">
                        <div
                            class="bg-cover grayscale h-18 w-16 md:w-16 md:mt-3 mx-auto"
                        >
                            <img
                                v-bind:src="'/images/icons/' + 'vscode.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            VScode IDE
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Development Environment
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'terminal.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            Terminal
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Command Line Interface
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'chrome.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            Chrome
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Web Browser and Devtools
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'oop.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            OOP
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Think in objects
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div
                            class="bg-cover grayscale h-18 w-16 md:w-16 md:mt-3 mx-auto"
                        >
                            <img
                                v-bind:src="'/images/icons/' + 'mvc.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            MVC
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Design Pattern
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'composer.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            Composer
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Dependency Manager for PHP
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'npm.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            NPM
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Dependency Manager for JavaScript
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div
                            class="bg-cover grayscale h-18 w-16 md:w-16 md:mt-3 mx-auto"
                        >
                            <img
                                v-bind:src="'/images/icons/' + 'xampp.png'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            XAMPP
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Virtual APACHE server with MYSQL
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'git.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            GIT
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Version control system
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'phpunit.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            PHP Unit
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Unit tests
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div
                            class="bg-cover grayscale h-18 w-16 md:w-16 md:mt-3 mx-auto"
                        >
                            <img
                                v-bind:src="'/images/icons/' + 'mailtrap.png'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            MAIL TRAP
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Test mailing Platform
                        </p>
                    </div>
                    <!-- END card ITEM -->
                    <!--Card Item-->
                    <div class="py-2">
                        <div class="bg-cover h-18 w-16 md:w-16 md:mt-3 mx-auto">
                            <img
                                v-bind:src="'/images/icons/' + 'dry.svg'"
                                alt=""
                            />
                        </div>
                        <h1
                            class="mt-5 md:mt-3 text-2xl text-center font-semibold text-gray-900 capitalize dark:text-white"
                        >
                            DRY
                        </h1>
                        <p
                            class="text-gray-500 dark:text-gray-300 text-center text-sm"
                        >
                            Don't repeat yourself
                        </p>
                    </div>
                    <!-- END card ITEM -->
                </div>
                <!--End Card Body -->
            </div>
        </section>
    </div>
    <!-- end Main Wrapper -->
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;
}

.slide-fade-leave-active {
    transition: all 0.5s ease 0s;
    transform: translate3d(0px, 0px, 0px);
    -webkit-transition: all 0.5s ease 0s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translate3d(-100%, 0px, 0px);
    opacity: 0;
}

/* Toggle DARK MODE */
input:checked ~ .dot {
    transform: translateX(36px);
    background-color: #48bb78;
    transition: transform 0.3s linear;
}
</style>

<script>
import { defineComponent } from "vue";
import { Head } from "@inertiajs/inertia-vue3";

export default defineComponent({
    components: {
        Head,
    },

    props: {
        // canLogin: Boolean,
        // canRegister: Boolean,
        // isOpen: Boolean,
    },
    data() {
        return {
            showNav: false,
        };
    },
    mounted() {
        //Vanila JS
        // Dark Mode Toggler
        const checkbox = document.querySelector("#toggleDark");
        const html = document.querySelector("html");
        const toggleDarkMode = function () {
            checkbox.checked
                ? html.classList.add("dark")
                : html.classList.remove("dark");
        };
        //calling the function directly
        toggleDarkMode();
        checkbox.addEventListener("click", toggleDarkMode);
    },
    methods: {
        toggleNav: function () {
            this.showNav = !this.showNav;
        },
    },
});
</script>
