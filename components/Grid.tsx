import DotGrid from "./ui/DotGrid";
const Grid = () => {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#271E37"
        activeColor="#cbacf9"
        lightBaseColor="#E0E0E0"
        lightActiveColor="#8035F1"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
};

export default Grid;
