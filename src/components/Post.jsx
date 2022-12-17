import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const isCommentEmpty = comment.length === 0

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  )
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('')
    setComment(event.target.value)
  }

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, comment])
    setComment('')
  }

  function deleteComment(commentToDelete) {
    setComments(comments.filter(comment => comment !== commentToDelete))
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }

          if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>
      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={comment}
          placeholder="Escreva um comentário..."
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      {comments.length > 0 && (
        <div className={styles.commentList}>
          {comments.map(comment => (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          ))}
        </div>
      )}
    </article>
  )
}
