import React from "react";

interface CachedContentProps {
  cachedContent: {
    html: string;
    meta: {
      title: string;
      description: string;
    };
  };
}
function CachedContent({ cachedContent }: CachedContentProps) {
  const { html, meta } = cachedContent;

  return (
    <div>
      <div>{html}</div>;<h1>{meta.title}</h1>;<p>{meta.description}</p>
    </div>
  );
}

export default CachedContent;
