import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserGetContext";
import './Post.css';


const Post = () => {
    const { user } = useContext(UserContext);
    const [posts, setPost] = useState([]);

    useEffect(() => {
        if (user?.username) {
            const postApi = async () => {
                try {
                    const resp = await fetch('https://dummyjson.com/posts')
                    const data = await resp.json()
                    setPost(data.posts)
                } catch (error) {
                    console.log('Get post server', error)
                }
            }
            postApi()
        }
    }, [user])

    return (
        <div> 
            <div>
                {!user?.username ? (<p className="text-please-login">Please Login to view posts</p>)
                    : (
                        <ul>
                            {posts.map((post) => (
                                <li key={post.id}>{post.title}</li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </div>
    )
};

export default Post;