import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row, Tag } from "antd";
import { APIrecipe } from "../apis/APIrecipe";

function HomePages() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    APIrecipe.getRecipes().then(setRecipe);
    console.log(recipe);
  }, []);
  return (
    <>
      <h2>Main Home Pages</h2>
      {recipe &&
        recipe.map((val) => (
          <Row key={val.id}>
            <Col>
              <h2>{val.title}</h2>
              {val.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              <p>
                <b>Description: </b>
                {val.description}
              </p>
              <p>
                <b>Instructions: </b>
                {val.instructions}
              </p>
              {/* <button
								onClick={() =>
									APIRecipe.deleteRecipe(val.id).then(() => navigate(0))
								}
							>
								del
							</button> */}
            </Col>
          </Row>
        ))}
    </>
  );
}

export default HomePages;
