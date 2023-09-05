// QuestionForm.js
import React, { useState } from 'react';
import './ArticleForm.css'; // Import the CSS file

function ArticleForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'tags') {
      setTags(value);
    }
  };

  return (
    <div className="Article-form">
      <h1 className="Article-form-title">What do you want to share?</h1>
      <form>
        <div className="form-group1">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Enter a descriptive title."
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Abstract</label>
          <textarea
            name="description"
            value={description}
            placeholder="Enter a 1-paragraph abstract"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group2">
          <label>Describe your Problem</label>
          <textarea
            name="description"
            value={description}
            placeholder="Enter a 1-paragraph abstract"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group3">
          <label>Tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
            onChange={handleInputChange}
          />
        </div>
        <button className="post">Post</button>
      </form>
    </div>
  );
}

export default ArticleForm;
