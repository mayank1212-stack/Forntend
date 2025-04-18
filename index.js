const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const users = [
    { id: "1", name: 'John Doe' },
    { id: "2", name: 'Jane Smith' },
    { id: "3", name: 'Alice Johnson' },
    { id: "4", name: 'Bob Brown' },
    { id: "5", name: 'Charlie Davis' },
];

const posts = [
    { postid: "405", user: "1", content: 'This is John Doe the first post.' },
    { postid: "506", user: '1', content: 'This is John Doe the second post.' },
    { postid: "350", user: '2', content: 'This is Jane Smith the first post.' },
    { postid: "410", user: '1', content: 'This is John Doe the third post.' },
    { postid: "520", user: '2', content: 'This is Jane Smith the second post.' },
    { postid: "521", user: '1', content: 'This is John Doe the fourth post.' },
    { postid: "351", user: '3', content: 'This is Alice Johnson the first post.' },
    { postid: "412", user: '1', content: 'This is John Doe the fifth post.' },
    { postid: "522", user: '2', content: 'This is Jane Smith the third post.' },
    { postid: "500", user: '1', content: 'This is John Doe the sixth post.' },
    { postid: "352", user: '1', content: 'This is John Doe the seventh post.' },
    { postid: "413", user: '3', content: 'This is Alice Johnson the second post.' },
    { postid: "523", user: '3', content: 'This is Alice Johnson the third post.' },
    { postid: "353", user: '4', content: 'This is Bob Brown the first post.' },
    { postid: "524", user: '4', content: 'This is Bob Brown the second post.' },
    { postid: "354", user: '5', content: 'This is Charlie Davis the first post.' },
    { postid: "415", user: '5', content: 'This is Charlie Davis the second post.' },
    { postid: "525", user: '5', content: 'This is Charlie Davis the third post.' },
];

const comments = [
    { commentid: "1000", postid: "405", content: 'This is a comment' },
    { commentid: "1001", postid: "405", content: 'This is a comment' },
    { commentid: "1002", postid: "405", content: 'This is a comment' },
    { commentid: "1003", postid: "405", content: 'This is a comment' },
    { commentid: "1004", postid: "405", content: 'This is a comment' },
    { commentid: "1005", postid: "524", content: 'This is a comment' },
    { commentid: "1006", postid: "524", content: 'This is a comment' },
    { commentid: "1007", postid: "500", content: 'This is a comment' },
    { commentid: "1008", postid: "352", content: 'This is a comment' },
    { commentid: "1009", postid: "413", content: 'This is a comment' },
    { commentid: "1010", postid: "524", content: 'This is a comment' },
    { commentid: "1011", postid: "415", content: 'This is a comment' },
    { commentid: "1012", postid: "525", content: 'This is a comment' },
];


app.get('/', (req, res) => {
    res.send('For All Users List Go For ' + '  <a href="/users">/users</a>');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id/posts', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.send(posts.filter(p => p.user === userId));
});

app.get('/posts/:postId/comments', (req, res) => {
    const postId = req.params.postId;
    const post = posts.find(p => p.postid === postId );    
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.send(comments.filter(c => c.postid === postId));
});

app.listen(3000, () => {
    console.log('The Server is running on port 3000');
});
