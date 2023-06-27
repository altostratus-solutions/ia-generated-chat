import { Meta, StoryObj } from "@storybook/react";
import Form from "./Form";
import Button  from "../Button/Button";
import Input from "../Input/Input";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
};

type Story = StoryObj<typeof meta>;

export const Base = () => {
  const handleSubmit = (formData: any) => {
    console.log(formData);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Input label="example1" type="text" name="text1" />
        <Input label="example2" type="text" name="text2" />
        <Input label="number example" type="number" name="number2" />
        <Input label="email example" type="email" name="email2" />
        <Button label="submit" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export const WithOtherControls = () => {
  const handleSubmit = (formData: any) => {
    console.log(formData);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <textarea name="textarea" id="123"></textarea>
        <select name="select" id="123">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <Button label="submit" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default meta;
