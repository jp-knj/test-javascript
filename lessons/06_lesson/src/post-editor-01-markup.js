import React from 'react'

function Editor() {
  return (
    <form>
      <label htmlFor="title-input">Title</label>
      <input id="title-input" />
      <label htmlFor="content-input">content</label>
      <input id="content-input" />
      <label htmlFor="tags-input">tags</label>
      <input id="tags-input" />
      <button type="submit">Submit</button>
    </form>
  )
}

export {Editor}
