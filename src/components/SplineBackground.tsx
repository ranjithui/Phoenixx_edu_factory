import { Component, Suspense, lazy, type ReactNode } from "react"
import { AnimatedBackground } from "./AnimatedBackground"

const Spline = lazy(() => import("@splinetool/react-spline"))

/**
 * The 3D scene from the original spec. Swap this URL with your own Phoenixx-themed
 * scene exported from https://spline.design — that's the only line you need to change.
 */
const SCENE_URL = "https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"

class SplineErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

export function SplineBackground() {
  return (
    <div className="absolute inset-0">
      {/* Branded animated layer always renders behind — it shows while Spline loads
          and stays visible if the 3D scene fails or is blocked. */}
      <AnimatedBackground />
      <SplineErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <div className="absolute inset-0 animate-fade-in">
            <Spline scene={SCENE_URL} className="!h-full !w-full" />
          </div>
        </Suspense>
      </SplineErrorBoundary>
    </div>
  )
}
