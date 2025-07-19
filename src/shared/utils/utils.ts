export const getStackColors = (
  tech: string
): { color: string; labelColor: "black" | "white" } => {
  const colorMap: Record<
    string,
    { color: string; labelColor: "black" | "white" }
  > = {
    TypeScript: { color: "bg-blue-400", labelColor: "white" },
    JavaScript: { color: "bg-yellow-400", labelColor: "black" },
    React: { color: "bg-cyan-400", labelColor: "white" },
    NodeJs: { color: "bg-green-400", labelColor: "white" },
    ElysiaJs: { color: "bg-purple-400", labelColor: "white" },
    Redis: { color: "bg-red-400", labelColor: "white" },
  };

  return colorMap[tech] || { color: "bg-gray-400", labelColor: "white" };
};
