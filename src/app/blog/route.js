import useSWR from 'swr'
 
function Blog () {
  const { data, error, isLoading } = useSWR('/http://localhost:3000/api/blog', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
 
  // render data
  return <div>hello {data.name}!</div>
}