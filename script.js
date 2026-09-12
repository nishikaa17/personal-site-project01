// ===============================
// AUTOMATIC YEAR
// ===============================

const year = document.getElementById("year");

year.textContent = `© ${new Date().getFullYear()}`;



// ===============================
// DARK MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

const themeIcon = themeBtn.querySelector("i");



// Check saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}



themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");


    if (darkMode) {

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeIcon.classList.remove(
            "fa-moon"
        );

        themeIcon.classList.add(
            "fa-sun"
        );

    }

    else {

        localStorage.setItem(
            "theme",
            "light"
        );

        themeIcon.classList.remove(
            "fa-sun"
        );

        themeIcon.classList.add(
            "fa-moon"
        );

    }

});



// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(
        ".section, .dream-section, .quick-info"
    );


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

    }
);



const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "active"
                            );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );



revealElements.forEach(
    element => {

        observer.observe(
            element
        );

    }
);



// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

const navbar =
    document.querySelector(
        ".navbar"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 20
        ) {

            navbar.style.boxShadow =
                "0 5px 30px rgba(0,0,0,0.05)";

        }

        else {

            navbar.style.boxShadow =
                "none";

        }

    }
);