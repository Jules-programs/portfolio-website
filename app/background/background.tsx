export default function Background() {

    // FILL COLORS
    //Darkest to light
    const layerOneColor = "#0b1d2a"
    const layerTwoColor = "#12344a"
    const layerThreeColor = "#1b4f63"
    const layerFourColor = "#1f6f7c"
    const layerFiveColor = "#2a8f92"
    const layerSixColor = "#5bb3b0"
    const layerSevenColor = "#9cc7c3"
    const layerEightColor = "#c7b59a"
    const layerNineColor = "#e49a63"
    const layerTenColor = "#0b1d2a"

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        height: "260px",
        overflow: "hidden"
      }}
    >

      {/* Layer 1 */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, zIndex: 1 }} viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="
            M 0 10
            Q 12.5 0 25 10
            Q 37.5 20 50 10
            Q 62.5 0 75 10
            Q 87.5 20 100 10
            L 100 20
            L 0 20
            Z
          "
          fill={layerOneColor}
        />
      </svg>

      {/* Layer 2 */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, zIndex: 2 }} viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="
            M 0 12
            Q 12.5 2 25 12
            Q 37.5 22 50 12
            Q 62.5 2 75 12
            Q 87.5 22 100 12
            L 100 20
            L 0 20
            Z
          "
          fill={layerTwoColor}
        />
      </svg>

      {/* Layer 3 */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, zIndex: 3 }} viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="
            M 0 14
            Q 12.5 4 25 14
            Q 37.5 24 50 14
            Q 62.5 4 75 14
            Q 87.5 24 100 14
            L 100 20
            L 0 20
            Z
          "
          fill={layerThreeColor}
        />
      </svg>

      {/* Layer 4 */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, zIndex: 4 }} viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="
            M 0 16
            Q 12.5 6 25 16
            Q 37.5 26 50 16
            Q 62.5 6 75 16
            Q 87.5 26 100 16
            L 100 20
            L 0 20
            Z
          "
          fill={layerFourColor}
        />
      </svg>

      {/* Layer 5 */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, zIndex: 5 }} viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="
            M 0 18
            Q 12.5 8 25 18
            Q 37.5 28 50 18
            Q 62.5 8 75 18
            Q 87.5 28 100 18
            L 100 20
            L 0 20
            Z
          "
          fill={layerFiveColor} 
        />
      </svg>

      {/* Layer 6 */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, zIndex: 6 }} viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="
            M 0 20
            Q 12.5 10 25 20
            Q 37.5 30 50 20
            Q 62.5 10 75 20
            Q 87.5 30 100 20
            L 100 20
            L 0 20
            Z
          "
          fill={layerSixColor} 
        /> 
      </svg>

      {/* Layer 7 */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, zIndex: 7 }} viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="
            M 0 22
            Q 12.5 12 25 22
            Q 37.5 32 50 22
            Q 62.5 12 75 22
            Q 87.5 32 100 22
            L 100 20
            L 0 20
            Z
          "
          fill={layerSevenColor}
        />
      </svg>

      {/* Layer 8 */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, zIndex: 8 }} viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="
            M 0 24
            Q 12.5 14 25 24
            Q 37.5 34 50 24
            Q 62.5 14 75 24
            Q 87.5 34 100 24
            L 100 20
            L 0 20
            Z
          "
          fill={layerEightColor}
        />
      </svg>

      {/* Layer 9 */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, zIndex: 9 }} viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="
            M 0 26
            Q 12.5 16 25 26
            Q 37.5 36 50 26
            Q 62.5 16 75 26
            Q 87.5 36 100 26
            L 100 20
            L 0 20
            Z
          "
          fill={layerNineColor}
        />
      </svg>

      {/* Layer 10 */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, zIndex: 10 }} viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="
            M 0 28
            Q 12.5 18 25 28
            Q 37.5 38 50 28
            Q 62.5 18 75 28
            Q 87.5 38 100 28
            L 100 20
            L 0 20
            Z
          "
          fill={layerTenColor}
        />
      </svg>

    </div>
  );
}