import React from "react";

const Home = () => {
  return (
    <div>
      <h4 class="ui horizontal divider header">
        <i class="clipboard icon"></i>
        Description
      </h4>
      <h5>
        Designing and developing a form builder used in faciliating a person to
        create his own form and publish it to the end user <br />
        Requirements:
        <br />
        <ul>
          <li>
            The builder can add and remove choices from the list of choices
          </li>
          <li>Add default value to storage, if its not present</li>
          <li>Submit button posts the data to mentioned API</li>
          <li>Validation of all fields</li>
          <li>
            Add a button that allows the builder to clear the form and start
            fresh.
          </li>
        </ul>
      </h5>
      <h4 class="ui horizontal divider header">
        <i class="bar chart icon"></i>
        Technologies & References
      </h4>
      <div className="ui container">
        <table class="ui three column table">
          <tbody>
            <tr>
              <td>
                <h3>
                  <i className="stack overflow icon" />
                </h3>
              </td>
              <td>
                <h3>
                  <i className="chrome icon" />
                </h3>
              </td>
              <td>
                <h3>
                  <i className="codepen icon" />
                </h3>
              </td>
              <td>
                <h3>
                  <i className="react icon" />
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3>
                  <i className="github icon" />
                </h3>
              </td>
              <td>
                <h3>
                  <i className="node icon" />
                </h3>
              </td>
              <td>
                <h3>
                  <i className="npm icon" />
                </h3>
              </td>
              <td>
                <h3>
                  <i className="medium icon" />
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3>
                  <i className="google icon" />
                </h3>
              </td>
              <td>
                <h3>
                  <i className="youtube icon" />
                </h3>
              </td>
              <td>
                <h3>
                  <i className="html5 icon" />
                </h3>
              </td>
              <td>
                <h3>
                  <i className="css3 icon" />
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
