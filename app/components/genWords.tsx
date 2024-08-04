export const GenText = ({ words }: { words: string[] }) => {
  return (
    <span>
      {words.map((word, index) => (
        <span key={index}>{word.split("")}</span>
      ))}
    </span>
  );
};
