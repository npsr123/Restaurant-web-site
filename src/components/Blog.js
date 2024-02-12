import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          Our <span>Blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                  Tasty Food & Spicy
                </a>
                <span>By Admin / 8th January, 2023</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  dicta.
                </p>
                <a href="#" class="btn">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
