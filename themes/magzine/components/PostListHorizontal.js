import Link from 'next/link'
import PostItemCardSimple from './PostItemCardSimple'
import PostListEmpty from './PostListEmpty'

/**
 * 博文水平列表
 * 含封面
 * @returns {JSX.Element}
 * @constructor
 */
const PostListHorizontal = ({ title, href, posts }) => {
  if (!posts || posts.length === 0) {
    return <PostListEmpty />
  }

  return (
    <div className='w-full py-10 bg-[#F6F6F1]'>
      <div className='max-w-7xl w-full mx-auto'>
        {/* 标题 */}
        <div className='flex justify-between items-center py-6'>
          <h3 className='text-2xl'>{title}</h3>
          <Link className='text-lg underline' href={href}>
            <span>查看全部</span>
            <i className='ml-2 fas fa-arrow-right' />
          </Link>
        </div>
        {/* 列表 */}
        <ul className='flex'>
          {posts?.map(p => {
            return <PostItemCardSimple key={p.id} post={p} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default PostListHorizontal
