import { Button } from "@nextui-org/react";
import { Cancel01Icon } from "hugeicons-react";
import React from "react";

import { LinearContainer } from "@/components/ui/container/LinearContainer";

export interface TagsInputProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
}
export function TagsInput(props: TagsInputProps) {
  const { tags, onTagsChange, ...rest } = props;
  const [tag, setTag] = React.useState<string>("");
  const [isTagInputFocused, setIsTagInputFocused] =
    React.useState<boolean>(false);
  const tagInputRef = React.useRef<HTMLInputElement>(null);

  const addTag = () => {
    if (tag.trim() === "") return;
    onTagsChange([...tags, tag]);
    setTag("");
  };

  const removeTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);

    onTagsChange(newTags);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTag();
    }
    if (e.key === "Backspace" && tag === "") {
      removeTag(tags.length - 1);
    }
  };

  React.useEffect(() => {
    if (isTagInputFocused) {
      tagInputRef.current?.focus();
    }
  }, [isTagInputFocused]);

  return (
    <LinearContainer
      classnames={{
        container:
          "flex flex-row flex-wrap gap-2 bg-foreground-50 shadow rounded-medium p-2 w-full h-fit",
      }}
      label="Tags"
      onClick={() => {
        setIsTagInputFocused(true);
      }}
      {...rest}
    >
      {tags.map((tag, index) => (
        <Button
          key={index}
          className="bg-foreground-50 shadow"
          endContent={<Cancel01Icon className="text-danger" size={16} />}
          size="sm"
          type="button"
          onClick={() => removeTag(index)}
        >
          {tag}
        </Button>
      ))}
      <input
        ref={tagInputRef}
        className="outline-none border-none bg-transparent flex-1"
        type="text"
        value={tag}
        onBlur={() => {
          addTag();
          setIsTagInputFocused(false);
        }}
        onChange={(e) => setTag(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </LinearContainer>
  );
}
