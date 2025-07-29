interface ArticleHeaderProps {
  date: string;
  title: string;
  tags?: string[];
}

export const ArticleHeader = ({ date, title, tags }: ArticleHeaderProps) => (
  <header className="mb-8">
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-gray-500 mb-2">{date}</p>

      <h1 className="text-center text-4xl leading-tight max-sm:text-lg mb-4">
        {title}
      </h1>

      {tags?.length ? (
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  </header>
);
