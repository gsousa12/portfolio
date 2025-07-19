export const getStackColors = (
  tech: string
): { color: string; labelColor: "black" | "white" } => {
  const colorMap: Record<
    string,
    { color: string; labelColor: "black" | "white" }
  > = {
    TypeScript: { color: "bg-blue-400", labelColor: "white" },
    React: { color: "bg-cyan-400", labelColor: "white" },
    NodeJs: { color: "bg-emerald-400", labelColor: "white" },
    ElysiaJs: { color: "bg-purple-400", labelColor: "white" },
    Redis: { color: "bg-red-400", labelColor: "white" },
    Bun: { color: "bg-yellow-400", labelColor: "white" },
  };

  return colorMap[tech] || { color: "bg-gray-400", labelColor: "white" };
};
