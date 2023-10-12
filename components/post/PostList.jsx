import PostItem from '@/components/post/PostItem'

const PostList = ({ postList }) => {
  return postList.map((item, sectionIndex) => (
    <div className="relative pt-6" key={item.year}>
      <p
        className="pointer-events-none absolute -left-4 top-4 z-0 select-none text-8xl font-bold text-background opacity-10"
        style={{
          textShadow: `
       1px 1px 0 rgb(170, 170, 170),
     -1px -1px 0 rgb(170, 170, 170),
      1px -1px 0 rgb(170, 170, 170),
      -1px 1px 0 rgb(170, 170, 170),
      1px 1px 0 rgb(170, 170, 170)`
        }}
      >
        {item.year}
      </p>
      {item.posts.map((post, index) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  ))
}

export default PostList
