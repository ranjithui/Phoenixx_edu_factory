import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative grid h-10 w-10 place-items-center rounded-lg border border-border bg-nav-button text-foreground transition-all hover:bg-nav-button/70 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <Sun
        className={cn(
          "h-[18px] w-[18px] transition-all duration-300",
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        )}
      />
      <Moon
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-300",
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        )}
      />
    </button>
  )
}
