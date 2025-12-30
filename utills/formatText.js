export const renderContentWithStyle = (content) => {
  // 문자열이 아니거나 패턴이 없으면 그대로 반환
  if (typeof content !== "string" || !content.includes("{code:")) {
    return content;
  }

  return content.split(/\{(code:.*?)\}/).map((part, i) => {
    if (part.startsWith("code:")) {
      const text = part.replace("code:", "");
      return (
        <span key={i} className="codeHighlight">
          {text}
        </span>
      );
    }
    return part;
  });
};