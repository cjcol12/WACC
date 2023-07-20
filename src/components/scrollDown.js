import $ from "jquery";
import "jquery.easing";

let isScrollingDown = true; // Initialize a global variable to keep track of the scrolling direction

export const setupScrollDown = () => {
    $(".scroll-down").click(function () {
        const allSections = $("section");
        const currentSectionIndex = getCurrentSectionIndex(allSections);

        if (currentSectionIndex >= allSections.length - 1) {
            // If we're at the bottom, start scrolling up
            isScrollingDown = false;
        } else if (currentSectionIndex <= 0) {
            // If we're at the top, start scrolling down
            isScrollingDown = true;
        }

        if (isScrollingDown) {
            scrollToNextSections([
                currentSectionIndex + 1,
                currentSectionIndex + 2,
                currentSectionIndex + 3,
            ]);
        } else {
            scrollToNextSections([
                currentSectionIndex - 1,
                currentSectionIndex - 2,
                currentSectionIndex - 3,
            ]);
        }
    });
};

const getCurrentSectionIndex = (allSections) => {
    const scrollPos = $(window).scrollTop();

    let currentSectionIndex = 0;
    allSections.each((index, section) => {
        if ($(section).offset().top > scrollPos) {
            return false; // Stop the loop
        }
        currentSectionIndex = index;
    });

    return currentSectionIndex;
};

const scrollToNextSections = (sectionIndices) => {
    const scrollToOneSection = (index, callback) => {
        const section = $("section").eq(index);
        if (section.length) {
            $("html, body").animate(
                {
                    scrollTop: section.offset().top,
                },
                {
                    duration: 800,
                    easing: "swing",
                    progress: function (animation, progress) {
                        const easedProgress = Math.sin(
                            progress * (Math.PI / 2)
                        );
                        animation.now =
                            animation.start +
                            (animation.end - animation.start) * easedProgress;
                    },
                    complete: callback,
                }
            );
        }
    };

    const scrollNextSection = () => {
        if (sectionIndices.length > 0) {
            scrollToOneSection(sectionIndices.shift(), scrollNextSection);
        }
    };

    scrollNextSection();
};
