import React, { useState } from 'react';
import './QuestionForm.css'; 

function QuestionForm() {
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
    <div className="question-form">
      <h1 className="question-form-title">What do you want to share?</h1>
      <form>
        <div className="form-group1">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Start your question with how, what, why, etc."
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group2">
          <label>Describe your Problem</label>
          <textarea
            name="description"
            value={description}
            placeholder="Describe your problem..."
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

export default QuestionForm;
