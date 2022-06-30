import React from "react";

export default function Main() {
  return (
    <div>
      <div className="text-xl text-white font-bold mb-5">
        Welcome to Project Scuffed.
      </div>
      <div className="text-white text-lg">
        This is a small side project of mine to learn web development.
      </div>
      <div className="text-white text-lg mb-10">
        The main goal of this project is to learn all the different popular
        frameworks that are commonly used.
      </div>
      <div className="text-white text-lg mb-10">
        This website is going to contain all the different functions/features
        with no specific category (yet).
      </div>
      <div className="text-white text-lg mb-5">
        These are the technologies that I am currently using on this site:
      </div>
      <div>
        <table class="table table-compact w-full text-white">
          <thead>
            <th></th>
            <td>Name</td>
            <td>My Understanding so far</td>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>React.js</td>
              <td>
                Main frontend framework for writing features and functions
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>React Router</td>
              <td>Used to link all the different pages together</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Tailwind CSS</td>
              <td>
                Saves me time not writing CSS code, just change class names
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>Daisy UI</td>
              <td>Preset UI compoments that work with Tailwind CSS</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Node.js</td>
              <td>
                All the installations of different frameworks and running the
                development server
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}