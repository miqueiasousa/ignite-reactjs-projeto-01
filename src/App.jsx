import { Header } from './components/Header'
import { Post } from './components/Post'

import './styles.css'

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Miqueias Sousa"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laborum et recusandae. Molestias quisquam aliquam culpa vitae fugit sed facilis, itaque minima ipsum deserunt. Veniam facilis autem modi numquam dolorem!"
      />
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellendus velit, quia accusamus placeat eaque aliquid id esse animi sint et ducimus possimus unde pariatur cumque totam porro exercitationem nobis!"
      />
    </div>
  )
}

export default App
