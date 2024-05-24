document.getElementById('particleButton').addEventListener('click', () => {
    tsParticles.load("particles-js", {
        particles: {
            number: {
                value: 50
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 1
            },
            size: {
                value: 5,
                random: true
            },
            move: {
                enable: true,
                speed: 5,
                direction: "none",
                random: false,
                straight: false,
                outMode: "out",
                bounce: false
            },
            line_linked: {
                enable: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                push: {
                    particles_nb: 10
                }
            }
        },
        retina_detect: true
    });

    setTimeout(() => {
        tsParticles.domItem(0).destroy();
    }, 500);
});
