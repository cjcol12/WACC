import $ from "jquery";

export const setupScrollDown = () => {
    $(".scroll-down").click(function () {
        scrollToNextSection(3);
    });
};
const scrollToNextSection = (pages) => {
    if (pages <= 0) {
        // Fade the last page from black to white
        const lastOverlay = $(".section:last .color-overlay");
        lastOverlay.animate(
            {
                backgroundColor: "#FFFFFF",
            },
            2000
        ); // Adjust the duration as needed
        return;
    }

    const scrollPos = $(window).scrollTop();

    const nextSection = $("section")
        .filter(function () {
            return $(this).offset().top > scrollPos;
        })
        .first();

    if (nextSection.length) {
        $("html, body").animate(
            {
                scrollTop: nextSection.offset().top,
            },
            {
                duration: 400,
                easing: "swing",
                progress: function (animation, progress) {
                    const easedProgress = Math.sin(progress * (Math.PI / 2));
                    animation.now =
                        animation.start +
                        (animation.end - animation.start) * easedProgress;
                },
                complete: function () {
                    scrollToNextSection(pages - 1);
                },
            }
        );
    }
};
