import gsap from "gsap"

export const moveCursor = (e, cursor) =>
  gsap.to(cursor, {
    duration: 0,
    x: e.clientX,
    y: e.clientY,
  })

export const leaveMouse = (node) =>
  gsap.to(node, {
    opacity: 0,
    duration: 0.25,
  })

export const enterMouse = (node) =>
  gsap.to(node, {
    opacity: 1,
    duration: 0.25,
  })

export const rotateHeaderLogo = (node) =>
  gsap.fromTo(
    node,
    {
      rotate: "0",
    },
    {
      rotate: "360deg",
      repeat: -1,
      duration: 15,
      ease: "power3.InOut",
    }
  )
