/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    extend: {
      screens: {
        "3xl": "2100px",
      },
      keyframes: {
        hero: {
          "0%": {
            borderRadius: "39% 61% 63% 37% / 58% 44% 56% 42%",
          },
          "10%": {
            borderRadius: "57% 43% 63% 37% / 68% 58% 42% 32%",
          },
          "20%": {
            borderRadius: "70% 30% 72% 28% / 68% 47% 53% 32%",
          },
          "30%": {
            borderRadius: "70% 30% 72% 28% / 36% 60% 40% 64%",
          },
          "40%": {
            borderRadius: "49% 51% 29% 71% / 56% 26% 74% 44%",
          },
          "50%": {
            borderRadius: "30% 70% 29% 71% / 17% 26% 74% 83%",
          },
          "60%": {
            borderRadius: "59% 41% 61% 39% / 37% 15% 85% 63%",
          },
          "70%": {
            borderRadius: "75% 25% 61% 39% / 37% 70% 30% 63%",
          },
          "80%": {
            borderRadius: "29% 71% 31% 69% / 55% 43% 57% 45%",
          },
          "90%": {
            borderRadius: "75% 25% 53% 47% / 55% 43% 57% 45%",
          },
          "100%": {
            borderRadius: "39% 61% 63% 37% / 58% 44% 56% 42%",
          },
        },

        slideRight: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(-200%)",
          },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(200%)",
          },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
        slideRight2: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(-200%)",
          },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
        slideLeft2: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(200%)",
          },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
        slideRight3: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(-200%)",
          },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
        slideLeft3: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(200%)",
          },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
        slideRight4: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(-200%)",
          },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
        slideLeft4: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(200%)",
          },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
        slideRight5: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(-200%)",
          },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
        slideLeft5: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(200%)",
          },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
        slideRight6: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(-200%)",
          },
          "100%": {
            opacity: 1,
            filter: "blur(0)",
            transform: "translateX(0)",
          },
        },
        slideLeft6: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(200%)",
          },
          "100%": {
            opacity: 1,
            filter: "blur(0)",
            transform: "translateX(0)",
          },
        },
        slideRightProj: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(-100%)",
          },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
        slideLeftProj: {
          "0%": {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateX(100%)",
          },
          "100%": { opacity: 1, filter: "blur(0)", transform: "translateX(0)" },
        },
      },
      animation: {
        hero: "hero 20s ease-in-out infinite ",
        slideRight: "slideRight .5s ease-out",
        slideRightProj: "slideRightProj 2s ease-out",
        slideRight2: "slideRight 1s ease-out",
        slideRight3: "slideRight 1.5s ease-out",
        slideRight4: "slideRight 2s ease-out",
        slideRight5: "slideRight 2.5s ease-out",
        slideRight6: "slideRight 3s ease-out",
        slideLeft: "slideLeft .5s ease-out",
        slideLeftProj: "slideLeftProj 2s ease-out",
        slideLeft2: "slideLeft 1s ease-out",
        slideLeft3: "slideLeft 1.5s ease-out",
        slideLeft4: "slideLeft 2s ease-out",
        slideLeft5: "slideLeft 2.5s ease-out",
        slideLeft6: "slideLeft 3s ease-out",
      },
    },
  },
  plugins: [],
};
