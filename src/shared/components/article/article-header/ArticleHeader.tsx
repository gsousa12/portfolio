interface ArticleHeaderProps {
  data: string;
  title: string;
  tags?: string[];
}

export const ArticleHeader = ({ data, title, tags }: ArticleHeaderProps) => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600 mb-4">{data}</p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
};
