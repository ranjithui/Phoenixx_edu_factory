import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import logoUrl from "../assets/logo.png"

export function PhoenixMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} fill="none" aria-hidden="true">
      <path
        d="M12 2c2.4 2.6 3.2 5 2.2 7.3 1.6-.5 2.6-1.8 3-3.7 1.7 2.4 2.3 5 1.6 7.6C21.2 18.6 17.2 22 12 22 6.9 22 3 18.3 3 13.4c0-2.2.9-4.2 2.6-5.9-.2 1.7.3 3 1.6 3.9C6 8.4 7.6 5.2 12 2Z"
        fill="url(#phoenix-flame)"
      />
      <path
        d="M12 8.5c1.3 1.4 1.7 2.9.9 4.4.9-.3 1.5-1 1.9-2.1.7 1.3.9 2.7.5 4-.6 1.9-2.2 3-4.2 3-2.1 0-3.7-1.4-3.7-3.4 0-1.6 1-3 2.6-4.1-.1.9.2 1.6.9 2.1-.6-.9-.2-2.6 1.1-3.9Z"
        fill="#fff"
        opacity=".85"
      />
      <defs>
        <linearGradient id="phoenix-flame" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FB923C" />
          <stop offset=".55" stopColor="#F97316" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center group", className)}
      aria-label="Phoenixx Edu Factory home"
    >
      <img
        src={logoUrl}
        alt="Phoenixx Edu Factory"
        className={cn(
          "h-9 w-auto transition-transform duration-200 group-hover:-translate-y-0.5 md:h-10",
          // Lift the logo off the hero photo while the nav is transparent at the top.
          onDark && "drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        )}
      />
    </Link>
  )
}
