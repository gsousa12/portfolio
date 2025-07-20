export const getStackColors = (
  tech: string
): { color: string; labelColor: "black" | "white" } => {
  const defaultValues = { color: "bg-gray-400", labelColor: "white" } as const;
  const colorMap: Record<
    string,
    { color: string; labelColor: "black" | "white" }
  > = {
    TypeScript: { color: "bg-blue-400", labelColor: "white" },
    React: { color: "bg-cyan-400", labelColor: "white" },
    NodeJs: { color: "bg-emerald-600", labelColor: "white" },
    ElysiaJs: { color: "bg-purple-400", labelColor: "white" },
    Fastify: { color: "bg-blue-500", labelColor: "white" },
    Mongo: { color: "bg-green-500", labelColor: "white" },
    Redis: { color: "bg-red-400", labelColor: "white" },
    Bun: { color: "bg-yellow-400", labelColor: "white" },
  };

  return colorMap[tech] || defaultValues;
};
