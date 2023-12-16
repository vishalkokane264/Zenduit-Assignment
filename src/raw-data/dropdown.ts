import { IDropDown } from "../Components/dropDown";

export const SelectForm: IDropDown = {
  label: "Select Form",
  options: [
    {
      label: "Form1",
      value: "form1",
    },
    {
      label: "Form2",
      value: "form2",
    },
    {
      label: "Form3",
      value: "form3",
    },
    {
      label: "Form4",
      value: "form4",
    },
    {
      label: "Form5",
      value: "form5",
    },
  ],
  selectedValue: "form3",
  onChange: (data: string) => {},
};

export const SelectStatus: IDropDown = {
  label: "Select Status",
  options: [
    {
      label: "Uncomplete",
      value: "Uncomplete",
    },
    {
      label: "Low Risk",
      value: "Low Risk",
    },
    {
      label: "Needs Review",
      value: "Needs Review",
    },
  ],
  selectedValue: "Uncomplete",
  onChange: (data: string) => {},
};
