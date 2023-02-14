import { Box, Container, Toolbar } from '@mui/material';
import { useGetPostsQuery, useGetTodosQuery, useGetUsersQuery } from '../store/redusers/placeholderApi';
import SimplePosts from '../components/SimplePosts'
import SimpleTodos from '../components/SimpleTodos';
import SimpleUsers from '../components/SimpleUsers';
import ListAccordion from '../components/ListAccordion';
import { Stack } from '@mui/system';

const Home = () => {

  const { data: Posts, isLoading: isLoadingPosts } = useGetPostsQuery()
  const { data: Todos, isLoading: isLoadingTodos } = useGetTodosQuery()
  const { data: Users, isLoading: isLoadingUsers } = useGetUsersQuery()

  
  if(isLoadingPosts || isLoadingTodos || isLoadingUsers) return(<p>Loading</p>)
 

  return (  
    <Container>
      <Box component="main" sx={{ pt: 3 }}>
      <Toolbar />
        <Stack spacing={2}>
          <ListAccordion
            title='Accordion (simple_1)'
            renderItem = {
              <SimpleTodos
                title = "Todos"
                todos = {Todos}
            />
            }
          />
          <ListAccordion
            title='Accordion (simple_2)'
            renderItem = {
              <SimpleUsers
                title='Users'
                users={Users}
              />
            }
          />
          <ListAccordion
            title='Accordion (simple_3)'
            renderItem = {
              <SimplePosts
                title = "Posts"
                posts={Posts}
            />
            }
          />
        </Stack>
      </Box>
    </Container>
  )
}

export default Home