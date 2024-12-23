import React, { useState } from 'react';
import { marked } from 'marked';

const initialMarkdown = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`;

// Set marked options
marked.setOptions({
    breaks: true
});

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState(initialMarkdown);

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div className="markdown-previewer">
            <textarea
                id="editor"
                value={markdown}
                onChange={handleChange}
            />
            <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            />
        </div>
    );
};

export default MarkdownPreviewer;