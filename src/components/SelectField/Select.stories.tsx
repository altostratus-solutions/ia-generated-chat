import type { Meta } from "@storybook/react";
import SelectField from "./SelectField";
import { useForm } from "react-hook-form";

const meta: Meta<typeof SelectField> = {
  title: "Components/SelectField",
  component: SelectField,
};

export const Base = () => {
  const {
    control,
  } = useForm();
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
      <SelectField
        name="select"
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
          { label: "Option 3", value: "3" },
        ]}
        control={control}
      />
    </div>
  );
}

export default meta;