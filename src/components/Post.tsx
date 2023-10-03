import classes from './Post.module.css'
import { PostDTO } from '../types/dto'
import { useState } from 'react'

interface IPostProps {
    post:PostDTO
}

const Post = ({ post }: IPostProps) => {
    const [isShow, setShow] = useState<boolean>{false}
    const handleClick = () => {
        setShow(!false)
    }




    return (
        <div className={classes.post}>
            <p>id:{post.id}</p>
            <p>postedBy : {post.userId}</p>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
            <button onClick={handleClick}>{isShow ? 'Show less' : 'Show more'}</button>
        </div>
    )
}

export default Post