import { FC } from 'react'
import {Typography } from '@mui/material';
import { IUsers } from '../store/redusers/placeholderApi';

interface UsersProps{
  title:string,
  users:IUsers[]
}

const SimpleUsers:FC<UsersProps> = ({title, users}:UsersProps) => {
  return (
    <>
        <Typography variant="h4" textAlign = 'center'>{title}</Typography>
        {users.map(item=>(
          <Typography key={item.id}>
            {item.username} || {item.name}
          </Typography>
        ))}
    </>
  )
}

export default SimpleUsers