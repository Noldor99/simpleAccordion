import { FC } from 'react'
import { Box, Container, Toolbar, Typography } from '@mui/material';
import { IPosts } from '../store/redusers/placeholderApi';


interface PostsProps{
  title:string,
  posts:IPosts[]
}

const SimplePosts:FC<PostsProps> = ({title, posts}:PostsProps) => {
  return (
    <>
      <Typography variant="h4" textAlign = 'center'>{title}</Typography>
        {posts.map(item=>(
          <Typography key={item.id}>
            {item.title}
      </Typography>
        ))}
    </>
  )
}

export default SimplePosts