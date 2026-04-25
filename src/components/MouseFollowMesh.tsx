import { CSSProperties } from "react";
import { usePointerParallax } from "@/hooks/usePointerParallax";

type Variant = "hero" | "gate";

const wrap = (dx: number, dy: number, depth: number): CSSProperties => ({
  transform: `translate3d(${dx * depth}px, ${dy * depth}px, 0)`,
});

/**
 * Pink blobs follow the pointer with parallax; blue blob moves less for depth.
 * Replace exaggerated pinks in one place when tuning the look.
 */
const MouseFollowMesh = ({ variant = "hero" }: { variant?: Variant }) => {
  const { x, y } = usePointerParallax(0.1);

  const pink1 =
    "radial-gradient(circle, hsla(340, 78%, 68%, 0.32) 0%, hsla(340, 72%, 56%, 0.16) 42%, transparent 72%)";
  const pink2 =
    "radial-gradient(circle, hsla(338, 75%, 58%, 0.26) 0%, hsla(340, 70%, 48%, 0.12) 45%, transparent 72%)";
  const pink3 =
    "radial-gradient(circle, hsla(340, 76%, 70%, 0.22) 0%, transparent 70%)";
  const blue =
    "radial-gradient(circle, hsla(220, 68%, 56%, 0.46) 0%, hsla(220, 62%, 44%, 0.28) 40%, hsla(222, 58%, 38%, 0.12) 62%, transparent 76%)";

  const showFourth = variant === "hero";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0" style={wrap(x, y, 56)}>
        <div
          className="absolute rounded-full"
          style={{
            width: 680,
            height: 680,
            top: "-18%",
            left: "-12%",
            background: pink1,
            filter: "blur(88px)",
            animation: "mesh-drift-1 10s ease-in-out infinite",
          }}
        />
      </div>
      <div className="absolute inset-0" style={wrap(x, y, 72)}>
        <div
          className="absolute rounded-full"
          style={{
            width: 560,
            height: 560,
            bottom: "-4%",
            right: "-8%",
            background: pink2,
            filter: "blur(78px)",
            animation: "mesh-drift-2 12s ease-in-out infinite",
          }}
        />
      </div>
      <div className="absolute inset-0" style={wrap(x, y, 36)}>
        <div
          className="absolute rounded-full"
          style={{
            width: 540,
            height: 540,
            top: "16%",
            right: "4%",
            background: blue,
            filter: "blur(68px)",
            animation: "mesh-drift-3 9s ease-in-out infinite",
          }}
        />
      </div>
      {showFourth && (
        <div className="absolute inset-0" style={wrap(x, y, 44)}>
          <div
            className="absolute rounded-full"
            style={{
              width: 460,
              height: 460,
              bottom: "8%",
              left: "22%",
              background: pink3,
              filter: "blur(64px)",
              animation: "mesh-drift-4 11s ease-in-out infinite",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MouseFollowMesh;
