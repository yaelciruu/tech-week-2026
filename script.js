const interactiveCards =
    document.querySelectorAll(".interactive-card");

interactiveCards.forEach((card) => {

    card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();

        const mouseX = event.clientX - bounds.left;
        const mouseY = event.clientY - bounds.top;

        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const rotateY =
            ((mouseX - centerX) / centerX) * 3;

        const rotateX =
            ((centerY - mouseY) / centerY) * 3;

        card.style.setProperty(
            "--mouse-x",
            `${mouseX}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${mouseY}px`
        );

        card.style.setProperty(
            "--rotate-x",
            `${rotateX}deg`
        );

        card.style.setProperty(
            "--rotate-y",
            `${rotateY}deg`
        );
    });

    card.addEventListener("pointerleave", () => {
        card.style.setProperty("--rotate-x", "0deg");
        card.style.setProperty("--rotate-y", "0deg");
    });

});

const revealSections =
    document.querySelectorAll(".reveal-section");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealSections.forEach((section) => {
    revealObserver.observe(section);
});
