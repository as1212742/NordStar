/** @format */

import Form from "aws-northstar/components/Form";
import Button from "aws-northstar/components/Button";
import FormField from "aws-northstar/components/FormField";
import FormSection from "aws-northstar/components/FormSection";
import Input from "aws-northstar/components/Input";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/Provider";

const Forms = () => {
  const {
    PageState,
    SetFormsPage,
    SetEksPath,
    SetInstanceType,
    SetInstanceDetails,
  } = useContext(DataContext);

  const [Pods, setPods] = useState(0);
  const [CPU, setCPU] = useState(0);
  const [Memory, setMemory] = useState(0);
  const [GPU, setGPU] = useState(0);

  const intance_data = async (data) => {
    const postMethod = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(
      "https://u1lu76vc4b.execute-api.us-east-1.amazonaws.com/Dev/instance-details/instance-family",
      postMethod
    );
    const body = await response.json();
    await SetInstanceDetails(data);
    await SetInstanceType(body);
  };

  const changeForms = (e) => {
    e.preventDefault();

    const data = {
      Pods,
      CPU,
      Memory,
      GPU,
    };
    intance_data(data);
    SetEksPath({ text: "Page2", href: "/Page2" });
    SetFormsPage(1);
  };

  return (
    <Form
      header="Add Details"
      description="You can view source to see how components are put together"
      onSubmit={(e) => changeForms(e)}
      actions={
        <div>
          <Button variant="link" link="/">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </div>
      }
    >
      <FormSection header="">
        <FormField
          label="Number of Pods"
          hintText="Input constraint goes here. e.g. 1,000"
          controlId="formFieldId1"
        >
          <Input
            type="text"
            controlId="formFieldId1"
            value={Pods}
            onChange={(e) => setPods(e)}
          />
        </FormField>

        <FormField
          label="CPU"
          hintText="Input constraint goes here. e.g. 1,000"
          controlId="formFieldId1"
        >
          <Input
            type="text"
            controlId="formFieldId1"
            value={CPU}
            onChange={(e) => setCPU(e)}
          />
        </FormField>

        <FormField
          label="Memory"
          hintText="Input constraint goes here. e.g. 1,000"
          controlId="formFieldId1"
        >
          <Input
            type="text"
            controlId="formFieldId1"
            value={Memory}
            onChange={(e) => setMemory(e)}
          />
        </FormField>

        <FormField
          label="GPU"
          hintText="Input constraint goes here. e.g. 1,000"
          controlId="formFieldId1"
        >
          <Input
            type="text"
            controlId="formFieldId1"
            value={GPU}
            onChange={(e) => setGPU(e)}
          />
        </FormField>
      </FormSection>
    </Form>
  );
};

export default Forms;
