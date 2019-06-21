import React from 'react';

import './Blog.css';
const blog = props => {
  const db = [
    {
      id: 1,
      title: 'What is Lorem Ipsum?',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      id: 2,
      title: 'Where does it come from?',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia'
    },
    {
      id: 3,
      title: 'Why do we use it?',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
    }
  ];
  // function getPost(id) {
  //   window.location.search = `id=${db[id].id}`;
  // }
  return (
    <main className="blog-main">
      <aside className="blog-aside">
        {db.map((post, index) => {
          return (
            <div key={index} className="slate" id={`div-${post.id}`}>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </div>
          );
        })}
      </aside>

      <article className="blog">
        <p />
      </article>
    </main>
  );
};

export default blog;
