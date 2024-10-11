import { useRouter } from 'next/router'
 
export default function hashtagPage() {
  const router = useRouter()
  return <Hashtag />
}