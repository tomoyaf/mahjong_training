import { useRouter } from 'next/router';

const Exercise = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>問題: {id}</p>
}

export default Exercise
