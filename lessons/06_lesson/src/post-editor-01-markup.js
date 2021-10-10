import React from 'react'
import {savePost} from './api'

function Editor({user}) {
  const [isServing, setIsSaving] = React.useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const {title, content, tags} = e.target.elements
    const newPost = {
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map(t => t.trim()),
      authorId: user.id,
    }
    setIsSaving(true)
    savePost(newPost)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input id="title-input" name="title" />
      <label htmlFor="content-input">content</label>
      <input id="content-input" name="content" />
      <label htmlFor="tags-input">tags</label>
      <input id="tags-input" name="tags" />
      <button type="submit" disabled={isServing}>
        Submit
      </button>
    </form>
  )
}

export {Editor}
