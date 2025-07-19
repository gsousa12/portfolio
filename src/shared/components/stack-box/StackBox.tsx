export interface Stack {
  category: string;
  techs: string[];
}

interface StackBoxProps {
  stacks: Stack[];
}

export const StackBox = ({ stacks }: StackBoxProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
        Tecnologias:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-md gap-6">
        {stacks.map((stack) => (
          <div key={stack.category} className="w-full">
            <h3 className="text-xs uppercase text-gray-500 font-medium mb-1 tracking-widest">
              {stack.category}
            </h3>
            <ul className="flex flex-wrap gap-2 mb-4">
              {stack.techs.map((tech) => (
                <li
                  key={tech}
                  className="text-xs text-gray-800 bg-gray-100 rounded px-2 py-0.5"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
