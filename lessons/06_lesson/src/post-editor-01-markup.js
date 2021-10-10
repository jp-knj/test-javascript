import React from 'react'

function Editor() {
  const [isServing, setIsSaving] = React.useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setIsSaving(true)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input id="title-input" />
      <label htmlFor="content-input">content</label>
      <input id="content-input" />
      <label htmlFor="tags-input">tags</label>
      <input id="tags-input" />
      <button type="submit" disabled={isServing}>
        Submit
      </button>
    </form>
  )
}

export {Editor}
