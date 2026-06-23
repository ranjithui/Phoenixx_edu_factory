import type { ReactNode } from "react"
import { useNavigate, useLocation } from "react-router-dom"

/**
 * Links to a section on the home page (e.g. #about). Works from any route:
 * on home it smooth-scrolls; from a service page it navigates home first,
 * then scrolls once the section is mounted.
 */
export function SectionLink({
  hash,
  className,
  children,
  onClick,
}: {
  hash: string
  className?: string
  children: ReactNode
  onClick?: () => void
}) {
  const navigate = useNavigate()
  const location = useLocation()
  const id = hash.replace("#", "")

  const handle = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick?.()
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    if (location.pathname === "/") {
      scroll()
    } else {
      navigate("/")
      // wait a tick for the home sections to mount before scrolling
      setTimeout(scroll, 80)
    }
  }

  return (
    <a href={hash} onClick={handle} className={className}>
      {children}
    </a>
  )
}
