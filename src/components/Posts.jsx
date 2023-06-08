import React from "react";
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import SaveIcon from '@mui/icons-material/Save';
import Loading from "./Loading";
import Error from "./Error";


const testPost = {
    title: "I’m Really Happy that this is the Latest Free Game for EpicGames. This is one of the Games I been hoping become Free the store.", //
    description: "This is a test post",
    date: "2021-10-10", //
    time: "10:10:10", // 
    author: "Test User",
    topic: "Test Topic",
    likes: 10,
    comments: 10,
    dislikes: 10,
    photo: "https://i.redd.it/6d7m3kxqp8n61.png"
}

const post = {
    width: "100%",
    backgroundColor: "#071a2e",
    color: "#ffffff",
}

const PostButton = (props) => {
    var Button;
    if (props.type === "like") Button = <ThumbUpIcon color="primary" />
    else if (props.type === "dislike") Button = <ThumbDownIcon color="primary" />
    else if (props.type === "comment") Button = <CommentIcon color="primary" />
    else Button = <SaveIcon color="primary" />
    return (<>
        <IconButton aria-label={props.type}>
            {Button}
        </IconButton>
        <h6>{props.value}</h6>
    </>

    )
}

function Post(props) {
    return (
        <Card className="post" sx={post}>
            <div className="post-describers">
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <h6>{props.topic}</h6>
                    </Grid>
                    <Grid item xs={4}>
                        <h6>{props.author}</h6>
                    </Grid>
                    <Grid item xs={2}>
                        <h6>{props.date}</h6>
                    </Grid>
                    <Grid item xs={2}>
                        <h6>{props.time}</h6>
                    </Grid>
                </Grid>
            </div>
            <CardHeader
                title={props.title}
            />
            <div className="post-media">
                <CardMedia
                    component="img"
                    height="300"
                    image={testPost.photo}
                    alt="post image"
                />
            </div>
            {/* <CardContent>
                        {testPost.description}
                    </CardContent> */}
            <CardActions disableSpacing>
                <PostButton type="like" value={props.likes} />
                <PostButton type="dislike" value={props.dislikes} />
                <PostButton type="comment" value="Comment" />
                <PostButton type="save" value="Save" />
            </CardActions>
        </Card>
    )
}



function Posts(props) {
    const [posts, setPosts] = React.useState(props.posts);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const fetchPosts = async () => {
        
    }

    React.useEffect(() => {
        (async () => {
            if (loading) {
                try {
                    setPosts(props.posts);
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                    setError(error);
                    console.log(error);
                }
            }
        })(); 
    }, []);

    if (loading) return <Loading />
    if (error){
        console.log(error);
        return <Error />
    }

    return (
        <div className="posts-container">
            <Stack spacing={1}>
                {posts.map((post) => {
                    return (<>
                    {console.log(post)}
                        <Post
                            title={post.postTitle}
                            description={post.postContent}
                            date={"hey"}
                            time={"no"}
                            author={post.postCreatorName}
                            topic={post.postTopic}
                            likes={post.likes}
                            dislikes={post.dislikes}
                            photo={post.postImage} />
                    </>
                    )
                })}
            </Stack>
        </div>
    )
}




export default Posts;