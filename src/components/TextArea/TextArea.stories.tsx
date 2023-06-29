import type { Meta } from "@storybook/react";
import TextArea from "./TextArea";
import { useForm } from "react-hook-form";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
};

export const Base = () => {
  const { control } = useForm();
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
      <TextArea control={control} label="example1" name="text1" />
    </div>
  );
};
export const Invalid = () => {
  const { control } = useForm();
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
      <TextArea
        control={control}
        label="example1"
        name="text1"
        error="Theres been an error!"
      />
    </div>
  );
};

export default meta;
