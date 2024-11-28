import Post from "../posts/post";
import Share from "../share/share";
import "./feed.css"

const postdata=[{
    id:1,
    desc:"my image1",
    time:"2 min ago",
    photo:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    userid:1,
    like:32,
    comment:10
},
{
    id:2,
    desc:"my image2",
    time:"7 min ago",
    photo:"https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP",
    userid:2,
    like:24,
    comment:1
},
{
    id:3,
    desc:"my image3",
    time:"20 min ago",
    photo:"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    userid:3,
    like:3,
    comment:22
},
{
    id:4,
    desc:"my image4",
    time:"32 min ago",
    photo:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    userid:1,
    like:32,
    comment:10
},
{
    id:5,
    desc:"my image5",
    time:"3 min ago",
    photo:"https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
    userid:3,
    like:56,
    comment:22
}
]
function Feed(){

    return(<>
        <div className="feed">
            <div className="feedWrapper">
                <Share></Share>
           
              {postdata.map((val,ind)=>{
                    return <Post key={val.id} post={val} />
              })}    
               
            </div>
        </div>
    </>)
}

export default Feed;