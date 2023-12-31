import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsetDocument'

const CreatePost = () => {

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')
  const [formError, setFormError] = useState('')

  const { user } = useAuthValue()

  const { insertDocument, response } = useInsertDocument("posts")

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

    // Validate image URL
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    }

    // Create array of tags

    // Check all values

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // Redirect Homepage


  }

  return (
    <div className={styles.create_post}>
      <h1>Criar Post</h1>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input type="text"
            name="title"
            required
            placeholder='Pense em um bom título...'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>URL da imagem:</span>
          <input type="text"
            name="image"
            required
            placeholder='Insira uma imagem que representa o seu post'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>

        <label>
          <span>Conteúdo:</span>
          <textarea name="body"
            required
            placeholder='Insira o conteúdo do post'
            onChange={(e) => setBody(e.target.value)}
            value={body}>
          </textarea>
        </label>

        <label>
          <span>Tags:</span>
          <input type="text"
            name="tags"
            required
            placeholder='Insira tags separadas por vírgula'
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">Criar Post</button>}
        {response.loading && <button className="btn" disabled>Aguarde...</button>}
        {response.error && <p className="error">{response.error}</p>}
      </form>
    </div>
  )
}

export default CreatePost