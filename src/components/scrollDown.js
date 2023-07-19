import $ from "jquery";

export const setupScrollDown = () => {
    $(".scroll-down").click(function () {
        // Get the current scroll position
        const scrollPos = $(window).scrollTop();

        // Get the first section below the current scroll position
        const nextSection = $("section")
            .filter(function () {
                return $(this).offset().top > scrollPos;
            })
            .first();

        // If a next section was found, scroll to it
        if (nextSection.length) {
            $("html, body").animate(
                {
                    scrollTop: nextSection.offset().top,
                },
                {
                    duration: 1000,
                    easing: "swing",
                    progress: function (animation, progress) {
                        const easedProgress = Math.sin(
                            progress * (Math.PI / 2)
                        );
                        animation.now =
                            animation.start +
                            (animation.end - animation.start) * easedProgress;
                    },
                }
            );
        }
    });
};
