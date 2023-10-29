import React from "react";
import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../configs/firebase";

const tags = [
  "Breakfast",
  "Brunch",
  "Lunch",
  "Dinner",
  "Dessert",
  "Appetizer",
  "Snack",
  "Soup",
  "Salad",
  "Main Course",
];

function AddRecipe() {
  const [form] = Form.useForm();

  const options = [];

  for (let i = 0; i < tags.length; i++) {
    options.push({
      label: tags[i],
      value: tags[i],
    });
  }

  const onFinish = async (recipe) => {
    try {
      const docRef = await addDoc(collection(db, "recipe"), {
        recipe: recipe,
      });
      console.log("Document is written in ID : ", docRef.id);
    } catch (error) {
      console.log("Error adding document", e);
    }
  };
  return (
    <Form form={form} onFinish={onFinish} name="control-hooks" style={{ maxWidth: 600 }}>
      <Form.Item name="title">
        <Input type="text" placeholder="title"></Input>
      </Form.Item>
      <Form.Item name="description">
        <Input type="text" name="description" placeholder="description"></Input>
      </Form.Item>
      <Form.Item name="instructions">
        <TextArea placeholder="instructions" />
      </Form.Item>
      <Form.Item name="tags">
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Please select tags"
          options={options}
        />
      </Form.Item>
      {/* <Upload {...props}>
				<Button icon={<UploadOutlined />}>Select image</Button>
			</Upload> */}
      <Button htmlType="submit">Add Recipe</Button>
    </Form>
  );
}

export default AddRecipe;
