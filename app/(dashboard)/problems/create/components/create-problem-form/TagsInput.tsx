import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Cancel01Icon } from "hugeicons-react";
import React from "react";

export interface TagsInputProps extends React.HTMLAttributes<HTMLDivElement> {
    tags: string[];
    onTagsChange: (tags: string[]) => void;
}
export function TagsInput(props: TagsInputProps) {
    const { tags, onTagsChange, ...rest } = props;
    const [tag, setTag] = React.useState<string>('');
    const [isTagInputFocused, setIsTagInputFocused] = React.useState<boolean>(false);
    const tagInputRef = React.useRef<HTMLInputElement>(null);

    const addTag = () => {
        if (tag.trim() === '') return;
        onTagsChange([...tags, tag]);
        setTag('');
    }

    const removeTag = (index: number) => {
        const newTags = tags.filter((_, i) => i !== index);
        onTagsChange(newTags);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTag();
        }
        if (e.key === 'Backspace' && tag === '') {
            removeTag(tags.length - 1);
        }
    }

    React.useEffect(() => {
        if (isTagInputFocused) {
            tagInputRef.current?.focus();
        }
    }, [isTagInputFocused]);

    return (
        <LinearContainer
            label="Tags"
            classNames={{
                container: "flex flex-row flex-wrap gap-2 bg-foreground-100 shadow rounded-medium p-2 w-full h-fit"
            }}
            onClick={() => {
                setIsTagInputFocused(true);
            }}
            {...rest}
        >
            {tags.map((tag, index) => (

                <Button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="bg-foreground-50 shadow"
                    size="sm"
                    endContent={<Cancel01Icon className="text-danger" size={16}/>}
                >
                    {tag}
                </Button>
            ))}
            <input
                ref={tagInputRef}
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={() => {
                    addTag();
                    setIsTagInputFocused(false);
                }}
                className="outline-none border-none bg-transparent flex-1"
            />
        </LinearContainer>
    );
}